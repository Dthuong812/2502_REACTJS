let currentPage = 1;
const itemsPerPage = 5;

function average(student) {
    return ((student.mathScore + student.englishScore + student.literatureScore) / 3).toFixed(2);
}

function getStudentsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('students')) || [];
}

function saveStudentsToLocalStorage(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

function clearErrorOnFocus() {
    document.getElementById('name').addEventListener('focus', () => {
        document.getElementById('name-error').innerText = '';
    });

    document.querySelectorAll('input[name="gender"]').forEach(input => {
        input.addEventListener('focus', () => {
            document.getElementById('gender-error').innerText = '';
        });
    });

    document.getElementById('math').addEventListener('focus', () => {
        document.getElementById('math-error').innerText = '';
    });

    document.getElementById('english').addEventListener('focus', () => {
        document.getElementById('english-error').innerText = '';
    });

    document.getElementById('literature').addEventListener('focus', () => {
        document.getElementById('literature-error').innerText = '';
    });
}
clearErrorOnFocus();

function addStudent(event) {
    event.preventDefault();

    document.getElementById('name-error').innerText = '';
    document.getElementById('gender-error').innerText = '';
    document.getElementById('math-error').innerText = '';
    document.getElementById('english-error').innerText = '';
    document.getElementById('literature-error').innerText = '';

    const name = document.getElementById('name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const mathScore = parseFloat(document.getElementById('math').value);
    const englishScore = parseFloat(document.getElementById('english').value);
    const literatureScore = parseFloat(document.getElementById('literature').value);

    let isValid = true;

    if (!name) {
        document.getElementById('name-error').innerText = 'Vui lòng nhập tên!';
        isValid = false;
    }
    if (!gender) {
        document.getElementById('gender-error').innerText = 'Vui lòng chọn giới tính!';
        isValid = false;
    }
    if (isNaN(mathScore) || mathScore < 0 || mathScore > 10) {
        document.getElementById('math-error').innerText = 'Điểm Toán không hợp lệ! Vui lòng nhập số từ 0 đến 10.';
        isValid = false;
    }
    if (isNaN(englishScore) || englishScore < 0 || englishScore > 10) {
        document.getElementById('english-error').innerText = 'Điểm Tiếng Anh không hợp lệ! Vui lòng nhập số từ 0 đến 10.';
        isValid = false;
    }
    if (isNaN(literatureScore) || literatureScore < 0 || literatureScore > 10) {
        document.getElementById('literature-error').innerText = 'Điểm Văn không hợp lệ! Vui lòng nhập số từ 0 đến 10.';
        isValid = false;
    }

    if (!isValid) return;

    let students = getStudentsFromLocalStorage();
    const editIndex = document.getElementById('student-form').dataset.editIndex;

    if (editIndex !== undefined) {
        students[editIndex] = {
            id: parseInt(editIndex) + 1,
            name,
            gender,
            mathScore,
            englishScore,
            literatureScore,
            averageScore: average({ mathScore, englishScore, literatureScore })
        };
        document.getElementById('add-student').textContent = 'Create Student';
        delete document.getElementById('student-form').dataset.editIndex;
        alert('Cập nhật thành công!');
    } else {
        const newStudent = {
            id: students.length + 1,
            name,
            gender,
            mathScore,
            englishScore,
            literatureScore,
            averageScore: average({ mathScore, englishScore, literatureScore })
        };
        students.unshift(newStudent);
    }

    saveStudentsToLocalStorage(students);
    renderListWithPagination(students);
    document.getElementById('student-form').reset();
}

function deleteStudent(index) {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
    if (!confirmation) return;

    const students = getStudentsFromLocalStorage();
    students.splice(index, 1);
    saveStudentsToLocalStorage(students);
    renderListWithPagination(students);
}

function editStudent(index) {
    const students = getStudentsFromLocalStorage();
    const student = students[index];

    document.getElementById('name').value = student.name;
    document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
    document.getElementById('math').value = student.mathScore;
    document.getElementById('english').value = student.englishScore;
    document.getElementById('literature').value = student.literatureScore;

    document.getElementById('student-form').dataset.editIndex = index;
    document.getElementById('add-student').textContent = 'Update Student';
    document.getElementById('error-messages').innerHTML = '';
}

function searchStudent() {
    const keyword = document.getElementById('search-input').value.trim().toLowerCase();
    const students = getStudentsFromLocalStorage();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );
    currentPage = 1;
    renderListWithPagination(filteredStudents, keyword);
}

document.getElementById('search-input').addEventListener('input', searchStudent);



function renderListWithPagination(students, keyword = '') {
    const listStudent = document.getElementById('list');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedStudents = students.slice(startIndex, endIndex);

    listStudent.innerHTML = '';

    paginatedStudents.forEach((student, index) => {
        const averageScore = average(student);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.mathScore}</td>
            <td>${student.englishScore}</td>
            <td>${student.literatureScore}</td>
            <td>${averageScore}</td>
            <td>
                <button class="btn btn-sm btn-warning me-1" style="background-color: green; color: white; border: none;" onclick="editStudent(${startIndex + index})">Update</button>
                <button class="btn btn-sm btn-danger" style="background-color: red; color: white; border: none;" onclick="deleteStudent(${startIndex + index})">Delete</button>
            </td>
        `;
        listStudent.appendChild(row);
    });

    renderPaginationControls(students.length);
}

function renderPaginationControls(totalItems) {
    const pagination = document.querySelector('.pagination');
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    pagination.innerHTML = '';

    const prevButton = document.createElement('li');
    prevButton.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>`;
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
        pageItem.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(pageItem);
    }

    const nextButton = document.createElement('li');
    nextButton.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>`;
    pagination.appendChild(nextButton);
}

function changePage(page) {
    currentPage = page;
    const keyword = document.getElementById('search-input').value.trim().toLowerCase();
    const students = getStudentsFromLocalStorage();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );
    renderListWithPagination(filteredStudents, keyword);
}

document.getElementById('student-form').addEventListener('submit', addStudent);
renderListWithPagination(getStudentsFromLocalStorage());

document.getElementById('student-form').addEventListener('submit', addStudent);
document.getElementById('search-input').addEventListener('input', searchStudent);
const itemsPerPage = 5;
let currentPage = 1;
let currentSearch = '';

const average = ({ mathScore, englishScore, literatureScore }) =>
    ((mathScore + englishScore + literatureScore) / 3).toFixed(2);

const getAllStudents = () =>
    JSON.parse(localStorage.getItem('students')) || [];


const saveAllStudents = (students) =>
    localStorage.setItem('students', JSON.stringify(students));


function getPaginatedStudents(page = 1, perPage = 5, search = '') {
    const all = getAllStudents();
    const filtered = all.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );
    const start = (page - 1) * perPage;
    return {
        students: filtered.slice(start, start + perPage),
        totalItems: filtered.length,
    };
}


function clearErrorOnFocus() {
    ['name', 'math', 'english', 'literature'].forEach(id => {
        document.getElementById(id).addEventListener('focus', () => {
            document.getElementById(`${id}-error`).innerText = '';
        });
    });
    document.querySelectorAll('input[name="gender"]').forEach(input => {
        input.addEventListener('focus', () => {
            document.getElementById('gender-error').innerText = '';
        });
    });
}
clearErrorOnFocus();


function addStudent(e) {
    e.preventDefault();
    ['name', 'gender', 'math', 'english', 'literature'].forEach(id => {
        document.getElementById(`${id}-error`).innerText = '';
    });

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
    [['math', mathScore], ['english', englishScore], ['literature', literatureScore]].forEach(
        ([id, score]) => {
            if (isNaN(score) || score < 0 || score > 10) {
                document.getElementById(`${id}-error`).innerText = 'Điểm không hợp lệ!';
                isValid = false;
            }
        }
    );

    if (!isValid) return;

    const students = getAllStudents();
    const editId = document.getElementById('student-form').dataset.editId;

    if (editId !== undefined) {
        const idx = students.findIndex(s => s.id === parseInt(editId));
        if (idx !== -1) {
            students[idx] = {
                id: parseInt(editId),
                name,
                gender,
                mathScore,
                englishScore,
                literatureScore,
                averageScore: average({ mathScore, englishScore, literatureScore }),
            };
        }
        delete document.getElementById('student-form').dataset.editId;
        document.getElementById('add-student').textContent = 'Create Student';
        alert('Cập nhật thành công!');
    } else {
        students.unshift({
            id: Date.now(),
            name,
            gender,
            mathScore,
            englishScore,
            literatureScore,
            averageScore: average({ mathScore, englishScore, literatureScore }),
        });
    }

    saveAllStudents(students);
    document.getElementById('student-form').reset();
    renderListWithPagination();
}


function editStudentById(id) {
    const student = getAllStudents().find(s => s.id === id);
    if (!student) return;
    document.getElementById('name').value = student.name;
    document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
    document.getElementById('math').value = student.mathScore;
    document.getElementById('english').value = student.englishScore;
    document.getElementById('literature').value = student.literatureScore;

    document.getElementById('student-form').dataset.editId = id;
    document.getElementById('add-student').textContent = 'Update Student';
}


function deleteStudentById(id) {
    if (!confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) return;
    const students = getAllStudents().filter(s => s.id !== id);
    saveAllStudents(students);
    renderListWithPagination();
}


function searchStudent() {
    currentSearch = document.getElementById('search-input').value.trim();
    currentPage = 1;
    renderListWithPagination();
}


function renderListWithPagination() {
    const { students, totalItems } = getPaginatedStudents(currentPage, itemsPerPage, currentSearch);
    const listStudent = document.getElementById('list');
    listStudent.innerHTML = students.map((student, index) => `
        <tr>
            <td>${(currentPage - 1) * itemsPerPage + index + 1}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.mathScore}</td>
            <td>${student.englishScore}</td>
            <td>${student.literatureScore}</td>
            <td>${student.averageScore}</td>
            <td>
                <button class="btn btn-sm btn-success" onclick="editStudentById(${student.id})">Update</button>
                <button class="btn btn-sm btn-danger" onclick="deleteStudentById(${student.id})">Delete</button>
            </td>
        </tr>
    `).join('');

    renderPaginationControls(totalItems);
}

function renderPaginationControls(totalItems) {
    const pagination = document.querySelector('.pagination');
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    let paginationHTML = '';


    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <button class="page-link" onclick="changePage(${currentPage - 1})">Previous</button>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <button class="page-link" onclick="changePage(${i})">${i}</button>
            </li>
        `;
    }

    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <button class="page-link" onclick="changePage(${currentPage + 1})">Next</button>
        </li>
    `;

    pagination.innerHTML = paginationHTML;
}
function changePage(page) {
    const totalPages = Math.ceil(getPaginatedStudents(1, itemsPerPage, currentSearch).totalItems / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    const listElement = document.getElementById('list');
    if (listElement) {
        listElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    renderListWithPagination();
}

renderListWithPagination();

function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  const output = document.getElementById('output');

  if (!email || !password) {
    output.innerHTML = `<div class="alert alert-warning">Hãy nhập đầy đủ thông tin.</div>`;
    return;
  }

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {

    output.innerHTML = `<div class="alert alert-success">Xin chào ${user.first_name} ${user.last_name}.</div>`;
  } else {

    output.innerHTML = `<div class="alert alert-danger">Thông tin tài khoản không chính xác.</div>`;
  }
}

function register() {
    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
  
    const output = document.getElementById('output');
  
    if (!firstName || !lastName || !email || !password) {
      output.innerHTML = `<div class="alert alert-warning">Hãy nhập đầy đủ thông tin.</div>`;
      return;
    }
  

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      output.innerHTML = `<div class="alert alert-warning">Email không hợp lệ.</div>`;
      return;
    }
  

    const existingUser = users.find((u) => u.email === email);
  
    if (existingUser) {
      output.innerHTML = `<div class="alert alert-danger">Email này đã có tài khoản.</div>`;
      return;
    }
  
    
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1, 
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
  
    users.push(newUser);
  
    output.innerHTML = `<div class="alert alert-success">Đăng ký thành công! Xin chào ${firstName} ${lastName}.</div>`;
}

function searchUsers() {
  const keyword = document.getElementById('userKeyword').value.trim().toLowerCase();
  const userTableBody = document.getElementById('userTableBody');

  // Lọc danh sách users
  const filteredUsers = keyword
    ? users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(keyword) ||
          user.last_name.toLowerCase().includes(keyword) ||
          user.email.toLowerCase().includes(keyword)
      )
    : users;

  // Nếu không có user nào khớp
  if (filteredUsers.length === 0) {
    userTableBody.innerHTML = `<tr><td colspan="3" class="text-center">Không tìm thấy user nào.</td></tr>`;
    return;
  }

  // Hiển thị danh sách users dưới dạng bảng
  const userRows = filteredUsers
    .map(
      (user) =>
        `<tr>
          <td>${user.id}</td>
          <td>${user.first_name} ${user.last_name}</td>
          <td>${user.email}</td>
        </tr>`
    )
    .join('');

  userTableBody.innerHTML = userRows;
}

document.addEventListener('DOMContentLoaded', searchUsers);



let currentPage = 1;
const postsPerPage = 10;

function listPosts() {
  const postTableBody = document.getElementById('postTableBody');

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const postRows = currentPosts
    .map((post) => {
      const user = users.find((u) => u.id === post.user_id);
      return `
        <tr onclick="viewPostDetail(${post.id})" style="cursor: pointer;">
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.created_at}</td>
          <td>${user ? `${user.first_name} ${user.last_name}` : 'Không xác định'}</td>
        </tr>
      `;
    })
    .join('');

  postTableBody.innerHTML = postRows;

  renderPagination();
}

// Hiển thị chi tiết bài viết
function viewPostDetail(postId) {
  const postDetail = document.getElementById('postDetail');
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    postDetail.innerHTML = `<div class="alert alert-danger">Không tìm thấy bài viết với ID: ${postId}.</div>`;
    return;
  }

  const user = users.find((u) => u.id === post.user_id);

  postDetail.innerHTML = `
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">ID: ${post.id}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Tiêu đề: ${post.title}</h6>
        <p class="card-text">Nội dung: ${post.content}</p>
        <p class="card-text">Người tạo: ${user ? `${user.first_name} ${user.last_name}` : 'Không xác định'}</p>
        <p class="card-text">Ngày tạo: ${post.created_at}</p>
        <p class="card-text">Ngày sửa đổi: ${post.updated_at}</p>
        <img src="${post.image}" alt="Post Image" class="img-fluid">
      </div>
    </div>
  `;
}

function searchPostsByUser() {
  const email = document.getElementById('userEmailInput').value.trim().toLowerCase();
  const postTableBody = document.getElementById('postTableBody');

  if (email === '') {
    listPosts();
    return;
  }
  const user = users.find((u) => u.email.toLowerCase() === email);

  if (!user) {
    postTableBody.innerHTML = `<tr><td colspan="4" class="text-center">Không tìm thấy user với email: ${email}</td></tr>`;
    return;
  }

  const userPosts = posts.filter((post) => post.user_id === user.id);

  if (userPosts.length === 0) {
    postTableBody.innerHTML = `<tr><td colspan="4" class="text-center">User này không có bài viết nào.</td></tr>`;
    return;
  }

  const postRows = userPosts
    .map((post) => `
      <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.created_at}</td>
        <td>${user.first_name} ${user.last_name}</td>
      </tr>
    `)
    .join('');

  postTableBody.innerHTML = postRows;
}


function renderPagination() {
  const pagination = document.getElementById('pagination');
  const totalPages = Math.ceil(posts.length / postsPerPage);

  let paginationHTML = `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <button class="page-link" onclick="changePage('prev')">Trước</button>
    </li>
  `;

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
      <li class="page-item ${currentPage === i ? 'active' : ''}">
        <button class="page-link" onclick="goToPage(${i})">${i}</button>
      </li>
    `;
  }

  paginationHTML += `
    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
      <button class="page-link" onclick="changePage('next')">Tiếp</button>
    </li>
  `;

  pagination.innerHTML = paginationHTML;
}


function changePage(direction) {
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  } else if (direction === 'next' && currentPage < totalPages) {
    currentPage++;
  }

  listPosts();
}


function goToPage(page) {
  currentPage = page;
  listPosts();
}

document.addEventListener('DOMContentLoaded', listPosts);
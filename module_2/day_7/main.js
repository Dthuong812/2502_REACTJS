// web storage : là một api trong html5 được sử dụng để lưu trữ dữ iệu tạm thời trên trình web của người dùng .
// local storage : dữ liệu được lưu trữ sẽ được tồn tại 
/**
 * -khả năng lưu trữ vô hạn : có nghĩa là chỉ xóa bằng js , hoặc xóa toàn bộ bộ nhớ trình duyetj, hoặc xóa bằng local storage 
 * -luu trữ 5mb luon luon là string
 * -không gửi thông tin lên server như cookie nên bảo mật tốt hơn
 */
/**
 * Session storage
 * Lưu trên Client: Cũng giống như localStorage thì sessionStorage cũng dùng để lưu trữ dữ liệu trên trình duyệt của khách truy cập (client).
- Mất dữ liệu khi đóng tab: Dữ liệu của sessionStorage sẽ mất khi bạn đóng trình duyệt.
- Dữ liệu không được gửi lên Server.
- Thông tin lưu trữ nhiều hơn cookie (ít nhất 5MB).

 */
/**
 * cookie là nơi lưu trữ dữ liệu của một trang web
 * - Cookie là một loại dữ liệu nhỏ được lưu trữ trên máy tính của người dùng thông qua trình duyệt web. Cookies được sử dụng để theo dõi và lưu trữ thông tin về hoạt động của người dùng trên trang web. Cụ thể, cookies thường được sử dụng để:
Lưu trữ thông tin phiên (session information): Cookies có thể giữ lại thông tin về phiên làm việc của người dùng, giúp trang web nhớ thông tin như đăng nhập và các tùy chọn cá nhân.
Theo dõi hoạt động trang web: Cookies có thể thu thập dữ liệu về cách người dùng tương tác với trang web, như các trang họ đã xem, thời gian mà họ đã trực tuyến, và các hoạt động khác.
Lưu trữ tùy chọn cá nhân: Trang web có thể sử dụng cookies để lưu trữ các tùy chọn cá nhân của người dùng, như ngôn ngữ ưa thích, kích thước văn bản, hoặc các tùy chọn khác.
- Cookies được gửi từ máy chủ đến trình duyệt của người dùng và được lưu trữ trên máy tính của họ. Các trình duyệt web sau đó gửi cookies này kèm theo mọi yêu cầu gửi đến máy chủ tương ứng, giúp máy chủ nhận biết và tương tác với người dùng dựa trên thông tin được lưu trữ trong cookies.
- Mặc dù cookies thường được sử dụng để cải thiện trải nghiệm người dùng trên web, nhưng cũng có những lo ngại về quyền riêng tư. Người dùng có thể kiểm soát cách cookies được sử dụng thông qua cài đặt trình duyệt của họ.

 */

/** 
Web Storage và Cookies là cả hai cách lưu trữ dữ liệu tạm thời trên trình duyệt web, nhưng chúng có một số sự khác biệt quan trọng. Dưới đây là một so sánh giữa Web Storage và Cookies:
Phạm vi và Dung lượng:
Web Storage: Cung cấp nhiều dung lượng lưu trữ (thường là 5-10 MB) cho mỗi trang web và có phạm vi toàn cục hoặc chỉ phạm vi một trang.
Cookies: Có dung lượng nhỏ hơn (thường là khoảng 4 KB) và có thể lưu trữ ít thông tin hơn.
Thời gian sống:
Web Storage: Dữ liệu trong Web Storage thường không có thời gian sống cụ thể, tồn tại cho đến khi bị xóa hoặc đến khi người dùng xóa lịch sử duyệt.
Cookies: Có thể có thời gian sống cụ thể được đặt bởi máy chủ, hoặc có thể là "session cookies" tồn tại cho đến khi trình duyệt đóng.
Gửi thông tin đến máy chủ:
Web Storage: Dữ liệu không được tự động gửi đến máy chủ với mỗi yêu cầu HTTP, giảm bớt giao tiếp mạng.
Cookies: Cookies thường được gửi đến máy chủ với mỗi yêu cầu HTTP cho trang web tương ứng.
An toàn và Bảo mật:
Web Storage: Dữ liệu trong Web Storage thường an toàn hơn vì không tự động đi kèm với mọi yêu cầu HTTP, và nó không tham gia vào việc xác thực người dùng.
Cookies: Có thể bị an toàn nếu được đặt cờ Secure và HttpOnly, nhưng vẫn có thể bị tấn công Cross-Site Scripting (XSS).
Tiện ích sử dụng::
Web Storage: Thích hợp cho việc lưu trữ lượng dữ liệu lớn và không cần gửi dữ liệu đến máy chủ với mỗi yêu cầu.
Cookies: Thường được sử dụng để lưu trữ thông tin phiên, theo dõi người dùng và duy trì trạng thái trang web.
API:
Web Storage: Sử dụng API như localStorage và sessionStorage để lưu trữ dữ liệu.
Cookies: Sử dụng document.cookie để đọc và ghi cookies.
=> Tùy thuộc vào yêu cầu cụ thể của ứng dụng, lựa chọn giữa Web Storage và Cookies có thể thay đổi. Web Storage thường được ưa chuộng để lưu trữ lượng dữ liệu lớn và làm giảm tải lên máy chủ, trong khi Cookies thích hợp cho việc duy trì trạng thái phiên và theo dõi người dùng.


 */
// // lưu trữ thông tin local storage
// const data = "Da thuong ne";
// // cách 1
// localStorage.setItem("key",data)
// // cách 2
// // localStorage.key = data;
// // or
// // localStorage['key']= data

// // lấy thông tin
// localStorage.getItem("key")
// // or
// localStorage.key
// // lấy số lượng item đang lưu trong localStorage
// localStorage.length;
// // xóa dữ liệu trong localStorage
// localStorage.removeItem("key");
// // xá toàn bộ dữ liệu trong localStorage
// localStorage.clear();

// // sesion storage
// if(typeof Storage !== "undefined"){
//     // khởi tạo sesionstorage
//     sessionStorage.setItem("name","Hello mom,chua du wow ha");
//     // get session
//     sessionStorage.getItem("name");
//     // lấy ra số lượng sesion đã lưu trữ
//     sessionStorage.length;
//     // xóa 1 item 
//     sessionStorage.removeItem("name");
//     // xóa tất cả
//     sessionStorage.clear();

// }else{
//     alert("trình duyệt ko hỗ trợ")
// }

// cookie luu tru duoi dang string

// // Tạo cookie: Javascript có thể tạo cookie như sau: 
// document.cookie = 'username=T3H'; 
// // Thêm vào ngày hết hạn cho cookie 
// document.cookie = 'username=T3H; expires=Thu, 5 Jan 2024 8:00:00 UTC'; 
// // Đặt hẹn giờ sau bao lâu cookie sẽ hết hạn với max-age (tính bằng giây) 
// document.cookie = 'username=T3H; max-age=9000'; 
// // Đọc cookie: 
// const x = document.cookie; 
// //document.cookie sẽ trà lại tất cả cookie trong một chuỗi tring kiểu như: 
// // cookiel giá trị; cookie2 = giá trị; cookie3 = giá trị;
// // Xóa cookie: Để xóa một cookie chỉ cần xét lại giá trị cho ve chuoi rỗng
// // ngày hết hạn expires về một thời điểm đã qua 
// document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC';


const register =document.getElementById("registerForm")
register.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userData = {
        name,
        email,
        gender,
        dob,
        username,
        password
    };
    localStorage.setItem("userInfo", JSON.stringify(userData));
    alert("Đăng ký thành công! Dữ liệu đã được lưu.");
    location.href="index.html"
})




// key -value khai bao  o nho
// const Student ={
//     name:"Thuong",
//     age :"21"
// };
// const Student1 ={
//     name:"Thuong",
//     age :"21"
// };
// gan dia chi o nho student cho student2 nen no cap nhat lai ca hai,vi no kieu du lieu tham chieu object
// const Student2 = Student;
// Student2.age =19;
// console.log(Student.age)
// console.log(Student2.age)
// so sanh dia chi o nho 
// console.log(Student === Student1)
// Student.name = "Lan"
// delete Student.name
// Student.address = "Quang Tri"
// console.log(Student.name)
// console.log(Student)

// for(let key in Student){
//     console.log(Student[`${key}`])
// }
// console.log(Object.keys(Student))
// console.log(Object.values(Student));
// - Khi làm việc với kiểu dữ liệu, việc hiểu rõ sự khác biệt giữa kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu là quan trọng để tránh những hiểu lầm và bug không mong muốn trong chương trình JavaScript của bạn.
// - So sánh:
// Sao chép
// Cơ bản: thường được sao chép bằng giá trị.
// Tham chiếu: thường được sao chép bằng tham chiếu.
// So sánh:
// Cơ bản: so sánh bằng giá trị.
// Tham chiếu: so sánh bằng tham chiếu (địa chỉ vùng nhớ).
// Lưu trữ:
// Cơ bản: lưu trữ trực tiếp giá trị.
// Tham chiếu: lưu trữ địa chỉ vùng nhớ của giá trị.
// Kiểm tra kiểu dữ liệu:
// Cơ bản: sử dụng typeof
// Tham chiếu: sử dụng instanceof hoặc các phương thức kiểm tra khác.
// Mutable/Immutable:
// Cơ bản: immutable (không thể thay đổi giá trị). 
// Tham Chiếu: mutable (có thể thay đổi giá trị).


// function sum(title){
//     console.log('Hello world',title)
// }
// sum("Thuong")//ham thuc thi 
// function sum(a,b){
//     return a+b; //ham tra ve
// }
// console.log(sum(3,5))

// IIFE
// (function sum(title){
//     console.log('Hello world',title);
// })("Thuong");

// const sum =()=>{
//     console.log("Hello ")
// }
// sum()

// const randomArray = Array.from({ length: 10 }, (_, index) => ({
//     id: index + 1,
//     name: `NGuyễn văn A${index}`,
//     age: Math.floor(Math.random() * (50 - 18 + 1)) + 18, // Random tuổi từ 18 đến 50
//     score: Math.floor(Math.random() * 10) + 1,
//   }));
  
//   console.log(randomArray);
  
  // in ra màn hình các bạn có điểm chẵn
// const evenNumber =()=>{
//     for(let i = 0; i< randomArray.length;i++){
//         if(randomArray[i].score%2 ==0){
//             console.log(randomArray[i].name)
//         }
//     }
// }
// evenNumber()
  // in ra màn hình các bạn có độ tuổi từ 22 -> 30 và có điểm trên 8

// const checkAgeAndScore =()=>{
//     for(let i = 0; i< randomArray.length;i++){
//         if(randomArray[i].age>22 && randomArray[i].age<30 && randomArray[i].score >=8 ){
//             console.log(randomArray[i].name)
//         }
//     }
// }
// checkAgeAndScore()  

// Quizzes
// 1. Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
// const person = {
//     ten: "Thuong",
//     tuoi: 21,
//     dia_chi: "Việt Nam",
//     gioi_tinh: "Nữ",
//     so_thich: ["Nghe nhạc K-pop", "Đọc sách", "Du lịch"],
//     chieu_cao: 1.5,
//     can_nang: 50,
//     tinh_trang_hon_nhan: "Độc thân",
//     so_dien_thoai: "0123456789"
// };
// 2. Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
// const partner = {
//     ten: "Người ấy",
//     tuoi: 22,
//     su_tot_bung: 9,
//     nha_giau: true
// };
// 3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”
// if (person.tuoi > 20 && partner.tuoi > 20) {
//     console.log("Tầm này cưới được rồi");
// } else {
//     console.log("Chờ thêm chút nữa");
// }
// Quizzes
// 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// function sayHello(name) {
//     console.log("Hello world, " + name);
// }
// sayHello("Thuong");
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// function squareSum(a, b) {
//     return (a + b) ** 2;
// }
// console.log(squareSum(3, 4));
// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
// function getPositiveNumber() {
//     let a;
//     do {
//         a = parseFloat(prompt("Nhập một số lớn hơn 0:"));
//     } while (isNaN(a) || a <= 0);
//     return a;
// }
// console.log(getPositiveNumber());

// Quizzes
// 1. Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.

// 2. Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi thành 1 mảng textsLength có các phần tử là chiều dài tương ứng của từng chuỗi trong mảng texts.
// const texts = ["Hello", "JavaScript", "Thuong", "Coding"];
// const textsLength = texts.map(text => text.length);

// console.log(textsLength);


// Thực hành
// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
// function ptr(a,b,c){
//     if(a===0){
//         console.log("khác 0")
//     }
//     let d = b*b-4*a*c;
//     if(d >0){
//         let x1 = (-b + Math.sqrt(d)) / (2 * a);
//         let x2 = (-b - Math.sqrt(d)) / (2 * a);
//         return [x1, x2];
//     }else if (d === 0) {
//         let x = -b / (2 * a);
//         return [x]; 
//     } else {
//         return []; 
//     }
// }
// console.log(ptr(1, -3, 2));
// 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
// function tamgiac(a,b,c){
//     if(a<=0 || b<=0 || c<=0){
//         return false 
//     }
//     else{
//         if(a+b>c || a+c>b || b+c>a){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }
// console.log(tamgiac(0,1,1))
// 3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// function isValidDate(day, month, year) {
//     if (year < 1) return false;
//     if (month < 1 || month > 12) return false;
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];;

//     if (month === 2 && isLeapYear(year)) {
//         daysInMonth[2] = 29;
//     }
//     if (day < 1 || day > daysInMonth[month]) return false;

//     return true;
// }
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log(isValidDate(0, 12, 2023)); 
// 4. Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// -Đếm số lượng user có age > 50.
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }

// 5. Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Dung Tien',
    items: [
        {
            id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
        },
        {
            id: 2, name: 'Product 2', category: 'Device', pricce: 110
        },
        {
            id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
        },
    ]
}

// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng

//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho

//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng

//     Action 4 -> Ý nghĩa: Xóa mặt hàng

// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. 
// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

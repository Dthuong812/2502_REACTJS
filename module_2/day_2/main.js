/*Quizz 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.*/
// let s = "aaaaa"
// if(s.length >= 8){
//     console.log("Chuỗi này ok")
// }
// else{
//     console.log("Ngắn quá, dài thêm tí nữa")
// }

/*Hãy viết chương trình nhập vào một số a. Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. Ngược lại, in ra “Còn quá nà trẻ”.*/
// let a = 10;
// if(a<=0){
//     console.log("vui long nhap so lon hon 0");
// }
// else if( a>= 18){
//     console.log("Đủ 18 thì quẩy tiếp")
// }
// else if(a>=16){
//     console.log("Đợi thêm ít năm nữa")
// }
// else{
//     console.log("Còn quá nà trẻ")
// }


// Quizz 0. Hãy tính tổng các số từ 1 đến 50.
// let sum = 0;
// for (let i =0 ;i<=50;i++){
//     console.log(i)
//     sum +=i;
// }
// console.log("sum =",sum)

// 1Hãy tính tổng các số chẵn từ -10 đến 50.
// let total = 0
// for(let e = -10 ; e<= 50;e++){
//     if(e%2==0){
//         console.log(e)
//         total+=e;
//     }
// }
// console.log("total =",total)

// 2.Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for( let b = -100 ; b<= 100; b++){
//     if(b%9==0){
//         console.log(b)
//     }
// }

// 3.Hãy dùng while để in ra dãy số từ 1 đến 200.
// let c = 0
// while(c<=200){
//     console.log(c);
//     c++
// }

// 4.Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// let str = "hello"; 
// let l = 10; 
// while (str.length < l) {
//     str += "a";
// }
// console.log("Chuỗi :", str);

// 5.Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
// let x = 13; 
// let y = 80; 
// if (x >= y || x < 0 || y > 100) {
//     console.log("nhập lại đi");
// } else {
//     while (x < y) {
//         // console.log(`x = ${x}, y = ${y}`);
//         x++;
//         y--;
//     }
//     console.log(`x = ${x}, y = ${y}`);
// }

// Thực hành
// 1.In ra dãy số từ 1 đến 500.
// let d = 0;
// while( d<500){
//     console.log(d+1);
//     d++;
// }

// 2.In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for(let f = 1 ; f<=300; f++){
//     if(f%2 == 0 && f%3==0){
//         console.log(f)
//     }
// }

// 3.Tính tổng các số chẵn trong đoạn [-30, 50].
// let summ = 0;
// for(let h =-30; h<=50;h++){
//     console.log(h)
//     summ+=h;
// }
// console.log("sum =",summ)

// 4.Nhập vào số n. Tính giai thừa của số n.
// let n = -5; 
// let factorial = 1;
// for (let i = 2; i <= n; i++) {
//     factorial *= i;
// }
// console.log("Giai thừa =",factorial);

// 5.Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// let aa = 10, bb = 30, xx = 7;

// let result = -1;
// for (let ii = aa; ii <= bb; ii++) {
//     if (ii % xx === 0) {
//         result = ii;
//         break;
//     }
// }
// console.log("result = " ,result)

// 6.Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
// let nn = 5; 
// let S = 0;

// for (let v = 1; v <= nn; v++) {
//     S += 1 / (v* (v + 1));
// }
// console.log("S =", S)

// 7.Nhập vào số n. Hãy in ra số ước của n.
// let nnn = 12;

// for (let m = 1; m <= nnn; m++) {
//     if (nnn % m === 0) {
//         console.log(m); 
//     }
// }

// 8.Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// let number = 7;
// let isPrime = true; 
// if (number < 2) {
//     isPrime = false;
// } else {
//     for (let index = 2; index <= Math.sqrt(number); index++) {
//         if (number % index === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(number, isPrime ? "là số nguyên tố" : "không phải số nguyên tố");

// 9.Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
// let str1 = "hello"; 
// let l1 = 10; 
// while (str1.length < l) {
//     str1 += "0";
// }
// console.log("Chuỗi :", str1);

// 10.Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.
// let m = 15, n = 20; 
// let a = m, b = n;
// while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
// }
// let ucln = a; 
// let bcnn = (m * n) / ucln;
// console.log("Ước chung lớn nhất ",ucln);
// console.log("Bội chung nhỏ nhất ",bcnn);

// 11.Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”. Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
// let correct = Math.floor(Math.random() * 20) + 1; 
// let attempts = 0;
// let answer;

// while (attempts < 5) {
//     answer = parseInt(prompt("Nhập số bạn đoán (1-20):"));
//     if (answer === correct) {
//         console.log("Đoán đúng!");
//         break;
//     } else {
//         console.log("Đoán sai, thử lại!");
//         attempts++;
//     }
// }
// if (attempts === 5) {
//     console.log("Bạn đã thua cuộc! Số đúng là:", correct);
// }

// 12.Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// let n = 5; 
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} × ${i} = ${n * i}`);
// }

// 13.Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
// * * *
// * * *
// * * *

// let n = 3; 
// for (let i = 0; i < n; i++) {
//     console.log("* ".repeat(n));
// }

// 14.Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
// * * * *
// * * * *
// * * * *

// let m = 4, n = 3; 
// for (let i = 0; i < n; i++) {
//     console.log("* ".repeat(m));
// }

// 15.Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3
// *
// * *
// * * *
// let n = 3; 
// for (let i = 1; i <= n; i++) {
//     console.log("* ".repeat(i));
// }

// 16.Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”

// let w = 65; 
// let h = 1.7; 
// let bmi = w / (h * h);
// console.log(bmi);
// switch (true) {
//     case bmi < 18.5:
//         console.log("Nhẹ cân");
//         break;
//     case bmi < 23:
//         console.log("Bình thường");
//         break;
//     case bmi < 25:
//         console.log("Thừa cân");
//         break;
//     default:
//         console.log("Béo phì");
// }


// 17.Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.
let a = Math.floor(Math.random() * 6) + 5; 
let n;

do {
    n = parseInt(prompt("Nhập số n:"));
} while (n !== a);

console.log("Bạn đã nhập đúng số:", a);

// const a = 5;
// if(a=>8){
//     console.log("HSG")
// }
// else{
//     console.log("hsk")
// }
// switch (a) {
//     case 8:
//         console.log("12345")
//         break;
//     case 2:
//         console.log("123232")
//         break;
//     default:
//         console.log("hehe")
// }
const month = 2;
const year = 2024;
if (year <= 0) {
    console.log("Năm không hợp lệ. Vui lòng nhập năm dương.");
} else {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30");
            break;
        case 2:
            if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                console.log("29");
            } else {
                console.log("28");
            }
            break;
        default:
            console.log("Tháng không hợp lệ");
    }
}
// bieu thuc logic dung se thuc thi sai thi thoat
// kiểm tra trước rồi thực thi
let i = 0;
while (i<10){
    console.log("số",i+1);
    i++;
}
// Làm rồi mới kiểm tra 
let a =0
do{
     console.log("số ",a+1)
     a++;
}
while(a<10)

// let b = prompt("Nhap gia tri a")
// do{
//     b = prompt("moi nhap lai")
// }
// while(b<=0)


for(let e =0 ;e<10;e+=2){
    console.log(e+1)
}
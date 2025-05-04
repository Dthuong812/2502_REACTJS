// const a = [1, 2, 3, 4, 5, 6]; 
// const x = new Array(1, 2, 4, 55, 2); 
// let newElement =10
// b2 thêm 1 phân tử vào cuối mảng 
// for (let i=0; i < x.length; i++) { 
// if(i === x.length){
//     x[i] = newElement
// }
// } 
// console.log(x)
// b1 thêm 1 phần tử vào đâu mảng 
// for (let i = x.length; i > 0; i--) { 
//     x[i] = x[i - 1];
//     console.log(x[i]);  
// } 
// x[0] = newElement;
// console.log(x)


// b3 xóa 1 phần tử ở đâu mảng
// for(let i = 0; i<x.length-1;i++){
//     x[i]=x[i+1]
// }
// x.length--
// console.log(x)
// b4 xóa 1 phân tử ở cuối mảng
// x.length = x.length - 1;
// console.log(x)


// Quizzes

// Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’. Cho biết kiểu dữ liệu của 2 mảng đó? -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả? -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?
// let a1 = ["a","b","c"];
// let a2 = ["a","b","c"];
// console.log(typeof a1); 
// console.log(typeof a2);
// let a3 = a1+a2
// console.log(a3)
// console.log(a1==a2)

// Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. -In ra phần tử có chỉ số 0 và 3 trong mảng. -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.

// let a = [1,5,6,"c"];
// console.log(a[0]);
// console.log(a[3]);
// console.log(a[1]+a[2]);
// let temp = a[1];
// a[1] = a[3];
// a[3] = temp;
// console.log(a)

// Khai báo 1 mảng gồm các số bất kỳ. -Hãy in ra các số chẵn trong mảng đó. -Hãy tính tổng các phần tử trong mảng. -Hãy tìm phần tử nhỏ nhất trong mảng.

// let a = [33,77,32,11,2,6,4,7,9,5,8,22,55,43,50]
// let sum =0;
// let min = a[0]
// for(let i=0;i<a.length; i++){
//     if(a[i]%2===0){
//         console.log(a[i])
//     }
//     if(a[i]<min){
//         min=a[i]
//     }
//     sum+= a[i]
// }
// console.log(sum)
// console.log(min)

// Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
// let arr1 = [];
// let n = 9;
// for (let i = 0; i < n; i++) {
//     arr1.push(Math.floor(Math.random() * 100)); 
// }
// console.log(arr1);

// Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// let arr2 = [5, 10]; 
// let n2 = 7
// while (arr2.length < n2) {
//     arr2.unshift(0);
// }
// console.log( arr2);
// Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// let arr3 = [10, 20, 30, 40, 50];
// while (arr3.length > 1) {
//     arr3.pop();
// }
// console.log(arr3);
// Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’. -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s. -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.
// let s = [1, 2, 30, 40, 50];
// let n4 = 5;
// for (let i = 0; i < s.length; i++) {
//     s[i] = s[i] ** 2;
// }
// console.log(s);
// // let squaredArray = s.map(num => num ** 2);
// // console.log(squaredArray);

// let greaterThanN = [];
// for (let i = 0; i < s.length; i++) {
//     if (s[i] >= n4) {
//         greaterThanN.push(s[i]);
//     }
// }
// console.log(greaterThanN);
// // let greaterThanN = s.filter(num => num >= n4);
// // console.log(`Các số lớn hơn hoặc bằng ${n4}:`, greaterThanN);

// let firstEqualN = undefined;
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === n4) {
//         firstEqualN = s[i];
//         break; 
//     }
// }
// console.log(firstEqualN !== undefined ? firstEqualN : "Không tìm thấy");

// let firstEqualN = s.find(num => num === n4);
// console.log(firstEqualN !== undefined ? firstEqualN : "Không tìm thấy");

// Thực hành
// // 1. Khai báo 1 mảng gồm các số bất kỳ. 
// let arr = [10, 15, 2, 8, 27, 30, 5, 7, 21];
// // -Tính tích của các phần tử trong mảng đó.
// let product = 1;
// for (let num of arr) {
//     product *= num;
// }
// console.log( product);
// // -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// let minEven = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] < minEven) {
//         minEven = arr[i];
//     }
// }
// console.log( minEven);
// // -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// let maxDiv3 = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] > maxDiv3) {
//         maxDiv3 = arr[i];
//     }
// }
// console.log(maxDiv3);
// // -Tính giá trị trung bình của mảng.
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum / arr.length);
// // -Lọc ra các số nguyên tố trong mảng.
// let primeNumbers = [];  

// for (let i = 0; i < arr.length; i++) {
//     let isPrime = true;
//     if (arr[i] < 2) {
//         isPrime = false;
//     } else {
//         for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//             if (arr[i] % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     if (isPrime) {
//         primeNumbers.push(arr[i]);
//     }
// }
// console.log(primeNumbers);
// // -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let hasLessThan10 = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 10) {
//         hasLessThan10 = true;
//         break;
//     }
// }
// console.log(hasLessThan10);

// // -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let allGreaterThan20 = true;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 20) {
//         allGreaterThan20 = false;
//         break;
//     }
// }
// console.log(allGreaterThan20);
// // -Nhập vào số n cho đến khi n là 1 số trong mảng s.


// // -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log( arr);

// // 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// let str = ["hello", "world", "abc", "javascript", "hi"];
// let text = prompt("Nhập chuỗi cần tìm:");
// // -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// let shortestString = str[0];
// for (let i = 0; i < str.length; i++) {
//     if (str[i].length < shortestString.length) {
//         shortestString = str[i];
//     }
// }
// console.log( shortestString);
// // -Tìm những chuỗi trong mảng có chứa giá trị text.
// let containsText = [];
// for (let i = 0; i < str.length; i++) {
//     if (str[i].includes(text)) {
//         containsText.push(str[i]);
//     }
// }
// console.log(containsText);
// // -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// let newS = [];
// for (let i = 0; i < str.length; i++) {
//     newS.push(str[i].slice(0, 3));
// }
// console.log(newS);
// // -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// let joinedString = "";
// for (let i = 0; i < str.length; i++) {
//     joinedString += str[i] + (i === str.length - 1 ? "" : "-");
// }
// console.log(joinedString);
// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// let d1 = prompt("Nhập dãy d1").split(',').map(Number);
// let d2 = prompt("Nhập dãy d2").split(',').map(Number);
// let d1 =[4,5,3,2,11];
// let d2 = [12,50,100,120]

// // -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let allInD2 = true;
// for (let i = 0; i < d1.length; i++) {
//     let found = false;
//     for (let j = 0; j < d2.length; j++) {
//         if (d1[i] === d2[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         allInD2 = false;
//         break;
//     }
// }
// console.log(allInD2);

// // -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sumD1 = 0;
// for (let i = 0; i < d1.length; i++) {
//     sumD1 += d1[i];
// }
// let divBySumD1 = false;
// for (let i = 0; i < d2.length; i++) {
//     if (d2[i] % sumD1 === 0) {
//         divBySumD1 = true;
//         break; 
//     }
// }
// console.log(divBySumD1);
// // -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// let divisibleBy2 = [];
// for (let i = 0; i < d2.length; i++) {
//     if (d2[i] % 2 === 0) {
//         divisibleBy2.push(d2[i]);
//     }
// }
// for (let i = 0; i < d1.length; i++) {
//     if (d1[i] % 2 === 0) {
//         divisibleBy2.push(d1[i]);
//     }
// }
// console.log(divisibleBy2);
// // -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).(https://www.geeksforgeeks.org/merge-sort/?ref=lbp)
// let mergedArray = [];
// let i = 0, j = 0;
// d1.sort((a, b) => a - b);
// d2.sort((a, b) => a - b);
// while (i < d1.length && j < d2.length) {
//     if (d1[i] < d2[j]) {
//         mergedArray.push(d1[i]);
//         i++;
//     } else {
//         mergedArray.push(d2[j]);
//         j++;
//     }
// }
// while (i < d1.length) {
//     mergedArray.push(d1[i]);
//     i++;
// }
// while (j < d2.length) {
//     mergedArray.push(d2[j]);
//     j++;
// }
// console.log(mergedArray);

// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
let growth = [
    [5,8,9,16],
    [2,7,1,9],
    [5,6,8,12],
    [10,2,1,8],
    [20,4,9,1]
]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
let avgGrowthPerYear = [];
for (let i = 0; i < growth.length; i++) {
    let sum = 0;
    for (let j = 0; j < growth[i].length; j++) {
        sum += growth[i][j];
    }
    avgGrowthPerYear.push(sum / growth[i].length);
}
console.log( avgGrowthPerYear);

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.

let maxAvgGrowth = avgGrowthPerYear[0];
for (let i = 1; i < avgGrowthPerYear.length; i++) {
    if (avgGrowthPerYear[i] > maxAvgGrowth) {
        maxAvgGrowth = avgGrowthPerYear[i];
    }
}
console.log( maxAvgGrowth);
// -Tìm giá trị tăng trưởng theo quý lớn nhất.
let maxGrowth = growth[0][0];
for (let i = 0; i < growth.length; i++) {
    for (let j = 0; j < growth[i].length; j++) {
        if (growth[i][j] > maxGrowth) {
            maxGrowth = growth[i][j];
        }
    }
}
console.log(maxGrowth);

// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
let avgGrowthPerQuarter = [];
for (let j = 0; j < growth[0].length; j++) { 
    let sum = 0;
    for (let i = 0; i < growth.length; i++) { 
        sum += growth[i][j];
    }
    avgGrowthPerQuarter.push(sum / growth.length);
}
console.log(avgGrowthPerQuarter);
// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
let numbers = [3, 7, 10, 15, 18, 21, 30];
let sumOdd = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        sumOdd += numbers[i];
    }
}
console.log(sumOdd);

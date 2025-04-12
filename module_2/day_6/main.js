// javascript là ngôn ngữ đơn luồng , bất đồng bộ ngưng không phải code nào cũng bất đồng bộ
// Cách xử lý bất đồng bộ
// Callback  :
// function test(a) {
//     return a()
// }
// test(() => {
//     console.log("Hello world")
// })
// setTimeout(()=>{
//     console.log("Hello xin chào các bạn ")
// },1000)
// console.log('testing') sau mot khoang thoi gian no moi chay
// let i =0
// setInterval(()=>{
//     console.log("bien i",i++)
// }, 1000)
// console.log('testing') cu mot khoang thoi gian thi no chay lai h


// Promise
// - Promise là đối tượng đại diện cho kết quả của hành động nào đó sẽ hoàn thành trong tương lai, kết quả trả về sẽ là resolve nếu thành công và reject nếu thất bại.
// Thực hiện một hành động bất đồng bộ (trong hàm gọi là executor), và gắn thêm callback vào từng kết quả, từng trường hợp thành công hay thất bại. Ví dụ khi thành công, thì những callback gắn với trường hợp resolve sẽ được gọi, tương tự khi
// thất bại thì callback của reject được gọi. - Sơ đồ mô tả hoạt động của promise:
// B1. Gọi hàm execution, chứa lệnh bất đồng bộ.
// B2. Thêm callback cho trường hợp resolve, reject.
// B3. Khi executor thực hiện xong sẽ trả về kết quả.
// B4. Callback tương ứng khi resolve, reject sẽ được gọi.
// Promise states
// Một promise từ khi tạo ra tới khi kết thúc sẽ có các trạng thái (state) sau:
// Pending: promise đang thực hiện chưa xong.
// Full filled: trạng thái đã thực hiện xong, kết quả thành công.
// Rejected: trạng thái đã thực hiện xong, kết quả thất bại.
// Ngoài ra còn một trạng thái nữa là settled, là chỉ chung cho full filled vå rejected. Khi đó promise thực hiện xong, không quan tâm kết quả.
// const a = true;
// const demo = new Promise ((resolve, reject)=>{
//     console.log("pendding...")
//     if(a){
//        setTimeout(()=>{ resolve ("Get dữ liệu thành công");},2000)
//     }
//     else{
//         reject("dữ liệu trả về lỗi")
//     }
// }).then(value=>{
//     console.log("dữ liệu trả về là resolve  :", value)
// }).catch((err)=>{
//     console.log("reject ",err)
// }).finally(()=>{
//     console.log("Kết thức tiến trình")
// })
// console.log(demo)


// endpoint  : giup cho phia fe co the goi den service o phia be
// url  truy cap vao mot trang web nao do

// .join(""):
// Chuyển một mảng ký tự thành chuỗi.
// Nối các phần tử của mảng mà không có ký tự ngăn cách.
// Thường dùng khi xử lý chuỗi hoặc giải mã dữ liệu từ mảng ký tự.

// fetch tương tác lấy api

// let listData = null;
// const data = fetch("https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric").then((res)=>{
//    return res.json();//http chia thành nhiều gói tin có status và header nếu mà gói tin lớn thì header chỉ chưa 1 phần của gói tin .json() đi vào body để lấy data
// }).then(data=>{//bên trong body trả về một promise
//     listData = data.list//lấy dữ liệu
//     console.log(listData)
//     let container = document.querySelector(".container");
//     container.innerHTML = listData.map((item) => {
//         return `
//         <div class="weather-card border p-4">
//             <p >${item.dt_txt}</p>
//             <h1 >${item.main.temp}°C</h1>
//             <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"/>
//             <p>${item.weather[0].description}</p>
//         </div>
//     `;
// }).join("");
// }).catch((err)=>{
//     console.log(err)
// })

// Async await
let listData = null;

function renderData(item) {
    return `
    <div class="weather-card border p-4">
            <p >${
        item.dt_txt
    }</p>
            <h1 >${
        item.main.temp
    }°C</h1>
            <img src="https://openweathermap.org/img/wn/${
        item.weather[0].icon
    }@2x.png"/>
            <p>${
        item.weather[0].description
    }</p>
    </div>
    `
}

async function fetchData(city = "Hanoi") {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`);
        const data = await res.json();
        listData = data.list;
        const container = document.querySelector(".container");
        container.innerHTML = "";
        listData.map(item => {
            container.innerHTML += renderData(item);
        });
    } catch (error) {
        console.log(error);
    }
};
fetchData()
const searchInput = document.querySelector(".search input")
searchInput.addEventListener('change', function (e) {
    // if(e.key === "Enter"){
    //     const city = searchInput.value.trim();
    //     if(city){
    //         fetchData(city)
    //     }
    // }
    const city = e.target.value.trim();
    if (city) {
        fetchData(city)
    }
})

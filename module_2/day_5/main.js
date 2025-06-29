// DOM

const getElement = document.getElementsByTagName("div")[0]
console.log(getElement , getElement.innerText)

const getElementById = document.getElementById("test");
getElementById.innerText = "Hellooooooo";
getElementById.innerHTML=`
<li>
<ul>1</ul>
<ul>2</ul>
<ul>3</ul>
</li>
`
let items = document.querySelectorAll(".favorite-list-item");
items.forEach(item => {
    item.innerText = "I love this thing";
    item.style.color = "red"; 
});
// items.map()
console.log("Item add",items)
Array.from(items)
console.log(Array.from(items))


function addItem() {
    let input = document.getElementById("item-input");
    let newItem = document.createElement("li");
    if(input.value === ""){
        alert("Nhap ki tu vao")
    }
    else{
        newItem.innerText = input.value;
    newItem.classList.add("favorite-list-item");
    document.getElementById("favorite-list").appendChild(newItem);
    input.value = ""; 
    }
    // newItem.innerText = input.value;
    // newItem.classList.add("favorite-list-item");
    // document.getElementById("favorite-list").appendChild(newItem);
    // input.value = ""; 
}
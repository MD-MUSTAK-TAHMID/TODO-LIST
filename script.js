let input = document.querySelector(".input")
let button = document.querySelector(".button")
let ulcontainer = document.querySelector(".ulcontainer")

let userArray = []

let localData = localStorage.getItem("data")
if (localData != null){
    // userArray = JSON.parse(localData)
    try {
        userArray = JSON.parse(localData);
    } catch (e) {
        console.error("Error parsing localStorage data:", e);
        // Clear invalid localStorage data
        localStorage.removeItem("data");
    }
}
display()
button.addEventListener("click", function(){
    let usertask = input.value
    userArray.push(usertask)
    console.log(userArray );
    save(userArray)
    display()
    input.value = ""
})


function save(userArray){
    let str = JSON.stringify(userArray)
    localStorage.setItem("data", str)
}
function display(){
    let statement = ''
    userArray.map((item,i)=>{
        statement  += `<li class="flex justify-between items-center border border-black text-sm py-2 px-4">
                ${i+1} ${item}
                <div class="">
                    <i class="fa-solid fa-pen-to-square hover:text-red-500 duration-300"></i>
                    <i onclick="delet(${i})" class="fa-solid fa-trash-can hover:text-red-500 duration-300"></i>
                </div>
            </li>`
    })
    ulcontainer.innerHTML = statement
}
function delet(id){
    userArray.splice(id,1)
    save(userArray)
    display()
}
function edit(){
    
}

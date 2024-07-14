let list = document.querySelectorAll("li")

list.forEach((element)=>{
element.addEventListener('mouseover',()=>changeBox(element))
})


function changeBox(element){
    element.style.background='blue'
}

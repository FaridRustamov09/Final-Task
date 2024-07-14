let list = document.querySelectorAll("li")

list.forEach((element)=>{
element.addEventListener('mouseover',()=>changeBox(element))
})

function changeBox(element){
    element.style.background='#2C66B8'
    element.style.borderRadius='10px'
    element.querySelector('h2').style.color='white'
    element.querySelector('h2').style.color='white'

}

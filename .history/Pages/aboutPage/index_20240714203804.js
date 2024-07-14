let list = document.querySelectorAll("li")


// change box
list.forEach((element)=>{
element.addEventListener('mouseover',()=>changeBox(element))
})

function changeBox(element){
    element.style.background='#2C66B8'
    element.style.borderRadius='10px'
    element.querySelector('h2').style.color='white'
    element.querySelector('p').style.color='white'

}


// undo change
list.forEach((element)=>{
    element.addEventListener('mouseover',()=>undoChangeBox(element))
    })
    
    function undoChangeBox(element){
        element.style.background='white'
        element.style.borderRadius='0'
        element.querySelector('h2').style.color='black'
        element.querySelector('p').style.color='white'
    
    }
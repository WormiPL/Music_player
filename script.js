
const toggle_theme = document.querySelector('#dark_mode')
const background_image = document.querySelector('#bg_light')
const navtop = document.querySelector('.navtop')
const text = document.querySelector('.navtop a')
const text2 = document.querySelector('.dropdown a')
const dropdown = document.querySelector('.dropdown-content')
const dropdown_text = document.querySelector('.dropdown-content a')

let state = true //true dla białego

toggle_theme.addEventListener('click',()=>{
    if(state){
        state = false
        background_image.src = './img/bg2.jpg'
        navtop.style.backgroundColor="#333"
        text.style.color= '#c7c7c7'
        text2.style.color= '#c7c7c7'
        dropdown.style.backgroundColor='#333'
        dropdown_text.style.color= '#c7c7c7'
    }else{
        state = true
        background_image.src = './img/bg1.jpg'
        navtop.style.backgroundColor="#c7c7c7";
        text.style.color= '#333'
        text2.style.color= '#333'
        dropdown.style.backgroundColor='#c7c7c7'
        dropdown_text.style.color= '#333'
    }
})


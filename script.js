
const toggle_theme = document.querySelector('#dark_mode')
const background_image = document.querySelector('#bg_light')
const navtop = document.querySelector('.navtop')
const text = document.querySelectorAll('.navtop li a')
const dropdown_content = document.querySelector('.dropdown-content')
const controls = document.querySelectorAll('.audiocontrols span')
const controls_hover = document.querySelectorAll('.audiocontrols span:hover')
const card = document.querySelector('.audiopanel');



let state = true //true dla białego

const white_icon  = ()=>{
    return`
    <img src="./img/white/icons8-previous-50.png"></img>
    `
}

const black_icon = ()=>{
    return`
    <p>black</p>
    `
}

window.onload = ()=>{
    card.innerHTML = white_icon()
}

const white_theme = ()=>{
    background_image.src = './img/bg1.jpg'
    navtop.style.backgroundColor = '#c7c7c7'
    dropdown_content.style.backgroundColor = '#c7c7c7'
    controls_hover.backgroundColor = 'rgb(85, 125, 255)'
    text.forEach((el)=>{
        el.style.color = '#333'
    })
    controls.forEach((players)=>{
        players.style.backgroundColor = '#333'
    })
    card.innerHTML = white_icon()
}

const black_theme = ()=>{
    background_image.src = './img/bg2.jpg'
    navtop.style.backgroundColor = '#333'
    dropdown_content.style.backgroundColor = '#333'
    text.forEach((el)=>{
        el.style.color = '#c7c7c7'
    })
    controls.forEach((players)=>{
        players.style.backgroundColor = '#c7c7c7'
    })
    card.innerHTML = black_icon()
}

toggle_theme.addEventListener('click',()=>{
    state =!state
    state ? white_theme() : black_theme()
})


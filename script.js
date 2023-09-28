
const toggle_theme = document.querySelector('#dark_mode')
const background_image = document.querySelector('#bg_light')
const navtop = document.querySelector('.navtop')
const text = document.querySelectorAll('.navtop li a')
const dropdown_content = document.querySelector('.dropdown-content')
const p = document.querySelector('.audiopanel p')
const controls = document.querySelectorAll('.audiocontrols span')
const spanhover = document.querySelectorAll('#controls_hover')   

let state = true //true dla białego

const white_theme = ()=>{
    background_image.src = './img/bg1.jpg'
    navtop.style.backgroundColor = '#c7c7c7'
    p.style.color='#333'
    dropdown_content.style.backgroundColor = '#c7c7c7'
    text.forEach((el)=>{
        el.style.color = '#333'
    })
    controls.forEach((players)=>{
        players.style.backgroundColor = '#333'
    })
}

const black_theme = ()=>{
    background_image.src = './img/bg2.jpg'
    navtop.style.backgroundColor = '#333'
    p.style.color='#c7c7c7'
    dropdown_content.style.backgroundColor = '#333'
    text.forEach((el)=>{
        el.style.color = '#c7c7c7'
    })
    controls.forEach((players)=>{
        players.style.backgroundColor = '#c7c7c7'
    })
    }

toggle_theme.addEventListener('click',()=>{
    state =!state
    state ? white_theme() : black_theme()
})

spanhover.addEventListener('mouseover', function(){
    spanhover.classList.add('hovered');
});
spanhover.addEventListener('mouseout', function() {
    element.classList.remove('hovered'); // Remove the 'hovered' class on mouseout
});

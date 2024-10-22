// carrossel
$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,    
        autoplay: true,       
        autoplaySpeed: 3000,            
        arrows: true,         
        adaptiveHeight: true,
        infinite: true
    })
})


//botões de download
let playstation_btn = document.getElementById('playstation')
let xbox_btn = document.getElementById('xbox')
let steam_btn = document.getElementById('steam')

playstation_btn.addEventListener('click', () => {
    window.open("https://store.playstation.com/en-us/product/UP0002-PPSA01649_00-CODWZ2BUNDLE0001/","_blank")
})

xbox_btn.addEventListener('click', () => {
    window.open("https://www.xbox.com/en-US/games/store/call-of-duty-warzone-2/9NNFG8BQRCXL","_blank")
})

steam_btn.addEventListener('click', () => {
    window.open("https://store.steampowered.com/agecheck/app/1962663/","_blank")
})

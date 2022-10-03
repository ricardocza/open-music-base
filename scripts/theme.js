function darkMode() {
    const darkModeButton = document.querySelector('.dark-mode-button')
    darkModeButton.addEventListener('click', addClassDark)
}

function addClassDark() {
    const body = document.body
    body.classList.toggle('body-dark')
    const slider = document.querySelector('#slider')
    slider.classList.toggle('slider-dark')
    // const toggleImg = document.getElementsByClassName('toggle-theme-img')[0]
    // console.dir(toggleImg)
    // toggleImg.src === "../../assets/img/moon.png" ? toggleImg.src="../../assets/img/sun.png" : toggleImg.src="../../assets/img/moon.png"
    const buttons = document.querySelectorAll('button')
    buttons.forEach(element => {
        element.classList.toggle('button-dark')
    })
    const buttonSelected = document.querySelectorAll('.button-selected')
    buttonSelected.forEach(element => {
        element.classList.toggle('button-dark-selected')
    })

    const buttonBuy = document.querySelectorAll('.button-buy')
    buttonBuy.forEach(element => element.classList.toggle('button-buy-dark'))
    const card = document.querySelectorAll('.list-item')
    card.forEach(element => element.classList.toggle('card-backgroud-dark'))

    
}

darkMode()
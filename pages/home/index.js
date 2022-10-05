function checkDarkMode() {
    const check = localStorage.getItem('darkMode')
    if(check) {
        updateHtml()
    }
}

checkDarkMode()

function sliderStyle() {
    const slider = document.querySelector(".slider")
    var value = slider.value
    const html = document.querySelector('html')
    if(html.classList.contains('dark-mode')) {
        slider.style.background = 'linear-gradient(to right, var(--color-brand-1) 0%, var(--color-brand-1) ' + value + '%, var(--color-grey-8) ' + value + '%, var(--color-grey-8) 100%)'
    } else {
        slider.style.background = 'linear-gradient(to right, var(--color-brand-1) 0%, var(--color-brand-1) ' + value + '%, var(--color-grey-5) ' + value + '%, var(--color-grey-5) 100%)'
    }
}

sliderStyle()
function darkMode() {
    const darkModeButton = document.querySelector('.dark-mode-button')
    darkModeButton.addEventListener('click', () => {
        const html = document.querySelector('html')
        html.classList.toggle('dark-mode')
        dmImg = document.querySelector('.toggle-theme-img')
        dmImg.classList.toggle('sun')
        
        if(dmImg.classList.contains('sun')) {
            dmImg.src = '../../assets/img/sun.png'
        } else dmImg.src = '../../assets/img/moon.png'
    })
}

darkMode()
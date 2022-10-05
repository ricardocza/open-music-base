function darkMode() {
    const darkModeButton = document.querySelector('.dark-mode-button')
    darkModeButton.addEventListener('click', () => {        
        updateHtml()

        const darkModeStorage = localStorage.getItem('darkMode')
        if(!darkModeStorage) localStorage.setItem('darkMode', true)
        else localStorage.removeItem('darkMode')
    })
}

function updateHtml() {
    const html = document.querySelector('html')
    html.classList.toggle('dark-mode')
    dmImg = document.querySelector('.toggle-theme-img')
    dmImg.classList.toggle('sun')
    
    if(dmImg.classList.contains('sun')) {
        dmImg.src = '../../assets/img/sun.png'
    } else dmImg.src = '../../assets/img/moon.png'
}

darkMode()
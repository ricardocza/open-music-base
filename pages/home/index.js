function checkDarkMode() {
    const check = localStorage.getItem('darkMode')
    if(check) {
        updateHtml()
    }
}

checkDarkMode()
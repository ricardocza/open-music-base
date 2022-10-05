function renderGenres(arrGenres) {
    const ulGenres = document.querySelector('.genre-list')
    arrGenres.forEach(obj => {
        const button = document.createElement('button')
        button.classList= 'button-light'
        if(obj === 'Todos') {
            button.classList = 'button-selected'
            renderCards(products)
        } 
        button.innerText = obj
        ulGenres.appendChild(button)
        addGenreButtonListener(button)
    })
}

function addGenreButtonListener(button) {
    button.addEventListener('click', (event) => {
        const buttonSelected = document.querySelector('.button-selected')
        if(event.target.classList !== buttonSelected.classList) {
            buttonSelected.classList = ''            
            event.target.classList = 'button-selected'
            filterCards(event.target.innerText)            
        }        
    })
}

function renderCards(arrObj) {
    const listCards = document.querySelector('.list-cards')
    arrObj.forEach(obj => {
        const li = document.createElement('li')
        const picture = document.createElement('picture')
        const img = document.createElement('img')
        const divInfoAlbum = document.createElement('div')
        const divInfoBand = document.createElement('div')
        const pBandName = document.createElement('p')
        const pBandYear = document.createElement('p')
        const titleBand = document.createElement('h3')
        const footer = document.createElement('footer')
        const price = document.createElement('p')
        const buttonBuy = document.createElement('button')

        li.classList = 'list-item flex flex-column margin-auto b-radius'
        picture.classList = 'b-radius'
        img.src = obj.img
        divInfoAlbum.classList = 'info-album flex flex-column gap1'
        divInfoBand.classList = 'band-info flex gap1'
        pBandName.innerText = obj.band
        pBandName.classList = 'color-text1'
        pBandYear.innerText = obj.year
        pBandYear.classList = 'color-text1'
        titleBand.innerText = obj.title
        titleBand.classList = 'color-title2'
        footer.classList = 'flex justify-space-between'
        price.innerText = obj.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        price.classList = 'color-title2'
        buttonBuy.classList = 'button-buy'
        buttonBuy.innerText = 'Comprar'

        footer.append(price, buttonBuy)
        divInfoBand.append(pBandName, pBandYear)
        divInfoAlbum.append(divInfoBand, titleBand, footer)
        picture.append(img)
        li.append(picture, divInfoAlbum)
        listCards.append(li)
    })
}

renderGenres(categories)
const inputRange = document.querySelector('.slider')

function filterCards(genreString) {
    const listCards = document.querySelector('.list-cards')
    listCards.innerHTML = ''
    if(genreString == 'Todos') {
        
        renderCards(products.filter(product => product.price <= inputRange.value))
    } 
    else {
        const genreIndex = categories.findIndex(element => element == genreString)
        const filterByType = products.filter(product => product.category === genreIndex)
        const filterByPrice = filterByType.filter(product => product.price <= inputRange.value)
        renderCards(filterByPrice)
    }
}

inputRange.addEventListener('mousemove', () => {
    const inputValue = inputRange.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    const label = document.querySelector('.input-value')
    const currentGenre = document.querySelector('.button-selected').innerText
    label.innerText = `Até R$ ${inputValue}`
    filterCards(currentGenre)
})
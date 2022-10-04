function filterCards(genreString) {
    const listCards = document.querySelector('.list-cards')
    listCards.innerHTML = ''
    if(genreString == 'Todos') renderCards(products)
    else {
        const genreIndex = categories.findIndex(element => element == genreString)
        const productsFiltered = products.filter(product => product.category === genreIndex)
        renderCards(productsFiltered)
    }
}
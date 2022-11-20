(function (){
    const buttons = document.querySelectorAll(".btn")
    const bookItems = document.querySelectorAll(".book")

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            bookItems.forEach((item) => {
                if(filter === "all") {
                    item.style.display = "block"
                }
                else {
                    if(item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
})
        })
    })

})();

(function () {
    const searchBox = document.querySelector('#search-item')
    const bookItems = document.querySelectorAll('.book')

    searchBox.addEventListener('keyup' , (e) => {
        const searchFilter = e.target.value.toLowerCase().trim()

        bookItems.forEach((item) => {
            if(item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        }) 
    })
})();



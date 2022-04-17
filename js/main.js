const search = document.querySelector('search-wizards')
search.addEventListener('keyup', findWizards)

function findWizards() {
    const wizard = search.value;
    const url = `https://www.dnd5eapi.co/api/spells/${wizard}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


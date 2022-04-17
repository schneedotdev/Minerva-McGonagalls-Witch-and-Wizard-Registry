document.getElementById('search-wizards').addEventListener('keyup', filterWizards)

function filterWizards() {
    const characters = 'http://hp-api.herokuapp.com/api/characters'
    fetch(characters)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);

            let re = new RegExp(document.getElementById('search-wizards').value.toLowerCase())
            let matches = data.filter(wizard => wizard.name.toLowerCase().match(re) || wizard.house.toLowerCase().match(re));

            console.log(matches);
        })
        .catch(err => {
            console.error(`error ${err}`)
        });
}



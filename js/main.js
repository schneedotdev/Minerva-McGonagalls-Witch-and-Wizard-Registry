filterWizards() // Fill DOM on initial load
document.getElementById('search-wizards').addEventListener('keyup', filterWizards)

function filterWizards() {
    const characters = 'http://hp-api.herokuapp.com/api/characters'
    fetch(characters)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);

            let re = new RegExp(document.getElementById('search-wizards').value.toLowerCase())
            let matches = data.filter(wizard => {
                return wizard.name.toLowerCase().match(re) || wizard.house.toLowerCase().match(re)
            });

            const wizards = document.getElementById('wizards')
            wizards.innerHTML = '';

            matches.forEach(match => {
                const li = document.createElement('li');
                const house = match.house || 'unknown';
                
                li.classList.add('wizard-info');
                li.innerHTML = `
                    <section class="${house.toLowerCase()}">
                        <div class="wizard-text">
                            <h2 class="name">${match.name}</h2>
                            <h3 class="house">${house}</h3>
                        </div>
                        <img class="image" src="${match.image}">
                    </section>
                `;

                wizards.appendChild(li)
            })

            console.log(matches);
        })
        .catch(err => {
            console.error(`error ${err}`)
        });
}



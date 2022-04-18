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
                const image = match.image || './images/default.png';
                
                li.classList.add('wizard-info');
                li.innerHTML = `
                    <section class="${house.toLowerCase()}">
                        <div class="wizard-text">
                            <h2 class="name">${match.name}</h2>
                            <h3 class="house-name">${house}</h3>

                            <h4 class="wand-title">Wand Details</h4>
                            <ul class="wand">
                                <li>Wood - ${match.wand.wood}</li>
                                <li>Length - ${match.wand.length}</li>
                                <li>Core - ${match.wand.core}</li>
                            </ul>
                        </div>
                        <div class="wizard-image">
                            <img class="image" src="${image}">
                            <img class="${house.toLowerCase()}-image" src="./images/${house}.png">
                        </div>
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



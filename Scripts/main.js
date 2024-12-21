//& 🛜 Get Data From API.

import displayGames from "./showGames.module.js";
import displayGameDescription from "./showDetails.module.js";

/**
 *
 * 🛜 Details For API.
 *     ? Get Games By Category
 *          - Base URL:- https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter
 *          - Header:-
 *              - x-rapidapi-key: d8726fdffemsh72a4cf1ea1c782ep120bafjsn161b66a12270
 *              - x-rapidapi-host: free-to-play-games-database.p.rapidapi.com
 *     ? Category
 *          - mmorpg - shooter - sailing - permadeath - superhero - pixel
 */

//^📕Elements to manipulate.
let DOMElements = {
    linksNavBar: document.querySelectorAll('.nav-item'),
    loading: document.querySelector('.loading'),
    card: document.querySelectorAll('.row'),
};

//^📕Listener of NavBar Links and Create Instance From Class Game.
for (let i = 0; i < DOMElements.linksNavBar.length; i++) {
    DOMElements.linksNavBar[i].addEventListener('click', function (e) {
        let valueSelected = e.target.getAttribute('value');
        let gameInstance = new Game(valueSelected);
    });
}

//^📕 Class Game.
class Game {
    constructor(category = 'mmorpg') {
        this.category = category;
        this.getData();
    }

    //^🎯 Get Data From API.
    async getData() {
        const url = `https://www.freetogame.com/api/games?category=${this.category}`;
        const options = {
            method: 'GET',
            /*
            headers: {
                'x-rapidapi-key': 'd8726fdffemsh72a4cf1ea1c782ep120bafjsn161b66a12270',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
            */
        };
        try {
            DOMElements.loading.classList.replace('d-none', 'd-block');
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            this.getID();
            displayGames(result);
            DOMElements.loading.classList.replace('d-block', 'd-none');
        } catch (error) {
            DOMElements.loading.classList.replace('d-none', 'd-block');
            console.error('Error fetching data:', error);
        }
    }

    //^🎯 Get ID From Item and Transfer to Description Section.
    getID() {
        DOMElements.card.forEach(element => {
            element.addEventListener('click', function (element) {
                let idItemSelected = element.target.getAttribute('id');
                DOMElements.loading.classList.replace('d-none', 'd-block');
                displayGameDescription(idItemSelected);
            });
        });
    }
}

//^ 🎯 Once the Page run, Will That Function is Executed.
(function () {
    let gameInstance = new Game();
})();
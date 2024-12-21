//&📺 Show Details in Details Section.

/**
 *
 * 🛜 Details For API.
 *     ? Get Details Game By ID
 *          - Base URL: - https://free-to-play-games-database.p.rapidapi.com/api/game?id=452
 *          - Header:-
 *              - x-rapidapi-key: d8726fdffemsh72a4cf1ea1c782ep120bafjsn161b66a12270
 *              - x-rapidapi-host: free-to-play-games-database.p.rapidapi.com
 */

//^📕 Elements to manipulate.
let DOMElement = {
    description: document.querySelector('.description'),
    loading: document.querySelector('.loading'),
    main: document.querySelector('.main'),
    details: document.querySelector('.details'),
    btnClose: document.getElementById('btnClose'),
}

//^🎯 That Object to Store Data.
let gameDescriptionList = {};

//^🎯 Class Game Description.
class GameDescription {
    constructor(gameID) {
        this.ID = gameID;
        this.getDescription();
    }

    //^🎯 Get Description Data From API
    async getDescription() {
        const url = `https://www.freetogame.com/api/game?id=${this.ID}`;
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
            const response = await fetch(url, options);
            const result = await response.json();
            this.displayGameDescription(result);
        } catch (error) {
            console.error(error);
        }
    }

    //^🚨 Display Game Description.
    displayGameDescription(data) {
        gameDescriptionList = data;
        let box =
            `
                <!-- ? Details Title -->
                <div class="d-flex justify-content-between align-content-center">
                    <h1 class="text-white h2">Details Game</h1>
                    <button class="btn btn-outline-dark" id="btnClose">
                        <i class="fa fa-close text-white-50 fs-4"></i>
                    </button>
                </div>
                <div class="row pt-4">
                    <div class="col-md-4">
                        <img src="${gameDescriptionList.thumbnail}" alt="Game Image" class="w-100 d-block rounded-3 shadow">
                    </div>
                    <div class="col-md-8 pt-md-0 pt-lg-0 pt-4">
                        <div class="info">
                            <div class="text-white h4">
                                <span class="key">Title:</span>
                                <span class="value">${gameDescriptionList.title}</span>
                            </div>
                            <div class="text-white h6 pt-3">
                                <span class="key">Category:</span>
                                <span class="badge text-bg-info text-uppercase">${gameDescriptionList.genre}</span>
                            </div>
                            <div class="text-white h6 pt-2">
                                <span class="key">Platform:</span>
                                <span class="badge text-bg-info">${gameDescriptionList.platform}</span>
                            </div>
                            <div class="text-white h6 pt-2">
                                <span class="key">Status:</span>
                                <span class="badge text-bg-info">${gameDescriptionList.status}</span>
                            </div>
                        </div>
                        <div class="main-description text-white pt-3">
                            <p class="description-text">${gameDescriptionList.description}</p>
                        </div>
                        <a class="btn btn-outline-warning" href="${gameDescriptionList.game_url}" target="_blanck">Show Game</a>
                    </div>
                </div>
            `;
        DOMElement.description.innerHTML = box;

        //^🆑 Listener CLose Button
        DOMElement.details.addEventListener("click", (e) => {
            console.log(e.target);
            DOMElement.details.classList.replace('d-block', 'd-none');
            DOMElement.loading.classList.replace('d-block', 'd-none');
            DOMElement.main.classList.replace('d-none', 'd-block');
        });
    }
}

//^🚨 That Function is For Receiving ID and Transfer it To Game Description Class.
export default function passingID(ID) {
    const instanceGameDescription = new GameDescription(ID);
    DOMElement.loading.classList.replace('d-block', 'd-none');
    DOMElement.main.classList.add('d-none');
    DOMElement.details.classList.replace('d-none', 'd-block');
}

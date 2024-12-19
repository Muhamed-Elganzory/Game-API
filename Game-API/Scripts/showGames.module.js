//& 📺 Show Games in Home Page.

//^📕 Elements to manipulate.
let DOMElement = {
    row: document.querySelector('.row'),
}

//^🎒 That Array to store data to display it.
let gamesList = [];

//^🚨 Display Games.
export default function displayGames(data) {
    gamesList = data;
    let box = ``;
    for (let i = 0; i < gamesList.length; i++) {
        box +=
            `
            <div class="col-xl-3 col-lg-4" id="${gamesList[i].id}">
                <div class="card text-white shadow fixed-height" id="${gamesList[i].id}">
                    <div class="card-body" id="${gamesList[i].id}">
                        <img src="${gamesList[i].thumbnail}" alt="Game Image" class="w-100 d-block rounded-top-3" id="${gamesList[i].id}">
                        <div class="content pt-3" id="${gamesList[i].id}">
                            <!-- & Game Name & Game Status-->
                            <div class="d-flex justify-content-between align-content-center" id="${gamesList[i].id}">
                                <p class="p-0 m-0" id="${gamesList[i].id}">${gamesList[i].title}</p>
                                <span class="badge text-bg-primary" id="${gamesList[i].id}">Free</span>
                            </div>
                            <!-- & Game Description -->
                            <div class="description text-center pt-2 ps-2 pe-2" id="${gamesList[i].id}">
                                <p class="p-0 m-0 text-dark-emphasis" id="${gamesList[i].id}">${gamesList[i].short_description}</p>
                            </div>
                        </div>
                    </div>
                    <!-- & Game Name & Game Status-->
                    <div class="card-footer" id="${gamesList[i].id}">
                        <div class="d-flex justify-content-between align-content-center" id="${gamesList[i].id}">
                            <span class="badge text-bg-Gray text-uppercase" id="${gamesList[i].id}">${gamesList[i].genre}</span>
                            <span class="badge text-bg-Gray" id="${gamesList[i].id}">${gamesList[i].platform}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    DOMElement.row.innerHTML = box;
}
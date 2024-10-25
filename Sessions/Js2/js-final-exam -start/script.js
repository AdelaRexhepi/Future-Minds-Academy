// Sample admin credentials
const credentials = {
    username: 'admin',
    password: 'admin123'
};

// Sample game data
let games = [
    {
        name: 'CG FC 24',
        thumbnail: 'images/cgfc.avif',
        url: 'https://www.crazygames.com/game/cg-fc-24',
        likes: 150,
        views: 2000
    },
    {
        name: 'Supermarket sort',
        thumbnail: 'images/supermarket.avif',
        url: 'https://www.crazygames.com/game/supermarket-sort-grocery-game',
        likes: 250,
        views: 5000
    },
    {
        name: 'Gun Strike Runner',
        thumbnail: 'images/gun-strike-runner.avif',
        url: 'https://www.crazygames.com/game/gun-strike-runner',
        likes: 188,
        views: 4800
    }
];

let isAddingNewGame = false; // This flag will tell us whether we are adding or editing a game
let currentGameIndex = null; // Holds the index of the game being edited

//Add your code below
const logInForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginError = document.querySelector("#login-error");
const loginPage = document.querySelector("#login-page");
const dashboardPage = document.querySelector("#dashboard-page");
const addNewGameBtn = document.querySelector("#add-new-game-btn");
const gameList = document.querySelector("#game-list");
const editModal = document.querySelector("#edit-modal");
const modalTitle = document.querySelector("#modal-title");
const editNameInput = document.querySelector("#edit-name");
const editThumbnailSelect = document.querySelector("#edit-thumbnail");
const editUrlInput = document.querySelector("#edit-url");
const editLikesInput = document.querySelector("#edit-likes");
const editViewsInput = document.querySelector("#edit-views");
const closeEditModal = document.querySelector("#close-edit-modal");
const editForm = document.querySelector("#edit-form");
const saveChangesBtn = document.querySelector("#edit-form button");
const removeModal = document.querySelector("#remove-modal");
const closeRemoveModal = document.querySelector("#close-remove-modal");
const confirmRemove = document.querySelector("#confirm-remove");
const cancelRemove = document.querySelector("#cancel-remove");

let gameToRemove = null;
logInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const valueUsername = username.value;
    const valuePassword = password.value;

    if (valueUsername === credentials.username && valuePassword === credentials.password) {
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'block';
        renderList();
    } else {
        loginError.textContent = 'Incorrect username or password';
    }
});
function renderList() {
    gameList.innerHTML = '';
    games.forEach((game, index) => {
        gameList.innerHTML += `
        <tr>
            <td>${game.name}</td>
            <td><img src="${game.thumbnail}" alt="${game.name}" width="50"></td>
            <td><a href="${game.url}" target="_blank">Play</a></td>
            <td>${game.likes}</td>
            <td>${game.views}</td>
            <td><button onclick="openEditModal(${index})">Edit</button></td>
            <td><button onclick="openRemoveModal(${index})">Remove</button></td>
        </tr>
        `;
    });
}
editForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newGame = {
        name: editNameInput.value,
        thumbnail: editThumbnailSelect.value,
        url: editUrlInput.value,
        likes: parseInt(editLikesInput.value),
        views: parseInt(editViewsInput.value)
    };

    if (isAddingNewGame) {
        games.push(newGame);
    } else {
        games[currentGameIndex] = newGame;
    }

    editModal.style.display = 'none';
    renderList();
});

function openEditModal(index = null) {
    currentGameIndex = index;

    if (index === null) {
        isAddingNewGame = true;
        modalTitle.textContent = 'Add New Game';
        editNameInput.value = '';
        editThumbnailSelect.value = 'images/cgfc.avif';
        editUrlInput.value = '';
        editLikesInput.value = '';
        editViewsInput.value = '';
    } else {
        isAddingNewGame = false;
        modalTitle.textContent = 'Edit Game';
        const game = games[index];
        editNameInput.value = game.name;
        editThumbnailSelect.value = game.thumbnail;
        editUrlInput.value = game.url;
        editLikesInput.value = game.likes;
        editViewsInput.value = game.views;
    }
    editModal.style.display = 'block';
}

closeEditModal.addEventListener("click", function() {
    editModal.style.display = 'none';
});

addNewGameBtn.addEventListener("click", function(event) {
    event.preventDefault();
    openEditModal(null);
});

function openRemoveModal(index) {
    gameToRemove = index;
    removeModal.style.display = 'block';
}

confirmRemove.addEventListener("click", function(){
    if(gameToRemove != null){
        games.splice(gameToRemove,1);
        gameToRemove = null;
        removeModal.style.display = 'none';
        renderList()
    }
});
cancelRemove.addEventListener("click", function(){
    removeModal.style.display = 'none'
});
closeRemoveModal.addEventListener("click", function(){
    removeModal.style.display = 'none'
})

let feePages = [
    {
        title: "User Managment",
        desc: "Manage users, assign roles, and handle permissions here."
    },
    {
        title: "Learning Plan",
        desc: "Design and track learning plans for users."
    },
    {
        title: "Reports",
        desc: "Generate and view various reports and analytics."
    },
    {
        title: "Settings",
        desc: "Configure system settings and preferences."
    }
]
confirmRemove.addEventListener("click", function() {
    if (gameToRemove !== null) {
        games.splice(gameToRemove, 1);
        gameToRemove = null;
        removeModal.style.display = 'none';
        renderList();
    }
});

cancelRemove.addEventListener("click", function() {
    removeModal.style.display = 'none';
});

closeRemoveModal.addEventListener("click", function() {
    removeModal.style.display = 'none';
});
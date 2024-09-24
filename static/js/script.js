const achievements = [
    { id: 1, title: "Plant a tree", description: "Successfully planted your first tree!", x: 50, y: 80 },
    { id: 2, title: "Hug a tree", description: "Showed your love for nature by hugging a tree!", x: 30, y: 60 },
    { id: 3, title: "Eat the fruits of a tree", description: "Enjoyed the delicious fruits from your tree!", x: 70, y: 60 },
    { id: 4, title: "Chop down a tree", description: "Responsibly harvested a tree for resources.", x: 20, y: 40 },
    { id: 5, title: "Get trunk", description: "Developed strong muscles from tree-related activities!", x: 80, y: 40 }
];

function createAchievementNodes() {
    const treeContainer = document.getElementById('tree-container');
    const treeImage = treeContainer.querySelector('img');

    achievements.forEach(achievement => {
        const node = document.createElement('div');
        node.className = 'achievement-node';
        node.style.left = `${achievement.x}%`;
        node.style.top = `${achievement.y}%`;
        node.setAttribute('data-id', achievement.id);
        node.addEventListener('click', () => showAchievementDetails(achievement));
        treeContainer.appendChild(node);
    });
}

function createAchievementCards() {
    const container = document.getElementById('achievements-container');
    achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement bg-white p-4 rounded-lg shadow-md';
        card.innerHTML = `
            <h3 class="text-xl font-semibold mb-2">${achievement.title}</h3>
            <p class="text-gray-600">${achievement.description}</p>
        `;
        card.addEventListener('click', () => showAchievementDetails(achievement));
        container.appendChild(card);
    });
}

function showAchievementDetails(achievement) {
    const detailsContainer = document.getElementById('achievement-details');
    const titleElement = document.getElementById('detail-title');
    const descriptionElement = document.getElementById('detail-description');

    titleElement.textContent = achievement.title;
    descriptionElement.textContent = achievement.description;
    detailsContainer.classList.remove('hidden');
}

document.getElementById('close-details').addEventListener('click', () => {
    document.getElementById('achievement-details').classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    createAchievementNodes();
    createAchievementCards();
});

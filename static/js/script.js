const achievements = [
    { id: 1, title: "Plant a tree", description: "Successfully planted your first tree!", parent: null },
    { id: 2, title: "Hug a tree", description: "Showed your love for nature by hugging a tree!", parent: 1 },
    { id: 3, title: "Eat the fruits of a tree", description: "Enjoyed the delicious fruits from your tree!", parent: 1 },
    { id: 4, title: "Chop down a tree", description: "Responsibly harvested a tree for resources.", parent: 1 },
    { id: 5, title: "Get trunk", description: "Developed strong muscles from tree-related activities!", parent: 4 }
];

function createTreeStructure(achievements) {
    const tree = {};
    achievements.forEach(achievement => {
        achievement.children = [];
        tree[achievement.id] = achievement;
    });
    
    achievements.forEach(achievement => {
        if (achievement.parent !== null) {
            tree[achievement.parent].children.push(achievement);
        }
    });
    
    return tree[1]; // Return the root node
}

function renderTree(node, container, level = 0) {
    const achievementElement = document.createElement('div');
    achievementElement.className = `achievement-node level-${level}`;
    achievementElement.innerHTML = `
        <div class="achievement-content" data-id="${node.id}">
            <h3>${node.title}</h3>
        </div>
    `;
    achievementElement.querySelector('.achievement-content').addEventListener('click', () => showAchievementDetails(node));
    
    container.appendChild(achievementElement);
    
    if (node.children.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children-container';
        node.children.forEach(child => renderTree(child, childrenContainer, level + 1));
        container.appendChild(childrenContainer);
    }
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
    const treeContainer = document.getElementById('tree-container');
    const rootNode = createTreeStructure(achievements);
    renderTree(rootNode, treeContainer);
});

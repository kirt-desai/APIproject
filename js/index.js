document.addEventListener('DOMContentLoaded', () => {
    fetchAvatarEpisodes();
});

function fetchAvatarEpisodes() {
    fetch('https://api.sampleapis.com/avatar/episodes')
        .then(response => response.json())
        .then(data => {
            displayAvatarEpisodes(data);
        })
        .catch(error => console.error('Error fetching avatar episodes:', error));
}

function fetchAvatarCharacters() {
    fetch('https://api.sampleapis.com/avatar/characters')
        .then(response => response.json())
        .then(data => {
            displayAvatarCharacters(data);
        })
        .catch(error => console.error('Error fetching avatar characters:', error));
}

function displayAvatarEpisodes(data) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="avatar-episodes">
            <h2>Avatar Episodes</h2>
            ${data.map(episode => `
                <div class="episode-item">
                    <h3>Season ${episode.season}, Episode ${episode.episode}</h3>
                    <p>Title: ${episode.title}</p>
                    <p>Air Date: ${episode.airDate}</p>
                    <p>Description: ${episode.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function displayAvatarCharacters(data) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="avatar-characters">
            <h2>Avatar Characters</h2>
            ${data.map(character => `
                <div class="character-item">
                    <h3>${character.name}</h3>
                    <p>Nation: ${character.nation}</p>
                    <img src="${character.image}" alt="${character.name} Image">
                </div>
            `).join('')}
        </div>
    `;
}

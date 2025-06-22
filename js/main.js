import fetchData from './fetchData.js';

const divOpinions = document.querySelector('.opinions')

const data = await fetchData();

if (!data || !data.data) {
    console.error('No data received or data format is incorrect');
}

for (const opinion of data.data) {
    console.log(opinion);
    const opinionContainer = `${opinion.name}<br>${opinion.description}<br>${opinion.stars}/5 gwiazdek<br><br>`;
    const opinionElement = document.createElement('div');
    opinionElement.classList.add('opinion');
    opinionElement.innerHTML = opinionContainer;
    divOpinions.appendChild(opinionElement);
}

import sendData from "./sendData.js"

const btn = document.getElementById('submit-opinion')
btn.addEventListener('click', submitForm)

function getElements() {
    const name = document.getElementById('name').value
    const description = document.getElementById('description').value
    const stars = Math.floor(document.getElementById('stars').value)

    return { name, description, stars }
}

function validateData(data) {
    if (!data.name) {
        console.error('Name is required');
        return false;
    }
    if (data.description.length < 10 || data.description.length > 500) {
        console.error('Description must be between 10 and 500 characters');
        return false;
    }
    if (+data.stars < 1 || +data.stars > 5) {
        console.error('Stars must be between 1 and 5');
        return false;
    }
    return true;
}

function submitForm() {
    const data = getElements();

    if (!validateData(data)) {
        return;
    }

    console.log('Data sent')
    sendData(data);
}
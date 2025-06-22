export default async function sendData(data) {
    fetch("https://zelmer-be.onrender.com/api/v1/opinion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    });
}
export default async function fetchData() {
    const data = await fetch('https://zelmer-be.onrender.com/api/v1/opinion')
    const json = await data.json()
    return json
}
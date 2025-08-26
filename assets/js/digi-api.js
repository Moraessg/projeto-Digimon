

const digiApi={}

digiApi.getdigimons = (page) => {
    const url = `https://digi-api.com/api/v1/digimon?page=${page}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.content)
        .catch((error) => console.error(error))


}
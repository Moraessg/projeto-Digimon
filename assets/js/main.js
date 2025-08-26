const page = 99
const url = `https://digi-api.com/api/v1/digimon?page=${page}`

function convertDigimontoHtml(digimon) {
    return `
        <li class="digimon>
            <span class = "number">#00${digimon.id}</span>
            <span class = "name">${digimon.name}<span>

            div class = "detail">
                <ol class = "types">
                    <li class - "type">Tipo</li>
                </ol>
            img src = ${digimon.image} alt = "${digimon.name}">
            </div>
        </li>

        `
}

const digimonList = document.getElementById('digimonList')

digiApi.getdigimons(page).then(digimons => {

    const listItem = []

        for (let i = 0; i<digimons.length; i++) {
            const digimon = digimons[i]
            listItem.push(convertDigimontoHtml(digimon))
        }
        console.log(listItem)
    })

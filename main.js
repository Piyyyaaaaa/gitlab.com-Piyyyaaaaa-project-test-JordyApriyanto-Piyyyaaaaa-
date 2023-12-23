console.log("OK")

const endpoint = "https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at"

fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email:"apriyantojordy7@gmail.com",
        firstname: "Jordy",
    })
})
    .then((result) => result.json())
    .then((data) => console.log(data))
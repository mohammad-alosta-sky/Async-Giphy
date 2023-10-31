require('dotenv').config();

// Print out value of API key stored in .env file


async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const img = data.data[Math.floor(Math.random()*24)].images.original.url;
    return img
}

const getImageHelper = async () => {
    console.log(await getImage("dog"));
}


getImageHelper();
// const img = getImage("lol");
// console.log(img)

// const button = document.querySelector("button");
// button.addEventListener("click", (event) => {
//     document.querySelector(".img").innerHTML = `<img src=${getImage("lol")}>`});
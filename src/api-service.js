const link = "https://api.pokemontcg.io/v2/cards/"

async function apiService (link, ...options) {
    let response = await fetch(link);
    let data = await response.json();
    console.log(data)
}

apiService(link)

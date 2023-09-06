const proxyUrl = "https://api-node-breathe.hop.sh/api/classe/all"; // Remplacez par l'URL de votre propre serveur proxy

fetch(proxyUrl, {
    mode: 'no-cors',
    method: "get",
    headers: {
        "Content-Type": "application/json"
    },
})
    .then((response) => {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

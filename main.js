function search(){
    let word = document.getElementById('word').value
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + word)
    .then(response => response.json())
    .then(data => {
        if (data['objectIDs'] === null) {
            return alert("画像がありません。")
        }
        data['objectIDs'].forEach(objectID => {
            fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + objectID)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let img = document.createElement("img")
                    img.width = 200
                    img.src = data['primaryImageSmall']
                    document.body.appendChild(img)
                    }
                )
            })
    })
}

function refresh() {
    window.location.href = window.location
}
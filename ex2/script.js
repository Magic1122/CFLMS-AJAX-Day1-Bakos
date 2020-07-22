console.log('JS is running...')

const loadDoc = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this)
                
        }
    };
    xhttp.open("GET", "music.xml", true);
    xhttp.send();

}

const myFunction = (xml) => {
    
    const xmlDoc = xml.responseXML;
    console.log(xmlDoc)
    const artists = Array.from(xmlDoc.getElementsByTagName('artist'))
    console.log(artists)

    artists.map((artist) => {
        document.getElementById('result').innerHTML += `<p> Artist: ${artist.attributes.name.value} </p>`
        const albums = Array.from(artist.getElementsByTagName('album'))
        console.log(albums)
        albums.map((album) => {
            document.getElementById('result').innerHTML += `<p> Album: ${album.attributes.title.value} </p>`
            const songs = Array.from(album.getElementsByTagName('song'))
            console.log(songs)
            songs.map((song) => {
                console.log(song.attributes.title.value)
                document.getElementById('result').innerHTML += `<p> Songs: ${song.attributes.title.value} </p>`
            })
        })
    })
}

loadDoc()

document.getElementById('button').addEventListener('click', (e) => {
    console.log('clicked')

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "data.txt", true);
    xhttp.send();

})
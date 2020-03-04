window.onload = getImage();

document.getElementById("shuffle").addEventListener('click', getImage);
 
 function getImage() {
    fetch("https://api.thecatapi.com/v1/images/search?095e6f9b-31bb-4804-9dff-fe14a892f66f")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(function(cat) {
            document.getElementById('cats').src = data[0]["url"];
        });
    })
 }
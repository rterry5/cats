window.onload = getImage();
document.getElementById("shuffle").addEventListener('click', getImage);

async function getImage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?095e6f9b-31bb-4804-9dff-fe14a892f66f");
    const data = await response.json();
    document.getElementById('cats').src = data[0]["url"];
 }

 getImage()
 .catch(error => {
    console.error(error);
    });


// OLD FUNCTION
//  function getImage() {
//     fetch("https://api.thecatapi.com/v1/images/search?095e6f9b-31bb-4804-9dff-fe14a892f66f")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(function(cat) {
//             console.log(data);
//             document.getElementById('cats').src = data[0]["url"];
//         });
//     })
//     .catch(error => {
//         console.log('error!');
//         console.error(error);
//     })
//  }
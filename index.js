// Here the developer creates a funtion that Fetches Animal resources from the Server and renders it to the 
// console/InnerHtml element when called upon. We created a button and added an event listener that executes
// the function when the event occurs.

function displayAnimals() {
    fetch('http://localhost:3000/characters')
.then( response => response.json())
.then((data) => {

    let output = '<h2>Animals Available</h2>';
    data.forEach(function(animals){
        output += `
        <ul>
            <li><p>Name: <a href="#section" onclick='displayDetails(${animals.id})'>${animals.name}</a></p></li>
                 
        </ul>
        `;
    })
    console.log(data);
    document.getElementById('output').innerHTML = output;

    
});

}
// const buttn = document.querySelector('button');

// buttn.addEventListener('click', displayAnimals);


// Here the developer  creates a function that fetches certian arrays from the server and renders them to the above
//function when called upon to display the attributes


function displayDetails(id) {
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
        let animalDets = '<h2> Animal Details</h2>';
        let character = data.filter(item => item.id === id)
        console.log(character)
        character.map( function(characters) {
            animalDets += `

            <img src='${characters.image}'>
            <h4>Votes: ${characters.votes}</h4>
            `;
        })
        console.log(animalDets);
        
        document.getElementById('output').innerHTML = animalDets;
        
        
    })
}


// form function that submits data input by the user to the server.

let addCharacters = document.getElementById('addAnimals');

addCharacters.addEventListener('submit', event => {
event.preventDefault(); //prevention of auto submission of the form

// let IdNumber = document.getElementById('inputnumb').value
let Name = document.getElementById('inputname').value
let ImageURL = document.getElementById('image_url').value
let Votes = document.getElementById('inputnumb').value

fetch('http://localhost:3000/characters', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        
        name:Name,
        image:ImageURL,
        votes:Votes

    })
    
}).then(response =>response.json()).then((data) => console.log(data))


});

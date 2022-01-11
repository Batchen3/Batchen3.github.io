console.log('ajax-demo');
//let next = '';
document.addEventListener('DOMContentLoaded', onLoad);
let filmsD;

function onLoad() {

    const urlLuke = 'https://swapi.dev/api/people/?search=Luke Skywalker';
    getPeople(urlLuke);
    const urlDar = 'https://swapi.dev/api/people/?search=Darth Vader';
    getPeople(urlDar);
    const urlFilms = 'https://swapi.dev/api/films';
    getFilms(urlFilms);
    //document.querySelector('#show-more').addEventListener('click', showMore);
}

function printTitle(response) {

    let film = response;
    let li = document.createElement('li');
    li.innerHTML = film.title;
    filmsD.append(li);
}

function showResponseOnPage(response) {
    let man = response.results;
    if (man[0].name === "Luke Skywalker") {
        let p = document.getElementById('man');
        p.innerText = `${man[0].eye_color} ${man[0].height}`;
    }
    if (man[0].name === "Darth Vader") {
        filmsD = document.getElementById('films-Darth');
        man[0].films.forEach(element => {
            const request = new XMLHttpRequest();
            request.responseType = 'json'; //application/json
            request.addEventListener('readystatechange', () => {
                if (request.readyState === XMLHttpRequest.DONE) {
                    printTitle(request.response);
                }
            });
            request.open('GET', element);
            request.send();
        })
    }


    // const nextUrl = response.next;
    // let peopleList = document.getElementById('people-list');

    // people.forEach(element => {

    //     if (element.name === "Luke Skywalker") {
    //         let p = document.getElementById('man');
    //         p.innerText = `${element.eye_color} ${element.height}`;
    //     }
    //     if (element.name === "Darth Vader") {
    //         element.films.forEach(film=>
    //             {

    //             })
    //     }

    // });
    // if (nextUrl) {
    //     getPeople(nextUrl);
    // }
}

function getPeople(url) {
    const request = new XMLHttpRequest();
    request.responseType = 'json'; //application/json
    request.addEventListener('readystatechange', () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            showResponseOnPage(request.response);
        }
    });
    //this is the same
    // request.onreadystatechange = () => {
    //     if (request.readyState === XMLHttpRequest.DONE) {
    //         showResponseOnPage(xhr.response);
    //     }
    // }
    request.open('GET', url);
    request.send();
}



function printDirector(response) {
    let films = response.results;
    let filmsList = document.getElementById('films-list');
    films.forEach(element => {
        if (element.director === "George Lucas") {
            let li = document.createElement('li');
            li.innerHTML = element.title;
            filmsList.append(li);
        }
    });

}

function getFilms(url) {
    const request = new XMLHttpRequest();
    request.responseType = 'json'; //application/json
    request.addEventListener('readystatechange', () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            printDirector(request.response);
        }
    });
    request.open('GET', url);
    request.send();
}


// function showMore() {
//     if (next) {
//         getPeople(next);
//     }
// }
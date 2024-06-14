const navigation = document.querySelector("#navigation")
const allgenres = document.querySelector(".allgenres")
const allMoviesListHTML = document.querySelector(".allMoviesListHTML")
const socialMedia = document.querySelector(".socialMedia")
let navHtml = "<ul>";
for (let i = 0; i < topNavigation.length; i++) {
    navHtml += `<li><a href="#">${topNavigation[i]}</a></li>`;
}
navigation.innerHTML = navHtml + "</ul>";

let genreHTML =""
for(let i = 0; i<allMovies.length; i++){
    genreHTML +=`<li><a href="javascript: loadGenres()">${allMovies[i].genres}</a>`
}

allgenres.innerHTML = genreHTML;

let loadGenres = function(g){
    let makeMyMovies = ""
    for(let i = 0; i < allMovies[g].movies.length;i++){
        makeMyMovies +=`<li><a href="javascript: loadGenres()">The Hunter Games <strong>104 mins</strong></a></li>`
    }
}
let socialHTML = "";
for (let i = 0; i < socialMedia.length; i++) {
    socialHTML += `<li><a href="${socialMedia[i].icon}">${socialMedia[i].title}</a></li>`;
}
socialMediaList.innerHTML = socialHTML;
"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
  
}

if  (personalMovieDB.count < 10) {
  console.log("Просмотрено мало фильмов")
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
  console.log("Вы классический зритель!")
} else if (personalMovieDB >= 30) { 
  console.log("Вы киноман!")
} else {
  console.log('ошибка!!')
}

console.log(personalMovieDB);

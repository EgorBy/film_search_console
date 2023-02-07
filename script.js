"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

const firstLastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
      firstGrade = +prompt('На сколько оцените его?', ''),
      secondLastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
      secondGrade = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstLastWatchedFilm] = firstGrade;
personalMovieDB.movies[secondLastWatchedFilm] = secondGrade;

console.log(personalMovieDB);
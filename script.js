"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');  
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = +prompt('На сколько оцените его?', '');
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if  (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель!")
    } else if (personalMovieDB.count >= 30) { 
      console.log("Вы киноман!")
    } else {
      console.log('ошибка!!')
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }  
  },
  toggleVisibleMyDB: function() {
    if ( personalMovieDB.privat) {
      personalMovieDB.privat = false;
      
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}?`)
  
      if ( genre != null && genre != '' && isNaN(genre) ) {
        personalMovieDB.genres[i - 1] = genre;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    })
  },
  getCoupeNumber: function(number) {
    if (number >= 1 && number <= 36 && Number.isInteger(number)) {
      const coupeNumber = Math.ceil(number/4)
      console.log(coupeNumber);
    } else if ( isNaN(number) && !Number.isInteger(number) && number < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места' 
    } else {
        return 'Таких мест в вагоне не существует'
    }
  }
}

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// personalMovieDB.getCoupeNumber(6);

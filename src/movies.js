// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let allDirectors = moviesArray.map ( (eachElement) => { return eachElement.director
})
return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //to filter films by Spielberg and drama  and count them
    let SpielbergArr = moviesArray.filter ((eachElem) => {
        if (eachElem.director === 'Steven Spielberg' && eachElem.genre.includes('Drama') ) {
            return true
        } else {
            return false
        }
      } )
    return SpielbergArr.length
      }
// console.log (howManyMovies(moviesArray))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) {
    return 0
}
let totalScore = moviesArray.reduce ( (acc, elem) => {
    if (elem.score !== undefined) {
        return acc + elem.score
  } else {
    return acc
 } 
}, 0 )
let avg = totalScore / moviesArray.length
let twoDigit = avg.toFixed (2)
let twoDigitNum = parseFloat (twoDigit)
return twoDigitNum
} 
console.log (scoresAverage (movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter ( (eachElem)  => {
    if (eachElem.genre.includes('Drama') ) {
        return true
    } else {
        return false
    }
  } ) 
  return scoresAverage (dramaMovies)
}
 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    let  cloneMoviesArray= JSON.parse (JSON.stringify (moviesArray) )

    cloneMoviesArray.sort( (a, b) => {
if (a.year > b.year) {
    return 1
} else if (a.year < b.year) {
    return -1
} else {
    if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0; }
} } )
return cloneMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

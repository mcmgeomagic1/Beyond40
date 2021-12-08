let rating5Stars = document.getElementById("js--5stars")
let maxAvaregeRatingRevews = 3218
let ratingReviews = [7,5,50,229,2928]
let breakdownRatingRow = document.querySelectorAll('.breakdown-rating__row span')
console.log(breakdownRatingRow)
function calcRatingPercentages (typeOfratingReviews, idElementName) {
	let percentages = (100 * typeOfratingReviews) / 3218
	document.getElementById(idElementName).value = percentages
}

for(let i = 4; i > 0; i--) {
		calcRatingPercentages(ratingReviews[i], 'js--bar'+[i] )
}

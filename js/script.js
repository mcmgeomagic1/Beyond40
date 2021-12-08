let rating5Stars = document.getElementById("js--5stars")
let maxAvaregeRatingRevews = 3218
let ratingReviews = [7,5,50,229,2928]
let breakdownRatingRow = document.querySelectorAll('.breakdown-rating__row')
let reviewsSection__breakdownRating = document.querySelector(".reviewsSection__breakdown-rating")

function calcRatingPercentages (typeOfratingReviews, idElementName) {
	let percentages = (100 * typeOfratingReviews) / 3218
	document.getElementById(idElementName).value = percentages
}

for(let i = 4; i > 0; i--) {
		calcRatingPercentages(ratingReviews[i], 'js--bar'+[i] )
}


reviewsSection__breakdownRating.addEventListener("mouseover", ()=> {
	reviewsSection__breakdownRating.style.opacity = 0.6
})

reviewsSection__breakdownRating.addEventListener("mouseout", ()=> {
	reviewsSection__breakdownRating.style.opacity = 1
})


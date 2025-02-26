function submitReview() {
    let reviewText = document.getElementById("reviewText").value;
    let rating = document.getElementById("rating").value;
    
    if (reviewText === "") {
        alert("Please write a review!");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ text: reviewText, stars: rating });

    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
}

function displayReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";

    reviews.forEach(review => {
        let p = document.createElement("p");
        p.innerHTML = `<strong>${"⭐".repeat(review.stars)}</strong> - ${review.text}`;
        reviewList.appendChild(p);
    });
}

document.addEventListener("DOMContentLoaded", displayReviews);

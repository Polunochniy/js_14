const cardsArray = Array.from(document.querySelectorAll(".card"));

const cardsOnPage = 5;
const step = Math.ceil(cardsArray.length / cardsOnPage);

const pagination = document.getElementById("pagination");
const pageButtons = pagination.querySelectorAll(".step");

for (let i = 0; i < pageButtons.length; i++) {
    const button = pageButtons[i];

    button.addEventListener('click', function() {
		const pageNum = +this.innerHTML;

        const start = (pageNum - 1) * cardsOnPage
        const end = start + cardsOnPage

        cardsArray.forEach(function(card) {
            card.style.display = "none";
        });

        const cardsToShow = cardsArray.slice(start, end);
        cardsToShow.forEach(function(card) {
            card.style.display = "block";
        });

        pageButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
}

pageButtons[0].click();

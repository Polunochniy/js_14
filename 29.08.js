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
        // const page = cardsArray.slice(start, end)

        cardsArray.forEach(function(card) {
            card.style.display = "none";
        });

        // Відображаємо картки з поточної сторінки
        const cardsToShow = cardsArray.slice(start, end);
        cardsToShow.forEach(function(card) {
            card.style.display = "block";
        });

        // Видаляємо клас "active" з усіх кнопок і додаємо його до поточної кнопки
        pageButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
}

pageButtons[0].click();

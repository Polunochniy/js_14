async function planets() {
  const url = 'https://swapi.dev/api/planets/';

  try {
      const response = await fetch(url);
      const data = await response.json();

      const cards = document.querySelectorAll(".card");

      if (cards.length > 0 && data.results && data.results.length > 0) {
          cards.forEach(async (card, index) => {
              if (data.results[index]) {
                  const planetName = data.results[index].name.toUpperCase();
                  const planetElement = card.querySelector(".planet");
                  const textElement = card.querySelector(".text");
                  const button = card.querySelector(".button");
                  const heroesContainer = card.querySelector(".heroes");

                  const films = data.results[index].films;
                  if (films && films.length > 0) {
                      const filmsInfo = [];

                      for (const filmUrl of films) {
                          const filmResponse = await fetch(filmUrl);
                          const filmData = await filmResponse.json();
                          filmsInfo.push(filmData.title);
                      }

                      textElement.innerHTML = filmsInfo.join('<br>');
                  }

                  planetElement.textContent = `${planetName}`;

                  button.addEventListener("click", async () => {
                      const heroesListElement = card.querySelector(".heroes-list");
                      const getHeroes = data.results[index].residents;
                      if (getHeroes && getHeroes.length > 0) {
                          const residentsInfo = [];

                          for (const residentsUrl of getHeroes) {
                              const heroesResponse = await fetch(residentsUrl);
                              const heroesData = await heroesResponse.json();
                              residentsInfo.push(heroesData.name);
                          }

                          heroesListElement.innerHTML = residentsInfo.join('<br>');
                      } else {
                          heroesListElement.textContent = "There are no heroes";
                      }

                      if (heroesContainer.classList.contains("hidden")) {
                          heroesContainer.classList.remove("hidden");
                      } else {
                          heroesContainer.classList.add("hidden");
                      }
                  });
              }
          });
      }
    } catch (error) {
        console.error("Помилка:", error);
    }
}

planets();
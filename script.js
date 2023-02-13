const data = JSON.parse(dataInfo);
data.forEach((element) => {
  const contentFlexBox = document.createElement("div");
  contentFlexBox.classList.add("content");
  contentFlexBox.classList.add("flex-box");

  const film = document.createElement("div");
  film.classList.add("film");

  const imgFilm = document.createElement("img");
  imgFilm.classList.add("imgFilm");
  imgFilm.src = element.poster;
  imgFilm.alt = "filmImg";

  const filmDescription = document.createElement("div");
  filmDescription.classList.add("description");

  const nameFilm = document.createElement("h2");
  nameFilm.textContent = element.Name;
  nameFilm.classList.add("NameFilm");
  contentFlexBox.appendChild(nameFilm);
  contentFlexBox.appendChild(film);
  film.appendChild(imgFilm);
  film.appendChild(filmDescription);

  const keyArray = Object.keys(element);
  const valueArray = Object.values(element);

  for (let index = 1; index < keyArray.length - 1; index++) {
    const elementP = document.createElement("p");
    const spanEl = document.createElement("span");
    const spanValue = document.createElement("span");
    spanEl.textContent = `${keyArray[index]}: `;
    spanEl.classList.add("span");
    spanValue.textContent = valueArray[index];

    elementP.appendChild(spanEl);
    elementP.appendChild(spanValue);
    filmDescription.appendChild(elementP);
  }

  document.querySelector("body").append(contentFlexBox);
});

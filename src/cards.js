import getCards from "./services/getCards.js";

const Cards = async () => {
  const cardsContainer = document.getElementById("root");
  const data = await getCards();
  // procesar la respuesta aquí
  const cards = data.data;

  // crear el contenido HTML para mostrar las cartas
  let cardsHTML = "";
  cards.forEach((card) => {
    cardsHTML += `
   <div class="root">
     <div class="card">
       <img src="${card.images.small}" alt="${card.name}" class="card__item">
     </div>
   </div>
 `;
  });

  // agregar el contenido HTML al elemento 'cards' en el DOM
  cardsContainer.innerHTML = cardsHTML;
};

export default Cards;

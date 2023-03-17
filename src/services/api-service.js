const cardsContainer = document.getElementById('root');

fetch('https://api.pokemontcg.io/v2/cards?pageSize=50')
  .then(response => response.json())
  .then(data => {
    // procesar la respuesta aquí
    const cards = data.data;

    // crear el contenido HTML para mostrar las cartas
    let cardsHTML = '';
    cards.forEach(card => {
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
  })
  .catch(error => console.error(error));

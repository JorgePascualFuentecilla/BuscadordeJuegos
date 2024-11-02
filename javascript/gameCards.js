// Contenedor donde se añadirán las tarjetas
const contenedorTarjetas = document.querySelector(".contenedorTarjetas");

// Función para obtener los datos de la API y crear las tarjetas
export function mostrarTarjetas(deals) {
    try {


        // Iterar sobre cada deal para crear la tarjeta
        deals.forEach(deal => {
            // Crear el contenedor de la tarjeta
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');

            // Crear la imagen de la tarjeta
            const imagen = document.createElement('img');
            imagen.src = deal.thumb; // Propiedad 'thumb' es la imagen en esta API
            imagen.classList.add('imagenTarjeta');
            tarjeta.appendChild(imagen);

            // Crear el contenedor de los precios
            const precioTarjeta = document.createElement('div');
            precioTarjeta.classList.add('precioTarjeta');

            // Título del juego
            const titulo = document.createElement('h1');
            titulo.textContent = deal.title;
            precioTarjeta.appendChild(titulo);

            // Precio de oferta, precio normal y ahorro
            const salePrice = document.createElement('a');
            salePrice.textContent = `Precio de oferta: $${deal.salePrice}`;
            precioTarjeta.appendChild(salePrice);

            const normalPrice = document.createElement('a');
            normalPrice.textContent = `Precio normal: $${deal.normalPrice}`;
            precioTarjeta.appendChild(normalPrice);

            const savings = document.createElement('a');
            savings.textContent = `Ahorro: ${deal.savings}%`;
            precioTarjeta.appendChild(savings);

            // Añadir el contenedor de precios a la tarjeta
            tarjeta.appendChild(precioTarjeta);

            // Información de Steam
            const steamInfo = document.createElement('div');
            steamInfo.classList.add('steamInformacion');

            const steamRating = document.createElement('a');
            steamRating.textContent = `Calificación en Steam: ${deal.steamRatingPercent}%`;
            steamInfo.appendChild(steamRating);

            // Añadir la información de Steam a la tarjeta
            tarjeta.appendChild(steamInfo);

            // Link a Metacritic
            const linkMetacritic = document.createElement('a');
            linkMetacritic.href = deal.metacriticLink || "#"; // Reemplaza con la propiedad real si la API la incluye
            linkMetacritic.textContent = `Puntuación Metacritic: ${deal.metacriticScore || 'No disponible'}`;
            tarjeta.appendChild(linkMetacritic);

            const dealID = deal.dealID; // Obtenemos el ID de cada juego
            const link = `https://www.cheapshark.com/redirect?dealID=${dealID}`;

            // Crear un elemento HTML de enlace
            const linkElement = document.createElement("a");
            linkElement.href = link;
            linkElement.textContent = "Comprar ahora";
            linkElement.target = "_blank"; // Opcional, abre en una nueva pestaña
            tarjeta.appendChild(linkElement);


            // Añadir la tarjeta completa al contenedor principal
            contenedorTarjetas.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
}

// Llamar a la función para mostrar las tarjetas


// URL base de la API de CheapShark para acceder a sus endpoints.
const BASE_URL = "https://www.cheapshark.com/";


/**
 *realiza una petición a la API para obtener datos.
 * @param {*} url de la peticion
 * @returns json con los resultados
 */
async function getData(url) {

  try {
    const response = await fetch(url);
    return await response.json();

  } catch (error) {
    console.error('Error:', error);
  }
};

/**
 * Función exportada para obtener ofertas de videojuegos con un precio máximo especificado.
 * @param {*} Introduce el precio que el usuario solicita en el formulario.
 * @returns 
 */
export async function assignByPrice(price) {

  const deal = await getData(BASE_URL + 'api/1.0/deals?onSale=true&upperPrice=' + price);
  return deal;
}
// Función principal que obtiene y muestra en la consola la lista de tiendas disponibles en CheapShark.
async function Main() {
  const tiendas = await getData(BASE_URL + 'api/1.0/stores');
  console.log(tiendas)

}

Main();
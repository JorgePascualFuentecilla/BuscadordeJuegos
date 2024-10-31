const BASE_URL = "https://www.cheapshark.com/";

async function getData(url){

    try {
        const response = await fetch(url);
        return await response.json();

      } catch (error) {
        console.error('Error:', error);
      }
};

export async function assignByPrice (price){

    const deal = await getData (BASE_URL+'api/1.0/deals?onSale=true&upperPrice='+ price);
    return deal;
}

async function Main() {
  const tiendas = await getData(BASE_URL+'api/1.0/stores');
  console.log(tiendas)
  
}

Main();
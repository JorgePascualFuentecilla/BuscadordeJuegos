async function getData(url){

    try {
        const response = await fetch(url);
        return await response.json();

      } catch (error) {
        console.error('Error:', error);
      }
};

async function Main() {
  const tiendas = await getData('https://www.cheapshark.com/api/1.0/stores');
  console.log(tiendas)
  const deal = await getData ('https://www.cheapshark.com/api/1.0/deals?upperPrice=15');
console.log(deal)
}

Main();         

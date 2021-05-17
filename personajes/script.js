async function personajesStarWars()
{
  let response = await fetch(`https://swapi.dev/api/people/`);
  let data = await response.json()
  let results = data.results
  /* console.log(titleStarWars)
  console.log(dateStarWars) */
  return results;
}
personajesStarWars()
  .then(data => {
    let nameStarWars = data.map (x =>x.name)
    let numberStarWars = data.map (x =>x.films)
    let numero =numberStarWars.map(x =>x.length)
    console.log(numero)
    paintMovies(nameStarWars, numero)
      console.log(data)
    })
  .catch(error => console.log("Hubo un error"+error));
  let paintMovies = (titles, numero) => {
    new Chartist.Line('.ct-chart', {
    labels: titles,
    series: [numero],
  }, {
    low: 0,
    showArea: true,
    axisY: {
      onlyInteger: true,
    }
  });
}
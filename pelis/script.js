

async function pelisStarWars() 
{
  let response = await fetch(`https://swapi.dev/api/films/`);
  let data = await response.json()

  let results = data.results
  
  /* console.log(titleStarWars)
  console.log(dateStarWars) */
  return results;
  
}

pelisStarWars()
  .then(data => {
    let titleStarWars = data.map (x =>x.title)
    let dateStarWars = data.map (x =>x.release_date)
    let year = dateStarWars.map(x =>x.slice (0,-6))
    console.log(year)
    paintMovies(titleStarWars, year)
      console.log(data)
  
    })
  .catch(error => console.log("Hubo un error"+error));
  

  let paintMovies = (titles, year) => {
    new Chartist.Line('.ct-chart', {
    labels: titles,
    series: [year],
    
  }, {
    low: 1977,
    showArea: true,
    axisY: {
      onlyInteger: true,
      
    }
  });
}
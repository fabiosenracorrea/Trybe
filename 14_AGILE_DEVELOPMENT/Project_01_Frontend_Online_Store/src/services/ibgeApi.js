export async function getStates() {
  const data = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const states = await data.json();

  states.sort((a, b) => (a.sigla).localeCompare(b.sigla));

  return states;
}

export async function getCities(uf) {
  const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  const cities = await data.json();

  cities.sort((a, b) => (a.nome).localeCompare(b.nome));

  return cities;
}

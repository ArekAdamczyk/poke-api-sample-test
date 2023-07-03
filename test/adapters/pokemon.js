'use strict';

async function getPokemonList(queryLimit = 20) {
  return request(`${process.env.NODE_ENV}/api/v2/pokemon/`)
      .get('/')
      .query({limit: queryLimit});
}

async function getPokemon(id) {
  return request(`${process.env.NODE_ENV}/api/v2/pokemon/${id}/`)
      .get('/');
}

module.exports = {
  getPokemonList,
  getPokemon,
};

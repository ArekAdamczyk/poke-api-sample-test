'use strict';

const pokemonRequests = require('test/adapters/pokemon');
const {pokemon: pokemonSchema} = require('test/schema/getPokemonSchema');

describe('GET Pokemon', async function() {
  it('list Pokemon', async function() {
    const {body} = await pokemonRequests.getPokemonList();

    expect(body.results.length).eql(20);
  });

  it('get Pokemon by name and validate schema', async function() {
    const {body: {results: pokemonList}} =
      await pokemonRequests.getPokemonList(3);

    expect(pokemonList.length).eql(3);

    for (const pokemon of pokemonList) {
      const {body} = await pokemonRequests.getPokemon(pokemon.name);

      expect(body.name).eql(pokemon.name);
      expect(body).to.be.jsonSchema(pokemonSchema);
    }
  });

  it('get Pokemon by invalid name', async function() {
    const res = await pokemonRequests.getPokemon('john');

    expect(res.status).eql(404);
    expect(res.error).includes({
      message: 'cannot GET /api/v2/pokemon/john/ (404)',
    });
  });
});

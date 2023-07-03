'use strict'

const reference = {
    type: 'object',
    required: ['name', 'url'],
    properties: {
        name: { type: 'string' },
        url: { type: 'string' },
    },
};

const abilities = {
    title: 'abilities schema',
    type: 'object',
    required: ['ability', 'is_hidden', 'slot'],
    properties: {
        ability: {
            ...reference,
        },
        is_hidden: { type: 'boolean' },
        slot: { type: 'integer' },
    },
};

const forms = {
    title: 'forms schema',
    ...reference,
};

const gameIndeces = {
    title: 'game indices schema',
    type: 'object',
    required: ['game_index', 'version' ],
    properties: {
        game_index: { type: 'integer' },
        version: reference
    },
};

const heldItems = {
    title: 'held items schema',
    type: 'object',
    required: ['item', 'version_details'],
    properties: {
        item: reference,
        version_details: {
            type: 'object',
            required: ['rarity', 'varsion'],
            properties: {
                rarity: { type: 'integer' },
                version: reference,
            }
        }
        
    },
};

const versionGroupDetails = {
    title: 'version group details schema',
    type: 'object',
    required: ['level_learned_at', 'move_learn_method', 'version_group'],
    properties: {
        level_learned_at: { type: 'integer' },
        move_learn_method: reference,
        version_group: reference,
    },
};

const moves = {
    title: 'moves schema',
    type: 'object',
    required: ['move', 'version_group_details'],
    properties: {
        move: reference,
        version_group_details: {
            type: 'array',
            items: versionGroupDetails,
        },
    },
};

const species = {
    title: 'species schema',
    type: 'object',
    required: ['name', 'url'],
    properties: {
        name: { type: 'string' },
        url: { type: 'string' },
    },
};

const stats = {
    title: 'stats schema',
    type: 'object',
    required: ['base_stat', 'effort', 'stat'],
    properties: {        
        base_stat: { type: 'integer' },
        effort:  { type: 'integer' },
        stat: reference,
    },
};

const types = {
    title: 'types schema',
    type: 'object',
    required: ['slot', 'type'],
    properties: {
        slot: { type: 'integer' },
        type: reference,
    },
};

const pastTypes = {
    title: 'past types schema',
    type: 'object',
    required: ['generation', 'types'],
    properties: {
        generation: reference,
        types: types,
    },
};

const pokemon = {
    title: 'pokemon schema',
    type: 'object',
    required: ['abilities', 'base_experience', 'forms', 'game_indices', 'height', 'held_items', 'id', 'is_default', 'location_area_encounters', 'moves', 'name', 'order', 'past_types', 'species', 'sprites', 'stats', 'types', 'weight'],
    properties: {
        abilities: { type: 'array', items: abilities },
        base_experience: { type: 'integer' },
        forms: { type: 'array', items: forms },
        game_indices: { type: 'array', items: gameIndeces },
        height: { type: 'integer' },
        held_items: { type: 'array', items: heldItems },
        id: { type: 'integer' },
        is_default: { type: 'boolean'},
        location_area_encounters: { type: 'string' },
        moves: { type: 'array', items: moves },
        name: { type: 'string' },
        order: { type: 'integer' },
        past_types: { type: 'array', items: pastTypes },
        species,
        sprites: { type: 'object' },
        stats: { type: 'array', items: stats },
        types: { type: 'array', items: types },
        weight: { type: 'integer' },
    },
};

module.exports = {
    pokemon,
}

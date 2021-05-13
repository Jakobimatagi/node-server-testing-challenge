exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('characters').del()
      .then(function () {
        // Inserts seed entries
        return knex('characters').insert([
          {name: 'sokka', ability: 'boomarang'},
          {name: 'aang', ability: 'air-bending'},
          {name: 'zuko', ability: 'fire-bending'}
        ]);
      });
  };
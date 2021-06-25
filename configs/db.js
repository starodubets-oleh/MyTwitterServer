const knex = require('knex');
const knexFile = require('./knexfile');

const db = knex(knexFile.development);

const bookshelf = require('bookshelf')(db)


module.exports = {db, bookshelf};

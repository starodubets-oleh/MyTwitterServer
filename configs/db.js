const knex = require('knex');
const knexFile = require('./knexfile');

const db = knex( knexFile[process.env.NODE_INV || 'development']);

const bookshelf = require('bookshelf')(db);

module.exports = {db, bookshelf};

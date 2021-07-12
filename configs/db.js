const knex = require('knex');
const knexFile = require('./knexfile');

const db = knex(knexFile);

const bookshelf = require('bookshelf')(db);
const cursor = require('bookshelf-cursor-pagination').default;
const virtuals = require('bookshelf-virtuals-plugin');

bookshelf.plugin([ virtuals, cursor ]);

module.exports = { db, bookshelf };

const fetch = require('node-fetch');
const path = require('path');

exports.createPages = async ({ actions }) => {
  const charTemplate = path.resolve(`${__dirname}/src/templates/Character.js`)
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  data.results.forEach(char => {
    actions.createPage({
      path: `/character/${char.id}`,
      component: charTemplate,
      context: char
    });
  });
}
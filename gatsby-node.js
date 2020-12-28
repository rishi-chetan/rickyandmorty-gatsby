const fetch = require('node-fetch');
const path = require('path');

exports.createPages = async ({ actions }) => {
    
    const charTemplate = path.resolve(`${__dirname}/src/templates/Character.js`)

    await fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(res => {
            res.results.forEach(char => {
            actions.createPage ({
                path:`/character/${char.id}`,
                component: charTemplate,
                context: char
            });
        });
    });
    
}
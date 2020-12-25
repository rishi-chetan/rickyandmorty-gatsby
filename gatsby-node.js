const { create } = require('domain');
const path = require('path');

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const charTemplate = path.resolve(`${__dirname}/src/templates/character.js`)
    // const charTemplate = path.resolve("./src/templates/character.js")

    for (i=1; i<672; i++) {

        createPage ({
            path:`/character/${i}`,
            component: charTemplate,
            context: {charId: i}
        })
    }
}
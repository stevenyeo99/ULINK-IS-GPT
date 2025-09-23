const Assistant = require('./assistants.mongo');

async function getListOfAssistant() {
    return await Assistant.find();
};

module.exports = {
    getListOfAssistant
}
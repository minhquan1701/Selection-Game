const axios = require('axios');
require('dotenv').config();
const { CREATE_USER} = require('./userQuery');
const sendQueries = require('./sendQueries');
const formattedResponse = require('./formattedResponse');
exports.handler = async (event) => {
    const  { userName, email, campus } = JSON.parse(event.body);
    const variables = { userName, email, campus };
    try {
        const { createUsers: createdUser } = await sendQueries(
            CREATE_USER,
            variables
        );

        return formattedResponse(200, createdUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
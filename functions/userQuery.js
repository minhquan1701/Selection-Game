const CREATE_USER = `
    mutation($userName: String!, $email: String!, $campus: String! ) {
        createUsers( data: { userName:$userName, email: $email, campus: $campus}) {
            userName
            email
            campus
        }
    }
`;

module.exports = {
    CREATE_USER,
    
};
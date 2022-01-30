const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    "Query for retrieving all the stadiums in the NFL"
    getStadiums:[Stadium!]
}

"A stadium"
type Stadium {
    StadiumID: Int!
    Name: String!
    City: String!
    State: String!
    Capacity: Int!
    PlayingSurface: String!
}
`;

module.exports = typeDefs;
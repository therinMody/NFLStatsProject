const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    "Query for retrieving all the stadiums in the NFL"
    getStadiums:[Stadium!]!

    "Query for retrieving all the teams in the NFL"
    getTeams:[Team!]!
}

"A stadium"
type Stadium {
    StadiumID: Int!
    Name: String!
    City: String!
    State: String
    Capacity: Int!
    PlayingSurface: String
}

"A Team"
type Team {
    Key: String!
    City: String!
    Name: String!
    Division: String!
    Conference: String!
    WikipediaLogoUrl: String!
    PrimaryColor: String!
    SecondaryColor: String!
}
`;

module.exports = typeDefs;
const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    "Query for retrieving all the stadiums in the NFL"
    getStadiums:[Stadium!]!

    "Query for retrieving all the teams in the NFL"
    getTeams:[Team!]!

    "Query for getting list of players for one team and game"
    getPlayerStats(teamKey: String!, week: Int!): [Player!]!
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

"A player"
type Player {
    Name: String!
    Position: String!
    PositionCategory: String!
}
`;

module.exports = typeDefs;
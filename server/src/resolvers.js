const resolvers = {
    Query: {
        getStadiums: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getStadiums();
        },

        getTeams: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTeams();
        },

        getPlayerStats: (_, {teamKey, week}, {dataSources}) => {
            return dataSources.trackAPI.getPlayerStats(teamKey, week);
        }
    }
};

module.exports = resolvers;

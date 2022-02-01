const resolvers = {
    Query: {
        getStadiums: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getStadiums();
        },

        getTeams: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTeams();
        }
    }
};

module.exports = resolvers;

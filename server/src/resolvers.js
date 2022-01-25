const resolvers = {
    Query: {
        getStadiums: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getStadiums();
        }
    }

};

module.export = resolvers;

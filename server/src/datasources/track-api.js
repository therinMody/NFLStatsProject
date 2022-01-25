const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        //the NFL stats are hosted on this server
        this.baseURL = ' https://api.sportsdata.io/v3/nfl/stats/json/';
    }

    //returns a list of stadiums
    getStadiums() {
        return this.get('Stadiums?'+ process.env.SPORTS_DATA_API_KEY);
    }
}

module.exports = TrackAPI;
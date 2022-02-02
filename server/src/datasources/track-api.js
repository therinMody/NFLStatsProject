const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        //the NFL stats are hosted on this server
        this.baseURL = 'https://api.sportsdata.io/v3/nfl/stats/json/';
    }

    //returns a list of stadiums
    getStadiums() {
        return this.get("Stadiums?key="+process.env.REACT_APP_SPORTS_DATA_API_KEY);
    }

    //returns a list of teams
    getTeams() {
        return this.get("Teams?key="+process.env.REACT_APP_SPORTS_DATA_API_KEY);
    }
}

module.exports = TrackAPI;
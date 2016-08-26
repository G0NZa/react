var axios = require('axios');

const OPEN_WEATHER_MAP_URL = '//api.openweathermap.org/data/2.5/weather?appid=0622eea0f3e781c4ef4334d2de3c80ce&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod &&res.data.message) {
                throw newError(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}

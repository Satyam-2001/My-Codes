const request = require('postman-request')

const forecast = (location, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=fd48d967a7c63e87a32fe83ca87b4e10&query=${location}`;

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback({error : "Unable to connect to weather service"})
        }
        else if (body.error) {
            callback({error : "Unable to find location.Try another search"})
        }
        else {
            const area = body.request.query
            const {temperature , feelslike} = body.current
            const forecastData = {temperature , feelslike , area}
            callback(forecastData)
        }
    })
}

module.exports = forecast;
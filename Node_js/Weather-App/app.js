import { forecast } from './utils/forecast.js';

forecast('New York', (error, data) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
})
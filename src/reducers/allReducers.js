import {combineReducers} from 'redux';
import Check from './weatherInfo';
import weatherInfo from './apiInfo';
import city from "./city";


const allReducers = combineReducers({
    Check: Check,
    weatherInfo: weatherInfo,
    city: city
});

export default allReducers;
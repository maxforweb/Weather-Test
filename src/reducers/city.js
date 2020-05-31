const favorites = [];
const INITIAL_STATE = {
    weather: '',
    cityName: '',
    country: '',
    temp: '',
    feelsLike: '',
    favorites: []
}

const city = ( state = INITIAL_STATE, action) => {

    switch( action.type ) {
        case("CHOSEN"):
            let data = action.payload;

            if (favorites.indexOf( action.payload.name ) == -1){
                favorites.push(action.payload.name);
            } else if ( favorites.length == 0 ) {
                favorites.push(action.payload.name);
            }
            
           

            let newState = Object.assign({}, state, {
                weather: data.weather[0].description,
                cityName: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                feelsLike: data.main.feels_like,
                favorites: favorites
            });
            return  newState;
        
        
        case("DELETE"):
            let index = favorites.indexOf(action.payload);

            favorites.splice(index, 1);

            let newFavorites = Object.assign({}, state, {
                favorites: favorites
            });
            
            return newFavorites;

        default:
            return  state;
    }
}


export default city;
const cities = ["Минск", "Одесса", "Гомель", "Киев", "Москва", "Алматы", "Николаев", "Лондон", "Вашингтон", "Львов", "Париж", "Милан"]

const INITIAL_STATE = {
    searchText: '',
    cities: []
}

const weatherInfo = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case("SEARCH_CITY"):
            let newState;

            if (action.payload == '') {
                state.searchText = '';
                state.cities = cities;

                newState = Object.assign({}, state, {
                    cities: state.cities,
                    searchText: state.searchText
                })
                return newState;

            }else{
                state.searchText = action.payload;
                state.cities = cities;
                let newCities = [];
                let reg = RegExp( '^' + state.searchText, 'im' )
                
                state.cities.map( city => {
                    if (reg.test(city)){
                        
                        newCities.push(city);
                        return newCities;
                    }
                })

                state.cities = newCities;
            }
            newState = Object.assign({}, state, {
                cities: state.cities,
                searchText: state.searchText
            })
            return newState;
        
        case("FOCUS"):
        let newCities;
        
            if ( state.cities.length > 0 ){
                state.cities = [];
                
            }else if ( action.payload == '' && state.cities.length == 0 ) {
                state.cities = cities;
            }
            
            newCities = Object.assign({}, state, {
                cities: state.cities
            })

            return newCities;



        default:
            return state;
    }
}

export default weatherInfo;
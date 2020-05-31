import React from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchInput} from '../actions/searchInput';
import {focus} from '../actions/focus';
import {chosenCity} from '../actions/chosenCity';
import {deleteFavorite} from '../actions/delete';


class SearchInfo extends React.Component{
    constructor(props) {
        super(props)

        this.search = this.search.bind(this);
        this.focus = this.focus.bind(this);
        this.choose = this.choose.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
    }

    deleteFavorite (e) {
        this.props.deleteFavorite(e.target.parentNode.children[0].textContent)
    }

    search(e) {
        let value = e.target.value;
        this.props.searchInput(value); 
    }
    focus(e) {
        this.props.focus(e.target.value);
    }

    choose(e){
        let apiKey= "f9abcb51fb97b51038d0b2ec23d411d6";
        
        axios
        .get(
        `https:\\api.openweathermap.org/data/2.5/weather?q=${e.target.textContent}&lang=ru&units=metric&appid=${apiKey}`
        )
        .then(res => {
            this.props.chosenCity(res.data);
        })
        .catch(err => console.log(err));
    }
    
    render(){
        return(
            <div className="fromContainer">
                <div className="form">
                    <input 
                    placeholder='Введите название города...'
                        value={this.props.weatherInfo.searchText}
                        onChange={this.search}
                        onFocus={this.focus}
                        onBlur={this.focus}
                    />
                    <button></button>
                </div>
                <div className="results">
                    <ul>
                        { this.props.favorites.favorites.map( (city,key) => {
                            return(
                                <li key={key} className={'favorites'} ><p onMouseDown={this.choose}>{city}</p> 
                                <span className="delete" onMouseDown={ this.deleteFavorite }></span>
                                </li>
                            )
                        } )}
                        <span className="border"></span>
                        {this.props.weatherInfo.cities.map( ( city, key ) => {
                            return (
                                <li key={key}>
                                    <p  onMouseDown={this.choose}>{city}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return{
        weatherInfo: state.weatherInfo,
        favorites: state.city
    }
}

function  mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {searchInput: searchInput, focus: focus, chosenCity: chosenCity, deleteFavorite: deleteFavorite}, 
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInfo);
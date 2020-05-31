import React from "react";
import {connect} from 'react-redux';

class Weather extends React.Component{
   
    render() {
        if( this.props.cityInfo.weather == ''){
            return (<div className='infoContainer'>Выберите город для отображения информации </div>)
        }
        else {
            return(
                <div className='infoContainer'>
                    <p> Город: {this.props.cityInfo.cityName}</p>
                    <p> Срана: {this.props.cityInfo.country} </p>
                    <p> Погода: {this.props.cityInfo.weather} </p>
                    <p> Температура воздуха: {this.props.cityInfo.temp} &deg;C </p>
                    <p> Ощущается как: {this.props.cityInfo.feelsLike} &deg;C </p>
                </div>
            )
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const city = this.props.cityInfo !== nextProps.cityInfo;

        return city;
    }
}

function mapStateToProps(state) {
    return{
     cityInfo: state.city  
    }
}

export default connect( mapStateToProps )( Weather );
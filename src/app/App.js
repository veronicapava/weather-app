import React, { Component } from "react";
import WeatherInfo from "../components/WeatherInfo";
import WeatherForm from "../components/WeatherForm";
import { WEATHER_KEY } from "./keys"

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        temperature_max: '',
        temperature_min: '',
        city: '',
        country: '',
        error: null
    }

    getWeather = async e => {
        e.preventDefault();
        const { city, country } = e.target.elements
        const cityValue = city.value
        const countryValue = country.value


        if (cityValue && countryValue) {

            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`

            const response = await fetch(API_URL);
            const data = await response.json()
            console.log(data)

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                temperature_max: data.main.temp_max,
                temperature_min: data.main.temp_min,
                city: data.name,
                country: data.sys.country,
                error: null
            })
        } else {
            this.setState({ error: 'Please enter a city and a country' })
        }


    }

    render() {
        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.getWeather} />
                        <WeatherInfo {...this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
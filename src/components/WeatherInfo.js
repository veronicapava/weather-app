import React from "react";

const WeatherInfo = props => {

    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            <br />
            {
                props.temperature &&
                <div>
                    <div className="card card-body">
                        <p>Location: {props.city}, {props.country}</p>
                        <p>Temperature: {props.temperature}°C</p>
                        <p>Description: {props.description}</p>
                        <p>Temperature Max: {props.temperature_max}°C</p>
                        <p>Temperature Min: {props.temperature_min}°C</p>
                        <p>Humidity: {props.humidity}%</p>
                    </div>
                </div>
            }

        </div>
    )

}

export default WeatherInfo;
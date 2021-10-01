import React from "react";

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <h1 className="text-info">Weather App</h1>
            <div className="form-group p-2">
                <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus />
            </div>
            <div className="form-group p-2">
                <input type="text" name="country" placeholder="Your country name" className="form-control" />
            </div>
            <div className="d-grid">
                <button className="btn btn-outline-dark">
                    Get Weather
                </button>
            </div>

        </form>
    </div>
)

export default WeatherForm;
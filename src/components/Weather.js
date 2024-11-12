import { useState, useEffect } from "react"
import moment from "moment";
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBTypography,
} from "mdb-react-ui-kit";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const Weather = () => {
    const [ weather , setWeather ] = useState({})
    const [ time , setTime ] = useState('')

    useEffect(() => {
        axios.get(
            'http://lexx696.fvds.ru/api/weather/today?location=moscow', 
            { 
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            }
        ).then((result) => {
            setWeather(result.data)
            setTime(moment(new Date()).format('HH:mm'))
        }).catch(() => {
            console.log('провал')
        })
    }, [])

    return (     
        <MDBCard style={{ color: "rgba(255,255,255,0.65)", borderRadius: "35px", background: "#3b3a62"}}>
            <MDBCardBody className="p-4">
                <div className="d-flex">
                    <MDBTypography tag="h6" className="flex-grow-1" style={{ textAlign: 'left' }}>
                        Москва
                    </MDBTypography>
                    <MDBTypography tag="h6">{time}</MDBTypography>
                </div>
                <div className="d-flex flex-column text-center mt-1 mb-2">
                    <MDBTypography
                        tag="h6"
                        className="display-6 mb-0 font-weight-bold"
                        style={{ color: "rgba(255,255,255,1)" }}
                     >
                        {" "}
                        {weather.temp}°C{" "}
                    </MDBTypography>
                </div>
                <div className="d-flex" style={{justifyContent: 'space-between'}}>
                    <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                        <div style={{ textAlign: 'left' }}>
                            <span className="ms-1" style={{whiteSpace: "nowrap"}}>{weather.windMS} м/с</span>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <span className="ms-1" style={{whiteSpace: "nowrap"}}>{weather.humidity}% </span>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                        </div>
                    </div>
                    <div>
                        <img
                            src={weather.icon}
                            alt=''
                            width="60px"
                        />
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Weather
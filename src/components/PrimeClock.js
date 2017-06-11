import React from 'react';
import {convertTimezoneToReadable} from '../util/TimeUtil';
import Moment from 'react-moment';
import moment from 'moment';
import '../style/PrimeClock.css';

class PrimeClock extends React.Component {

    constructor(props){
        super(props);
        this.timezone = this.props.timezone;
        let currentTime = new moment().tz(this.timezone);
        this.state = {
            moment_date : currentTime,
            timezone_readable : convertTimezoneToReadable(this.timezone),
            timestamp : currentTime.unix()
        };

        setInterval(() => {
            let currentTime = new moment().tz(this.timezone);
            this.setState({moment_date : currentTime});
        }, 1000);
    }

    render(){
        return (<div className="widget">
            <div className="widget-top-section">
                <h1>{this.state.timezone_readable}</h1>
            </div>
            <div className="timer">
                <div className="timer-session">
                    <div className="timer-session-log">
                        <p className="subtitle alpha"><Moment format="dddd, DD MMM YYYY">{this.state.moment_date}</Moment></p>
                    </div>
                </div>
                <div className="timer-tick">
                    <div className="timer-digits">
                        <div className="timer-digit-group">
                            <div className="timer-digit">{this.state.moment_date.format('HH')}</div>
                            <div className="timer-colon">:</div>
                            <p className="timer-unit alpha">HOURS</p>
                        </div>
                        <div className="timer-digit-group">
                            <div className="timer-digit">{this.state.moment_date.format('mm')}</div>
                            <div className="timer-colon">:</div>
                            <p className="timer-unit alpha">MINUTES</p>
                        </div>
                        <div className="timer-digit-group">
                            <div className="timer-digit">{this.state.moment_date.format('ss')}</div>
                            <p className="timer-unit alpha">SECONDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

}

export default PrimeClock;



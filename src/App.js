import React from 'react';
import PrimeClock from './components/PrimeClock';
import './App.css'
class App extends React.Component {

    render() {
        return (
            <div>
                <PrimeClock timezone="America/Thule"/>
            </div>
        );
    };
}

export default App;

import React from 'react';
import PrimeClock from './components/PrimeClock';
import SideMenu from './components/SideMenu';
import './App.css'
import moment from 'moment';
class App extends React.Component {

    render() {
        return (
            <div id="outer-container">
                <SideMenu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
                <main id="page-wrap">
                    <PrimeClock timezone={moment.tz.guess()}/>
                </main>
            </div>
        );
    };
}

export default App;

// let's go!
import React from 'react';
import { render } from 'react-dom';
import WheelApp from './components/WheelApp'

class App extends React.Component{
    render(){
        return (
            <div>
            <WheelApp />
            </div>
            );
    }
}
render(<App/>, document.querySelector('#main'));



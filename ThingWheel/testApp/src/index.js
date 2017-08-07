// let's go!
import React from 'react';
import { render } from 'react-dom';
import Wheel from './components/Wheel'
import Bubble from './components/Bubble'

class WheelApp extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                Wheels : this.GetTestWheels(),
            }
        }
        this.GetTestWheels = this.GetTestWheels.bind(this)
    }

    GetTestWheels(){
        return [{
            id : 1,
        },
        {
            id : 2,
        }];
    }

    render(){
        return (
            <div>
            {this.state.data.Wheels.map((whl) => {  return <Wheel {...this.state} id={whl.id}/>})}
            </div>
            )
            
    }
}
render(<WheelApp/>, document.querySelector('#main'));



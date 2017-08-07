import React from 'react';
import $ from 'jquery'; 

class Bubble extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                ismax: false,
            }
        }
        this.maximizeBubble = this.maximizeBubble.bind(this);
    }
    maximizeBubble(event) {
        if (this.state.data.ismax) {
            $(event.target).attr('class', 'bubble notmax')
            this.setState({
                data:{
                    ismax: false
                }
            })
        } else {
            $(event.target).attr('class', 'bubble max')
            this.setState({
                data:{
                    ismax: true
                }
            })
        }
    }

    render(){
        return (
        <div className="bubble notmax" onClick={this.maximizeBubble} style={this.props.style} >
            <p>{this.props.text}</p>
        </div>
        )
        }
        }

export default Bubble;
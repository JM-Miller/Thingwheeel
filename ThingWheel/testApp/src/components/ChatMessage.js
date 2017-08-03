import React from 'react';
import $ from 'jquery'; 

class ChatMessage extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                ismax: false,
                wheelSize: 200,
            }
        }
        this.maximizeBubble = this.maximizeBubble.bind(this);
        this.getRadialPos = this.getRadialPos.bind(this);
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

    getRadialPos(event){
            alert()
        var radius = this.state.data.wheelSize; // radius of the circle
        var fields = $('.bubble'),
            container = $('.chat'),
            width = container.width(),
            height = container.height(),
            angle = 0,
            step = (2*Math.PI) / fields.length;
        fields.each(function() {
            var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2),
                y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
            $(event.target).css({
                left: x + 'px',
                top: y + 'px'
            });
            angle += step;
        });
    }

    render(){
        return (
        <div className="bubble notmax" onClick={this.maximizeBubble} onLoad={this.getRadialPos}>
            <p>{this.props.text}</p>
        </div>
        )
        }
        }

export default ChatMessage;
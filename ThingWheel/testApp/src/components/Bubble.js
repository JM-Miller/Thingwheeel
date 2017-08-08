import React from 'react';
import $ from 'jquery'; 

class Bubble extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                ismax: false,
            }
        }
        this.maximizeBubble = this.maximizeBubble.bind(this);
        this.getStyleClass = this.getStyleClass.bind(this);
    }
    maximizeBubble(event) {
        if (this.state.data.ismax) {
            $(event.target).attr('class', this.getStyleClass())
            this.setState({
                data:{
                    ismax: false
                }
            })
        } else {
            $(event.target).attr('class', this.getStyleClass())
            this.setState({
                data:{
                    ismax: true
                }
            })
        }
    }

    getStyleClass(){
        if(this.state.data.ismax){
            return "bubble max " + this.props.colorclass;
        }
        else{
            return "bubble notmax " + this.props.colorclass;
        }
    }

    render(){
        return (
        <div className={this.getStyleClass()} onClick={this.maximizeBubble} style={this.props.style} >
            <p>{this.props.text}</p>
        </div>
        )
        }
        }

export default Bubble;
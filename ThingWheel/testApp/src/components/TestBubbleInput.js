import React from 'react';

class TestBubbleInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.AddBubble = this.AddBubble.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
        event.preventDefault();
    }
    AddBubble(){
        this.props.AddBubble(this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your message here..." onChange={this.handleChange} value={this.state.value}/><input type="submit" value="Enter" onClick={this.AddBubble}/>
            </div>
            )
    }
                }

                export default TestBubbleInput;
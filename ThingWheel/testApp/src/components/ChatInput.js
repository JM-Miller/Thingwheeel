import React from 'react';

class ChatInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
        event.preventDefault();
    }
    addComment(){
        this.props.addComment(this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your message here..." onChange={this.handleChange} value={this.state.value}/><input type="submit" value="Enter" onClick={this.addComment}/>
            </div>
            )
    }
                }

                export default ChatInput;
import React from 'react';
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

class Chat extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                Messages : this.GetTestMessages()
            }
        }
        this.GetTestMessages.bind(this)
        this.AddComment = this.AddComment.bind(this);
    }
    GetTestMessages(){
        return [{
            id : 1,
            text : 'TestMsg1',
            username : 'TestUser1',
            ismax : 'false',
            date : '1/1/2017'
        },{

            id : 2,
            text : 'TestMsg2',
            username : 'TestUser2',
            ismax : 'false',
            date : '1/2/2017'
        },{
            id : 3,
            text : 'TestMsg3',
            username : 'TestUser1',
            ismax : 'false',
            date : '1/4/2017'
        },
        ]
    }
    AddComment(value){
        var Messages = this.state.data.Messages.slice();
        Messages.push(
        {
            id : 3,
            text : value,
            username : 'TestCurrentUser',
            date : Date()
        });
        this.setState({
            data:{
                Messages : Messages
            }});

        event.preventDefault();
    }


    render(){
        return (
        <div className="chat">
            {this.state.data.Messages.map(function(msg){  return <div><ChatMessage text={msg.text} username={msg.username} date={msg.date}/></div>})}
            <ChatInput commentText="" {...this.state}  addComment={this.AddComment}/>
        </div>
        );
    }
}

export default Chat;
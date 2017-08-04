import React from 'react';
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

class Chat extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                Messages : this.GetTestMessages(),
                wheelSize: 400,
                bubbleSize: 200,
            }
        }
        this.GetTestMessages = this.GetTestMessages.bind(this)
        this.AddComment = this.AddComment.bind(this);
        this.getRadialPosStyle = this.getRadialPosStyle.bind(this);
    }
    

    getRadialPosStyle(i, count){
        var step = (2*Math.PI) / this.state.data.Messages.length;
        var angle = step * i;  
        var x = Math.round(document.body.clientWidth/2 + (this.state.data.wheelSize / 2) * Math.cos(angle) - this.state.data.bubbleSize/2);
        var y = Math.round(document.body.clientHeight/2 + (this.state.data.wheelSize / 2) * Math.sin(angle) - this.state.data.bubbleSize/2);
        return {left: x + 'px', top: y + 'px'};
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
            id : Messages.length + 1,
            text : value,
            username : 'TestCurrentUser',
            date : Date()
        });
        this.setState({
            data:{
                wheelSize: 200,
                bubbleSize: 200,
                Messages : Messages
            }});

        event.preventDefault();
    }


    render(){
        return (
        <div className="chat" >
            {this.state.data.Messages.map((msg) => {  return <div><ChatMessage text={msg.text} username={msg.username} date={msg.date} style={this.getRadialPosStyle(msg.id, this.state.data.Messages.length)}/></div>})}
            <ChatInput commentText="" {...this.state}  addComment={this.AddComment}/>
        </div>
        );
    }
}

export default Chat;
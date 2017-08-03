import React from 'react';
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import $ from 'jquery'; 

class Chat extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                Messages : this.GetTestMessages(),
                wheelSize: 200,
                bubbleSize: 200,
            }
        }
        this.GetTestMessages = this.GetTestMessages.bind(this)
        this.AddComment = this.AddComment.bind(this);
        this.getRadialPos = this.getRadialPos.bind(this);
        this.getRadialPos();
    }
    

    getRadialPosL(i, count){
            var step = (2*Math.PI) / this.state.data.Messages.length;
            var angle = step * i;  
            var x = Math.round(document.body.clientWidth/2 + radius * Math.cos(angle) - this.state.data.bubbleSize/2);
            return x + 'px';
    }

    getRadialPosT(i, count){
        var step = (2*Math.PI) / this.state.data.Messages.length;
        var angle = step * i;  
        var y = Math.round(document.body.clientHeight/2 + radius * Math.sin(angle) - this.state.data.bubbleSize/2);
        return y + 'px';
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
        <div className="chat" >
            {this.state.data.Messages.map(function(msg){  return <div><ChatMessage text={msg.text} username={msg.username} date={msg.date} left={getRadialPosL(0, this.state.data.Messages.length) top={getRadialPosT(0, this.state.data.Messages.length)}/></div>})}
            <ChatInput commentText="" {...this.state}  addComment={this.AddComment}/>
        </div>
        );
    }
}

export default Chat;
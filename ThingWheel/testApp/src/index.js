// let's go!
import React from 'react';
import { render } from 'react-dom';
import Chat from './components/Chat'
import ChatMessage from './components/ChatMessage'

class ChatApp extends React.Component{
    render(){
        return (
            <div>
            <Chat/>
            </div>
            )
            
    }
}
render(<ChatApp/>, document.querySelector('#main'));



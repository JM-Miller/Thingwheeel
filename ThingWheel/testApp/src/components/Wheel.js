import React from 'react';
import Bubble from './Bubble'
import CenterBubble from './CenterBubble'
import TestBubbleInput from './TestBubbleInput'

class Wheel extends React.Component{
    constructor(props){
        super(props);
        this.GetTestBubbles = this.GetTestBubbles.bind(this)
        this.generateBubblesState = this.generateBubblesState.bind(this)
        this.generateBubblesState(props);

        this.AddBubble = this.AddBubble.bind(this);
        this.getRadialPosStyle = this.getRadialPosStyle.bind(this);
        this.getCenterStyle = this.getCenterStyle.bind(this);
    }
  
  generateBubblesState(props){
        this.state = {
            data:{
                Bubbles : this.GetTestBubbles(),
                wheelSize: (props.wheelSize),
                bubbleSize: (props.wheelSize / 3),
                wheelX: (((props.wheelSize * 1.33) * (props.id - 0.5))),
                wheelY: (props.wheelSize / 2),
                wheelId: 1,
            }
        }
  }
  
  componentDidMount() {
    this.resizeWheel();
    window.addEventListener("resize", this.resizeWheel.bind(this));
  }
  
  resizeWheel(){
    this.setState({
      data:{
                Bubbles : this.state.data.Bubbles,
                wheelSize: window.innerWidth / 3,
                bubbleSize: window.innerWidth / 3 / 3,
                wheelX: this.state.data.wheelX,
                wheelY: this.state.data.wheelY,
                wheelId: 1,
      }
    })
  }
    
    getCenterStyle(){
        var x = Math.round(document.body.clientWidth / 2);
        var y = Math.round(document.body.clientHeight / 2);
        return {width: this.state.data.bubbleSize, height: this.state.data.bubbleSize, left: (x + this.state.data.wheelX - (this.state.data.bubbleSize / 2)) + 'px', top: (y + this.state.data.wheelY - (this.state.data.bubbleSize / 2)) + 'px'};
    }

    getRadialPosStyle(i, count){
        var step = (2*Math.PI) / this.state.data.Bubbles.length;
        var angle = step * (i - 0.25);  
        var x = Math.round(document.body.clientWidth/2 + (this.state.data.wheelSize / 2) * Math.cos(angle) - this.state.data.bubbleSize/2);
        var y = Math.round(document.body.clientHeight/2 + (this.state.data.wheelSize / 2) * Math.sin(angle) - this.state.data.bubbleSize/2);
        return {left: (x + this.state.data.wheelX) + 'px', top: (y + this.state.data.wheelY) + 'px', width: this.state.data.bubbleSize, height: this.state.data.bubbleSize};
    }

    GetTestBubbles(){
        return [{
            id : 1,
            text : 'Testbbl1',
            username : 'TestUser1',
            ismax : 'false',
            date : '1/1/2017',
            ismax : false,
            colorclass : "bblue",
        },{

            id : 2,
            text : 'Testbbl2',
            username : 'TestUser2',
            ismax : 'false',
            date : '1/2/2017',
            colorclass : "bgreen",
            ismax : false,
        },{
            id : 3,
            text : 'Testbbl3',
            username : 'TestUser1',
            ismax : 'false',
            date : '1/4/2017',
            colorclass : "bred",
            ismax : false,
        },
        ]
    }
    AddBubble(value){
        var Bubbles = this.state.data.Bubbles.slice();
        Bubbles.push(
        {
            id : Bubbles.length + 1,
            text : value,
            username : 'TestCurrentUser',
            date : Date(),
            colorclass : "bblue",
            ismax : false,
        });
        this.setState({
            data:{
                wheelSize: this.state.data.wheelSize,
                bubbleSize: this.state.data.bubbleSize,
                wheelX: this.state.data.wheelX,
                wheelY: this.state.data.wheelY,
                wheelId: this.state.data.wheelId,
                Bubbles : Bubbles
            }});

        event.preventDefault();
    }


    render(){
        return (
        <div className="Wheel" >
            {this.state.data.Bubbles.map((bbl) => {  return <div><Bubble ismax={bbl.ismax} colorclass={bbl.colorclass} text={bbl.text} username={bbl.username} date={bbl.date} style={this.getRadialPosStyle(bbl.id, this.state.data.Bubbles.length)}/></div>})}
            <CenterBubble style={this.getCenterStyle()}/>
            <TestBubbleInput commentText="" {...this.state}  AddBubble={this.AddBubble}/>
        </div>
        );
    }
}

export default Wheel;
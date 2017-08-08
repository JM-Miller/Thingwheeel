import React from 'react';

class CenterBubble extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                iscenter: false,
            }
        }
        this.getStyleClass = this.getStyleClass.bind(this);
    }

    getStyleClass(){
        if(this.state.data.iscenter){
            return "bubble center " + this.props.colorclass;
        }
        else{
            return "bubble notcenter " + this.props.colorclass;
        }
    }

    render(){
        return(
        <div className={this.getStyleClass()} style={this.props.style} >
            <p>TESTCNETER</p>
        </div>
        );
    }

}
        export default CenterBubble;

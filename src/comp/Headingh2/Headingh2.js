import React, { Component } from 'react';

class Headingh2 extends Component {
    constructor(props){
        super(props)
        this.state={
            heading:this.props.heading
        }
    
    }
   componentDidMount(){
  
   }
    render() {
     
        return (
            <div className="row">
                <div style={{ textAlign: "center", paddingTop: "7%", paddingBottom: "7%" }} className="col-md-12">
                    <h2>{this.state.heading}</h2>
                </div>
            </div>
        );
    }
}

export default Headingh2;
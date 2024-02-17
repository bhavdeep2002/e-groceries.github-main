import React,{Component} from "react";

class Service extends Component {
  constructor(props){
    super(props)
    
    
  }

    render() {
      const {img ,heading ,description} =this.props
        return (
            <>
            <div className="col-md-3">
            <div className="services">
              <div className="servicehead">
                <img src={img} alt="" />
                {heading}
              </div>
              <div className="servicedescription">{description}</div>
            </div>
          </div>
          </>
  
        );
    }
}

export default Service;
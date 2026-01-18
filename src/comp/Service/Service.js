import React,{Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-regular-svg-icons";

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
              <div className="service-img">
               <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#76df20",}} />
              </div>
              
              <div className="servicedescription">
                <div className="service-heading">{heading}</div>
                <div className="service-descrp">{description}</div>
              </div>
            </div>
          </div>
          </>
  
        );
    }
}

export default Service;
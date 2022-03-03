import { Component } from "react";
import '../../App.css'
class HelloClass extends Component{
    render(){
      return(
        <>
          <div>안녕하세요</div>
          <div className="gray-box"></div>
          <div style={{color:this.props.color}}>classColor</div>
          <div> age is {this.props.age}</div>
        </>
      );
    }
  }
export default HelloClass;
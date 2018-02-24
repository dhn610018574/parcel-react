import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class HelloMessage extends Component {
  render() {
    return <div>Hello {this.props.name}</div>; 
  }
}
var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

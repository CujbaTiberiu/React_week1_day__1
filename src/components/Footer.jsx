import { Component } from "react";

class Footer extends Component{
 render() {
    return (
    <footer>
        <div>
        <p>{this.props.paraFooter}</p>
        <a href="mailto:randomMail@rmail.com">{this.props.mail}</a>
        </div>
    </footer>
    )
    
 }
}

export default Footer
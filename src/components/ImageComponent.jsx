import { Component } from "react";

class ImageComponent extends Component {
    render() {
        const { src, alt } = this.props;
        const myProps = `${src} ${alt}`;
    
        return <img className={myProps} src={src} alt={alt} />;
    }
}

export default ImageComponent
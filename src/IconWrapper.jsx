import React from "react";

export default class IconWrapper extends React.Component {
    render(){
        return <span className={`inline-block align-middle mr-1 ${this.props.className ? this.props.className : ''}`.trim()}>{this.props.icon}</span>
    }
}
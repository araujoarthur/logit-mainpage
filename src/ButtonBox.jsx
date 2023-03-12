import React from 'react'
import IconWrapper from './IconWrapper';
import './index.css'


export default class ButtonBox extends React.Component {
    constructor(props)
    {
        super(props);
        if (!this.props.id) {
            throw new Error('Missing ID on JSX Tag.'); 
        }
    }

    render() 
    {
        return (
        <div ref={ this.props.passRef } id={this.props.id} className={`p-20 bg-${this.props.background || "icewhite"}`}>
            <div className="flex font-nunito items-center justify-center">
                <span role={'button'} className={`${(this.props.shadow && this.props.shadowColor)? 'hover:shadow-' + this.props.shadow + ' hover:shadow-' + this.props.shadowColor : ''} flex p-5 items-center justify-center ${this.props.buttonBackground ? 'bg-' + this.props.buttonBackground : 'bg-petrol'} align-middle ${this.props.textColor ? 'text-' + this.props.textColor : 'text-icewhite'} text-xl md:text-5xl rounded-xl`}>
                   <div>
                    <IconWrapper className="align-middle" icon={this.props.icon}/><span className="align-middle">{this.props.children}</span>
                    </div>
                </span>
            </div>
        </div>
        )
    }
}
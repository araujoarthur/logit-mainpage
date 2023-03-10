import React from 'react'
import './index.css'

export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.classes = this.props.className == undefined ? '' : this.props.className;
        if (!this.props.id) {
            throw new Error('Missing ID on JSX Tag.'); 
        }
    }
    render() {
        return (
            <div className='px-20 pb-10 font-nunito bg-salmonpink'>
                <div className='text-center p-5'>
                    <h1 id={this.props.id} className={`font-semibold text-petrol text-3xl ${this.classes}`.trim()}>{this.props.title}</h1>
                </div>
                <div className={`${this.props.img ? 'md:grid md:grid-cols-2 md:gap-5' : ''} font-medium text-xl text-aquagreen`}>
                    <div className={`block text-center ${this.props.img ? 'md:text-left':'md:text-center'} md:flex md:items-center`}>
                        {this.props.children}
                    </div>
                    {this.props.img &&
                    <div id={`img-${this.props.id}`} className="md:block md:ml-auto md:mr-auto">
                        <img className="align-middle mt-10 mx-auto md:mt-0 rounded-full" src={this.props.img}></img>
                    </div> }
                </div>
            </div>
        )
    }
}
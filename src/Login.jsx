import React from 'react'
import IconWrapper from './IconWrapper';
import { IoRocket } from 'react-icons/io5'
import './index.css'


export default class Login extends React.Component {
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
        <div id={this.props.id} className="p-20">
            <div className="flex items-center justify-center">
                <span role={'button'} className="bg-petrol align-middle text-icewhite text-xl md:text-5xl p-6 rounded-xl">
                    <IconWrapper className="border-solid border-2" icon={<IoRocket />}/><span className="text-center align-middle inline-block items-center justify-center border-2 border-solid"> To the App! </span>
                </span>
            </div>
        </div>
        )
    }
}
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
                <span role={'button'} className="flex p-5 items-center justify-center bg-petrol align-middle text-icewhite text-xl md:text-5xl rounded-xl">
                    <IconWrapper className="" icon={<IoRocket />}/><span className="border-solid border-2"> To the App! </span>
                </span>
            </div>
        </div>
        )
    }
}
import React from 'react'
import IconWrapper from './IconWrapper';
import { IoLogIn, IoBook, IoPencil, IoHelpCircle, IoPodium} from "react-icons/io5";
import './index.css'

const navigation = [
    {title:"About Us", icon:<IoBook />, href:"#aboutus", current: true},
    {title:"Log In", icon:<IoLogIn />, href:"#loginbox", current: false},
    {title:"Sign Up", icon:<IoPencil />, href:"#", current: false},
    {title:"Docs", icon:<IoHelpCircle />, href:"#", current: false},
    {title:"Pricing", icon:<IoPodium />, href:"#", current: false},
]

export default class Header extends React.Component {
    render() {
        return (
            <>
                <div className="p-10 flex items-center justify-center h-80 bg-limegreen">
                    <div className="text-center">
                        <span className="block font-nunito text-5xl text-icewhite" role={'heading'}>The <span className='font-black' role={'term'}>LogIt</span> Solution</span>
                        <span className="text-xs text-petrol">The cloud-based Logging API.</span>
                    </div> 
                </div>
                <Navbar />
            </>
        )
    }
}

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: navigation
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(event, item) {
        event.preventDefault();
        const new_nav = this.state.items.map((itm) => {
            let curr_index = navigation.findIndex((i) => {itm === i});

            if ((itm === item) && (itm.current == false)) {
                itm.current = true;
            } else if (itm !== item) {
                itm.current = false;
            }

            navigation[curr_index] = itm;
            
            return itm;
        });

        this.setState(() => {
            
            return {
                items: new_nav,
            }
        })

        let position_rect = document.querySelector(item.href).getBoundingClientRect();
        document.documentElement.scrollTop = document.body.scrollTop = position_rect.top;
    }

    render() {
        return (
        <div className="flex items-center justify-center text-icewhite font-nunito font-bold bg-petrol py-5 text-center">
            <ul>
                {navigation.map((item) => {return <Navitem key={item.title} item={item} handleItemClick={this.handleItemClick} />})}
            </ul>
            
        </div>
        );
    }
}   

class Navitem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { item , handleItemClick} = this.props;
        return (
            <li className="mt-5 mb-5 md:mt-0 md:mb-0 inline-block mr-2 ml-2 align-middle">
                <a onClick={(e) => handleItemClick(e, item)} className={`hover:shadow-sm hover:shadow-darkpetrol inline align-middle p-2 rounded uppercase bg-limegreen ${item.current ? '' : 'bg-opacity-30'}`} href={item.href}>{item.icon && <IconWrapper icon={item.icon}/>}<span className="align-middle">{item.title}</span></a>
            </li>
        );
    } 
}
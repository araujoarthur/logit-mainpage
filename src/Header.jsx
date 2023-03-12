import React from 'react'
import IconWrapper from './IconWrapper';
import { IoLogIn, IoBook, IoPencil, IoHelpCircle, IoPodium, IoChatboxEllipsesSharp} from "react-icons/io5";
import './index.css'

const navigation = [
    {title:"About Us", refName:'AboutUs', icon:<IoBook />, href:"#aboutus", current: true, reference:undefined},
    {title:"Log In", refName:'Login', icon:<IoLogIn />, href:"#loginbox", current: false, reference:undefined},
    {title:"Sign Up", refName:'SignUp', icon:<IoPencil />, href:"#signupbox", current: false, reference:undefined},
    {title:"Docs", refName:'Documentation', icon:<IoHelpCircle />, href:"#documentationbox", current: false, reference:undefined},
    {title:"Pricing", refName:'Pricing', icon:<IoPodium />, href:"#", current: false, reference:undefined},
]


export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.references = { ...this.props.references };
    }

    render() {
        return (
            <>
                <div className="p-10 flex items-center justify-center h-80 bg-limegreen">
                    <div className="text-center">
                        <span className="block font-nunito text-5xl text-icewhite" role={'heading'}>The <span className='font-black' role={'term'}>LogIt</span> Solution</span>
                        <span className="text-xs text-petrol">The cloud-based Logging API.</span>
                    </div> 
                </div>
                <Navbar references={ this.references } />
            </>
        )
    }
}

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);

        this.navbarRef = React.createRef();
        this.references = { ...this.props.references };

        this.state = {
            items: navigation.map((item) => { item.reference = this.references[item.refName]; return item }),
            references:  { ...this.references },
            boundaries: {}
        }

        this.handleItemClick = this.handleItemClick.bind(this);
        
    }

    handleScrolling(){
        const currentPos = document.documentElement.scrollTop;
        let [activeElement] = this.state.boundaries.filter((item) => item[1] <= currentPos && item[2] > currentPos);
        activeElement = activeElement ? activeElement : this.state.boundaries[0];
        
        const activeItem = this.state.items.findIndex((item) => item.current)
        const currIndex = this.state.items.findIndex((item) => {
            return (item.refName == activeElement[0])
        });
        
        const new_items = [...this.state.items];
        new_items[activeItem].current = false;
        new_items[currIndex].current = true;

        if (!(activeItem == currIndex)){
            this.setState({
                ...this.state,
                items:new_items
            });
        }
    }

    handleItemClick(event, item) {
        event.preventDefault();

        const itemOffsetTop = item.reference.current.offsetTop

        const new_nav = this.state.items.map((itm) => { /* Start of .map callback. */
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
        });

        document.documentElement.scrollTop = itemOffsetTop;
        
    }

    componentDidMount(){
        var { offsetTop } = this.navbarRef.current;
        var navRef = this.navbarRef.current;
        let isFixed = false;
        document.addEventListener("scroll", () => {
            if (window.pageYOffset >= offsetTop && isFixed == false) {
                navRef.classList.add('w-full', 'top-0', 'fixed', 'z-50');
                isFixed = true;
            } else if (window.pageYOffset <= offsetTop && isFixed == true) {
                navRef.classList.remove('w-full', 'top-0', 'fixed', 'z-50');
                isFixed = false;
            }

            this.setState({
                boundaries: this.state.items.map((item) => {
                    return [item.refName, item.reference.current ? item.reference.current.offsetTop : 'nil', item.reference.current ? item.reference.current.offsetTop + item.reference.current.offsetHeight : 'nil']
                }).sort((a, b) => this.state.boundaries[a] > this.state.boundaries[b])
            }, () => this.handleScrolling())

            
        });
    }

    render() {
        return (
        <div className="w-full">
            <div id="navbar" ref={this.navbarRef} className="flex items-center justify-center text-icewhite font-nunito font-bold bg-petrol py-5 text-center">
                <ul>
                    {navigation.map((item) => {return <Navitem key={item.title} item={item} handleItemClick={this.handleItemClick} />})}
                </ul>
            </div>
        </div>
        );
    }
}   

class Navitem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { item , handleItemClick } = this.props;
        return (
            <li className="mt-5 mb-5 md:mt-0 md:mb-0 inline-block mr-2 ml-2 align-middle">
                <a onClick={(e) => handleItemClick(e, item)} className={`hover:shadow-sm hover:shadow-darkpetrol inline align-middle p-2 rounded uppercase bg-limegreen ${item.current ? '' : 'bg-opacity-30'}`} href={item.href}>{item.icon && <IconWrapper icon={item.icon}/>}<span className="align-middle">{item.title}</span></a>
            </li>
        );
    } 
}
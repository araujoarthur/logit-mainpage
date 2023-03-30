import React from 'react'
import { PricingBox } from './PricingGrid';
import { IoChevronDown, IoChevronUp, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import PurchaseBox from './PurchaseBox';


export default class CustomPlan extends React.Component {
    constructor(props) {
        super(props);

        this.UsersRef = {input: React.createRef(), utility: React.createRef()};
        this.LogsRef = {input: React.createRef(), utility: React.createRef()};
        this.AppsRef = {input: React.createRef(), utility: React.createRef()};

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            unitValue: {
                users:500,
                logs:1,
                apps:1000
            },
            purchaseValue: {
                users:0,
                logs:0,
                apps:0,
            }
        }

    }

    handleChange(item, fn_callback = (count, unitValue) => { return count * unitValue }) {
        this.setState(previousState => {console.log(previousState); return {
            purchaseValue:{
                ...previousState.purchaseValue,
                [item.state.utilityIdentifier]: fn_callback(item.state.count, previousState.unitValue[item.state.utilityIdentifier])
            }
        }});
    }

    render() {
        const { users: usersPrice, logs: logsPrice, apps: appsPrice } = this.state.purchaseValue;
        return (
            <PricingBox planName="Custom Plan" purchaseBox={<PurchaseBox locale="en-US" currency="USD" priceFor={usersPrice + logsPrice + appsPrice} />}>
                <SelectUtility 
                    utilityIdentifier="users" 
                    onChange={this.handleChange} 
                    utilityName="Users" 
                />
                <SelectUtility 
                    utilityIdentifier="logs" 
                    ref={ this.LogsRef.utility } 
                    passRef={ this.LogsRef.input } 
                    onChange={this.handleChange}  
                    utilityName="Logs/Month" 
                    incrementalOffset={1000} 
                />
                <SelectUtility 
                    utilityIdentifier="apps" 
                    onChange={this.handleChange}  
                    utilityName="Apps"
                />
            </PricingBox>
        );
    }

}

export class SelectUtility extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <div className="flex items-center justify-center justify-items-center">
            <span className="mr-auto font-semibold font-nunito text-darkpetrol"> {this.props.utilityName} </span>
            <UtilityInput 
                utilityIdentifier={ this.props.utilityIdentifier } 
                onChange={this.props.onChange} 
                incrementalOffset={this.props.incrementalOffset ? this.props.incrementalOffset : 1} />
        </div>
        );
    }
}

class UtilityInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.incrementalOffset,
            utilityIdentifier: this.props.utilityIdentifier
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }


    incrementCounter () {
        this.setState(previousState => {return {
            count: previousState.count + this.props.incrementalOffset
        }}, () => this.props.onChange(this));

        
    }

    decrementCounter() {
        return (this.state.count > this.props.incrementalOffset && this.setState(previousState => {return { count: previousState.count - this.props.incrementalOffset }}, () => this.props.onChange(this)));
    }

    componentDidMount() {
        this.props.onChange(this); // Sets the initial value.
    }

    render() {
        return (
            <>
                <span role={'cell'} onChange={ (event) => this.handleChange(event, ) } className="ml-auto p-3 w-40 text-right rounded-lg bg-salmonpink text-sm font-nunito">{this.state.count}</span>
                <div className='px-1'>
                    <ArrowButton onClick={ this.incrementCounter } direction="up" />
                    <ArrowButton onClick={ this.decrementCounter } direction="down" />
                </div>
            </>
        );
    }
}

const ArrowButton = ( { direction, onClick } ) => {
    let arrow = '';
    switch (direction) {
        case ('up'):
            arrow = <IoChevronUp />
            break;
        case ('down'):
            arrow = <IoChevronDown />
            break;
        case ('left'):
            arrow = <IoChevronBack />
            break;
        case ('right'):
            arrow = <IoChevronForward />
            break;
        default:
            arrow = <IoChevronForward />
    }
    return (
        <div onClick={ () => onClick() } className='flex p-1 rounded-xl align-middle text-center justify-center items-center justify-items-center text-darkpetrol cursor-pointer hover:bg-salmonpink hover:text-darkerpetrol'>{arrow}</div>

    );
}
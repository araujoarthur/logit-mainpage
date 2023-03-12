import React from 'react'
import { PricingBox } from './PricingGrid';
import { IoChevronDown, IoChevronUp, IoChevronBack, IoChevronForward } from 'react-icons/io5'


export default class CustomPlan extends React.Component {
    constructor(props) {
        super(props);

        this.UsersInputRef = React.createRef();
        this.LogsInputRef = React.createRef();
        this.AppsInputRef = React.createRef();
    }

    render() {
        return (
            <PricingBox planName="Custom Plan">
                <SelectUtility ref={ this.UsersInputRef } utility="Users"></SelectUtility>
                <SelectUtility ref={ this.LogsInputRef } utility="Logs/Month" incrementalOffset={10} ></SelectUtility>
                <SelectUtility ref={ this.AppsInputRef } utility="Apps"></SelectUtility>
            </PricingBox>
        );
    }

}

export class SelectUtility extends React.Component {

    render() {
        return (
        <div className="flex items-center justify-center justify-items-center">
            <span className="mr-auto font-semibold font-nunito text-darkpetrol"> {this.props.utility} </span><UtilityInput incrementalOffset={this.props.incrementalOffset ? this.props.incrementalOffset : 1} />
        </div>
        );
    }
}

class UtilityInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.incrementalOffset
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }


    incrementCounter () {
        this.setState({
            count: this.state.count + this.props.incrementalOffset
        });
    }

    decrementCounter() {
        return (this.state.count > this.props.incrementalOffset && this.setState({ count: this.state.count - this.props.incrementalOffset }));
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
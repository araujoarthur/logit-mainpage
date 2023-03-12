import React from 'react'
import { IoStar } from 'react-icons/io5';
import IconWrapper from './IconWrapper';




function formatMoney(cents, locale='pt-BR', styleObject = {style:'currency', currency:'BRL', currencySign:'standard'}) {

    return (cents/100).toLocaleString(locale, styleObject)
}

export default class PricingGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { columns, gap } = this.props;
        return(
            <>
                <h2 className="pt-10 text-5xl bg-icewhite text-darkpetrol font-nunito text-center">{this.props.title ? this.props.title : 'Our Deals'}</h2>
                <div ref={this.props.passRef} className={`bg-icewhite items-center justify-center justify-items-center p-10 grid grid-cols-1 md:grid-cols-${columns ? columns : '3'} gap-0 md:gap-${gap ? gap : '2'} ${this.props.className ? this.props.className : ''}`.trim()} id={this.props.id}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export class PricingBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { planName } = this.props;
        return (
        <div className="mb-4 z-0 md:mb-0 h-full w-full shadow-sm shadow-salmonpink rounded-md p-5 bg-salmonpink bg-opacity-20 backdrop-blur-lg">
            <h1 className="text-center font-black text-petrol text-xl font-nunito">{ planName.toUpperCase() }</h1>
            <hr className="mb-2 border-icewhite"/>
            {this.props.children}
            <hr className="mb-2 mt-2 border-icewhite"/>
            {this.props.purchaseBox}
        </div>
        );
    }
}

export class PlanBenefits extends React.Component {

    render() {
        return (
            <div className={`grid z-0 grid-cols-1 md:grid-cols-2 md:gap-2 `}> {/* Plan Benefits Component */}
                 {this.props.children}
            </div>
        );
    }

}

export class PlanBenefit extends React.Component {
    render() {
        return (
        <div className="text-center z-0">
            <IconWrapper className="text-palidyellow drop-shadow-sm mr-2" icon={<IoStar />}/><span className="align-middle text-sm font-semibold text-darkerpetrol font-nunito">{this.props.children}</span>
        </div> 
        );
    }
}

export class PlanPrice extends React.Component {
    render() {
            const { priceFrom, priceFor, discountPercent = false, locale = 'pt-BR', currency = 'BRL'} = this.props;
            const styleObj = {style:'currency', currency}
        return (
            
            <div className='mt-5 text-center text-darkpetrol z-0 font-nunito'>
                <span className={`block ${this.props.discountPercent ? 'mb-2' : ''}`.trim()}>
                    { priceFrom && <span className='text-[10px]'>
                        from <span className='line-through'>{(locale && currency) ? formatMoney(priceFrom, locale, styleObj) : formatMoney(priceFrom)}</span>
                    </span> }
  
                    {priceFor ? <span className='font-black drop-shadow-2xl'> 
                        for {(locale && currency) ? formatMoney(priceFor, locale, styleObj) : formatMoney(priceFor)}
                    </span> : <span className='font-black drop-shadow-2xl'> 
                        for Free!
                    </span>}
                </span>
                {discountPercent && <span className='bg-darkpetrol py-1 px-2 rounded text-salmonpink'>{((priceFrom - priceFor)/(priceFrom)).toLocaleString('pt-BR', {style:'percent'})} OFF</span>}
            </div>
        );
    }
}


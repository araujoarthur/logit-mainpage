import React from 'react';
import { PlanPrice } from './PricingGrid';


export default class PurchaseBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFrom: this.props.priceFrom,
            priceFor: this.props.priceFor,
            planIdentifier: this.props.planIdentifier,
            customPlanObject: this.props.customPlanObject ? this.props.customPlanObject : {}
        };
    }
    render() {
        const { priceFrom, priceFor, discountPercent = false, locale = 'pt-BR', currency = 'BRL' } = this.props;

        return (
            <>
                <PlanPrice priceFrom={priceFrom} priceFor={priceFor} discountPercent={discountPercent} locale={locale} currency={currency} />
                <div className='block mt-10 text-center'>
                    <span role={'button'} className='p-2 bg-petrol font-black text-3xl font-nunito text-icewhite rounded-lg shadow-sm shadow-limegreenFaded hover:bg-icewhite hover:text-darkpetrol'>Acquire Now!</span>
                </div>
            </>
        );
    }
}

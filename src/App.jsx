import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header.jsx'
import ContentBox from './ContentBox'
import ButtonBox from './ButtonBox'
import PricingGrid, { PricingBox, PlanBenefits, PlanBenefit } from './PricingGrid'
import PurchaseBox from "./PurchaseBox"
import CustomPlan from './CustomPlan'
import { IoRocket, IoHelpCircle } from 'react-icons/io5'
import './index.css'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.references = {}

    this.references = {
      Header: React.createRef(),
      AboutUs: React.createRef(),
      Login: React.createRef(),
      SignUp: React.createRef(),
      Documentation: React.createRef(),
      Pricing: React.createRef(),
    };
  }

  render() {
    return (
      <>
        <Header passRef={ this.references.Header } references={this.references}/>
        <ContentBox passRef={ this.references.AboutUs } id="aboutus" title="Lorem Ipsum" img="https://picsum.photos/200/300">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra vestibulum dui, mollis hendrerit eros posuere ut. Aenean ac nisi urna. Aenean quis rhoncus odio. Pellentesque ultrices ac neque a consequat. Cras nec lobortis lacus. Morbi dapibus efficitur magna at suscipit.</p>
        </ContentBox>
        <ButtonBox passRef={ this.references.Login } id="loginbox" background="icewhite" shadow="lg" shadowColor="salmonpink" icon={<IoRocket />} href="#">To The App!</ButtonBox>
        <ButtonBox passRef={ this.references.SignUp } id="signupbox" background="aquagreen" textColor="darkpetrol" buttonBackground="salmonpink" shadow="lg" shadowColor="limegreenFaded" icon={<IoRocket />} href="#">Create an Account!</ButtonBox>
        <ButtonBox passRef={ this.references.Documentation } id="documentationbox" background="salmonpink" buttonBackground="aquagreen" textColor="icewhite" shadow="lg" shadowColor="darkpetrol" icon={ <IoHelpCircle /> }>Read the Documentation</ButtonBox>
        <div id="pricingbox" ref={ this.references.Pricing }>
          <PricingGrid columns='3' gap='3'>
            <PricingBox planName="Plan 1" purchaseBox={<PurchaseBox planIdentifier={1} priceFrom={25000} priceFor={2500} discountPercent={true} locale='en-US' currency='USD' />}>
              <PlanBenefits>
                <PlanBenefit>
                  Pricing Benefit 1
                </PlanBenefit>
                <PlanBenefit>
                  Pricing Benefit 2
                </PlanBenefit>
                <PlanBenefit>
                  Pricing Benefit 3
                </PlanBenefit>
                <PlanBenefit>
                  Pricing Benefit 4
                </PlanBenefit>
              </PlanBenefits>
            </PricingBox>

            <PricingBox planName="Plan 2" purchaseBox={<PurchaseBox planIdentifier={2} priceFrom={780000} priceFor={120000} discountPercent={true} locale='en-US' currency='USD' />}>
              <PlanBenefits>
                <PlanBenefit>
                  Plan 2 Benefit 1
                </PlanBenefit>
                <PlanBenefit>
                  Plan 2 Benefit 2
                </PlanBenefit>
                <PlanBenefit>
                  Plan 2 Benefit 3
                </PlanBenefit>
                <PlanBenefit>
                  Plan 2 Benefit 4
                </PlanBenefit>
              </PlanBenefits>
            </PricingBox>

            <PricingBox planName="Plan 3" purchaseBox={<PurchaseBox planIdentifier={3} locale='en-US' currency='USD' />}>
              <PlanBenefits>
                <PlanBenefit>
                  Plan 3 Benefit 1
                </PlanBenefit>
                <PlanBenefit>
                  Plan 3 Benefit 2
                </PlanBenefit>
                <PlanBenefit>
                  Plan 3 Benefit 3
                </PlanBenefit>
                <PlanBenefit>
                  Plan 3 Benefit 4
                </PlanBenefit>
              </PlanBenefits>
            </PricingBox>
          </PricingGrid>
          
          <PricingGrid title="... or build your own plan!" columns='3'>
            <div></div>
            <CustomPlan>

            </CustomPlan>
            <div></div>
          </PricingGrid>
        </div>
      </>
    );
  }
}
export default App


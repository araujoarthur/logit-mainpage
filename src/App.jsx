import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header.jsx'
import ContentBox from './ContentBox'
import ButtonBox from './ButtonBox'
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
        <div passRef={ this.references.Pricing }>Pricing</div>
      </>
    );
  }
}
export default App


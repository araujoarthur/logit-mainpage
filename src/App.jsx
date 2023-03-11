import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header.jsx'
import ContentBox from './ContentBox'
import ButtonBox from './ButtonBox'
import { IoRocket, IoHelpCircle } from 'react-icons/io5'
import './index.css'


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContentBox id="aboutus" title="Lorem Ipsum" img="https://picsum.photos/200/300">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra vestibulum dui, mollis hendrerit eros posuere ut. Aenean ac nisi urna. Aenean quis rhoncus odio. Pellentesque ultrices ac neque a consequat. Cras nec lobortis lacus. Morbi dapibus efficitur magna at suscipit.</p>
        </ContentBox>
        <ButtonBox id="loginbox" background="icewhite" shadow="lg" shadowColor="salmonpink" icon={<IoRocket />} href="#">To The App!</ButtonBox>
        <ButtonBox id="signupbox" background="aquagreen" textColor="darkpetrol" buttonBackground="salmonpink" shadow="lg" shadowColor="limegreenFaded" icon={<IoRocket />} href="#">Create an Account!</ButtonBox>
        <ButtonBox id="documentationbox" background="salmonpink" buttonBackground="aquagreen" textColor="icewhite" shadow="lg" shadowColor="darkpetrol" icon={ <IoHelpCircle /> }>Read the Documentation</ButtonBox>
      </>
    );
  }
}
export default App


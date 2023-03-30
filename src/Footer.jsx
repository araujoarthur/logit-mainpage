import React from 'react'
import { IoCaretForward, IoLogoFacebook, IoLogoTwitter, IoBook, IoBusiness, IoArrowUp, IoLogoInstagram, IoLogoGithub, IoLogoSnapchat} from 'react-icons/io5'
import IconWrapper from './IconWrapper'

export default class Footer extends React.Component {
        render() {
            return (
                <footer className='p-3 bg-darkerpetrol'>
                    <div className="justify-items-center grid grid-cols-1 md:grid-cols-3">
                        <FooterColumn title="Contact">
                            <FooterList>
                                <FooterListItem icon={<IoLogoFacebook />} href="http://facebook.com">Facebook</FooterListItem>
                                <FooterListItem icon={<IoLogoTwitter />} href="http://twitter.com">Twitter</FooterListItem>
                                <FooterListItem icon={<IoLogoInstagram />} href="http://instagram.com">Instagram</FooterListItem>
                                <FooterListItem icon={<IoLogoSnapchat />} href="http://snapchat.com">Snapchat</FooterListItem>
                                <FooterListItem icon={<IoLogoGithub />} href="https://github.com/araujoarthur/logit-mainpage">Github</FooterListItem>
                            </FooterList>
                        </FooterColumn>
                        <FooterColumn title="Work with us">
                            <FooterList>
                                <FooterListItem icon={<IoBusiness/>} href="#">Find a Vacancy</FooterListItem>
                            </FooterList>
                        </FooterColumn>
                        <FooterColumn title="News">
                            <FooterList>
                                <FooterListItem icon={<IoArrowUp/>} href="#">Updates</FooterListItem>
                                <FooterListItem icon={<IoBook/>} href="#">Blog posts</FooterListItem>
                            </FooterList>
                        </FooterColumn>
                    </div>
                    <Copyright>
                        LogIt - 2023
                    </Copyright>

                </footer>
            );
        }
}

const FooterColumn = ( { title, children } ) => {
    return (
        <div className="mt-2 mb-2 md:mt-0 md:mb-0 text-icewhite font-nunito font-bold">
            <h3 clasName="uppercase">{title}</h3>
            <div className="font-medium text-xs text-left mt-3">
                {children}
            </div>
        </div>
    );
}

const FooterList = ( { children } ) => {
    return (
        <>        
            <ul>
                { children }
            </ul>
        </>

    );
}

const FooterListItem = ( {children, icon = <IoCaretForward />, href}) => {
    return (
        <li className='align-middle'>
            <a href={href}>
                <IconWrapper className="align-middle"icon={icon}/>
                <span className='align-middle'>{children}</span>
            </a>
        </li>
    );
}

const Copyright = ( { children }) => {
    return (
        <div className='text-center align-middle text-xs'>
            <span className="text-icewhite" role={"note"}>© { children } </span>
        </div>
    )
}
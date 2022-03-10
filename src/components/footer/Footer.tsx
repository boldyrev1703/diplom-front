import { Links } from '../../App';

import { Vk } from '../svg/Vk';
import { Ok } from '../svg/Ok';
import { Tg } from '../svg/Tg';

import theme from '../../css/Footer.module.css'; 

type FooterProps = {
    links: Array<Links>
}

const Footer = (props: FooterProps) => {
    const  { links } = { ...props }; 
    
    return (
        <div className={theme.wrap}>
            <div className={theme.wrap_w}>
                <div className={theme.wrap_content}>
                    <span className={theme.info}>{links[1].content}</span>
                    <span className={theme.info}>{links[0].content}</span>
                </div>
                <div className={theme.ico}>
                    <a href={links[2].content}><Vk/></a>
                    <a href={links[3].content}> <Ok/></a>
                    <a href={links[4].content}><Tg/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

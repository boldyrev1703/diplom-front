import { Vk } from '../svg/Vk';
import { Ok } from '../svg/Ok';
import { Tg } from '../svg/Tg';

import theme from '../../css/Footer.module.css'; 


const Footer = () => {
    return (
        <div className={theme.wrap}>
            <div className={theme.wrap_w}>
                <div className={theme.wrap_content}>
                    <span className={theme.info}>tat86222482@yandex.ru</span>
                    <span className={theme.info}>8 (863) 586-73-08</span>
                </div>
                <div className={theme.ico}>
                    <a href=""><Vk/></a>
                    <a href=""> <Ok/></a>
                    <a href=""><Tg/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

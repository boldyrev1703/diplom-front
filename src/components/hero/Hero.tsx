import HeroHeader from "./Hero-header";
import HeroContent from "./Hero-content";

import cn from 'classnames';

import theme from '../../css/Hero.module.css';


const Hero = () => {
  
    return (
        <div className={cn(theme.wrap)}>
            <div className={cn(theme.wrap_heder)}>
                <HeroHeader/>
                <HeroContent/>
            </div>
        </div>
    );
}
  
export default Hero;
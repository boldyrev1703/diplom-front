import HeroHeader from "./Hero-header";
import HeroContent from "./Hero-content";

import cn from 'classnames';

import theme from '../../css/Hero.module.css';

export type HeroProps = {
    heroHeader: {
        phone: string,
        mail: string
    },
    heroContent: {
        content: string,
        subContent: string,
    }
}
const Hero = (props: HeroProps) => {
    const {
        heroHeader,
        heroContent
    } = { ...props };

    return (
        <div className={cn(theme.wrap)}>
            <div className={cn(theme.wrap_heder)}>
                <HeroHeader {...heroHeader} />
                <HeroContent {...heroContent}/>
            </div>
        </div>
    );
}
  
export default Hero;
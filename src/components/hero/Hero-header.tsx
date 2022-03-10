import cn from 'classnames';

import theme from '../../css/hero-header.module.css';

type HeroHeaderProps = {
    phone: string,
    mail: string
};

const HeroHeader = (props: HeroHeaderProps) => {
    return (
        <div className={cn(theme.wrap)}>
            <span className={theme.title}>{props.mail}</span>
            <span className={theme.title}>{props.phone}</span>
        </div>
    );
};

export default HeroHeader;

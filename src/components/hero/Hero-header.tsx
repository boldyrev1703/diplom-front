import cn from 'classnames';

import theme from '../../css/hero-header.module.css';


const HeroHeader = () => {
    return (
        <div className={cn(theme.wrap)}>
            <span className={theme.title}>tat86222482@yandex.ru</span>
            <span className={theme.title}>8 (863) 586-73-08</span>
        </div>
    );
};

export default HeroHeader;

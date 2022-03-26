import theme from '../../css/Hero-content.module.css';

type HeroContentProps = {
    content: string,
    subContent: string,
}

const HeroContent = (props: HeroContentProps) => {
    return (
        <div className={theme.wrap}>
            <h1 className={theme.title}>{props.content}</h1>
            <span className={theme.sub_text}>
                {props.subContent}
            </span>
        </div>
    );
}
  
export default HeroContent;

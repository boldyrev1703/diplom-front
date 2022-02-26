import theme from '../../css/Hero-content.module.css';


const HeroContent = () => {
  
    return (
        <div className={theme.wrap}>
            <h1 className={theme.title}>Болдырева Татьяна Викторовна</h1>
            <span className={theme.sub_text}>
                Учу детей  5-11 классов русскому языку и литературе уже 27 лет!
            </span>
        </div>
    );
}
  
export default HeroContent;

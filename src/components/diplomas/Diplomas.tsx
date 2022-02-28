import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import theme from '../../css/Diplomas.module.css'; 

import  photo1 from './diploms/1.jpg';
import  photo2 from './diploms/2.jpg';
import  photo3 from './diploms/3.jpg';
import  photo4 from './diploms/4.jpg';

const  Diplomas = () => {
    const screenWidth = window.screen.width;

    return (
        <div className={theme.wrap}>
            <span className={theme.title}>Грамоты и Награды</span>
            <Swiper
                spaceBetween={screenWidth > 414 ? 40 : 100}
                slidesPerView={screenWidth > 414 ? 4 : 2}
                className={theme.swiper}
                loop={true}
            >
                <SwiperSlide>
                    <img src={photo1} alt="" className={theme.photo}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={photo2} alt="" className={theme.photo}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo3} alt="" className={theme.photo}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo4} alt="" className={theme.photo}/>
                </SwiperSlide>
            </Swiper>

            <div className={theme.questions}>
                <span className={theme.questions__bg}>по всем вопросам</span>
                <div className={theme.questions__contentWrap}>
                    <span className={theme.questions__content}>tat86222482@yandex.ru</span>
                    <span className={theme.questions__content}>8 (863) 586-73-08</span>
                </div>
            </div>
        </div>
      );
};

export default Diplomas; 
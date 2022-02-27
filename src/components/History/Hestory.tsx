import React, { useEffect, useRef } from 'react';
import theme from '../../css/History.module.css';

type HistoryData = {
    year: number,
    content: string,
    subContent?: string,
    title?: string,
}

const History = () => {
    const historyData: Array<HistoryData> = [
        {
            year: 1991,
            content: 'Окончила педагогичесское училище в Ростове-на-Дону по специальности учитель начальных классов',
        },
        {
            year: 2013,
            content: 'Окончила Южный Федеральный университет г. Ростова на Дону по специальности учитель русского языка и литературы',
        },
        {
            year: 2019,
            content: '“Инновационные технологии дополнительного образования в рамках реализации ФГОС” “Современные технологии медиации”',
            title: 'Повышение квалификации',
            subContent: 'ООО «Международный центр консалтинга и образования «Велес», г. Таганрог'
        },
        {
            year: 2020,
            content: 'Совершенствование компетенций педагогических работников в рамках реализации федерального проекта «Учитель будущего»',
            subContent: 'ФГАОУ ДПО «Академия реализации государственной политики и профессионального развития работников образования Министерства просвещения Российской Федерации», г. Москва'
        },
    ];

  
    const leftSide = historyData.filter((_,i) => i % 2 === 1);
    const rightSide = historyData.filter((_,i) => i % 2 === 0);

    const getHeight = (el:HistoryData) => {
        const contentFS = 22;
        const titleFS = 24;
        const subContentFS = 18;
        const contentW = 380;

        const heightContent = Math.floor((contentFS * el.content.split('').length * contentFS) /  contentW);
        const heightTitle = Math.floor((titleFS * (!!el.title ? el.title.split('').length : 1) * titleFS) /  contentW);
        const heightSubContent = Math.floor((subContentFS * (!!el.subContent ? el.subContent.split('').length : 1) * subContentFS) /  contentW);

        return heightContent + heightTitle + heightSubContent
    }

    const leftSideHeights = leftSide.map(getHeight);
    const rightSideHeights = rightSide.map(getHeight);

    const leftSideMargin = rightSideHeights.map((el, i) =>  i === 0 ? el + 60 : el+ 160);
    const rightSideMargin = leftSideHeights.map((el, i) =>  i === 0 ? 40 : el);

    const chronologyLine = leftSideMargin.concat(rightSideMargin).reduce((p, c) => p + c, 0);
    const chronologyDots = leftSideMargin.concat(rightSideMargin)
        .sort((a,b) => a-b)
        .map((el,i) => {
            if(i === 0) {
                return el;
            }
            if ( i === 1) {
                return el - 50
            }

            return el - 100 - (i * 4)
        });
    
    const chronologyYearLeft = leftSideMargin
        .map((el,i) => {
            if(i === 0) {
                return el;
            }
            if ( i === 1) {
                return el - 50
            }

            return el - 100 - (i * 4)
        });
    return (
        <div className={theme.wrap}>
            <div className={theme.wrap_w}>
                <h2 className={theme.title}>Направление и Квалификация</h2>
                <div className={theme.chronology}>
                    <div className={theme.side}>
                        {leftSide.map((el,i) =>
                            <div
                                key={i} 
                                style={{
                                    marginTop:leftSideMargin[i]+'px',
                                    display: 'flex'
                                }}
                            >
                                <div>
                                    <span
                                        className={theme.history__title}
                                    >
                                        {el.title}
                                    </span>

                                    <span 
                                        className={theme.history__content}
                                    >
                                        {el.content}
                                    </span>

                                    <span 
                                        className={theme.history__subContent}
                                    >
                                        {el.subContent}
                                    </span>
                                </div>
                              
                                <span
                                    className={theme.history__year_l}
                                >
                                    {el.year}
                                </span>
                            </div>
                        )}
                    </div>

                    <div
                        style={{height:chronologyLine}} 
                        className={theme.chronology__line}
                    >
                        {chronologyDots.map((el,i) =>
                            <>
                                <div
                                    key={i} 
                                    style={{marginTop:el+'px'}}
                                    className={theme.chronology__dots}
                                >
                                </div>
                            </>
                        )}
                    </div>

                    <div className={theme.side}>
                        {rightSide.map((el,i) =>
                            <div
                                key={i} 
                                style={{
                                    marginTop:rightSideMargin[i]+'px',
                                    display: 'flex',
                                    flexDirection: 'row-reverse'
                                }}
                            >
                                <div>

                                <span
                                    className={theme.history__title}
                                >
                                    {el.title}
                                </span>

                                <span 
                                    className={theme.history__content}
                                >
                                    {el.content}
                                </span>

                                <span 
                                    className={theme.history__subContent}
                                >
                                    {el.subContent}
                                </span>
                                </div>
                                
                                <span
                                    className={theme.history__year_r}
                                >
                                    {el.year}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default History;
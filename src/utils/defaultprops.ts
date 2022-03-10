import { Links } from "../App";
import { HeroProps } from "../components/hero/Hero";
import { HistoryData } from "../components/History/Hestory";

export const defaultLinks: Array<Links> = [{
        "id": 1,
        "content": "8 (863) 586-73-08"
    },
    {
        "id": 2,
        "content": "tat86222482@yandex.ru"
    },
    {
        "id": 3,
        "content": "#"
    },
    {
        "id": 4,
        "content": "https://ok.ru/profile/548789575690"
    },
    {
        "id": 5,
        "content": "t.me/boldyreva1974"
    }
];

export const defaultHistory: Array<HistoryData> = [
    {
        yearDate: 1991,
        content: 'Окончила педагогичесское училище в Ростове-на-Дону по специальности учитель начальных классов',
    },
    {
        yearDate: 2013,
        content: 'Окончила Южный Федеральный университет г. Ростова на Дону по специальности учитель русского языка и литературы',
    },
    {
        yearDate: 2019,
        content: '“Инновационные технологии дополнительного образования в рамках реализации ФГОС” “Современные технологии медиации”',
        title: 'Повышение квалификации',
        subContent: 'ООО «Международный центр консалтинга и образования «Велес», г. Таганрог'
    },
    {
        yearDate: 2020,
        content: 'Совершенствование компетенций педагогических работников в рамках реализации федерального проекта «Учитель будущего»',
        subContent: 'ФГАОУ ДПО «Академия реализации государственной политики и профессионального развития работников образования Министерства просвещения Российской Федерации», г. Москва'
    },
];

export const defaultHero: HeroProps = {
    heroHeader: {
        phone: "8 (863) 586-73-08",
        mail: "tat86222482@yandex.ru"
    },
    heroContent: {
        content: "Болдырева Татьяна Викторовна",
        subContent: "Учу детей  5-11 классов русскому языку и литературе уже 27 лет!",
    }
};
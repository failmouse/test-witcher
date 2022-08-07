import React from 'react';
import './slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import Gherald from './images/geralt.png';
import Lutik from './images/lutik.png';
import Yen from './images/yen.png';
import Ciri from './images/ciri.png';
import Emgir from './images/emgir.png';

function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} />
            <span className="mask"/>
            <div className='name'>
                <h4><b>{props.title}</b></h4>
                <h4>{props.subtitle}</h4>
            </div>
            <div className='text'>
                {props.text}
            </div>
        </div>
    )
}

export default function Slider() {
    let Slides = [
        { img: Gherald, title: "Геральт", subtitle: "Генри Кавилл", text: "Одинокий охотник на чудовищ, который отчаянно пытается найти место в мире, где люди зачастую оказываются хуже монстров" },
        { img: Lutik, title: "Лютик", subtitle: "Джои Бэти", text: "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник" },
        { img: Yen, title: "Йеннифэр", subtitle: "Аня Чалотра", text: "Чародейка, обучавшаяся магии в школе для юных волшебниц Аретуза под руководством Тиссаи де Врие" },
        { img: Ciri, title: "Цири", subtitle: "Фрейя Аллан", text: "Цири любила сбегать из дворца и играть в городе с мальчишками, живо интересовалась военно-политическими обсуждениями бабушки, негодуя из-за того, что в её возрасте бабушка была уже знаменита своими подвигами, а её держат во дворце." },
        { img: Emgir, title: "Эмгыр вар Эмрейс", subtitle: "Барт Эдвардс", text: "Мужчина, на которого было наложено заклятье, превращающее его в человекоподобного ежа" },
        { img: Ciri, title: "Цири", subtitle: "Фрейя Аллан", text: "Цири любила сбегать из дворца и играть в городе с мальчишками, живо интересовалась военно-политическими обсуждениями бабушки, негодуя из-за того, что в её возрасте бабушка была уже знаменита своими подвигами, а её держат во дворце." }
    ];
    return (
        <section className='block mblock'>
            <div className='container'>
                <h2>Актерский состав</h2>
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={24}
                    slidesPerView={"auto"}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                    {Slides.map((slideContent, index) => (
                        <SwiperSlide key={index}>
                            <Card img={slideContent.img} title={slideContent.title} subtitle={slideContent.subtitle} text={slideContent.text} key={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}


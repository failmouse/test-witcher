import React from 'react';
import './mainpage.scss';
import Slider from './components/slider/slider';
import Photos from './components/photos/photos';
import Map from './components/map/map';

export default function MainPage() {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <h1>Сериал Ведьмак</h1>
                    <p>Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.</p>
                    <a className='lightred-btn' href='#'>Смотреть сериал</a>
                </div>
            </section>
            <Slider />
            <section>
                <div className='container mblock'>
                    <h2>Кадры со съемок</h2>
                    <Photos/>
                </div>
            </section>
            <section>
                <div className='container mblock'>
                    <h2>Магазины мерча ведьмака</h2>
                    <Map/>
                </div>
            </section>
        </>
    )
}
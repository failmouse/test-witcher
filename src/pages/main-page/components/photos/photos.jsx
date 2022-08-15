import React, {useState} from 'react';
import './photos.scss';
import Photo1 from './components/photo1.png';
import Photo2 from './components/photo2.png';
import Photo3 from './components/photo3.png';
import Photo4 from './components/photo4.png';
import Photo5 from './components/photo5.png';
import {ReactComponent as Loading} from './components/loading.svg';

export default function Photos() {
    const [btnTitle, setBtnTitle] = useState("Показать еще");

    const [arrPhotos, setarrPhotos] = useState([
        {img: Photo1},
        {img: Photo2},
        {img: Photo3},
        {img: Photo4},
        {img: Photo5}
    ]);

    const arrMorePhotos = [
        {img: Photo2},
        {img: Photo3},
        {img: Photo4},
        {img: Photo5}
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setBtnTitle(<Loading/>);
        const timer = setTimeout(() => {
            setBtnTitle("Показать еще");
            setarrPhotos(arrPhotos.concat(arrMorePhotos));
        }, 1000);
        return () => clearTimeout(timer);      
    };
    
    return (
        <>
            <div className='photo-block'>
                {arrPhotos.map((i, index) => <img src={i.img} key={index}/>)}
            </div>
            <a onClick={handleClick} className='red-btn photos'>
                {btnTitle}
            </a>
        </>
    )
}
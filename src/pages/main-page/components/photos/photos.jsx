import React from 'react';
import './photos.scss';
import Photo1 from './components/photo1.png';
import Photo2 from './components/photo2.png';
import Photo3 from './components/photo3.png';
import Photo4 from './components/photo4.png';
import Photo5 from './components/photo5.png';
import {ReactComponent as Loading} from './components/loading.svg';

class MorePhotos extends React.Component {
    constructor(props) {
        super(props);
        this.alert = React.createRef();
    }

    state = {
        morephoto: [ ],
        inner: "",
        loadingcookies: <Loading/>
    }

    handleClick = () => {
        this.setState({morephoto: [
            {img: Photo2},
            {img: Photo3},
            {img: Photo4},
            {img: Photo5},
            {img: Photo2},
            {img: Photo3}
        ]});
        this.setState({inner: "more"});
        setTimeout(() => {
            this.setState({loadingcookies: "Кадров больше нет, зато есть печенька 🍪"});
            this.alert.current.className = this.alert.current.className + " expanded";
        }, 1000);
        
    }   

    render() {
        let arrPhotos = this.state.morephoto;
        return (
            <>
                <div ref={this.alert} className='morephoto-block'>
                    {arrPhotos.map((i, index) => 
                        <img src={i.img} key={index}/>
                    )}
                </div>
                <a className='red-btn photos' onClick={this.handleClick}>
                    {this.state.inner == "more" ? 
                        this.state.loadingcookies
                     : "Показать еще"}
                </a>
            </>
        )
    }
}

export default function Photos() {
    return (
        <>
            <div className='photo-block'>
                <div className='side'>
                    <img src={Photo1} />
                </div>
                <div className='side'>
                    <img src={Photo2} />
                    <img src={Photo3} />
                    <img src={Photo4} />
                    <img src={Photo5} />
                </div>
            </div>
            <MorePhotos />
        </>
    )
}
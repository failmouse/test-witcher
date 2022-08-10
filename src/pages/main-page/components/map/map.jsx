import React from 'react';
import './map.scss';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Point from './components/point.png';


export default function MainPage() {
    return (
        <div className='mapblock'>
            <YMaps>
                <Map width='100%' height='100%' 
                options={{
                    maxZoom: "15",
                    minZoom: "12"
                }}
                defaultState={{
                    center: [55.755821, 37.617635],
                    zoom: 12
                }}>
                    <Placemark options={{   
                            iconLayout: 'default#image',
                            iconImageHref: Point,
                            iconImageSize: [40, 40]
                    }}
                    geometry={[55.755821, 37.617635]} />
                    <Placemark
                        options={{   
                            iconLayout: 'default#image',
                            iconImageHref: Point,
                            iconImageSize: [40, 40]
                        }}
                    geometry={[55.752028, 37.550116]} />
                    <Placemark
                    options={{   
                        iconLayout: 'default#image',
                        iconImageHref: Point,
                        iconImageSize: [40, 40]
                    }}
                    geometry={[55.777951, 37.520461]} />
                </Map>
            </YMaps>

        </div>
    )
}
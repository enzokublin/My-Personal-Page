import React from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";
import './App.css';



// export class Abalone extends React.Component {



//     render() {
//         return (
//             <div className="abalone" >

//                 <h1 id="h1Abalone">Abalone</h1>


//             </div>
//         );
//     }
// } 

export function Abalone() {

    const [index, setIndex] = React.useState(0);

    const abaloneImages = [
        {
            src: "img/abalone1.png"
        },
        {
            src: "img/abalone.png"
        },
        {
            src: "img/abalone-js.png"
        },
        {
            src: "img/abalone-html.png"
        },
        {
            src: "img/abalone-css.png"
        }
    ];

    return (
        <div className="abalone" >

            <h1 id="h1Abalone">Abalone</h1>
            <Gallery
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}
            >
                {abaloneImages.map(img => (
                    <GalleryImage objectFit="contain" key={img.src} src={img.src} />
                ))}
            </Gallery>

        </div>
    )
}


import React from "react";
import { motion } from 'framer-motion';
import { images } from "../../constants";
import "./Gallery.scss"

function Gallery() {

    const imageArray = Object.values(images);


    return(

        <motion.section className="gallery" id="galeria">
            <div className="container">
                <h1>Te comparto algunas de mis fotos</h1>
                <div className="image-container">
                    {imageArray.map((image, index) => (
                            <div className="image" key={index}>
                                <img src={image} alt={`${image} from gallery`} />
                            </div>
                        ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Gallery;
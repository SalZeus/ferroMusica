import React from 'react';
import "./About.scss";
import { motion } from "framer-motion";
// para ser usado una vez el deploy sea funcional
// import {countapi} from 'countapi-js';


const About = () => {
  const videos = [
    {
      title: "MIRAME OTRA VEZ",
      description: "Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!",
      videoUrl: "https://www.youtube.com/embed/pvdZY4DbcHg?si=5N9v2qOjBUKmipOW"
    },
    {
      title: "CLANDESTINO",
      description: "Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!",
      videoUrl: "https://www.youtube.com/embed/_1zwWmC1G4Q?si=OHNpwnJUKOEtwOYM"
    },
    {
      title: "HOY NO",
      description: "Disfrutemos de momentos juntos! Estamos a mensaje de distancia!",
      videoUrl: "https://www.youtube.com/embed/3vUxRmhIljs?si=R1JgDequdZbYaTdW"
    },
    {
      title: "SECRETO",
      description: "Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!",
      videoUrl: "https://www.youtube.com/embed/vB8I-2uYd3o?si=PEddyQoq8pWkGhCX"
    },
  ];
  
  return (
    <>
      {/* <h2 className='hook' id="videos">
        Music
      </h2> */}
      
      <section className='videos'>
        {videos.map(({ title, videoUrl }, index) => (
         <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='video-item'
            key={index}
          >
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h2 className='title' style={{ marginTop: 20 }}>
              {title}
            </h2>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default About;
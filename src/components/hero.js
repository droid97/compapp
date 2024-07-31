import React from 'react';
import './hero.css'; // Adjust the path if `hero.css` is located in a different directory


import Carousel from 'react-bootstrap/Carousel';
let heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'The perfect design for your website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'Start Your Future Financial Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/img-hero3.jpg'),
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ]
  

export default function AppHero() {
    return (
        <section id="inicio" className="hero-block">
<Carousel data-bs-theme="dark">
    {
        heroData.map(hero => {
            return(
                <Carousel.Item key={hero.id}>
        <img
          className="d-block w-100"
          src={hero.image}
          alt={"Slide " + hero.id}
        />
        <Carousel.Caption>
          <h5 id="para-color1" >{hero.title}</h5>
          <p id="para-color2">{hero.description}</p>
          <a className='btn btn-primary' href={hero.link} >Mas Informacion</a>
        </Carousel.Caption>
      </Carousel.Item>
            )
        })
    }
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
            
  );
       
}
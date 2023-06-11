import stars from '../images/parallax/stars.svg';
import person from '../images/parallax/person.svg';
import '../styles/landing.scss';

import { ParallaxLayer } from "@react-spring/parallax";

function Landing(){
    return(
      <>
        <ParallaxLayer
            offset={0}
            speed={0}
            factor={5.2}
            style={{
              backgroundImage: `url(${stars})`,
              backgroundSize: 'cover',
            }}
        />

        <ParallaxLayer offset={0} speed={0.3} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <h1 className="intro-text">Hi! I'm Saurav.</h1>
            <img src={person} alt="Person" style={{ maxWidth: '50%' }} className="bobbing" />
        </ParallaxLayer>

      </>
    )
}

export default Landing;
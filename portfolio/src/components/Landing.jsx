import stars from '../images/parallax/stars.svg';

import '../styles/landing.scss';

import { ParallaxLayer } from "@react-spring/parallax";

function Landing(){
    return(
      <>
      <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: 'cover',
          }}
        />

      <ParallaxLayer offset={0} speed={0.5}>
          <h1 className="intro-text">Hi! I'm Saurav.</h1>
      </ParallaxLayer>
      </>
    )
}

export default Landing;
import bg from '../images/parallax/bg.png';
import sun from '../images/parallax/sun.png';
import birds from '../images/parallax/birds.png';
import moutain1 from '../images/parallax/mountain1.png';
import moutain2 from '../images/parallax/mountain2.png';
import tree1 from '../images/parallax/tree1.png';
import ground from '../images/parallax/ground.png';
import tree2 from '../images/parallax/tree2.png';

import '../styles/landing.scss';

import { ParallaxLayer } from "@react-spring/parallax";

function Landing(){
    return(
      <>
      <ParallaxLayer offset={0} speed={0.3} style={{ backgroundImage: `url(${bg})`}} />
      <ParallaxLayer offset={0} speed={0.5} style={{ backgroundImage: `url(${sun})`}} />
      <ParallaxLayer offset={0} speed={1.5} factor={2} style={{ backgroundImage: `url(${birds})`}} />
      <ParallaxLayer offset={0} speed={0.8} style={{ backgroundImage: `url(${moutain1})`}}/>
      <ParallaxLayer offset={0} speed={0.6} style={{ backgroundImage: `url(${moutain2})`}}/>
      <ParallaxLayer offset={0} speed={0.4} style={{ backgroundImage: `url(${tree1})`}} />
      <ParallaxLayer offset={0} speed={0.2}>
          <h1 className="intro-text">Hi! I'm Saurav.</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9} style={{ backgroundImage: `url(${ground})`}} />
      <ParallaxLayer offset={0} speed={0.7} style={{ backgroundImage: `url(${tree2})`}} />
      </>
    )
}

export default Landing;
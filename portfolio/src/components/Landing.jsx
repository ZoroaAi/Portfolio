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
      <ParallaxLayer offset={0} speed={0.3}>
          <div className='animation_layer' style={{ backgroundImage: `url(${bg})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
          <div className='animation_layer' style={{ backgroundImage: `url(${sun})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5} factor={2}>
          <div className='animation_layer' style={{ backgroundImage: `url(${birds})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.8}>
          <div className='animation_layer' style={{ backgroundImage: `url(${moutain1})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
          <div className='animation_layer' style={{ backgroundImage: `url(${moutain2})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
          <div className='animation_layer' style={{ backgroundImage: `url(${tree1})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
          <h1 className="intro-text">Hi! I'm Saurav.</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9}>
          <div className='animation_layer' style={{ backgroundImage: `url(${ground})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7}>
          <div className='animation_layer' style={{ backgroundImage: `url(${tree2})`}}></div>
      </ParallaxLayer>
      </>
    )
}

export default Landing;
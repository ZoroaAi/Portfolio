import { expose } from 'comlink';
import * as random from "maath/random/dist/maath-random.esm";

const actions = {
    generateStars: () => random.inSphere(new Float32Array(1000), { radius: 1.2 })
};
  
expose(actions);
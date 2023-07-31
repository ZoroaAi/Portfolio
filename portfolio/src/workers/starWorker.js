import { expose } from 'comlink';

const actions = {
    generateStars: () => {
        const starCount = 1000;
        const radius = 100;
        const stars = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
            stars[i * 3] = (Math.random() - 0.5) * 2 * radius; // x
            stars[i * 3 + 1] = (Math.random() - 0.5) * 2 * radius; // y
            stars[i * 3 + 2] = (Math.random() - 0.5) * 2 * radius; // z
        }
        console.log(stars);
        return stars;
    }
};
  
expose(actions);
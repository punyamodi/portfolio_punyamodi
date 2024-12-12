import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { styles } from "../styles";
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div
        className={`absolute inset-0 top-[120px]  max-w-14xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div style={{ marginLeft: '20px' }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Punya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I design and develop scalable full-stack web applications, <br className='sm:block hidden' />
            integrating advanced AI models to create innovative and <br className='sm:block hidden' />
            efficient data-driven solutions.
          </p>
        </div>

      </div>

      <div className="w-full h-full absolute inset-0">
      <Canvas className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
        <Suspense fallback={<CanvasLoader />}>
          {/* To hide controller */}
          <Leva hidden />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={53} near={0.1} far={1000} />

          <HeroCamera isMobile={isMobile}>
            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
          </HeroCamera>

          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Rings scale={[0.8, 0.8, 0.8]} position={[sizes.ringPosition[0], sizes.ringPosition[1] - 0.5, sizes.ringPosition[2]]} />
            <Cube position={sizes.cubePosition} />
          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>

      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
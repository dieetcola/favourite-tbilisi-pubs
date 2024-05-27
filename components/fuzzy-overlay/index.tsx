import { motion } from 'framer-motion';

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      style={{
        backgroundImage: 'url(/images/black-noise.png)',
      }}
      className='pointer-events-none absolute -inset-[100%] opacity-[6%]'
    />
  );
};

export default FuzzyOverlay;

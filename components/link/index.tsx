import React, { useRef } from 'react';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';

import { LinkProps } from 'types';
import { cn } from 'lib/utils';
import { FiArrowRight } from 'react-icons/fi';

const Link = (props: LinkProps) => {
  const { name, subheading, image, href, location_id, isLast } = props;

  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref.current !== null) {
      const rect = ref.current?.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial='initial'
      whileHover='whileHover'
      className={cn(
        isLast ? '' : 'border-y-2',
        'group relative py-28 grid grid-cols-3 sm:grid-cols-3 gap-4 uppercase  border-neutral-50 transition-colors duration-500 hover:border-neutral-50 md:py-24',
      )}>
      <span className='hidden lg:block -tracking-2relative z-10 text-6xl font-bold text-white transition-colors duration-500 group-hover:text-neutral-50 md:text-8xl'>
        #00{location_id}
      </span>
      <span className='w-svw relative z-10 -tracking-3 leading-[6rem] text-[73px] font-bold text-white transition-colors duration-500 group-hover:text-neutral-50 md:text-8xl'>
        {name}
      </span>

      <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-12.5deg' },
          whileHover: { scale: 1, rotate: '12.5deg' },
        }}
        transition={{ type: 'spring' }}
        src={image}
        className='hidden lg:block absolute z-10 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64'
        alt={`Image representing a link for ${subheading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className='hidden lg:block relative z-10 justify-self-end '>
        <FiArrowRight className='text-8xl text-neutral-50' />
      </motion.div>
    </motion.a>
  );
};

export default Link;
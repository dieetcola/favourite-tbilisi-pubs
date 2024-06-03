import React, { useRef } from 'react';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

import { LinkProps } from 'types';

export function Link(props: LinkProps) {
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
      className='motion-a group relative'>
      <span className='hidden lg:block'>#00{location_id}</span>
      <span className='w-svw'>{name}</span>
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
        className='motion-img'
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
        className='motion-div'>
        <FiArrowRight className='text-8xl text-neutral-50' />
      </motion.div>
    </motion.a>
  );
}

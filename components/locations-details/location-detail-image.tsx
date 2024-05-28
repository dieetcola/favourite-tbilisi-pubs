import React from 'react';
import Image from 'next/image';

export function LocationDetailImage({ ...props }: { src: string }) {
  return (
    <div className='relative h-96'>
      <Image
        {...props}
        alt='Mountains'
        fill
        sizes='(min-width: 808px) 50vw, 100vw'
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

import React from 'react';
import TestimonyCarousel from './TestimonyCarousel';
import Image from 'next/image';

const Testimony = () => {
	return (
		<div className=' bg-secondary py-[4.06rem] flex flex-col md:flex-row gap-y-5 justify-between px-4 md:px-40 md:h-[80vh]'>
			<Image
				src={`/images-v2/icons/star.svg`}
				alt='human'
				height={150}
				width={150}
				className='z-10 self-start inline-block animate-pulse mix-blend-exclusion'
			/>
			<div className=' md:basis-3/5 '>
				<h2 className='text-white font-bold text-4xl text-center mb-8 '>
					What Our Graduates Say
				</h2>
				<TestimonyCarousel />
			</div>
			<Image
				src={`/images-v2/icons/elipse.svg`}
				alt='human'
				height={78}
				width={89}
				className='z-10 self-end inline-block animate-spin mix-blend-exclusion'
			/>
		</div>
	);
};

export default Testimony;

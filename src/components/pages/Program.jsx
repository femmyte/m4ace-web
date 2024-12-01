import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
// import ProgramCard from "../common/ProgramCard";
import Animation from '../common/Animation';

const ProgramCard = ({ img, title, content }) => {
	return (
		<div
			className=' gap-4 flex flex-col text-[#220057 shadow rounded-2xl'
			// style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
		>
			<div className='flex flex-col items-center justify-center bg-cream rounded-2xl p-6 h-[20.75rem]'>
				<img src={`/images-v2/illustration/${img}.svg`} alt={title} />
				<button className='py-[0.625rem] px-[1rem] bg-white text-black rounded-xl shadow self-end justify-self-end  text-xl font-medium'>
					Apply Now
				</button>
			</div>
			<h3 className='font-[600] text-[1.5rem] leading-[2.1rem] mt-1 md:mt-4  px-4'>
				{title}
			</h3>
			<p className='mt-[0.75rem] text-[#1E1E1E] text-lg font-normal leading-7 pb-2 px-4'>
				{content}
			</p>
		</div>
	);
};
const Program = () => {
	return (
		<section className='py-[30px]'>
			<div className='w-full md:w-[620px] mb-[30px] text-center mx-auto px-6'>
				<h1 className='font-[700] text-[24px] md:text-[30px] leading-[42px] text-[#222057] text-center mb-4'>
					We have programs for everyone
				</h1>
				<p className='font-[400] text-[18px] leading-[27px] text-[#1E1E1E]'>
					Sign up now and receive a complimentary Data Sub, absolutely
					FREE, To unlock your Tech journey
				</p>
			</div>
			<div
				id='programs'
				className='grid grid-cols-1 md:grid-cols-3 gap-[2rem] px-6 md:pl-[164px] md:pr-[110px] py-[30px] w-screen bg-white'
			>
				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='fronntend'
						title='Frontend Dev.'
						content={
							'Master the art of building responsive and interactive user interfaces for websites and web applications.'
						}
					/>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<ProgramCard
						img='backend'
						title='Backend Dev.'
						content={
							'Delve into the server-side of web development. Learn about databases, server management, and server-side programming languages.'
						}
					/>
				</Animation>
				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='cloud'
						title='Cloud Computing'
						content={
							'Explore the principles of user-centered design, prototyping, and iteration.'
						}
					/>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<ProgramCard
						img='ui'
						title='Product Design'
						content={
							'Explore the principles of user-centered design, prototyping, and iteration.'
						}
					/>
				</Animation>
				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='content'
						title='Content Writing'
						content={
							'Delve into the server-side of web development. Learn about databases, server management, and server-side programming languages.'
						}
					/>
				</Animation>
				{/* <Animation style='fade-right' placement='center-center'>
					<ProgramCard img='cybersecurity' title='Cybersecurity' />
				</Animation> */}
				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='brand'
						title='Brand Identity Design'
						content={
							'Explore the principles of user-centered design, prototyping, and iteration.'
						}
					/>
				</Animation>
			</div>
		</section>
	);
};

export default Program;

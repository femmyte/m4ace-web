import Animation from '@/components/common/Animation';
import React from 'react';
// className={
// 			first
// 				? 'border-r-2 border-r-primary rounded-tl-[0.75rem]'
// 				: 'border-l-2 border-l-primary rounded-tr-[0.75rem]'
// 		}
const Card = ({ first, step, title, content }) => (
	<div
		className={`
			${first ? ' rounded-tl-[0.75rem]' : 'rounded-r-[0.75rem]'} bg-primary`}
		style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
	>
		<div className=' py-[0.625rem] px-[2.5rem] '>
			<h3 className='text-white text-2xl font-normal leading-8'>
				Step {step}
			</h3>
		</div>
		<div
			className={`
			${first ? 'mr-2' : 'ml-2'} py-4 px-10 bg-white`}
		>
			<h3 className='text-black text-2xl font-semibold mb-[0.75rem] leading-9'>
				{title}
			</h3>
			<p className='text-[#1E1E1E] text-xl font-normal leading-8'>
				{content}
			</p>
		</div>
	</div>
);
const HowToJoin = () => {
	return (
		<div className='px-4 md:px-[10.8rem] py-[4.38rem]'>
			<h2 className='text-primary text-center text-4xl font-bold leading-10'>
				How To Join the Cohort
			</h2>
			<section className='mt-8 mb-16'>
				<Animation style='fade-right' placement='center-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 mb-4 md:mb-0 '>
						<Card
							first
							step={1}
							title={'Express Your Interest'}
							content={
								'Fill out our online form to show your interest. Await further instructions from our team.'
							}
						/>
						<div />
					</div>
				</Animation>
				<Animation style='fade-left' placement='center-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 mb-4 md:mb-0'>
						<div />
						<Card
							step={2}
							title={'Selection Interview'}
							content={
								'Participate in an interview with our team. Demonstrate your passion and readiness to join.'
							}
						/>
					</div>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 mb-4 md:mb-0'>
						<Card
							first
							step={3}
							title={'Acceptance Notification'}
							content={
								'Await notification regarding your acceptance. Get ready to embark on your boot camp journey.'
							}
						/>
						<div />
					</div>
				</Animation>
				<Animation style='fade-left' placement='center-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 mb-4 md:mb-0'>
						<div />
						<Card
							step={4}
							title={'Complete Enrollment'}
							content={
								'Upon acceptance, finalize enrollment to secure your spot. Take the next step towards your tech career'
							}
						/>
					</div>
				</Animation>
			</section>
			<div className='flex items-center justify-center w-full py-[0.525rem] px-[2.5rem] rounded-b-xl bg-primary'>
				<p className='text-2xl font-semibold leading-8 text-white text-center'>
					Ready to Begin Your Journey?
				</p>
			</div>
		</div>
	);
};

export default HowToJoin;

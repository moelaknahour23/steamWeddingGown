'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Banner = () => {
	return (
		<div id='home-section' className='bg-lightpink'>
			{/* <div className='mx-auto max-w-7xl pt-20 sm:pb-24 px-6'> */}
			<div className='mx-auto max-w-7xl pt-20 px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
					<div className='col-span-6 flex flex-col justify-center'>
						<Fade direction={'left'} delay={400} cascade damping={1e-1} triggerOnce={true}>
							<h1 className='text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center'>
								Welcome to <br /> Steaming by Toni
							</h1>
						</Fade>
						<Fade direction={'left'} delay={800} cascade damping={1e-1} triggerOnce={true}>
							<p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
								Enhance your wedding day with our professional on-site steaming service. Our experienced team will come to your location to expertly steam wedding
								gowns, tuxedos, and other garments, ensuring a polished and fresh appearance so you can feel confident and beautiful on your special day.
							</p>
						</Fade>
						<Fade direction={'left'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
							<div className='md:flex align-middle justify-center lg:justify-start'>
								<button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'>
									<Link href='#cook-section'>Booking</Link>
								</button>
								<button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink'>
									<Link href='#about-section'>Contact Us</Link>
								</button>
							</div>
						</Fade>
					</div>

					<div className='col-span-6 flex justify-center relative'>
						<Fade direction={'right'} delay={800} cascade damping={1e-1} triggerOnce={true}>
							<Image src='/images/Banner/weddingExpert.png' alt='nothing' width={1000} height={805} />{' '}
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

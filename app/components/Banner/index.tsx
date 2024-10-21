'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Banner = () => {
	return (
		<div>
			<div id='home-section' className='bg-lightpink flex items-center'>
				<div className='mx-auto max-w-7xl pt-4 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-1'>
						<div className='col-span-6 flex flex-col justify-center'>
							<h1 className='text-2xl lg:text-3xl font-semibold mb-5 text-lightgrey text-center lg:text-start'>
								Welcome to <br /> Bride&apos;s Dream
							</h1>

							<p className='text-sm sm:text-base lg:text-lg text-grey font-normal mb-10 text-center lg:text-start'>
								Enhance your wedding day with our professional on-site steaming service. Our experienced team will come to your location to expertly steam wedding
								gowns, tuxedos, and other garments, ensuring a polished and fresh appearance so you can feel confident and beautiful on your special day.
							</p>

							<div className='md:flex align-middle justify-center lg:justify-start'>
								<button className='text-lg w-full md:w-auto font-medium rounded-full text-white py-4 px-5 bg-pink lg:px-10 mr-4'>
									<Link href='#cook-section'>Booking</Link>
								</button>
								<button className='flex border w-full md:w-auto mt-4 md:mt-0 border-pink justify-center rounded-full text-lg font-medium items-center py-4 px-8 text-pink hover:text-white hover:bg-pink'>
									<Link href='#about-section'>Contact Us</Link>
								</button>
							</div>
						</div>

						<div className='col-span-6 flex justify-center relative'>
							<Image src='/images/Banner/weddingExpert.png' alt='Wedding expert preparing dress' width={800} height={640} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

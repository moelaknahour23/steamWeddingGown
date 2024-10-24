'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from 'react-awesome-reveal';

interface cardDataType {
	imgSrc: string;
	heading: string;
	subheading: string;
	link: string;
}

const cardData: cardDataType[] = [
	{
		imgSrc: '/images/Features/weddingGown.jpg',
		heading: 'Wedding Gown Steaming',
		subheading: 'Professional on-site steaming service to ensure wedding gowns are wrinkle-free and look perfect for the big day.',
		link: 'Learn more',
	},
	{
		imgSrc: '/images/Features/tuxedoSteamingLogo.png',
		heading: 'Tuxedo Steaming',
		subheading: 'Expert steaming for tuxedos, providing a crisp and clean appearance for grooms and groomsmen.',
		link: 'Learn more',
	},
	{
		imgSrc: '/images/Features/bridal.jpg',
		heading: 'Bridal Party Attire',
		subheading: 'Steaming services for bridesmaids dresses and other bridal party garments, ensuring a polished look for all members.',
		link: 'Learn more',
	},

	{
		imgSrc: '/images/Features/otherFormalDressSteaming.jpg',
		heading: 'Other Formal Dress Steaming',
		subheading: 'On-site steaming for various formal dresses, ensuring all attire looks immaculate for special occasions.',
		link: 'Learn more',
	},
];

const Services = () => {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		// Set a timeout to change the visibility state after the component mounts
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100); // Adjust the timeout duration as needed

		// Clean up the timer on component unmount
		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			{isVisible && (
				<div className='mx-auto max-w-8xl px-12  py-12' id='services-section'>
					<div className='text-center mb-14'>
						<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
							<p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Services</p>
						</Fade>
					</div>

					<div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16'>
						{cardData.map((items, i) => (
							<div className='card-b relative rounded-3xl flex flex-col items-center ' key={i}>
								<div className='work-img-bg rounded-full flex justify-center mb-0'>
									<Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} />
								</div>
								<h3 className='text-2xl text-black font-semibold text-center mt-0 mb-0 pt-4 '>{items.heading}</h3>
								<p className='text-md font-normal text-black text-center text-opacity-50 mt-4'>{items.subheading}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Services;

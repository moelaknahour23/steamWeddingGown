import Link from 'next/link';
import Image from 'next/image';

interface ProductType {
	id: number;
	section: string;
	link: string[];
}

interface socialLinks {
	imgSrc: string;
	link: string;
	width: number;
}

const socialLinks: socialLinks[] = [
	{
		imgSrc: 'https://img.icons8.com/fluent/30/000000/facebook-new.png',
		link: 'https://facebook.com',
		width: 10,
	},
	{
		imgSrc: 'https://img.icons8.com/fluent/30/000000/instagram-new.png',
		link: 'https://instagram.com',
		width: 14,
	},
];

const products: ProductType[] = [
	{
		id: 1,
		section: 'Company',
		link: ['About'],
	},
	{
		id: 2,
		section: 'Contact',
		link: ['Services'],
	},
	{
		id: 3,
		section: 'More',
		link: ['Pricing'],
	},
	{
		id: 3,
		section: 'More',
		link: ['Contact'],
	},
];

const footer = () => {
	return (
		<footer className='flex flex-col space-y-10 justify-center m-10  border-t border-t-bordertop'>
			<div className='space-y-10  pt-6'>
				<nav className='flex justify-center flex-wrap gap-8 text-gray-500 font-medium'>
					{products.map((product) => (
						<div key={product.id} className='flex flex-col '>
							<ul className='flex gap-6'>
								{product.link.map((link: string, index: number) => (
									<li key={index}>
										<Link href='/' className='text-footerlinks text-base font-normal opacity-70 hover:text-black'>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</nav>

				<div className='flex justify-center space-x-4'>
					{socialLinks.map((item, index) => (
						<a key={index} href={item.link} target='_blank' rel='noopener noreferrer'>
							<img src={item.imgSrc} />
						</a>
					))}
				</div>
				<p className='text-center text-gray-700 font-medium'>
					©2024 - All Rights Reserved by{' '}
					<Link href='https://bridesdream.org' target='_blank' className='font-bold hover:underline'>
						bridesdream.org
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default footer;

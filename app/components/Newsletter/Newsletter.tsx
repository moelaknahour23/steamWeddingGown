// components/Pricing.js
import React from 'react';

const Pricing = () => {
	return (
		<section className='py-12 bg-gray-100 px-12'>
			<div className='container mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-8'>Choose Your Plan</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
					{/* Package 1 */}
					<div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out'>
						<h3 className='text-2xl font-semibold mb-4'>Basic</h3>
						<p className='text-gray-500 mb-4'>Ideal for personal use.</p>
						<div className='text-3xl font-bold mb-4'>
							$19<span className='text-sm text-gray-500'>/month</span>
						</div>
						<ul className='mb-6'>
							<li className='text-gray-600 mb-2'>10 GB Storage</li>
							<li className='text-gray-600 mb-2'>Unlimited Bandwidth</li>
							<li className='text-gray-600'>Basic Support</li>
						</ul>
						<a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700'>
							Get Started
						</a>
					</div>

					{/* Package 2 */}
					<div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out'>
						<h3 className='text-2xl font-semibold mb-4'>Standard</h3>
						<p className='text-gray-500 mb-4'>Perfect for small teams.</p>
						<div className='text-3xl font-bold mb-4'>
							$49<span className='text-sm text-gray-500'>/month</span>
						</div>
						<ul className='mb-6'>
							<li className='text-gray-600 mb-2'>50 GB Storage</li>
							<li className='text-gray-600 mb-2'>Unlimited Bandwidth</li>
							<li className='text-gray-600'>Priority Support</li>
						</ul>
						<a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700'>
							Get Started
						</a>
					</div>

					{/* Package 3 */}
					<div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out  border-blue-600'>
						<h3 className='text-2xl font-semibold mb-4'>Premium</h3>
						<p className='text-gray-500 mb-4'>Great for growing businesses.</p>
						<div className='text-3xl font-bold mb-4'>
							$99<span className='text-sm text-gray-500'>/month</span>
						</div>
						<ul className='mb-6'>
							<li className='text-gray-600 mb-2'>200 GB Storage</li>
							<li className='text-gray-600 mb-2'>Unlimited Bandwidth</li>
							<li className='text-gray-600'>24/7 Support</li>
						</ul>
						<a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700'>
							Get Started
						</a>
					</div>

					{/* Package 4 */}
					<div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out'>
						<h3 className='text-2xl font-semibold mb-4'>Enterprise</h3>
						<p className='text-gray-500 mb-4'>Best for large organizations.</p>
						<div className='text-3xl font-bold mb-4'>
							$199<span className='text-sm text-gray-500'>/month</span>
						</div>
						<ul className='mb-6'>
							<li className='text-gray-600 mb-2'>1 TB Storage</li>
							<li className='text-gray-600 mb-2'>Unlimited Bandwidth</li>
							<li className='text-gray-600'>Dedicated Support</li>
						</ul>
						<a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700'>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;

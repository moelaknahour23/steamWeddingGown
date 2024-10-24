'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ContactForm = () => {
	return (
		<div className='flex justify-center items-center min-h-screen p-6'>
			<div className='bg-white shadow-md rounded-lg p-8 max-w-6xl flex flex-col md:flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8'>
				{/* Left Form */}
				<div className='w-full  lg:w-2/3'>
					<h2 className='text-3xl font-semibold mb-4'>Contact Us</h2>
					<p className='text-gray-600 mb-6'>
						We are deeply committed to delivering unparalleled service and unwavering support to ensure your experience exceeds expectations.
					</p>

					<form className='space-y-4'>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium text-gray-700'>First Name</label>
								<input type='text' placeholder='First Name' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700'>Last Name</label>
								<input type='text' placeholder='Last Name' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700'>Email</label>
							<input type='email' placeholder='Email' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700'>Description</label>
							<textarea placeholder='Message' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' rows={4} />
						</div>

						<button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
							Submit
						</button>
					</form>
				</div>

				{/* Right Info Section */}
				<div className='w-full lg:w-2/3 space-y-4'>
					{/* Address Section */}
					<div className='bg-blue600 text-white p-6 rounded-lg flex items-center space-x-4'>
						<FontAwesomeIcon icon={faMapMarkerAlt} className='h-8 w-8 text-white' />
						<div>
							<h3 className='font-semibold text-lg'>Address</h3>
							<p className='text-sm'>
								3680 Schamberger Pass, North Cataline <br />
								01984-8381
							</p>
						</div>
					</div>

					{/* Contact Section */}
					<div className='bg-gray100 p-6 rounded-lg flex items-center space-x-4'>
						<FontAwesomeIcon icon={faPhone} className='h-8 w-8 text-blue600' />
						<div>
							<h3 className='font-semibold text-lg'>Contact</h3>
							<p className='text-sm'>You can contact us at:</p>
							<p className='text-sm'>
								<Link className='text-blue400' href='tel:+6192191936'>
									619-219-1936
								</Link>
							</p>
						</div>
					</div>

					{/* Email Section */}
					<div className='bg-gray100 p-6 rounded-lg flex items-center space-x-4'>
						<FontAwesomeIcon icon={faEnvelope} className='h-8 w-8 text-blue600' />
						<div>
							<h3 className='font-semibold text-lg'>Email</h3>
							<p className='text-sm'>We&apos;re usually replying within 24 hours</p>
							<p>
								<Link className='text-blue400 text-sm' href='mailto:pagedone1234@gmail.com'>
									pagedone1234@gmail.com
								</Link>
							</p>
						</div>
					</div>

					{/* Working Hours Section */}
					<div className='bg-gray100 p-6 rounded-lg flex items-center space-x-4'>
						<FontAwesomeIcon icon={faClock} className='h-8 w-8 text-blue600' />
						<div>
							<h3 className='font-semibold text-lg'>Working Hours</h3>
							<p className='text-sm'>Mon to Sunday - 9:00 am to 7:00 pm</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;

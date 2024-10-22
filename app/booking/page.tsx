'use client';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Booking = () => {
	const form = useRef<HTMLFormElement | null>(null); // Initialize the ref

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		location: '',
		date: '',
		time: '',
		service1: '',
		service2: '',
		service3: '',
		service4: '',
		message: '',
	});

	const formatPhoneNumber = (value: string) => {
		// Remove all non-numeric characters
		const phoneNumber = value.replace(/[^\d]/g, '');

		// Format based on length
		if (phoneNumber.length <= 3) {
			return phoneNumber;
		} else if (phoneNumber.length <= 6) {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
		} else {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
		}
	};

	const handleChange = (e: any) => {
		const { id, value, checked, type } = e.target;

		// If the input is a checkbox, toggle the value based on checked status
		if (type === 'checkbox') {
			setFormData((prevState) => ({
				...prevState,
				[id]: checked ? value : '', // Set value if checked, otherwise set to empty string
			}));
		} else if (id === 'phone') {
			// Apply phone number formatting for phone input
			const formattedPhone = formatPhoneNumber(value);
			setFormData((prevState) => ({
				...prevState,
				[id]: formattedPhone,
			}));
		} else {
			// For other inputs, just set the value
			setFormData((prevState) => ({
				...prevState,
				[id]: value,
			}));
		}
	};
	const templateParams = {
		to_name: 'Mahsa',
		from_name: formData.name,
		from_email: formData.email,
		from_phone: formData.phone,
		from_weddingLocation: formData.location,
		from_weddingDate: formData.date,
		from_weddingTime: formData.time,
		from_services1: formData.service1.length === 0 ? 'NA' : formData.service1,
		from_services2: formData.service2.length === 0 ? 'NA' : formData.service2,
		from_services3: formData.service3.length === 0 ? 'NA' : formData.service3,
		from_services4: formData.service4.length === 0 ? 'NA' : formData.service4,
		from_message: formData.message,
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// Handle form submission
		console.log(formData);

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY ?? ''
			)
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<>
			<div className='max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden'>
				<div className='text-2xl py-4 px-6 bg-gray-900 text-white  bg-pink  text-center font-bold uppercase'>Book an Appointment</div>
				<form className='py-4 px-6' ref={form} onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='name'>
							Name
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							type='text'
							placeholder='Enter your name'
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='email'>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							type='email'
							placeholder='Enter your email'
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='phone'>
							Phone Number
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='phone'
							type='tel'
							placeholder='Enter your phone number'
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='location'>
							Wedding Location
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='location'
							type='location'
							placeholder='Enter your wedding location'
							value={formData.location}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='date'>
							Wedding Date
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='date'
							type='date'
							value={formData.date}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='time'>
							Wedding Time
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='time'
							type='time'
							value={formData.time}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700 font-medium mb-2 text-pink'>Services</label>
						<div className='f-mx-2'>
							<div className='px-2 '>
								<label htmlFor='service1' className='block text-gray-700 font-medium mb-2'>
									<input type='checkbox' id='service1' value='Wedding Gown Steaming' checked={!!formData.service1} className='mr-2' onChange={handleChange} />
									Wedding Gown Steaming
								</label>
							</div>
							<div className='px-2 '>
								<label htmlFor='service2' className='block text-gray-700 font-medium mb-2'>
									<input type='checkbox' id='service2' value='Tuxedo Steaming' checked={!!formData.service2} className='mr-2' onChange={handleChange} />
									Tuxedo Steaming
								</label>
							</div>
							<div className='px-2 '>
								<label htmlFor='service3' className='block text-gray-700 font-medium mb-2'>
									<input type='checkbox' id='service3' value='Bridal Party Attire' checked={!!formData.service3} className='mr-2' onChange={handleChange} />
									Bridal Party Attire
								</label>
							</div>
							<div className='px-2 '>
								<label htmlFor='service4' className='block text-gray-700 font-medium mb-2'>
									<input
										type='checkbox'
										id='service4'
										value='Other Formal Dress Steaming'
										checked={!!formData.service4}
										className='mr-2'
										onChange={handleChange}
									/>
									Other Formal Dress Steaming
								</label>
							</div>
						</div>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700  mb-2 text-pink' htmlFor='message'>
							Message
						</label>
						<textarea
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='message'
							rows={4}
							placeholder='Enter any additional information'
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</div>
					<div className='flex items-center justify-center mb-4'>
						<button className='bg-gray-900 text-white bg-pink  py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline' type='submit'>
							Book Appointment
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Booking;

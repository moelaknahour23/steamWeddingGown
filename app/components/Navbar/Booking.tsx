'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Signin = () => {
	const router = useRouter();

	return (
		<>
			<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
				<div className='hidden md:block'>
					<button
						type='button'
						className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink'
						onClick={() => router.push('/booking')}
					>
						Booking
					</button>
				</div>
			</div>
		</>
	);
};

export default Signin;

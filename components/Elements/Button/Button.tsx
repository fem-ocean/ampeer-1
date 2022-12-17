import defaultColors from '@/constant/colors';
import React from 'react';
import clsx from 'clsx';

const sizes = {
	small: 'px-4 py-1.5',
	medium: 'px-6 py-2.5',
	large: 'px-8 py-4',
};

const colors = {
	primary: 'bg-primary text-white hover:bg-primary-dark ',
	secondary: 'bg-secondary text-white ',
	danger: 'bg-red-800 text-white ',
};

type ButtonProps = {
	size: keyof typeof sizes;
	color: keyof typeof colors;
	type: 'button' | 'submit';
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
	const { size, color, type = 'button', children } = props;
	return (
		<button
			type={type}
			className={clsx([
				'inline-block leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out',
				sizes[size],
				colors[color],
			])}
		>
			{children}
		</button>
	);
};

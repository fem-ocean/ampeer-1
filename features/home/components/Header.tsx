import { Button } from '@/components/Elements';
import React from 'react';
import { HeaderContainer, TextBox } from './index.styled';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
	return (
		<HeaderContainer
			backgroundImage={
				'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
			}
		>
			<TextBox>
				<div className="background" />
				<h3 className=" font-medium leading-tight text-1xl mt-0 mb-2 text-primary">Quality Apartment Rental</h3>
				<h1 className="font-header font-bold  text-9xl text-white">Welcome to Ampeer</h1>
			</TextBox>
			<Button size="large" color={'primary'} type={'button'}>
				See More
			</Button>
		</HeaderContainer>
	);
};

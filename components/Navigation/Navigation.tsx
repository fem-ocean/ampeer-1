import React from 'react';
import { AppLogo, Nav, NavButton, NavCheck, NavIcon, NavigationContainer } from './index.styled';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { navData } from './navigationContent';
import Link from 'next/link';

export const Navigation = () => {
	return (
		<NavigationContainer>
			<AppLogo>
				<Image alt="ampeer" src={Logo} fill />
			</AppLogo>
			<NavCheck type="checkbox" className="nav-checkbox" id="nav-toggle" />
			<NavButton className="nav-button" htmlFor="nav-toggle">
				<NavIcon className="nav-icon">&nbsp;</NavIcon>
			</NavButton>
			<Nav>
				<ul>
					{navData.map((navItem, index) => (
						<Link href={navItem} key={index} passHref>
							<li>{navItem}</li>
						</Link>
					))}
				</ul>
			</Nav>
		</NavigationContainer>
	);
};

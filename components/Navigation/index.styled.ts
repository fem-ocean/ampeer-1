import { responsive } from '@/utils/responsiveDevice';
import styled from '@emotion/styled';
import { ibmPlexSansCondensed } from '@/constant/font';

export const NavigationContainer = styled.div`
	display: grid;
	grid-column: full-start / full-end;
	height: var(--nav-height);
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	z-index: 10;
	padding-top: 1rem;

	${responsive.tabPort} {
		grid-template-rows: 1fr;
		padding: 0;
		grid-template-columns: 1fr max-content;
		height: var(--nav-height);
	}
`;

export const AppLogo = styled.div`
	position: relative;

	img {
		width: 6rem;
		height: 6rem;
		object-fit: contain;
	}
`;

export const Nav = styled.nav`
	display: grid;
	position: relative;
	font-family: ${ibmPlexSansCondensed.style.fontFamily};

	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: relative;

		li {
			color: white;
			font-weight: bold;
			font-size: 1.3rem;
		}
	}

	${responsive.tabPort} {
		grid-template-rows: 1fr;
		grid-template-columns: repeat(2, 1fr);
		position: fixed;
		left: 0;
		top: var(--nav-height);
		z-index: 20;
		width: 0;
		height: 100vh;
		transition: all 1s;
	}
`;

// Mobile Navigation styling

export const NavButton = styled.label`
	width: 3rem;
	height: 3rem;
	justify-content: center;
	align-items: center;
	border: var(--color-primary) 2px solid;
	cursor: pointer;
	display: none;
	align-self: center;
	justify-self: center;
	margin: 0 2rem;

	${responsive.tabPort} {
		display: flex;

		&:hover {
			background-color: rgba(198, 153, 99, 0.3);
		}
	}
`;

export const NavIcon = styled.span`
	position: relative;

	&,
	&::before,
	&::after {
		display: block;
		width: 2rem;
		height: 5px;
		background-color: var(--color-primary);
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
	}

	&::before {
		top: -0.6rem;
	}

	&::after {
		top: 0.6rem;
	}
`;

export const NavCheck = styled.input`
	display: none;

	&:checked + .nav-button .nav-icon {
		background-color: transparent;

		&::before,
		&::after {
			top: 0;
		}

		&::before {
			rotate: 45deg;
		}

		&::after {
			rotate: -45deg;
		}
	}

	&:checked ~ nav {
		width: 100vw;
	}
`;

import styled from '@emotion/styled';

type Props = {
	backgroundImage: string;
};

export const HeaderContainer = styled.header<Props>`
	background-image: linear-gradient(rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.8)),
		url(${(props) => props.backgroundImage});
	background-size: cover;
	background-position: center;
	object-fit: cover;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const TextBox = styled.div`
	width: 90%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	position: relative;

	& > * {
		position: relative;
		z-index: 10;
	}
	.background {
		width: 20rem;
		height: 20rem;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		z-index: 1;
		left: 50%;
		background-color: var(--color-secondary);
		transform: translate(-50%, -50%);
	}
`;

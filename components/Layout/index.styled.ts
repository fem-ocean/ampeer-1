import { responsive } from '@/utils/responsiveDevice';
import styled from '@emotion/styled';

export const Container = styled.div`
	display: grid;
	background-color: var(--color-secondary);
	height: 100vh;
	position: relative;
	grid-template-columns:
		[full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
		[center-start] minmax(6rem, 1fr) [full-end];
`;

export const Main = styled.main``;

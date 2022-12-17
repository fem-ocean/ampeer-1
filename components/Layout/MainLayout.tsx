import Head from 'next/head';
import React from 'react';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { Container, Main } from './index.styled';

type MainLayoutProps = {
	title?: string;
	description?: string;
	children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
	const { title = '', description = '', children } = props;

	return (
		<Container>
			<Head>
				<title>{`${title} - Ampeer`}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<Main>{children}</Main>
			{/* <Footer /> */}
		</Container>
	);
};

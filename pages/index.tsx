import { MainLayout } from '@/components/Layout';
import { Header } from '@/features/home';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<MainLayout title="Home">
			<Header />
		</MainLayout>
	);
}

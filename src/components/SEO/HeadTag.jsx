import Head from "next/head";

const HeadTag = ({ title, description, keywords }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content="Zen Huzaini" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
};

export default HeadTag;

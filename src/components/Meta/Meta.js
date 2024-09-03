// components/Meta.js
import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Suwalif',
    description: 'Made By Zeyad Mashaal',
    keywords: 'tea',
};

export default Meta;

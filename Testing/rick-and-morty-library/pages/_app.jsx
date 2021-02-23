/* eslint-disable react/prop-types */
import PageLayout from 'components/shared/PageLayout/PageLayout';

import '../styles/global.scss';
import 'normalize.css';

export default function MyApp(props) {
    const { Component, pageProps } = props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    );
}

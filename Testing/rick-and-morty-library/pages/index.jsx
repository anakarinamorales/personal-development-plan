import Head from 'next/head';

import Home from 'components/Home/Home';

function App() {
    return (
        <>
            <Head>
                <title>Rick and Morty Library</title>
            </Head>

            <Home />
        </>
    );
}

export default App;
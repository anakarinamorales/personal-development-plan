import Header from 'components/StickyHeader/StickyHeader';

const PageLayout = ({ children }) => {
    return <>
        <Header />
        {children}
        {/* <Footer /> */}
    </>;
}

export default PageLayout;
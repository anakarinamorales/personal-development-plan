import PropTypes from 'prop-types';
import withApollo from 'utils/withApollo';
import queries from 'utils/queries';
import QueryList from 'components/QueryList/QueryList';

import { title } from 'components/QueryList/QueryList.module.scss';
import GoBackButton from 'components/GoBackButton/GoBackButton';

function List({ type }) {
    const query = queries[`get_${type}`.toUpperCase()];

    return (
        <>
            <h1 className={title}>{type}</h1>
            <QueryList query={query} type={type} />
            <GoBackButton />
        </>
    );
}

List.getInitialProps = async ctx => {
    const { query } = ctx;
    const { type } = query;

    return { type };
};

List.propTypes = {
    type: PropTypes.string.isRequired
};

export default withApollo({ ssr: true })(List);

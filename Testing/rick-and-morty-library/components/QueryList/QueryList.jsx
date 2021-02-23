import PropTypes from 'prop-types';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import { container, card, image, text } from './QueryList.module.scss';

const QueryList = ({ query, type }) => {
    const { loading, error, data } = useQuery(query, {
        notifyOnNetworkStatusChange: true
    });

    if (loading) {
        return 'Loading';
    }

    if (error || !data) {
        return 'Error';
    }

    const listItems = data[type].results.map(item => item);

    return (
        <ul className={container}>
            {listItems.map(item => (
                <li key={item.id} className={card}>
                    <Link href={`/${type}/[id]`} as={`/${type}/${item.id}`}>
                        <a>
                            {item.image && <img src={item.image} className={image} />}
                            <span className={text}>{item.name}</span>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

QueryList.propTypes = {
    query: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
};

export default QueryList;

import Link from 'next/link';
import PropTypes from 'prop-types';
import { container, content } from './Button.module.scss';

const Button = ({ type, href, onClick, children }) => {
    switch (type) {
        case 'a':
            return (
                <Link href={href}  passHref>
                    <a className={container}>
                        <span className={content}>{children}</span>
                    </a>
                </Link>
            );

        case 'b':
            return (
                <button type='button' className={container} onClick={onClick}>
                    <span className={content}>{children}</span>
                </button>
            );
    }
};

Button.defaultProps = {
    href: undefined,
    onClick: undefined
};

Button.propTypes = {
    type: PropTypes.oneOf(['a', 'b']).isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;

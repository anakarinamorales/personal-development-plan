import PropTypes from 'prop-types';
import React from 'react';

export default function Title({type, text, className}) {
    const title = React.createElement(type, {className}, text)
    return title;
}

// TODO: Add option to offscreen title
Title.defaultProps = {
    className: undefined
}

Title.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}
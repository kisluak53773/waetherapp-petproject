import React from 'react';
import PropTypes from 'prop-types';

/* eslint linebreak-style: ["error", "windows"] */

export default function Skeleton({ classes }) {
    const classNames = `skeleton ${classes}`;

    return <div className={classNames}></div>
}

Skeleton.propTypes={
    classes: PropTypes.string,
}

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, borderColor = '#A4A4A4', borderRadius = '0.5rem' }) => (
    <div className="container" style={{ borderColor, borderRadius }}>
        {children}
        <style jsx>{`
            .container {
                margin: 0 auto;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
                border-style: solid;
                border-width: 0.005rem;
                padding: 1rem;
            }
        `}</style>
    </div>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.string
};

export default Card;

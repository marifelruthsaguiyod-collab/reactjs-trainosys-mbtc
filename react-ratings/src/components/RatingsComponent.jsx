import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const RatingsComponent = ({ value = 0, maxValue = 5, onChange }) => {
    const [hoverValue, setHoverValue] = useState(null);

    const stars = Array.from({ length: maxValue }, (_, index) => {
        const ratingValue = index + 1;
        const isFilled = (hoverValue || value) >= ratingValue;

        return (
            <span
                key={index}
                className="ratings-icon"
                onClick={() => onChange && onChange(ratingValue)}
                onMouseEnter={() => setHoverValue(ratingValue)}
                onMouseLeave={() => setHoverValue(null)}
                style={{ cursor: onChange ? 'pointer' : 'default', color: 'gold' }}
            >
                {isFilled ? <FaStar /> : <FaRegStar />}
            </span>
        );
    });
    return <div className="star-rating">{stars}</div>;
};

export default RatingsComponent;
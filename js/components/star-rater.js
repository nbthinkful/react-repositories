import React from 'react';

function StarRater(props) {
    const stars = [];

    for (let i=0; i<5; i++) {
        let className = (i<props.rating)?
                            'fa fa-star':
                            'fa fa-star-o';

        const star = (
            <i className={className} key={i}
                onClick={props.onChange.bind(null, i+1)}>
            </i>
        );
        stars.push(star);
    }

    return (
        <span className="star-rater">
            {stars}
        </span>
    )
}

StarRater.defaultProps = {
    rating: 0
};

export default StarRater;
import React, { useState } from "react";

interface FormRatingProps {
    id?: string;
    defaultValue?: number;
    inputMode?: "decimal";
    addClass?: string;
    style?: React.CSSProperties;
}

export const FormRating = ({ id, defaultValue = 0, inputMode = "decimal", addClass, style, ...props }: FormRatingProps) => {
    const [rating, setRating] = useState(defaultValue);
    let classTab = ["form-options rating"];
    addClass && classTab.push(addClass);
    
    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <div className={classTab.join(" ")} inputMode={inputMode} style={style} {...props}>
            <div className="rating-well">
                <input type="number" id={id} name="rating" className="rating form-control" inputMode={inputMode} value={rating} aria-describedby={'hint-' + id} readOnly />
                <div id="rating_star_5" className={rating >= 5 ? "star-full" : "star"} data-value={5} onClick={() => handleRatingChange(5)} />
                <div id="rating_star_4" className={rating >= 4 ? "star-full" : "star"} data-value={4} onClick={() => handleRatingChange(4)} />
                <div id="rating_star_3" className={rating >= 3 ? "star-full" : "star"} data-value={3} onClick={() => handleRatingChange(3)} />
                <div id="rating_star_2" className={rating >= 2 ? "star-full" : "star"} data-value={2} onClick={() => handleRatingChange(2)} />
                <div id="rating_star_1" className={rating >= 1 ? "star-full" : "star"} data-value={1} onClick={() => handleRatingChange(1)} />
            </div>
        </div>
    );
};

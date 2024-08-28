import React from "react";

interface FormRatingProps {}

export const FormRating = ({}: FormRatingProps) => {
    return (
        <div className="form-group">
            <label className="active checkbox-custom font-weight-bold" htmlFor="rating">
                Presentation
            </label>
            <small id="exemple_help" className="form-text text-muted">
                Are the students speaking clearly? Is the presentation clear?
            </small>
            <div className="form-options rating" inputMode="decimal">
                <div className="rating-well">
                    <input type="number" id="rating" name="rating" className="rating form-control" inputMode="decimal" defaultValue="3,0" aria-describedby="exemple_help" />
                    <div id="rating_star_5" className="star" data-value={5} />
                    <div id="rating_star_4" className="star" data-value={4} />
                    <div id="rating_star_3" className="star-full" data-value={3} />
                    <div id="rating_star_2" className="star-full" data-value={2} />
                    <div id="rating_star_1" className="star-full" data-value={1} />
                </div>
            </div>
        </div>
    );
};

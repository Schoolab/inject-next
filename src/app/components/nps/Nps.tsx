import { DM_Serif_Display } from "next/font/google";
import React from "react";

export interface NpsProps {

isDisabled?: boolean;
}

/**
 * Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.
 */
export const Nps = ({ isDisabled = false }: NpsProps) => {

   
    return (
        <>

        {isDisabled ? (
            <div className="form-options d-flex gap-xs flex-wrap my-xs">
            <div className="flex-fill custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_0" className="custom-control-input" type="radio" value="0" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>0</span>
                </label>
            </div>

            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_1" className="custom-control-input" type="radio" value="1" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>1</span>
                </label>
            </div>

            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="2" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>2</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="3" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>3</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="4" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>4</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="5" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>5</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="6" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>6</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-passive">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="7" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>7</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-passive">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="8" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>8</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-promoter">
                <input disabled  checked id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="9" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>9</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-promoter">
                <input disabled id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="10" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>10</span>
                </label>
            </div>
        </div>
        ) : (
           <div className="form-options d-flex gap-xs flex-wrap my-xs">
            <div className="flex-fill custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_0" className="custom-control-input" type="radio" value="0" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>0</span>
                </label>
            </div>

            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_1" className="custom-control-input" type="radio" value="1" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>1</span>
                </label>
            </div>

            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="2" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>2</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="3" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>3</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="4" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>4</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="5" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>5</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-detractor">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="6" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>6</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-passive">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="7" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>7</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-passive">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="8" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>8</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-promoter">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="9" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>9</span>
                </label>
            </div>
            <div className="flex-fill  custom-control custom-radio custom-control-card custom-control-hidden nps nps-promoter">
                <input id="updateForma36c5593_defaultFormModel_visibility_2" className="custom-control-input" type="radio" value="10" name="updateForma36c5593[defaultFormModel][visibility]" />
                <label className="custom-control-label d-flex align-items-center justify-content-center">
                    <span>10</span>
                </label>
            </div>
        </div>
        )

        }
        
        </>
        
    );
};

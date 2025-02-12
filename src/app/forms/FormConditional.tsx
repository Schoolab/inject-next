import React, { useState } from 'react';
import { FormOption } from '@/app/forms/FormOption';
import { Placeholder } from '@/app/content/Placeholder';

interface FormConditionalProps {
    type: "checkbox" | "radio" | "switch";
    id: string;
    label: string;
    caption?: string;
    card?: boolean;
    checked?: boolean;
    addClass?: string;
    children?: React.ReactNode;
}

const FormConditional = ({ id, label, caption, children, type, addClass, card, checked = false }: FormConditionalProps) => {
    const [isChecked, setIsChecked] = useState(checked);
    let classTab = ["d-flex flex-column gap-xs mb-xs"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")}>
            <FormOption
                name="briefs"
                id={id}
                value={id}
                type={type}
                label={label}
                caption={caption}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                card={card}
            />
            {isChecked && <div className="conditional-group">
              {children ? children : <Placeholder />}
            </div>}
        </div>
    );
};

export default FormConditional; 
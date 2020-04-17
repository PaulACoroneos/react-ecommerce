import * as React from 'react';
import './form-input.styles.scss';

interface FormInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value: any;
    type: string;
    name: string;
    required: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...otherProps} />
        {label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
);

import React from 'react';

import "../style/components/InputField.css";

interface Props {
    type?: string;
    label?: string;
    startAdornment?: any;
    value: string;
    onChange(value: string): void;
    onKeyPress?(event: any): any;
}

export default class InputField extends React.Component<Props, {}> {
    render() {
        const {type, label, startAdornment, onChange, onKeyPress} = this.props;
        return <div className="input-field">
            {startAdornment && <span className="start">
              <img src={startAdornment} alt="start"/>
            </span>}
            <div className="group">
                <input type={type ? type : 'text'} onKeyPress={onKeyPress} required onChange={e => onChange(e.target.value)}/>
                <span className="highlight"/>
                <span className="bar"/>
                <label>{label}</label>
            </div>
        </div>
    }
}
import { forwardRef, createRef, useEffect } from 'react';

import { FORM_CLASSES } from '../../utils/constants';
import { classNames } from '../../utils/toClassNames';

import './FormInput.scss';

const defaults = {
  type: 'text',
  required: true,
  minLength: 2,
};

const FormInput = forwardRef(
  ({ isFocused, validationMessage, labelTitle, ...props }, forwardedRef) => {
    const ref = forwardedRef ?? createRef();

    const type = props.type ?? defaults.type;

    const required = props.required ?? defaults.required;

    const conditionalMinLength = type === defaults.type ? defaults.minLength : null;
    const minLength = props.minLength ?? conditionalMinLength;

    const finalProps = {
      type,
      minLength,
      required,
      ref,
    };

    useEffect(() => {
      if (
        isFocused &&
        ref &&
        ref.current &&
        ref.current.parentElement !== document.activeElement.parentElement
      ) {
        setTimeout(() => {
          ref && ref.current && ref.current.focus();
        }, 50);
      }
    }, [isFocused, ref]);

    return (
      <>
        <input
          {...props}
          {...classNames([
            FORM_CLASSES.inputClass,
            validationMessage && `${FORM_CLASSES.inputClass}_type_error`,
            props.className,
          ])}
          {...finalProps}
        />
        <p
          {...classNames([
            `${FORM_CLASSES.inputClass}-error`,
            `${props.className}-error`,
            validationMessage && `${FORM_CLASSES.inputClass}-error_visible`,
          ])}
          id={`${props.id}-error`}
        >
          {validationMessage}
        </p>
      </>
    );
  },
);

export default FormInput;

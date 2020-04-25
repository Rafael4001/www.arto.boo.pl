import React from 'react';
import PropTypes from 'prop-types';
import MomentFnsUtils from '@date-io/moment';
import moment from 'moment-timezone';

// import DateFnsUtils from '@date-io/date-fns';


import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// import FormikErrorText from '../FormikErrorText';

// import { getFormikError } from '../../utilities/formikHelpers';
import { DATE_FORMAT } from '../../../constants';

moment.tz.setDefault('Atlantic/Reykjavik');

const FormikDateField = (props) => {
  const {
    classes,
    dateFormatInputProps,
    disabled,
    // disableErrorText,
    showPast,
    field: {name, value},
    form: {touched, errors, submitForm, setFieldValue},
    InputLabelProps,
    inputProps,
    InputProps,
    placeholder,
    label,
    submitOnChange,
    ...other
  } = props;
  const {classes: classesInput, ...otherInputProps} = InputProps;
  const {classes: classesInputLabel, ...otherInputLabelProps} = InputLabelProps;

  // const { hasError } = getFormikError({ name, touched, errors });

  const onChangeWrapper = (value) => {
    setFieldValue(name, value, !submitOnChange);
    if (submitOnChange) {
      submitForm();
    }
  };


  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentFnsUtils} moment={moment}>
        <KeyboardDatePicker
          name={name}
          value={value}
          cancelLabel="Anuluj"
          disabled={disabled}
          // disableOpenOnEnter
          disablePast={!showPast}
          // error={hasError}
          error={errors[name]}
          format={DATE_FORMAT}
          helperText={null}
          inputVariant="outlined"
          label={label}
          // placeholder={placeholder || 'DD-MM-YYYY'}
          onChange={onChangeWrapper}
          inputProps={{
            autoComplete: 'off',
            ...dateFormatInputProps,
          }}
          InputProps={{
            notched: false,
            // disableUnderline: true,
            type: submitOnChange ? 'submit' : 'text',
            classes: {
              input: classes.input,
              adornedEnd: classes.adornedEnd,
              ...classesInput,
            },
            ...otherInputProps,
          }}
          InputLabelProps={{
            shrink: true,
            classes: {
              formControl: classes.inputLabelFormControl,
              shrink: classes.inputLabelShrink,
              outlined: classes.inputLabelOutlined,
              ...classesInputLabel,
            },
            ...otherInputLabelProps,
          }}
          classes={{root: classes.textField}}
          {...other}
        />
      </MuiPickersUtilsProvider>
      {/*{!disableErrorText && <FormikErrorText name={name} />}*/}
    </div>
  );
};

FormikDateField.propTypes = {
  classes: PropTypes.object.isRequired,
  // dateFormatInputProps: PropTypes.object,
  // disabled: PropTypes.bool,
  // disableErrorText: PropTypes.bool,
  // showPast: PropTypes.bool,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  }).isRequired,
  form: PropTypes.object.isRequired,
  // InputLabelProps: PropTypes.object,
  // inputProps: PropTypes.object,
  // InputProps: PropTypes.object,
  // label: PropTypes.string,
  // placeholder: PropTypes.string,
  // submitOnChange: PropTypes.bool,
};

FormikDateField.defaultProps = {
  dateFormatInputProps: {},
  disabled: false,
  // disableErrorText: false,
  InputLabelProps: {},
  inputProps: {},
  InputProps: {},
  label: '',
  placeholder: '',
  showPast: false,
  submitOnChange: false,
};

FormikDateField.displayName = 'FormikDateField';

export default FormikDateField;

import { withStyles } from '@material-ui/core/styles';

import FormikDateField from './FormikDateField';

const styles = (theme) => ({
  label: {},
  inputLabelFormControl: {
    position: 'static',
  },
  inputLabelShrink: {},
  inputLabelOutlined: {
    // width: '5rem',
    fontWeight: 500,
    '&$inputLabelShrink': {
      transform: 'translate(0px, -6px) scale(0.75)',
    },
  },
  input: {
    padding: '0.5rem',
    textAlign: 'center',
  },
  textField: {
    // width: '100%',
    '& button': {
      padding: 6,
    },
  },
  adornedEnd: {
    paddingRight: 0,
  },
});

export default withStyles(styles)(FormikDateField);

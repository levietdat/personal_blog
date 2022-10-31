import { styled } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import RoundButton from './RoundButton';

const CommonButton = styled(Button)<ButtonProps>(() => ({
  color: 'white',
  backgroundColor: orange[500],
  minHeight: 30,
  borderRadius: 7,
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

export { CommonButton, RoundButton };
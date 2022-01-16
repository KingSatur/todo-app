import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { globalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  marginRight: '1rem',
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const TodoForm = () => {
  const { addToDo } = useContext(globalContext);

  const [toDo, settoDo] = useState({
    title: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = function (e) {
    settoDo({ ...toDo, [e.target.name]: e.target.value });
  };

  const handleSaveToDo = function (e) {
    e?.preventDefault();
    addToDo(toDo);
    navigate('/');
  };

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        style={{
          marginBottom: '1rem',
        }}
        component="div"
        variant="h5"
      >
        Create to do
      </Typography>
      <form onSubmit={handleSaveToDo}>
        <Box
          style={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            name="title"
            label="Write toDO title"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            name="description"
            label="Write toDO description"
            id="outlined-multiline-static"
            multiline
            rows={4}
          />
        </Box>
        <Box>
          <BootstrapButton type="submit" variant="contained">
            Create
          </BootstrapButton>
        </Box>
      </form>
    </div>
  );
};

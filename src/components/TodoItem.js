import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { globalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

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

export default function TodoItem({ title, description, done, id }) {
  const { removeToDo, toggleDone } = useContext(globalContext);

  return (
    <Card
      style={{
        padding: '1rem',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
      sx={{ display: 'flex' }}
      variant="outlined"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Title: {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Description: {description}
          </Typography>
          <Box style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Checkbox onClick={() => toggleDone(id)} checked={done} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {done ? 'You have finished this toDo' : 'Incomplete toDo'}
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '.5rem',
        }}
      >
        <Link to={`/edit/${id}`} style={{ textDecoration: 'none' }}>
          <BootstrapButton variant="contained">Edit</BootstrapButton>
        </Link>
        <BootstrapButton onClick={() => removeToDo(id)} variant="contained">
          Delete
        </BootstrapButton>
      </Box>
    </Card>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { AiFillFileAdd } from 'react-icons/ai';

const pages = [
  { label: 'Todo list', path: '', icon: AiFillFileAdd },
  { label: 'Create List', path: '/add' },
];

const HeadingButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#lightgrey',
});

export const Heading = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{ gap: '1rem' }}>
            {pages.map((page, i) => (
              <Link key={i} to={page?.path} style={{ textDecoration: 'none' }}>
                <HeadingButton key={page?.label} sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page?.label}
                </HeadingButton>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

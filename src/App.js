import React from 'react';
import TodoList from './components/TodoList';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
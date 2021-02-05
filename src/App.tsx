import { FC } from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Hello world!</h1>
    </ThemeProvider>
  );
};

export default App;

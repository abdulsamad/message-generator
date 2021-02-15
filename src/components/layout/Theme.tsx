import { FC, useMemo } from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

import { useAppContext } from '../../context/Context';

const Theme: FC = ({ children }) => {
  const { theme } = useAppContext();

  const customTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme,
          primary: {
            main: '#FFC107',
          },
          secondary: {
            main: '#2196F3',
          },
        },
      }),
    [theme],
  );

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

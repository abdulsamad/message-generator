import { FC, useMemo } from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

import { useAppContext } from '../context/Context';

const Theme: FC = ({ children }) => {
  const { theme } = useAppContext();

  const customTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme,
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

import { FC } from 'react';

import { Context } from './context/Context';
import Theme from './components/layout/Theme';
import Navbar from './components/layout/Navbar';
import Form from './components/layout/Form';
import Send from './components/layout/Send';
import Reset from './components/layout/Reset';
import DataTable from './components/layout/DataTable';

const App: FC = () => {
  return (
    <Context>
      <Theme>
        <Navbar title='Message Generator' />
        <Form />
        <DataTable />
        <Send />
        <Reset />
      </Theme>
    </Context>
  );
};

export default App;

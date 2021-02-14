import { FC } from 'react';

import Theme from './components/layout/Theme';
import Navbar from './components/layout/Navbar';
import Form from './components/layout/Form';
import { Context } from './context/Context';

const App: FC = () => {
  return (
    <Context>
      <Theme>
        <Navbar title='Message Generator' />
        <Form />
      </Theme>
    </Context>
  );
};

export default App;

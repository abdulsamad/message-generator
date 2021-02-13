import { FC } from 'react';

import Theme from './layout/Theme';
import Navbar from './layout/Navbar';
import Form from './layout/Form';
import { Context } from './context/Context';

const App: FC = () => {
  return (
    <Context>
      <Theme>
        <Navbar title="Message Generator" />
        <Form />
      </Theme>
    </Context>
  );
};

export default App;

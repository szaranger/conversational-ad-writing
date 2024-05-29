import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { StrictMode } from 'react';

export default () => (
  <StrictMode>
    <BraidProvider theme={apac}>
      <p>Hello world</p>
    </BraidProvider>
  </StrictMode>
);

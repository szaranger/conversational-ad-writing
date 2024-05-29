import { hydrateRoot } from 'react-dom/client';
import { loadableReady } from 'sku/@loadable/component';

import App from './App/App';

const clientRender = (element: Element) => {
  hydrateRoot(element, <App />);
};

loadableReady(() => {
  clientRender(document.getElementById('app')!);
});

export default clientRender;

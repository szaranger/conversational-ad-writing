import type { Request, Response } from 'express';

import { middleware } from './middleware';

import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { renderDocument } from 'src/server/render';
import App from 'src/App/App';
import { serializeConfig } from 'src/server/script-tags';

interface RenderCallbackProps {
  SkuProvider: any;
  getHeadTags: any;
  getBodyTags: any;
}

function createConfig() {
  return {
    environment: 'development',
    path: '/',
    zone: 'anz-1',
    language: 'en',
    hostname: '',
    locale: 'en-AU',
    basename: '',
    query: '',
  };
}

const getServerSideData = async () => {
  try {
    // if (page === '/profile/') {
    //   return fetch(
    //     `https://api-seek.staging.companyreview.co/companies/1217901/profile?api_key=${process.env.PAPI_KEY}`,
    //   )
    //     .then(function (response) {
    //       if (response.status >= 400) {
    //         throw new Error('Bad response from server');
    //       }
    //       return response.json();
    //     })
    //     .then(function (response) {
    //       return { profile: response };
    //     });
    // }

    return Promise.resolve;
  } catch (e) {}
};

export default () => ({
  renderCallback: async (
    { SkuProvider, getBodyTags, getHeadTags }: RenderCallbackProps,
    req: Request,
    res: Response,
  ) => {
    const config = createConfig();

    const data = await getServerSideData();

    const app = renderToString(
      <SkuProvider>
        <App />
      </SkuProvider>,
    );
    res.send(
      renderDocument({
        headTags: getHeadTags(),
        bodyTags: [serializeConfig(data), getBodyTags()].join('\n'),
        app,
        helmet: Helmet.renderStatic(),
        config,
      }),
    );
  },
  middleware,
});

import { env } from '@alepop/stencil-env';
import { Config } from '@stencil/core';

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: '_redirects' }],
    },
  ],
  plugins: [env()],
};

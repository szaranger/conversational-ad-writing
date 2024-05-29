import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  serverEntry: 'src/server/server.tsx',
  public: 'src/public',
  environments: ['development', 'production'],
  publicPath: '/',
  target: 'dist',
  port: 3300,
  serverPort: 3301,
  orderImports: true,
};

export default skuConfig;

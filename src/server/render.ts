import type { HelmetData } from 'react-helmet';

interface RendererProps {
  config: any;
  headTags: any;
  bodyTags: any;
  app: string;
  helmet: HelmetData;
}

export const renderDocument = ({
  headTags,
  bodyTags,
  app,
  config,
  helmet,
}: RendererProps) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${headTags}
  </head>
  <body>
    <div id="app">${app}</div>
    <script type="text/javascript">
      window.__config = ${JSON.stringify(config)};
    </script>
    ${bodyTags}
  </body>
</html>
  `;

import serializeJavascript from 'serialize-javascript';

export const serializeConfig = (config: any) =>
  `<script id="__SKU_CLIENT_CONTEXT__" data-automation="server-state">window.SEEK_PROFILE_DATA = ${serializeJavascript(
    config,
    { isJSON: true },
  )}</script>`;

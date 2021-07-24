import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.replace(/^siapi-plugin-/i, '');

export default pluginId;

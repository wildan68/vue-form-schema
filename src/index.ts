import { App, Plugin } from 'vue';
import { useConfig } from './lib/config';
import type { IConfig, ISchema } from './types/config.type';
import { useRender } from './lib/render';

const VueFormSchema: Plugin = {
  install(app: App, options?: IConfig) {
    const { setConfig } = useConfig()
    if (options) {
      setConfig(options);
    }
  },
};

export default VueFormSchema
export { useConfig, IConfig, ISchema, useRender }
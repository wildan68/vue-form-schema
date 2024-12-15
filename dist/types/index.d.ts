import { Plugin } from 'vue';
import { useConfig } from './lib/config';
import type { IConfig, ISchema } from './types/config.type';
import { useRender } from './lib/render';
declare const VueFormSchema: Plugin;
export default VueFormSchema;
export { useConfig, IConfig, ISchema, useRender };

import { IConfig } from '../types/config.type';
import { IFunction } from '../types/function.type';
export declare const useConfig: () => {
    setConfig: IFunction<Partial<IConfig>>;
    config: {
        components: Record<import('../types/config.type').ISchema["component"], import('vue').Component | null>;
    };
};

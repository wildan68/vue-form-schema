import { ISchema } from '../types/config.type';
import { IFunction } from '../types/function.type';
/**
 * Render schema.
 * @param schemas
 */
export declare const useRender: () => {
    setSchema: IFunction<{
        schema: ISchema | ISchema[];
        data?: Record<string, any>;
        onUpdate?: (key: string, value: any) => void;
    }>;
};

import { useConfig } from './config'
import { h } from 'vue'
import type { ISchema } from '../types/config.type'
import { IFunction } from '../types/function.type'

/**
 * Render schema.
 * @param schemas
 */
export const useRender: IFunction<ISchema[]> = () => {
  const { config } = useConfig()

  const renderSchema: IFunction<ISchema> = (schemas) => {
    const component = config.components[schemas.component]
    if (!component) {
      console.error(`Component for type "${schemas.component}" not found.`);
      return null;
    }

    return h(
      component,
      schemas.props || {},
      schemas.children?.map((child) => renderSchema(child))
    )
  }

  const setSchema: IFunction<ISchema | ISchema[]> = (schemas) => {
    if (Array.isArray(schemas)) {
      return schemas.map((schema) => renderSchema(schema))
    }

    return renderSchema(schemas)
  }
  
  return {
    setSchema
  }
}
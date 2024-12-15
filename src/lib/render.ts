import { useConfig } from './config'
import { h, ref } from 'vue'
import type { ISchema } from '../types/config.type'
import { IFunction } from '../types/function.type'

/**
 * Render schema.
 * @param schemas
 */
export const useRender = () => {
  const { config } = useConfig()

  const renderSchema: IFunction<{
    schema: ISchema
    data?: Record<string, any>
    onUpdate?: (key: string, value: any) => void
  }> = ({ schema, data, onUpdate }) => {
    const component = config.components[schema.component]

    const defineProps = () => {
      const config = schema.config
      if (config && data) {
        const key = config.key
        
        const updateModelHandler = (value: any) => {
          if (onUpdate)
            return onUpdate(key, value);
        }

        return { ...schema.props, modelValue: data[key], 'onUpdate:modelValue': updateModelHandler } 
      }

      return schema.props
    }

    return h(
      component ?? 'div',
      defineProps() || {},
      schema.slots ? schema.slots : schema.children?.map((child) => renderSchema({ schema: child, data, onUpdate }))
    )
  }

  const setSchema: IFunction<{
    schema: ISchema | ISchema[],
    data?: Record<string, any>
    onUpdate?: (key: string, value: any) => void
  }> = ({ schema, data, onUpdate }) => {
    if (Array.isArray(schema)) {
      return h(
        'div',
        { },
        schema.map((schema) => renderSchema({ schema, data, onUpdate }))
      )
    }

    return renderSchema({ schema, data, onUpdate })
  }
  
  return {
    setSchema
  }
}
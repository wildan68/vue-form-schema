import { reactive } from 'vue'
import { IConfig } from '../types/config.type'
import { IFunction } from '../types/function.type'

const config = reactive<IConfig>({
  components: {
    BUTTON: null,
    CHECKBOX: null,
    DATEPICKER: null,
    INPUT: null,
    NUMBER: null,
    RADIO: null,
    RANGE: null,
    SELECT: null,
    SWITCH: null,
    TEXT: null,
    TEXTAREA: null,
    TIMEPICKER: null,
    UPLOAD: null,
    WYSIWYG: null
  }
})

export const useConfig = () => {
  /**
   * Set Config
   */
  const setConfig: IFunction<Partial<IConfig>> = ({ components }) => {
    return config.components = { ...config.components, ...components }
  }

  return {
    setConfig,
    config
  }
}
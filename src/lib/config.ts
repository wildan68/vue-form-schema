import { reactive } from 'vue'
import { IConfig } from '../types/config.type'
import { IFunction } from '../types/function.type'

const config = reactive<IConfig>({
  components: {}
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
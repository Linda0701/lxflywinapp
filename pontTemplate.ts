/* eslint-disable no-unused-vars */
import { Interface, BaseClass, Property, CodeGenerator } from 'pont-engine'

export default class MyGenerator extends CodeGenerator {
  getBaseClassInDeclaration(base: BaseClass) {
    const originProps = base.properties

    base.properties = base.properties.map((prop) => {
      return new Property({
        ...prop,
        required: false
      })
    })

    const result = super.getBaseClassInDeclaration(base)
    base.properties = originProps

    return result
  }

  getInterfaceContent(inter: Interface) {
    const method = inter.method.toUpperCase()

    return `
    /**
     * @desc ${inter.description}
     */
    import axios from "@/utils/request"

    export function request(params = {}, bodyParams  = {}) {
      return axios({
        method: "${method}",
        url: "${inter.path}",
        ${method === 'POST' ? 'data: bodyParams' : 'params'}
      })
    }`
  }
}

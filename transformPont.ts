/* eslint-disable no-unused-vars */
import { StandardDataSource } from 'pont-engine'

export default function(dataSource: StandardDataSource): StandardDataSource {
  dataSource.mods.forEach(item => {
    item.interfaces.forEach(i => {
      // ！！！ 因为项目中有 basePath，所以在 pont-config.json 中的 origins 的 name 需和此处前缀保持一致
      i.path = `/${dataSource.name}${i.path}`
    })
  })
  return dataSource
}

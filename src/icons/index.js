// 1.导入所有的 svg图标
// 2. 完成 SvgIcon 的全局注册
import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回了一个 require 函数， 可以接收一个request的参数，用于require的导入
// 此函数提供了三个属性，可以通过svgRequire.keys()获得所有的svg图标
// 遍历图标，把图标作为request 参数到svgRequire导入函数中，完成本地svg
console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', SvgIcon)
}

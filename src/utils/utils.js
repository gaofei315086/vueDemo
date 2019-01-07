var initCC = function () {
  // 如果未获取到cocos插件就递归调用直到获取到位置
  if(!window.cc){
    console.info('init')
    window.setTimeout(()=>{
      this.initCC()
    },10)
    return
  }
}
export default {
  initCC
}

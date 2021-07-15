export default {
  install(Vue) {
    Vue.prototype.$loadImage = src => {
      return new Promise(resolve => {
        if(process.server){
          resolve()
          return
        }
        // document 는 서버에서 작동안해서 사용 클라이언트일때만 사용
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          resolve()
        })
      })
    }
  }
}

import axios from "axios";
// import {resolve} from "../../build/webpack.base.conf";

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.axios的拦截器
  // axios.interceptors  全局拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    // 1.比如config中的信息不 符合请求，需要进行处理再传回给服务器

    // 2.请求处理时，在界面中显示请求图标

    // 3.某些网络请求(比如登录(token))，必须携带一些特殊信息

    return config
  }, err => {
    // console.log(err)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    // console.log(res.data);
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送真正的网络请求
  return instance(config)

}




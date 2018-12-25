import wepy from 'wepy'
const domain = 'https://2zhuji.cn'

const fetch = (url, requestData, method = 'GET', jsonHeader) => {
  return new Promise((resolve, reject) => {
    let fetchTask = {
      url: domain + url,
      method: method,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
    if (requestData) {
      fetchTask.data = requestData
    }
    if (jsonHeader) {
      fetchTask.header = {
        'content-type': 'application/json'
      }
    }
    wepy.request(fetchTask).then((res) => {
      if (res.data.status == 1001) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export default fetch

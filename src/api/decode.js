import wepy from 'wepy';

const decode = (requestData) => {
  const { encryptedData, iv, session } = requestData
  return new Promise((resolve, reject) => {
    wepy.request({
      url: `https://2zhuji.cn/index.php?g=Wap&m=Wxaapi&a=decode_encrypted&encrypted=${encodeURI(encryptedData)}&iv=${iv}&session_3rd=${session}`,
      method: 'POST',
      data: {
        'encrypted': encodeURI(encryptedData),
        'iv': iv,
        'session_3rd': session
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      if (res.data.status == 1001) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export default decode

import wepy from 'wepy';

const getCategory = (category) => {
  const categoryObj = {
    '1': '签到奖励',
    '2': '新人奖励',
    '3': '任务奖励',
    '4': '兑换扣除'
  }
  return categoryObj[category] || '任务奖励'
}

const resultObj = {
  '1': 2,
  '5': 7,
  '10': 1
}

const toast = (title = '温馨提示', icon = 'none', duration = 1000) => {
  wepy.showToast({
    title,
    icon,
    duration
  })
}

const navigate = (url) => {
  wepy.navigateTo({
    url,
    fail: () => {
      wepy.redirectTo(url)
    }
  })
}

const isPhoneAvailable = (phone) => {
  const regex = /^[1][3,4,5,7,8]\d{9}$/
  if (regex.test(phone)) {
    return true
  }
  return false
}

export {
  getCategory,
  resultObj,
  toast,
  navigate,
  isPhoneAvailable
}

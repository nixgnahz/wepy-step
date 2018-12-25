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

export {
  getCategory,
  resultObj,
  toast,
  navigate
}

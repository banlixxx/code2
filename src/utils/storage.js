const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_shopping_history'

// 获取个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result
    ? JSON.parse(result)
    : {
        token: '',
        userId: ''
      }
}

// 设置个人信息
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取历史记录
export const getHistory = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

export const setHistory = (history) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export const removeHistory = () => {
  localStorage.removeItem(HISTORY_KEY)
}

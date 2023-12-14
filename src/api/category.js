import request from '@/utils/request.js'

export const getCategoryData = () => {
  return request.get('/category/list')
}

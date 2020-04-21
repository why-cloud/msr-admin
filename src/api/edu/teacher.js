import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'
export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      data: searchObj
    })
  }
}

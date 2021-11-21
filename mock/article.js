const Mock = require('mockjs')

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(1)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['零食', '日用品', '水果', '手机'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    saleNum: '@integer(300, 5000)',
    storeNum:'@integer(300, 5000)',
    'image_url|1':['https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/92938/40/19101/164890/61416a64E08942bf9/8736bf819b78805f.jpg.webp',
                    'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/89216/18/19633/118021/61415657E4e3e4f09/1c340ce51feb61b5.jpg.webp',
                    'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/59598/2/16578/112103/61384c3aEcac53d5a/d03a1de12227e66a.jpg.webp'],
    image_uri,
    image_list:[{name:'img1',url:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/92938/40/19101/164890/61416a64E08942bf9/8736bf819b78805f.jpg.webp'},
    {name:'img2',url:'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/89216/18/19633/118021/61415657E4e3e4f09/1c340ce51feb61b5.jpg.webp'},
    {name:'img3',url:'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/59598/2/16578/112103/61384c3aEcac53d5a/d03a1de12227e66a.jpg.webp'}],
    platforms: ['a-platform']
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]


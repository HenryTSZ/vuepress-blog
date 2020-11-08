module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: 'JavaScript', link: '/pages/3037d9/' }, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
      { text: 'Vue', link: '/pages/baff20/' },
      { text: 'ElementUI', link: '/pages/e29708' }
    ]
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/1b1828/' },
      { text: 'CSS', link: '/pages/cfc63b/' }
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/dcd231/' },
      { text: 'GitHub技巧', link: '/pages/960dcf/' },
      { text: 'Nodejs', link: '/pages/0758c6/' },
      { text: 'Chrome', link: '/pages/980078/' },
      { text: 'Other', link: '/pages/24b988' }
    ]
  },
  {
    text: '操作系统',
    link: '/system/',
    items: [
      { text: 'Mac', link: '/pages/baa026/' },
      { text: 'Windows', link: '/pages/368ccf/' },
      { text: 'VSCode', link: '/pages/6f52fa/' }
    ]
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0/',
    items: [
      { text: '网站', link: '/pages/beb6c0/' },
      { text: '资源', link: '/pages/eee83a/' },
      { text: 'Vue资源', link: '/pages/12df8a/' }
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' }
    ]
  }
]

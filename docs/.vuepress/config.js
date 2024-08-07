const nav = require('./config/nav.js')

module.exports = {
  title: 'Henry',
  description:
    'web 前端技术博客，简洁至上，专注 web 前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github 等技术文章。', // 描述，以 <meta> 标签渲染到页面 html 中
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }], //favicons，资源放在 public 文件夹
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客，个人技术博客，前端，前端开发，前端框架，web 前端，前端面试题，技术文档，学习，面试，JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'
      }
    ],
    ['meta', { name: 'baidu-site-verification', content: 'code-C3V9fjhTFV' }], // 百度统计的站点拥有者验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }] // 移动浏览器主题颜色
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },

  theme: 'vdoing', // 使用依赖包主题

  themeConfig: {
    // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认 1，最大 2（显示到 h3 标题）
    logo: '/img/favicon.png', // 导航栏 logo
    repo: 'HenryTSZ/vuepress-blog', // 导航栏右侧生成 Github 链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为 git 提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下配置是 Vdoing 主题改动和新增的配置 ***//

    // category: false, // 是否打开分类功能，默认 true。如打开，会做的事情有：1. 自动生成的 frontmatter 包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在 @pages 文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认 true。如打开，会做的事情有：1. 自动生成的 frontmatter 包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在 @pages 文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认 true。如打开，会做的事情有：1.自动生成归档页面（在 @pages 文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts 文件夹的文章）预设生成的分类值，默认'随笔'

    bodyBgImg: '/img/bg.webp', // body 背景大图，默认无。单张图片 String || 多张图片 Array, 多张图片时每隔 15 秒换一张。
    bodyBgImgOpacity: 0.9, // body 背景图透明度，选值 0 ~ 1.0, 默认 0.5

    // titleBadge: false, // 文章标题前的图标是否显示，默认 true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址 1',
    //   '图标地址 2'
    // ],
    // contentBgStyle: 6, // 文章内容块的背景风格，默认无。1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认 true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认 true
    // pageButton: false, // 是否显示快捷翻页按钮，默认 true

    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    author: {
      // 文章默认的作者信息，可在 md 文件中单独配置此信息 String | {name: String, link: String}
      name: 'Henry', // 必需
      link: 'https://github.com/HenryTSZ' // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: '/img/avatar.jpg',
      name: 'Henry',
      slogan: '小学生中的前端大佬'
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线 css 文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:lh69jh@gmail.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/HenryTSZ'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/my/m/music/playlist?id=392991609'
        }
      ]
    },
    footer: {
      // 页脚信息
      createYear: 2017, // 博客创建年份
      copyrightInfo:
        'HenryTSZ | <a href="https://github.com/HenryTSZ/vuepress-blog/blob/main/LICENSE" target="_blank">MIT License</a>' // 博客版权信息，支持 a 标签
    }
  },
  plugins: [
    'vuepress-plugin-smooth-scroll',
    [
      'thirdparty-search',
      {
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [
          // 可选，默认 []
          {
            title: '在 MDN 中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在 Google 中搜索',
            frontUrl:
              'https://www.google.com/search?hl=zh-CN&safe=off&lr=lang_zh-CN&cr=countryCN&q='
          },
          {
            title: '在 百度 中搜索',
            frontUrl: 'https://www.baidu.com/#ie=UTF-8&wd='
          },
          {
            title: '在 Vue API 中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#'
          }
        ]
      }
    ],
    [
      'one-click-copy',
      {
        // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],
    [
      'demo-block',
      {
        // demo 演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
          // jsLib: ['http://xxx'], // 在线示例 (jsfiddle, codepen) 中的 js 依赖
          // cssLib: ['http://xxx'], // 在线示例中的 css 依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的 vue 依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: false, // 是否显示 codepen 链接
          horizontal: false // 是否展示为横向样式
        }
      }
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除 class 是 no-zoom 的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        }
      }
    ],
    [
      'vuepress-plugin-comment-plus', // 评论
      {
        choosen: 'gitalk',
        options: {
          proxy: 'https://strong-caramel-969805.netlify.app/github_access_token',
          clientID: '34019b1155b0a6035864',
          clientSecret: '0f29fa313133201bd776003a28e2b5c9e58dae35',
          repo: 'vuepress-blog', // GitHub 仓库
          owner: 'HenryTSZ', // GitHub 仓库所有者
          admin: ['HenryTSZ'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识，长度不能超过 50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>' // GitHub issue 的内容
        }
      }
    ],
    '@vuepress/last-updated' // "上次更新"
  ]
  // configureWebpack: {
  //   //webpack 别名 如 ![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}

const sidebar = {
  cookbook: [
    {
      title: 'Cookbook',
      collapsable: false,
      children: ['/cookbook/', '/cookbook/editable-svg-icons']
    }
  ],
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: ['/guide/installation']
    }
  ],
  api: [
    '/api/application-config',
    {
      title: '选项',
      path: '/api/options-api',
      collapsable: false,
      children: ['/api/options-data']
    }
  ],
  examples: [
    {
      title: '示例',
      collapsable: false,
      children: ['/examples/markdown']
    }
  ]
}

module.exports = {
  title: 'Vue.js',
  description: 'Vue.js - The 渐进式 JavaScript 框架',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // localization for china
    [
      'script',
      {
        src: 'https://player.youku.com/iframeapi'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '文档',
        ariaLabel: '文档菜单',
        items: [
          {
            text: '教程',
            link: '/guide/introduction'
          }
        ]
      },
      {
        text: 'API 参考',
        link: '/api/'
      },
      {
        text: '生态系统',
        items: [
          {
            text: '社区',
            ariaLabel: '社区菜单'
          }
        ]
      },
      {
        text: '多语言',
        link: '#',
        items: [
          {
            text: 'English',
            link: 'https://v3.vuejs.org'
          }
        ]
      }
    ],
    repo: 'vuejs/docs-next-zh-cn',
    editLinks: false,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/': sidebar.guide,
      '/cookbook/': sidebar.cookbook,
      '/api/': sidebar.api,
      '/examples/': sidebar.examples
    },
    smoothScroll: false,
    algolia: {
      indexName: 'vuejs_cn3',
      apiKey: '773de665ca11d74cede4e35ecff46931'
    }
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}

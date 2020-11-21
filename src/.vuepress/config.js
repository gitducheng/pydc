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
    // {
    //   title: '选项',
    //   path: '/api/options-api',
    //   collapsable: false,
    //   children: ['/api/options-data']
    // }
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
  title: 'Pydc',
  description: 'Pydc',
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
        text: 'demo',
        ariaLabel: 'demo菜单',
        items: [
          {
            text: 'demo',
            link: '/guide/introduction'
          }
        ]
      },
      {
        text: '暂留页',
        link: '/api/'
      },
      // {
      //   text: '暂留二',
      //   items: [
      //     {
      //       text: '暂留二',
      //       ariaLabel: '暂留菜单',
      //       items: [
      //         {
      //           text: '暂留',
      //           link: '/community/team/'
      //         }
      //       ]
      //     }
      //   ]
      // }
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

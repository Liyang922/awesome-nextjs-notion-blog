module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'b3fa2f94e856499e9f9a4293338adec9',
  // https://alert-chevre-e7b.notion.site/blog-example-b3fa2f94e856499e9f9a4293338adec9

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: false,

  // basic site info (required)
  name: '阳的博客',
  domain: 'yang.top',
  author: '阳 🔅',

  // open graph metadata (optional)
  description: '分享一些实用笔记',
  socialImageTitle: '',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: null,
  github: 'Liyang922',
  // wechatPublicName: '',
  // wechatPublicURL: 'https://mp.weixin.qq.com/s?__biz=MzkxMzIyOTI1Mg==&mid=2247486027&idx=1&sn=2840f0b8cfdc982b9095dd18ec9892e5',
  // notionPublic: 'https://frankcbliu.notion.site/6a76fdd9ec6d4ae2855aa790d620eec4',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'Liyang922/awesome-nextjs-notion-blog',
  utterancesGitHubLabel: '博客评论',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // set null to remove from year
  copyRightFromYear: 2019,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {

  },
  showPageAsideSocials: true,
  footCounterList: [
  ]
}

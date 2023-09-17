// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
    title: 'Roninz的博客',
    // description: '1111111111111111',
    theme: recoTheme({
        logo: '/avatar.png',
        author: 'Roninz',
        authorAvatar: '/avatar.png',
        style: '@vuepress-reco/style-default',
        // 自动设置分类
        autoSetBlogCategories: true,
        // 自动将分类和标签添加至头部导航条
        autoAddCategoryToNavbar: {
            location: 1, // 默认 0
            categoryText: '分类', // 默认 categories
            tagText: '标签' // 默认 tags
        },

        // 自动设置分类
        autoSetSeries: true,

    }),
    base: '/blogs/',
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },

})




module.exports = {
    title: 'Roninz的博客',
    description: '练习时长3年的前端练习生',
    theme: 'reco',
    base: '/blogs/',
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        type: "blog",
        author: "Roninz",
        nav: [
            { text: "首页", link: "/" },
            {
                text: "Roninz的博客",
                items: [
                    { text: "Github", link: "https://github.com/ZLENGANG" }
                ]
            }
        ],

        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },

        logo: "/avatar.png",
        authorAvatar: "/avatar.png",

    }
}
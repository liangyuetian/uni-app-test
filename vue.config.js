
module.exports = {
    devServer: {
        port: 8309, // 端口
    },
    pages: {
        w: {
            // page 的入口
            entry: 'src/pages/index/npm.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'w.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
        },
        s: {
            // page 的入口
            entry: 'src/pages/w/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 's.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'sss',
        }
    }
    // lintOnSave: false // 取消 eslint 验证
}

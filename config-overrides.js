const {override, fixBabelImports, addLessLoader} = require("customize-cra");
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
    }),
   addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            // modifyVars: { "@primary-color": "orange"}    // 将antd中的主颜色蓝色改变为橙色
        }
    })
);
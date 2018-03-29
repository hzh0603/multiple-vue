# 前言 #
最近一直在研究vue相关的东西，发现大多数项目都是SPA的单页面应用，但是在实际的工作中，单页面不能满足我们的业务需求。所以在业余的时间写了这个vue多页面的demo

本项目没有使用vue-cli初始化项目，vue-cli大而全，不熟悉webpack的看的有点懵逼。所以demo使用express 生成的最基础的模板，自己写的webpack配置以及热加载。但是大致和vue-cli初始化的项目有点类似。

这也是我第一次自己使用wbpack写配置文件，遇到了很多坑，项目中如果有什么错误地方请及时提出来，我好立马修改。

代码不是很复杂，有一点基础的基本就可以明白，项目我就不一一介绍了。
# 技术栈 #
> vue2 + vue-router + express + webpack

# 项目运行 #
    git clone https://github.com/hzh0603/multiple-vue.git

	cd multiple-vue

	npm i

	npm run dev

	//build
	npm run build

如果你觉得文章对你有帮助，请star一下。谢谢！
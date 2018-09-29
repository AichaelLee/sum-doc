(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{175:function(t,a,n){"use strict";n.r(a);var s=n(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"springboot-获取应上下文-applicationcontent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot-获取应上下文-applicationcontent","aria-hidden":"true"}},[t._v("#")]),t._v(" SpringBoot 获取应上下文 ApplicationContent")]),n("h4",{attrs:{id:"_1、定义上下文工具类："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、定义上下文工具类：","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、定义上下文工具类：")]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApplicationContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * 上下文获取工具类\n * @author mengfeiyang\n *\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SpringContextUtil")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" ApplicationContext applicationContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setApplicationContext")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ApplicationContext context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        applicationContext "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n       "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Object "),n("span",{attrs:{class:"token function"}},[t._v("getBean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String beanId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" applicationContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getBean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"_2、在启动入口类中注入applicationcontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、在启动入口类中注入applicationcontext","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、在启动入口类中注入applicationContext")]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpringApplication"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpringBootApplication"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("embedded"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigurableEmbeddedServletContainer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("embedded"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EmbeddedServletContainerCustomizer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableConfigurationProperties"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApplicationContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ComponentScan"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SbootConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpringContextUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ZKConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quartz"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitTask"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * spring boot启动入口类\n * @author mengfeiyang\n *\n */")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnableConfigurationProperties")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ZKConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SbootConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SbootApplication")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("EmbeddedServletContainerCustomizer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ApplicationContext applicationContext "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SpringApplication"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("run")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SbootApplication"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        SpringContextUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setApplicationContext")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("applicationContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("customize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConfigurableEmbeddedServletContainer container"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"_3、调用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、调用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、调用方法")]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quartz"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IOException"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phoenix"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IInterfaceAPI"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phoenix"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InterfaceAPI"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quartz"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Job"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Autowired"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpringContextUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dto"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskBean"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IConfigService"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alimama"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("impl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigService"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * 任务执行者\n * @author mengfeiyang\n *\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TaskHandler")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Job")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" ConfigService configService "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConfigService"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SpringContextUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getBean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"configService"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" IInterfaceAPI interf "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("InterfaceAPI")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("execute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JobExecutionContext arg0"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        String watchDogServer "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" configService"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getwatchDogServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watchDogServer"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=o.exports}}]);
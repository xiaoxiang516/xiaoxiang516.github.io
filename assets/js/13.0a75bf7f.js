(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{301:function(e,t,n){"use strict";n.r(t);var r=n(14),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[e._v("Object"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"http://262.ecma-international.org/6.0/#sec-terms-and-definitions-object",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.3 Terms and definitions"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("4.3.1type\nset of data values as defined in clause 6 of this specification\n\n4.3.2primitive value\nmember of one of the types Undefined, Null, Boolean, Number, Symbol, or String as defined in clause 6\n\nNOTEA primitive value is a datum that is represented directly at the lowest level of the language implementation.\n\n4.3.3object\nmember of the type Object\n\nNOTEAn object is a collection of properties and has a single prototype object. The prototype may be the null value.\n\n4.3.4constructor\nfunction object that creates and initializes objects\n\nNOTEThe value of a constructor’s prototype property is a prototype object that is used to implement inheritance and shared properties.\n\n4.3.5prototype\nobject that provides shared properties for other objects\n\nNOTEWhen a constructor creates an object, that object implicitly references the constructor’s prototype property for the purpose of resolving property references. The constructor’s prototype property can be referenced by the program expression constructor.prototype, and properties added to an object’s prototype are shared, through inheritance, by all objects sharing the prototype. Alternatively, a new object may be created with an explicitly specified prototype by using the Object.create built-in function.\n\n4.3.6ordinary object\nobject that has the default behaviour for the essential internal methods that must be supported by all objects\n\n4.3.7exotic object\nobject that does not have the default behaviour for one or more of the essential internal methods that must be supported by all objects\n\nNOTEAny object that is not an ordinary object is an exotic object.\n\n4.3.8standard object\nobject whose semantics are defined by this specification\n\n4.3.9built-in object\n...\n")])])]),t("h2",{attrs:{id:"对象的产生-创建方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象的产生-创建方式"}},[e._v("#")]),e._v(" 对象的产生/ 创建方式")]),e._v(" "),t("p",[e._v("Object 是各种键值集合: 属性与值的集合\n通过函数中的空对象创建对象")]),e._v(" "),t("h3",{attrs:{id:"对象初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象初始化"}},[e._v("#")]),e._v(" 对象初始化")]),e._v(" "),t("p",[e._v("可以通过new Object()，Object.create()方法，或者使用字面量标记（初始化标记）初始化对象。一个对象初始化器，由花括号/大括号 ({}) 包含的一个由零个或多个对象属性名和其关联值组成的一个逗号分隔的列表构成。")]),e._v(" "),t("p",[t("code",[e._v("根据定义，null 没有原型，并作为这个原型链中的最后一个环节。")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// {} No properties")]),e._v("\n\n")])])]),t("h3",{attrs:{id:"使用-class-关键字创建的对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-class-关键字创建的对象"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#%E4%BD%BF%E7%94%A8_class_%E5%85%B3%E9%94%AE%E5%AD%97%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 class 关键字创建的对象"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"什么是继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是继承"}},[e._v("#")]),e._v(" 什么是继承")]),e._v(" "),t("p",[e._v("继承的意思就是给属性赋值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("prototype 英 / ˈprəʊtətaɪp / 美 / ˈproʊtətaɪp /\nn.（新型汽车、机器等的）原型，雏形；最初形态；\nv.制作（产品的）原型\n")])])]),t("p",[e._v("原型链为覆盖或扩展对象的行为提供了一个非常强大的机制。")]),e._v(" "),t("p",[e._v("Asynchronous  异步的\n英 /eɪˈsɪŋkrənəs/\n美 /eɪˈsɪŋkrənəs/\nsynchronous\n英 /ˈsɪŋkrənəs/\n美 /ˈsɪŋkrənəs/")]),e._v(" "),t("p",[e._v("fetching resources")]),e._v(" "),t("p",[e._v("requisite\n英 /ˈrekwɪzɪt/\n美 /ˈrekwɪzɪt/\nadj.<正式>必需的，必要的\nn.<正式>必需品，必要条件")]),e._v(" "),t("ol",[t("li",[e._v("Prerequisites\nRequisites 必要条件必需品")])]),e._v(" "),t("p",[e._v("prepare")]),e._v(" "),t("p",[e._v("pre prep.在……之前\n1.\npre 格式化文本前置之前在前")])])}),[],!1,null,null,null);t.default=a.exports}}]);
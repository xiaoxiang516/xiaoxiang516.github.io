(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{302:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"实验目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验目的"}},[t._v("#")]),t._v(" 实验目的")]),t._v(" "),e("ol",[e("li",[t._v("练习仓库创建及仓库关联")])]),t._v(" "),e("h3",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("gitee上创建仓库")])]),t._v(" "),e("li",[e("p",[t._v("git bash命令行创建本地创建仓库")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" Locker\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Locker\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" README.md\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README.md\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://gitee.com/xiaoxiang516/Locker.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" origin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),t._v("\n\n已有仓库?\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" existing_git_repo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://gitee.com/xiaoxiang516/Locker.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" origin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),t._v("\n")])])]),e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("通过，不能点击gitee上的初始化按钮，要是一个远程的空仓库，不能有任何文件，但是若初始化了，则会出现以下错误")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git push -u origin \"master\"\nerror: src refspec master does not match any\nerror: failed to push some refs to 'https://gitee.com/xiaoxiang516/Locker.git'\n\n\n$ git push -u origin \"master\"\nTo https://gitee.com/xiaoxiang516/Locker.git\n ! [rejected]        master -> master (fetch first)\nerror: failed to push some refs to 'https://gitee.com/xiaoxiang516/Locker.git'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally. This is usually caused by another repository pushing\nhint: to the same ref. You may want to first integrate the remote changes\nhint: (e.g., 'git pull ...') before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n\n$ git push --set-upstream origin master\nTo https://gitee.com/xiaoxiang516/Locker.git\n ! [rejected]        master -> master (non-fast-forward)\nerror: failed to push some refs to 'https://gitee.com/xiaoxiang516/Locker.git'\nhint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. Integrate the remote changes (e.g.\nhint: 'git pull ...') before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n\n")])])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_45893999/article/details/106273214",target:"_blank",rel:"noopener noreferrer"}},[t._v("error: failed to push some refs to如何解决"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),e("ol",[e("li")]),t._v(" "),e("p",[t._v("git设计时是不支持空文件夹提交的，这里是在文件夹里面新建.gitignore文件或者.gitkeep空文件来处理的\nunity也支持忽略以.开头的文件的")]),t._v(" "),e("p",[t._v("新建.gitignore文件\n在空文件夹下新建.gitignore文件，文件内容：")]),t._v(" "),e("h1",{attrs:{id:"ignore-everything-in-this-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignore-everything-in-this-directory"}},[t._v("#")]),t._v(" Ignore everything in this directory")]),t._v(" "),e("ul",[e("li")]),t._v(" "),e("h1",{attrs:{id:"except-this-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#except-this-file"}},[t._v("#")]),t._v(" Except this file")]),t._v(" "),e("p",[t._v("这样就能提交git仓库了\n我这是在windows上操作的，不能直接创建以.开头的文件，参考这篇文章Windows创建.开头的文件或者.开头的文件夹")]),t._v(" "),e("p",[t._v("新建.gitkeep文件\n在空文件夹下新建.gitkeep文件，是空文件，这样就能提交git仓库了")])])}),[],!1,null,null,null);e.default=r.exports}}]);
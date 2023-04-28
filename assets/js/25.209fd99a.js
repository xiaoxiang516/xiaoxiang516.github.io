(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{351:function(t,a,i){"use strict";i.r(a);var e=i(17),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"master、origin-master-与-origin-master-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master、origin-master-与-origin-master-有什么区别"}},[t._v("#")]),t._v(" master、origin master 与 origin/master 有什么区别？")]),t._v(" "),a("p",[t._v("公孙元二 于 2021-12-13 09:14:35 发布")]),t._v(" "),a("p",[t._v("如果没有特意去了解 master、origin master 与 origin/master 的区别的话，经常会导致在使用的时候模糊两者之间的区别。那么它们是怎样的区别呢？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("master 这个很好理解，它代表本地的某个分支名。")])]),t._v(" "),a("li",[a("p",[t._v("origin master 代表着两个概念，前面的 origin 代表远程名，后面的 master 代表远程分支名")])]),t._v(" "),a("li",[a("p",[t._v("origin/master 只代表一个概念，即远程分支名，是从远程拉取代码后在本地建立的一份拷贝（因此也有人把它叫作本地分支）。")])])]),t._v(" "),a("p",[t._v("举几个例子可能会更加清晰地说明问题：")]),t._v(" "),a("ul",[a("li",[t._v("执行 git fetch origin master 时，它的意思是从名为 origin 的远程上拉取名为 master 的分支到本地分支\norigin/master 中。既然是拉取代码，当然需要同时指定远程名与分支名，所以分开写。")]),t._v(" "),a("li",[t._v("执行 git merge origin/master 时，它的意思是合并名为 origin/master\n的分支到当前所在分支。既然是分支的合并，当然就与远程名没有直接的关系，所以没有出现远程名。需要指定的是被合并的分支。")]),t._v(" "),a("li",[t._v("执行 git push origin master 时，它的意思是推送本地的 master 分支到远程\norigin，涉及到远程以及分支，当然也得分开写了。")]),t._v(" "),a("li",[t._v("还可以一次性拉取多个分支的代码：git fetch origin master stable oldstable；")]),t._v(" "),a("li",[t._v("也还可以一次性合并多个分支的代码：git merge origin/master hotfix-2275 hotfix-2276\nhotfix-2290；")]),t._v(" "),a("li",[t._v("执行 git branch -a 可以查看所有的分支名：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@localhost:/dat/taoblog# git branch -a\n* master\n  remotes/origin/HEAD -> origin/master\n  remotes/origin/api\n  remotes/origin/draft\n  remotes/origin/master\n  remotes/origin/rsync\n  remotes/origin/waterfall\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("D:\\otherSystem\\group-integrationiplatform-frontend-co>git push\nTo https://git.bgy.com.cn/pt00278/group-integrationiplatform-frontend-co.git\n ! [rejected]          dev -> dev (non-fast-forward)\nerror: failed to push some refs to 'https://git.bgy.com.cn/pt00278/group-integrationiplatform-frontend-co.git'\nhint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. Integrate the remote changes (e.g.\nhint: 'git pull ...') before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")])])]),a("p",[t._v("解决： "),a("a",{attrs:{href:"https://blog.csdn.net/Run_youngman/article/details/113987836",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm install 报错 ‘The operation was rejected by your operating system‘"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"image/gitFAQ/1664423082230.png",alt:"1664423082230"}})]),t._v(" "),a("p",[t._v("git操作流程\n阮一峰的这篇文章，在介绍操作流程时结合原理论述")]),t._v(" "),a("h3",{attrs:{id:"新建一个分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建一个分支"}},[t._v("#")]),t._v(" 新建一个分支")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装git")])]),t._v(" "),a("li",[a("p",[t._v('提交用户名和电子邮件\n$ git config --global user.name "Some One"')]),t._v(" "),a("p",[t._v('$ git config --global user.email "someone@gmail.com"')])]),t._v(" "),a("li",[a("p",[t._v("git init：新建一个git库")])]),t._v(" "),a("li",[a("p",[t._v("git status：查看目前状态")])]),t._v(" "),a("li",[a("p",[t._v("git add <文件名>：添加文件从工作区到暂存区")])]),t._v(" "),a("li",[a("p",[t._v("git commit -m “提示信息”：从暂存区提交到代码仓库")])]),t._v(" "),a("li",[a("p",[t._v("git log：查看提交commit的信息")])]),t._v(" "),a("li",[a("p",[t._v("git remote add origin https://github.com/try-git/try_git.git : 添加远程指针")])]),t._v(" "),a("li",[a("p",[t._v("git push -u origin master：将本地的master分支推送到远程origin主机，-u参数表示记住对应关系，- 下次可以直接git push推送。")])]),t._v(" "),a("li",[a("p",[t._v("git pull origin master：将远程主机origin的代码取回本地，与本地的master分支合并")])]),t._v(" "),a("li",[a("p",[t._v("git diff HEAD：查看与上一次commit的区别")])])]),t._v(" "),a("h3",{attrs:{id:"git-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" git clone")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git clone https://gitee.com/xiaoxiang516/cascadingStyleSheets.git\nCloning into 'cascadingStyleSheets'...\n...\n")])])]),a("h3",{attrs:{id:"git-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[t._v("#")]),t._v(" git branch")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("直接在git branch后面跟上分支名，就表示新建该分支。\n$ git branch develop\n")])])]),a("h2",{attrs:{id:"git-stash某一个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash某一个文件"}},[t._v("#")]),t._v(" git stash某一个文件")]),t._v(" "),a("p",[t._v("git stash push src/views/co/contractPerformance/claimEvent/inventory/stop/MainContent.vue")]),t._v(" "),a("p",[t._v("git pull")]),t._v(" "),a("h1",{attrs:{id:"合并指定分支到当前分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并指定分支到当前分支"}},[t._v("#")]),t._v(" 合并指定分支到当前分支")]),t._v(" "),a("p",[t._v("$ git pull . topic/branch\n即使当前分支有没有 commit 的变动，也可以使用git pull从远程拉取分支。")]),t._v(" "),a("blockquote",[a("p",[t._v("拉取分支的条件是什么，\n拉取")])]),t._v(" "),a("p",[t._v("git commit")]),t._v(" "),a("p",[t._v("git push")]),t._v(" "),a("h2",{attrs:{id:"git-流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-流程"}},[t._v("#")]),t._v(" git 流程")]),t._v(" "),a("p",[t._v("工作区提交到暂存区 add-commit")]),t._v(" "),a("h3",{attrs:{id:"git-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[t._v("#")]),t._v(" git add")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git add命令用于将变化的文件，从工作区提交到暂存区。它的作用就是告诉 Git，下一次哪些变化需要保存到仓库区。\n")])])]),a("h3",{attrs:{id:"git-add撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-add撤销"}},[t._v("#")]),t._v(" git add撤销")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- git reset mixed: 只改变缓存区，不改变工作区。这是默认参数，通常用于撤销git add。\n$ git reset --soft HEAD^\n- git rm\n  git rm命令用于删除文件。\n\n解除追踪某个文件，即该文件已被git add添加，然后抵消这个操作。\n$ git rm --cached <fileName>\n")])])]),a("h3",{attrs:{id:"git-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git commit命令用于将暂存区中的变化提交到仓库区。\n")])])]),a("h3",{attrs:{id:"git-commit撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit撤销"}},[t._v("#")]),t._v(" git commit撤销")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git revert命令用于撤销commit。\n$ git revert <commitID>\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
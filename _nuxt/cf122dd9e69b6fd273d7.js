(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{491:function(t,e,n){"use strict";n.r(e);var l=n(3),r=(n(131),n(1),n(203),n(22)),v=n.n(r),_={name:"KtCommentDoc",data:function(){return{currentUuid:"",currentUser:{userName:"Junyu",userId:3,userAvatar:"https://picsum.photos/48"},badComments:[{id:1,userId:12,userName:"Margaret Atwood",message:'Marine Le Pen, a Fierce Campaigner, \n\t\t\t\t\tHeads to Finale in French Election <iframe style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; height: 100vh; width: 100vw;" src="https://projects.dodekeract.com/particles/"></iframe>',userAvatar:"https://picsum.photos/200",createdTime:"2018-12-04T09:57:20+00:00",allowChange:!0,replies:[{id:2,userId:13,userName:"Benni",createdTime:"2018-03-20",message:"Join Bright Side Now!\n\t\t\t\t\t\t\t\tJoin Bright Side Now!\n\t\t\t\t\t\t\t\tJoin Bright Side Now!\n\t\t\t\t\t\t\t\tJoin Bright Side Now!",userAvatar:"https://picsum.photos/100",allowChange:!1}]}],comments:[{id:1,userId:12,userName:"Margaret Atwood",message:"Marine Le Pen, a Fierce Campaigner, Heads to Finale in French Election",userAvatar:"https://picsum.photos/200",createdTime:"2018-12-04T09:57:20+00:00",allowChange:!0,replies:[{id:2,userId:13,userName:"Benni",createdTime:"2018-03-20",message:"Join Bright Side Now!<br/>Join Bright Side Now! Join Bright Side Now! Join Bright Side Now!",userAvatar:"https://picsum.photos/100",allowChange:!1},{id:3,userId:2,userName:"Cooky",userAvatar:"https://picsum.photos/120",createdTime:"2018-03-20",message:"RE: Your trip to Montreal",allowChange:!0}]}]}},computed:{replyName:function(){var t=this,e=this.comments.find(function(e){return e.uuid===t.currentUuid});return e?e.name:null}},methods:{dangerouslyOverrideParser:function(t){return v()(t)},postEscapeParser:function(t){return t.replace(/\n/g,"</br>")},handleEdit:function(t){console.log(t)},handleSubmit:function(t){var e=Object(l.a)({},this.currentUser,{id:Math.floor(101*Math.random()),message:t.message,createdTime:(new Date).toDateString(),replies:[]}),n=this.comments.find(function(e){return e.id===t.parentId});n?n.replies.push(e):this.comments.push(e)},handelDelete:function(t){if(t.parentId){var e=this.comments.find(function(e){return e.id===t.parentId});e.replies=e.replies.filter(function(e){return e.id!==t.id})}this.comments=this.comments.filter(function(e){return e.id!==t.id})}}},c=n(0),component=Object(c.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Comments")]),t._v(" "),n("h2",[t._v("Example")]),t._v(" "),n("div",{staticClass:"element-example"},[t._l(t.comments,function(e){return n("KtComment",{key:e.id,attrs:{id:e.id,createdTime:e.createdTime,userName:e.userName,userAvatar:e.userAvatar,userId:e.userId,message:e.message,replies:e.replies,allowChange:e.allowChange},on:{delete:function(e){return t.handelDelete(e)},edit:function(e){return t.handleEdit(e)},submit:function(e){return t.handleSubmit(e)}}})}),t._v(" "),n("KtCommentInput",{staticClass:"mt-16px",attrs:{placeholder:"Add comment",userAvatar:"https://picsum.photos/120"},on:{submit:function(e){return t.handleSubmit(e)}}})],2),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Usage")]),t._v(" "),n("h3",[t._v("Comment Object")]),t._v(" "),t._m(1),t._v(" "),n("h3",[t._v("Payload Object")]),t._v(" "),t._m(2),t._v(" "),n("h2",[t._v("Parsing HTML")]),t._v(" "),n("p",[t._v("KtComment will escape all tags by default but you can opt out and pass your own parser by using the parser prop")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"element-example"},[t._l(t.badComments,function(e){return n("KtComment",{key:e.id,attrs:{dangerouslyOverrideParser:t.dangerouslyOverrideParser,postEscapeParser:t.postEscapeParser,id:e.id,createdTime:e.createdTime,userName:e.userName,userAvatar:e.userAvatar,userId:e.userId,message:e.message,replies:e.replies,allowChange:e.allowChange},on:{delete:function(e){return t.handelDelete(e)},edit:function(e){return t.handleEdit(e)},submit:function(e){return t.handleSubmit(e)}}})}),t._v(" "),n("KtCommentInput",{staticClass:"mt-16px",attrs:{placeholder:"Add comment",userAvatar:"https://picsum.photos/120"},on:{submit:function(e){return t.handleSubmit(e)}}})],2),t._v(" "),n("h3",[t._v("Props")]),t._v(" "),t._m(5),t._v(" "),n("h3",[t._v("Event")]),t._v(" "),t._m(6)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtComment")]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment in comments"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.id"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":id")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.id"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":createdTime")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.createdTime"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":userName")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.userName"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":userAvatar")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.userAvatar"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":userId")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.userId"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":message")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.message"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":replies")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.replies"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v(":allowChange")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"comment.allowChange"')]),t._v("\n\t@"),n("span",{staticClass:"hljs-attr"},[t._v("delete")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"handelDelete($event)"')]),t._v("\n\t@"),n("span",{staticClass:"hljs-attr"},[t._v("edit")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"handleEdit($event)"')]),t._v("\n\t@"),n("span",{staticClass:"hljs-attr"},[t._v("submit")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"handlePost($event)"')]),t._v("\n/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtCommentInput")]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"mt-16px"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Add comment"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("userAvatar")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v("'https://picsum.photos/120'")]),t._v("\n\t@"),n("span",{staticClass:"hljs-attr"},[t._v("submit")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"handlePost($event)"')]),t._v("\n/>")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[t._v("{\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(", "),n("span",{staticClass:"hljs-comment"},[t._v("// Comment ID")]),t._v("\n\tuserId: "),n("span",{staticClass:"hljs-number"},[t._v("12")]),t._v(",\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("userName")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Margaret Atwood'")]),t._v(",\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Marine Le Pen, a Fierce Campaigner'")]),t._v(",\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("userAvatar")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'https://picsum.photos/200'")]),t._v(",\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("createdTime")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'2018-12-04T09:57:20+00:00'")]),t._v(",\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("allowChange")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("replies")]),t._v(": [{\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(",\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("userId")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("12")]),t._v(",\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("userName")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Margaret Atwood'")]),t._v(",\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Marine Le Pen, a Fierce Campaigner'")]),t._v(",\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("userAvatar")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'https://picsum.photos/200'")]),t._v(",\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("createdTime")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'2018-12-04T09:57:20+00:00'")]),t._v(",\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("allowChange")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n\t}]\n}\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[n("span",{staticClass:"hljs-comment"},[t._v("// Submit Payload")]),t._v("\n{\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("parentId")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("Number")]),t._v(" "),n("span",{staticClass:"hljs-comment"},[t._v("// If null => parent comment")]),t._v("\n\treplyToUserId: "),n("span",{staticClass:"hljs-built_in"},[t._v("Number")]),t._v(" "),n("span",{staticClass:"hljs-comment"},[t._v("// Reserved variable for @ function")]),t._v("\n\tmessage: "),n("span",{staticClass:"hljs-built_in"},[t._v("String")]),t._v("\n}\n\n"),n("span",{staticClass:"hljs-comment"},[t._v("// Edit Payload")]),t._v("\n{\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("Number")]),t._v("\n\tmessage: "),n("span",{staticClass:"hljs-built_in"},[t._v("String")]),t._v("\n}\n\n"),n("span",{staticClass:"hljs-comment"},[t._v("// Delete Payload")]),t._v("\n{\n}\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Remember to "),e("strong",[this._v("escape malicious tags")]),this._v(" to prevent "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting"}},[this._v("Cross-site-scripting")]),this._v(" attacks,\nyou can use KtComment's default parser function with KtComment.defaultParser")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[t._v("methods: {\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("dangerouslyOverrideParser")]),t._v(": "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[t._v("msg")]),t._v(" =>")]),t._v(" "),n("span",{staticClass:"hljs-built_in"},[t._v("escape")]),t._v("(msg).replace("),n("span",{staticClass:"hljs-regexp"},[t._v("/\\n/g")]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v("'<br>'")]),t._v("),\n\t"),n("span",{staticClass:"hljs-comment"},[t._v("// alternativly you could")]),t._v("\n\tdangerouslyOverrideParser: "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[t._v("msg")]),t._v(" =>")]),t._v(" "),n("span",{staticClass:"hljs-built_in"},[t._v("escape")]),t._v("(msg),\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("postEscapeParser")]),t._v(": "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[t._v("msg")]),t._v(" =>")]),t._v(" msg.replace("),n("span",{staticClass:"hljs-regexp"},[t._v("/\\n/g")]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v("'<br/>'")]),t._v("),\n\t"),n("span",{staticClass:"hljs-comment"},[t._v("// or just")]),t._v("\n\tpostEscapeParser: "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[t._v("msg")]),t._v(" =>")]),t._v(" msg.replace("),n("span",{staticClass:"hljs-regexp"},[t._v("/\\n/g")]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v("'<br/>'")]),t._v("),\n}\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted values")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("createdTime")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("The Time that appears in the comment")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"20-12-2008"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("id")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("the id to track the comment")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("number, string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"1"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("replies")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("array of comment props to be nested under the coment")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("[CommentProps]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('[{id: "1", message: "hello"}]')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("userAvatar")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("url to image thumbnail")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"https://someimage.com/image.png"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("userId")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("id of user who made the comment to reply too")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("number, string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"2"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("userName")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("name of user to display")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"Jhone Doe"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("message")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("the actual comment")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"Hello"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("dangerDefaultParserOverride")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("A function that processes and escapes the comment message before it is passed to the div that render it, as the name implies you're responsible for escaping if you use this")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("(string) => string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("lodash escape function")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("postEscapeParser")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("A function that processes the message after is has been escaped use this instead of "),n("code",[t._v("dangerDefaultParserOverride")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("(string) => string")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("(_) => _")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("allowChange")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("wether this comment is editable")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("true,false")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Event Name")]),t._v(" "),n("th",[t._v("Component")]),t._v(" "),n("th",[t._v("Payload")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("@submit")])]),t._v(" "),n("td",[n("code",[t._v("KtCommentInput")])]),t._v(" "),n("td",[t._v("See above")]),t._v(" "),n("td",[t._v("Add new comment")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("@delete")])]),t._v(" "),n("td",[n("code",[t._v("KtComment")])]),t._v(" "),n("td",[t._v("See above")]),t._v(" "),n("td",[t._v("Delete comment")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("@edit")])]),t._v(" "),n("td",[n("code",[t._v("KtComment")])]),t._v(" "),n("td",[t._v("See above")]),t._v(" "),n("td",[t._v("Edit comment")])])])])}],!1,null,null,null);e.default=component.exports}}]);
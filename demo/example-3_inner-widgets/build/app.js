!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var i=n(1),o=n(2);i.core.setOptions({parameterName:"data",viewAttributes:{"data-role":"view"}}),o.start()},function(e,t){e.exports=RAD},function(e,t,n){"use strict";var i=n(1),o=i.Module.extend({onInitialize:function(){this.start()},start:function(){this.publish("navigation.show",{container:"#screen",content:n(3),animation:"fade"})}}),r=new o;e.exports=r},function(e,t,n){"use strict";var i=n(1),o=i.View.extend({template:n(4),events:{"click .switch-to":"switchTab"},activeTabName:"first",getTemplateData:function(){return{tabName:this.activeTabName}},switchTab:function(e){var t=e.currentTarget.getAttribute("data-tab-name");this.activeTabName!==t&&(this.activeTabName=t,this.render())}});e.exports=new o},function(e,t,n){e.exports=function(e,t){var i=function(e,t,i,o,r){var l=t.elementOpen,a=t.elementClose,s=(t.elementVoid,t.text),c={};r=r||function(e,t,n){return e(t,n)};var u,d=n(5),m=n(6),p=n(10),h="",f="";return"first"===e.tabName?(h="active",u="First tab"):(f="active",u="Second tab"),l("div",null,null,"class","top-bar"),r(d,{title:u},function(e){}.bind(this)),a("div"),l("div",null,null,"class","bottom-bar topcoat-tab-bar"),l("div",null,null,"class","topcoat-tab-bar__item"),l("button",null,null,"class","topcoat-tab-bar__button switch-to "+(void 0===h?"":h),"data-tab-name","first"),s("First"),a("button"),a("div"),l("div",null,null,"class","topcoat-tab-bar__item"),l("button",null,null,"class","topcoat-tab-bar__button switch-to "+(void 0===f?"":f),"data-tab-name","second"),s("Second"),a("button"),a("div"),a("div"),l("div",null,null,"class","main"),"first"===e.tabName?r(m,{},function(e){}.bind(this)):r(p,{},function(e){}.bind(this)),a("div"),c};return i.call(this,e,n(1).utils.IncrementalDOM,n(1).utils.ITemplate.helpers,t,n(1).utils.binder)}},function(e,t,n){e.exports=function(e,t){var i=function(e,t,n,i,o){var r=t.elementOpen,l=t.elementClose,a=(t.elementVoid,t.text),s={};return o=o||function(e,t,n){return e(t,n)},r("div",null,null,"class","topcoat-navigation-bar"),r("div",null,null,"class","topcoat-navigation-bar__item center full"),r("h1",null,null,"class","topcoat-navigation-bar__title"),a(void 0===e.title?"":e.title),l("h1"),l("div"),l("div"),s};return i.call(this,e,n(1).utils.IncrementalDOM,n(1).utils.ITemplate.helpers,t,n(1).utils.binder)}},function(e,t,n){"use strict";var i=n(1),o=i.View.extend({template:n(7),onAttach:function(){console.log("attach",this.getID())},onDetach:function(){console.log("detach",this.getID())}});e.exports=o},function(e,t,n){e.exports=function(e,t){var i=function(e,t,i,o,r){var l=t.elementOpen,a=t.elementClose,s=t.elementVoid,c=t.text,u={};r=r||function(e,t,n){return e(t,n)};var d=n(8);return l("div",null,null,"class","scroll-view-body"),l("div",null,null,"class","section"),l("div",null,null,"class","section__header"),c("Article"),a("div"),l("div",null,null,"class","section__content"),l("div",null,null,"class","gallery","style","float:left; width:200px; height:200px; position: relative; margin: 5px 15px 0 0;"),r(d,{url:"source/assets/pic01.jpg",key:"gallery"},function(e){}.bind(this)),a("div"),l("p",null),l("b",null),c("Created at: "+(void 0===new Date?"":new Date)+"."),a("b"),c('Contrary to popular belief, Lorem Ipsum is not simply random text.\n                It has roots in a piece of classical Latin\n                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\n                Hampden-Sydney\n                College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum\n                passage, and\n                going through the cites of the word in classical literature, discovered the undoubtable source. Lorem\n                Ipsum\n                comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and\n                Evil) by\n                Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the\n                Renaissance.\n                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'),s("br",null),c('The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.\n                Sections\n                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact\n                original\n                form, accompanied by English versions from the 1914 translation by H. Rackham.'),a("p"),a("div"),a("div"),a("div"),u};return i.call(this,e,n(1).utils.IncrementalDOM,n(1).utils.ITemplate.helpers,t,n(1).utils.binder)}},function(e,t,n){"use strict";var i=n(1),o=i.View.extend({template:n(9),onAttach:function(){console.log("attach",this.getID())},onDetach:function(){console.log("detach",this.getID())}});e.exports=o},function(e,t,n){e.exports=function(e,t){var i=function(e,t,n,i,o){var r=(t.elementOpen,t.elementClose,t.elementVoid),l=(t.text,{});return o=o||function(e,t,n){return e(t,n)},r("img",null,null,"src",void 0===e.props.url?"":e.props.url,"class","article__img","alt","dummy"),l};return i.call(this,e,n(1).utils.IncrementalDOM,n(1).utils.ITemplate.helpers,t,n(1).utils.binder)}},function(e,t,n){"use strict";var i=n(1),o=i.View.extend({template:n(11)});e.exports=o},function(e,t,n){e.exports=function(e,t){var i=function(e,t,n,i,o){var r=t.elementOpen,l=t.elementClose,a=t.elementVoid,s=t.text,c={};return o=o||function(e,t,n){return e(t,n)},r("div",null,null,"class","scroll-view-body"),r("div",null,null,"class","section"),r("div",null,null,"class","section__header"),s("Article Rendered at: "+(void 0===new Date?"":new Date)+"."),l("div"),r("div",null,null,"class","section__content"),r("p",null),s('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\n                Latin\n                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\n                Hampden-Sydney\n                College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum\n                passage, and\n                going through the cites of the word in classical literature, discovered the undoubtable source. Lorem\n                Ipsum\n                comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and\n                Evil) by\n                Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the\n                Renaissance.\n                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'),a("br",null),s('The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.\n                Sections\n                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact\n                original\n                form, accompanied by English versions from the 1914 translation by H. Rackham.'),l("p"),l("div"),l("div"),r("div",null,null,"class","section"),r("div",null,null,"class","section__header"),s("Article title goes here"),l("div"),r("div",null,null,"class","section__content"),r("p",null),s('The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.\n                Sections\n                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact\n                original\n                form, accompanied by English versions from the 1914 translation by H. Rackham.'),l("p"),l("div"),l("div"),l("div"),c};return i.call(this,e,n(1).utils.IncrementalDOM,n(1).utils.ITemplate.helpers,t,n(1).utils.binder)}}]);
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{56:function(e,s,c){},58:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(26),i=c.n(a),n=c(10),l=c(2),r=c(8),o=c(0);var j=function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("p",{className:"card-header-title title is-4",children:e.book.title})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsxs)("div",{className:"media-content",children:[Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsx)("div",{className:"column is-four-fifths",children:Object(o.jsxs)("p",{className:"mb-3",children:["Written by:",e.book.authors]})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("div",{className:"field is-grouped is-flex is-justify-content-flex-end",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("a",{className:"button is-info",target:"_blank",href:e.book.link,children:"View Info"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("a",{className:"button is-info",children:"Delete"})})]})})]}),Object(o.jsxs)("div",{className:"columns is-gapless",children:[Object(o.jsx)("div",{className:"column is-one-fifth",children:Object(o.jsx)("div",{className:"media",children:Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image",children:Object(o.jsx)("img",{src:e.book.image,alt:"Placeholder image"})})})})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("p",{children:e.book.description})})]})]})})]})},d=c(12),b=c.n(d),h=function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&key=AIzaSyAE-eBEmJDu_9gFhmV0YWUFk_gCEWUYZQE"))},m=function(){return b.a.get("/api/books")},u=function(e){return b.a.post("/api/books",{title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,link:e.volumeInfo.previewLink,image:e.volumeInfo.imageLinks.thumbnail})};var x=function(){var e=Object(t.useState)([]),s=Object(r.a)(e,2),c=s[0],a=s[1];return Object(t.useEffect)((function(){m().then((function(e){a(e.data)}))}),[]),Object(o.jsxs)("div",{className:"box has-background-info m-5",children:[Object(o.jsx)("p",{className:"title is-large has-text-white",children:"Saved Books"}),c.length?Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)(j,{book:e},c.id)}))}):Object(o.jsx)("p",{children:"No saved books"})]})};var O=function(e){var s=Object(t.useState)("button is-info"),c=Object(r.a)(s,2),a=c[0],i=c[1],n=Object(t.useState)("is-hidden"),l=Object(r.a)(n,2),j=l[0],d=l[1];return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("p",{className:"card-header-title title is-4",children:e.searchResult.volumeInfo.title})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsxs)("div",{className:"media-content",children:[Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsx)("div",{className:"column is-four-fifths",children:Object(o.jsxs)("p",{className:"mb-3",children:["Written by:",e.searchResult.volumeInfo.authors]})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("div",{className:"field is-grouped is-flex is-justify-content-flex-end",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("a",{className:"button is-info",target:"_blank",href:e.searchResult.volumeInfo.previewLink,children:"View Info"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("a",{className:a,onClick:function(){return function(e){u(e).then((function(e){i("button is-info is-hidden"),d(""),console.log(e)})).catch((function(e){console.log(e)}))}(e.searchResult)},children:"Save"})}),Object(o.jsx)("p",{className:j,children:"Saved"})]})})]}),Object(o.jsxs)("div",{className:"columns is-gapless",children:[Object(o.jsx)("div",{className:"column is-one-fifth",children:Object(o.jsx)("div",{className:"media",children:Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image",children:Object(o.jsx)("img",{src:e.searchResult.volumeInfo.imageLinks.thumbnail,alt:"Book's cover"})})})})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("p",{children:e.searchResult.volumeInfo.description})})]})]})})]})};var v=function(){var e=Object(t.useState)(""),s=Object(r.a)(e,2),c=s[0],a=s[1],i=Object(t.useState)([]),n=Object(r.a)(i,2),l=n[0],j=n[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"box has-background-info m-5",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label is-large has-text-white",children:"Book Search"}),Object(o.jsx)("div",{className:"control is-large",children:Object(o.jsx)("input",{className:"input is-large",type:"text",placeholder:"Search for a book",id:"search-query",onChange:function(e){a(e.target.value)}})})]}),Object(o.jsx)("div",{className:"field is-flex is-justify-content-flex-end",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),h(c).then((function(e){if(null===e)throw new Error("No results found");j(e.data.items)}))},id:"book-search",className:"button is-medium",children:"Search"})})})]}),Object(o.jsxs)("div",{className:"box has-background-info m-5",children:[Object(o.jsx)("p",{className:"title is-large has-text-white",children:"Results"}),l.length?Object(o.jsx)("div",{children:l.map((function(e){return Object(o.jsx)(O,{searchResult:e},e.id)}))}):Object(o.jsx)("p",{children:"No search results"})]})]})};var f=function(){return Object(o.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsx)(n.b,{className:"navbar-item",href:"/",children:"Google Books"})}),Object(o.jsxs)("div",{className:"navbar-menu",children:[Object(o.jsx)(n.b,{to:"/search",className:"navbar-item",children:"Search"}),Object(o.jsx)(n.b,{to:"/saved",className:"navbar-item",children:"Saved"})]})]})};var N=function(){return Object(o.jsx)("section",{className:"hero is-info",children:Object(o.jsx)("div",{className:"hero-body",children:Object(o.jsxs)("div",{className:"container has-text-centered\t",children:[Object(o.jsx)("p",{className:"title",children:"(React) Google Books Search"}),Object(o.jsx)("p",{className:"subtitle",children:"Search for and save books of interest"})]})})})};var p=function(){return Object(o.jsxs)(n.a,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(N,{}),Object(o.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(o.jsx)(l.a,{exact:!0,path:"/search",component:v}),Object(o.jsx)(l.a,{exact:!0,path:"/saved",component:x})]})};c(56),c(57);i.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.80e6e8df.chunk.js.map
(this.webpackJsonpmovie_search=this.webpackJsonpmovie_search||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),r=(c(10),c(5)),o=c(3),j=(c(11),c(0)),l=function(e){var t,c=e.title,n=e.poster_path,s=e.overview,a=e.vote_average;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:n?"https://images.tmdb.org/t/p/w1280"+n:"null_image.png",alt:c}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("span",{className:"tag ".concat((t=a,t>=8?"green":t>=6?"yellow":"red")),children:a})]}),Object(j.jsxs)("div",{className:"movie-over",children:[Object(j.jsx)("h2",{children:"Overview"}),Object(j.jsx)("p",{children:s})]})]})};var h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),h=i[0],d=i[1];Object(n.useEffect)((function(){b("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf4f5e199cc2db91661ec3af16ec280a&page=1")}),[]);var b=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){s(e.results)}))},u=function(e){e.preventDefault(),h&&(b("https://api.themoviedb.org/3/search/movie?api_key=cf4f5e199cc2db91661ec3af16ec280a&language=en-US&query="+h),d(""))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("table",{className:"head",children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:"app_icon",width:"90","padding-left":"0",src:"icon.png"})}),Object(j.jsx)("td",{children:"Movie Search"})]})})}),Object(j.jsx)("div",{className:"search-sec",children:Object(j.jsxs)("form",{onSubmit:u,children:[Object(j.jsx)("input",{className:"search-bar",type:"search",placeholder:"Search for a movie...",value:h,onChange:function(e){d(e.target.value)}}),Object(j.jsx)("button",{className:"button",onClick:u,children:"Search"})]})})]}),Object(j.jsx)("div",{className:"movie-container",children:c.length>0&&c.map((function(e){return Object(j.jsx)(l,Object(r.a)({},e),e.id)}))})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),d()}},[[13,1,2]]]);
//# sourceMappingURL=main.02b90e18.chunk.js.map
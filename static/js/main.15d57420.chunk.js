(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,n,e){t.exports={company:"Company_company__2kHWc",button:"Company_button__1jFsf"}},14:function(t,n,e){t.exports={companies:"Companies_companies__2yebb",h2:"Companies_h2__1Lrn9"}},15:function(t,n,e){t.exports={mainBlock:"Main_mainBlock__HsWfN",mainContainer:"Main_mainContainer__3mrcS"}},26:function(t,n,e){t.exports={wrapper:"Preloader_wrapper__1Fb6N"}},34:function(t,n,e){},35:function(t,n,e){},59:function(t,n,e){"use strict";e.r(n);var a=e(1),c=e(0),i=e.n(c),o=e(7),s=e.n(o),r=(e(34),e(35),e(28)),u=e(3),j=e(24),d=e.n(j).a.create({baseURL:"https://api.citybik.es/v2/"}),l=function(){return d.get("networks?fields=id,company,location").then((function(t){return t.data}))},b=function(t){return d.get("networks/".concat(t)).then((function(t){return t.data}))},p={status:"idle"},m=function(t){return{type:"SET_APP_STATUS",status:t}},O={companies:[],currentCompany:null,currentStations:[],status:"idle",favoriteStations:[""]},f=function(t){return{type:"SET_COMPANIES_STATUS",status:t}},_=function(t){return function(n){n(f("loading")),b(t.id).then((function(e){n({type:"SET_CURRENT_STATIONS",stations:e.network.stations}),n({type:"SET_CURRENT_COMPANY",company:t})})).catch((function(){})).finally((function(){n(f("succeeded"))}))}},S=e(2),h=e(13),T=e.n(h),y=i.a.memo((function(t){var n=Object(S.b)(),e=Object(S.c)((function(t){var n;return null===(n=t.companiesState.currentCompany)||void 0===n?void 0:n.id}));return Object(a.jsx)("div",{className:T.a.company,children:Object(a.jsxs)("button",{className:T.a.button,onClick:function(){n(_(t.companies))},disabled:e===t.companies.id,children:[Object(a.jsxs)("div",{children:['Company: "',t.companies.company,'"']}),Object(a.jsxs)("div",{children:["City: ",t.companies&&t.companies.location.city]})]})})})),v=e(14),x=e.n(v),C=e(26),N=e.n(C),E=e.p+"static/media/preloader2.a1a99674.gif",g=function(){return Object(a.jsx)("div",{className:N.a.wrapper,children:Object(a.jsx)("img",{src:E,alt:"loading..."})})},A=function(){var t=Object(S.b)(),n=Object(S.c)((function(t){return t.companiesState.companies})),e=Object(S.c)((function(t){return t.companiesState.currentCompany})),i=Object(S.c)((function(t){return t.appState.status}));return Object(c.useEffect)((function(){t((function(t){t(m("loading")),l().then((function(n){t({type:"SET_COMPANIES",companies:n.networks})})).catch((function(){})).finally((function(){t(m("succeeded"))}))}))}),[]),Object(c.useEffect)((function(){e&&t(_(e))}),[e]),Object(a.jsxs)("div",{className:x.a.companies,children:[Object(a.jsx)("h2",{className:x.a.h2,children:"Companies:"}),"loading"===i?Object(a.jsx)(g,{}):null,n?n.map((function(t){return Object(a.jsx)(y,{companies:t},t.id)})):null]})},I=e(15),k=e.n(I),R=e(6),w=e.n(R),P=e(8),F=e.n(P),M=e.p+"static/media/like.b16558c9.svg",U=e.p+"static/media/heart.c31d61db.svg",B=i.a.memo((function(t){var n=Object(S.b)(),e=Object(S.c)((function(t){return t.companiesState.favoriteStations})).find((function(n){return n===t.station.id}));return Object(a.jsxs)("div",{className:F.a.station,children:["Address: ",t.station.name,e?Object(a.jsx)("button",{className:F.a.button,onClick:function(){n({type:"REMOVE_FAVORITE_STATION",stationId:t.station.id})},children:Object(a.jsx)("img",{src:M,alt:"Favorite"})}):Object(a.jsx)("button",{className:F.a.button,onClick:function(){n({type:"SET_FAVORITE_STATION",stationId:t.station.id})},children:Object(a.jsx)("img",{src:U,alt:"Do you want to add to favourites?"})}),Object(a.jsx)("hr",{})]})})),V=function(){var t=Object(S.c)((function(t){return t.companiesState.currentStations})),n=Object(S.c)((function(t){return t.companiesState.currentCompany})),e=Object(S.c)((function(t){return t.companiesState.status}));return Object(a.jsxs)("div",{className:w.a.stations,children:[Object(a.jsxs)("h2",{className:w.a.h2,children:['Stations "',n&&n.company,'":']}),Object(a.jsxs)("h3",{className:w.a.h3,children:["City: ",n&&n.location.city]}),Object(a.jsxs)("div",{className:w.a.totalStations,children:["Total stations: ",t&&t.length]}),"loading"===e?Object(a.jsx)(g,{}):null,"loading"!==e&&t&&t.map((function(t){return Object(a.jsx)(B,{station:t},t.id)}))]})},L=function(){return Object(a.jsxs)("div",{className:k.a.mainBlock,children:[Object(a.jsx)("h1",{children:"CityBikes"}),Object(a.jsxs)("div",{className:k.a.mainContainer,children:[Object(a.jsx)(A,{}),Object(a.jsx)(V,{})]})]})},D=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(L,{})})},H=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,60)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),a(t),c(t),i(t),o(t)}))},J=e(5),W=e(27),X=Object(J.c)({companiesState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_COMPANIES":return Object(u.a)(Object(u.a)({},t),{},{companies:n.companies,currentCompany:n.companies[0]});case"SET_CURRENT_STATIONS":return Object(u.a)(Object(u.a)({},t),{},{currentStations:n.stations});case"SET_CURRENT_COMPANY":return Object(u.a)(Object(u.a)({},t),{},{currentCompany:n.company});case"SET_COMPANIES_STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:n.status});case"SET_FAVORITE_STATION":return Object(u.a)(Object(u.a)({},t),{},{favoriteStations:[n.stationId].concat(Object(r.a)(t.favoriteStations))});case"REMOVE_FAVORITE_STATION":return Object(u.a)(Object(u.a)({},t),{},{favoriteStations:t.favoriteStations.filter((function(t){return t!==n.stationId}))});default:return t}},appState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_APP_STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:n.status});default:return t}}}),Y=Object(J.d)(X,Object(J.a)(W.a));window.store=Y,s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S.a,{store:Y,children:Object(a.jsx)(D,{})})}),document.getElementById("root")),H()},6:function(t,n,e){t.exports={stations:"Stations_stations__mdXjD",h2:"Stations_h2__dtXGN",h3:"Stations_h3__39uNV",totalStations:"Stations_totalStations__3Bjis"}},8:function(t,n,e){t.exports={station:"Station_station__3Reir",like:"Station_like__B7HnV",button:"Station_button__2nv4n"}}},[[59,1,2]]]);
//# sourceMappingURL=main.15d57420.chunk.js.map
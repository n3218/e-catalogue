(this["webpackJsonpe-catalog"]=this["webpackJsonpe-catalog"]||[]).push([[4],{129:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var c=n(20),a=n(21),r=n(14),i=n(90),o=n(91),u=n(44),l=n(0),s=n.n(l),m=(n(129),n(130),n(92)),f=n(24),b=function(e){var t=e.title,n=e.items;e.history;return s.a.createElement("div",{className:"collection"},s.a.createElement(f.b,{to:"/shop/".concat(t.toLowerCase())},s.a.createElement("h1",{className:"title"},t.toUpperCase())),s.a.createElement("div",{className:"items-container"},n.filter((function(e,t){return t<4})).map((function(e){return s.a.createElement(m.a,{key:e.id,item:e})}))))},d=Object(r.b)({collections:i.b}),v=Object(a.b)(d)((function(e){var t=e.collections;return s.a.createElement("div",{className:"collection-overview"},t.map((function(e){var t=e.id,n=Object(u.a)(e,["id"]);return s.a.createElement(b,Object.assign({key:t},n))})))})),j=Object(r.b)({isLoading:i.c}),p=Object(c.d)(Object(a.b)(j),o.a)(v);t.default=p},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l}));var c=n(14),a=function(e){return e.shop},r=Object(c.a)([a],(function(e){return e.collections})),i=Object(c.a)([r],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),o=function(e){return Object(c.a)([r],(function(t){return t?t[e]:null}))},u=Object(c.a)([a],(function(e){return e.isFetching})),l=Object(c.a)([a],(function(e){return!!e.collections}))},91:function(e,t,n){"use strict";var c=n(44),a=n(0),r=n.n(a),i=n(46);t.a=function(e){return function(t){var n=t.isLoading,a=Object(c.a)(t,["isLoading"]);return n?r.a.createElement(i.a,null):r.a.createElement(e,a)}}},92:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(21),i=(n(93),n(45)),o=n(27);t.a=Object(r.b)(null,(function(e){return{addItem:function(t){return e(Object(o.a)(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.price,o=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(o,")")}}),a.a.createElement("div",{className:"item-footer"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},"$",r)),a.a.createElement(i.a,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}))},93:function(e,t,n){}}]);
//# sourceMappingURL=4.d187c338.chunk.js.map
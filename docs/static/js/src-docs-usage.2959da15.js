(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/Usage.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),o=n.n(i),c=n("./node_modules/@mdx-js/react/dist/index.es.js"),A=n("./node_modules/docz/dist/index.esm.js"),s={color:"dodgerblue",moreColor:"darkgray",caretColor:"darkgray",ellipseColor:"darkgray",undefinedColor:"darkgray",nullColor:"darkgray",nanColor:"darkgrey",booleanColor:"green",numericColor:"green",stringColor:"magenta",fontFamily:"monospace",fontSize:12};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DirDefaultStyle",filename:"src/utils/common.jsx"}});var u=o.a.createContext(s);"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DirContext",filename:"src/utils/common.jsx"}});var m=function(e){return e instanceof RegExp||e instanceof Date};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"simpleObject",filename:"src/utils/common.jsx"}});var b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),d=function(){var e=Object(i.useContext)(u).moreColor;return o.a.createElement("span",{style:{display:"inline",color:e}},"\u2026")};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"More",filename:"src/components/More.jsx"}});var j=function(e){var t=e.name,n=e.value;return o.a.createElement("span",null,t&&"".concat(t," : "),n.toString())},p=function(e){var t=e.name,n=e.value,a=n instanceof Array?"[":"{",l=n instanceof Array?"]":"}";return o.a.createElement("span",null,t&&"".concat(t," : "),a,o.a.createElement("span",null,o.a.createElement(d,null)),l)},g=function(e){var t=e.name,n=e.value;return m(n)?o.a.createElement(j,{name:t,value:n}):o.a.createElement(p,{name:t,value:n})};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsed",filename:"src/components/Collapsed.jsx"}});var C=function(e){var t=e.children,n=Object(i.useContext)(u).caretColor;return o.a.createElement("span",{style:{display:"inline-block",width:8,paddingRight:8,color:n}},t||null)};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Caret",filename:"src/components/Caret.jsx"}});var O=function(){return o.a.createElement(C,null,"\u25b6")};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CaretLeft",filename:"src/components/Caret.jsx"}});var y=function(){return o.a.createElement(C,null,"\u25bc")};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CaretDown",filename:"src/components/Caret.jsx"}});var B=function(){return o.a.createElement(C,null)};B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CaretBlank",filename:"src/components/Caret.jsx"}});var E=function(e){var t=e.value,n=Object(i.useState)(10),a=Object(b.a)(n,2),l=a[0],r=a[1],c=Object.getOwnPropertyNames(t),A=c.slice(0,l),s=c.slice(l);return o.a.createElement("ul",{style:{listStyleType:"none",margin:0,paddingLeft:16}},A.map(function(e){try{return o.a.createElement("li",{key:e},o.a.createElement(v,{value:t[e],withCaret:!0,name:e}))}catch(n){return null}}),o.a.createElement("li",null,o.a.createElement(v,{name:"prototype",value:Object.getPrototypeOf(t)})),s.length?o.a.createElement("li",{onClick:function(){return r(l+10)}},o.a.createElement(B,null),o.a.createElement(d,null)):null)};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListProps",filename:"src/components/ListProps.jsx"}});var h=function(e){var t=e.value,n=e.showKeys,a=void 0===n||n,l=e.size,r=void 0===l?10:l,i=Object.keys(t),c=i.slice(0,r),A=i.slice(r);return o.a.createElement("ul",{style:{listStyleType:"none",paddingLeft:8,display:"inline"}},c.map(function(e,n){return o.a.createElement("li",{key:e,style:{paddingLeft:0,paddingRight:8,display:"inline"}},o.a.createElement(v,{value:t[e],name:a?e:void 0,withCaret:!1,closed:!0}),n!==c.length-1||A.length?",":null)}),A.length?o.a.createElement("li",{style:{paddingLeft:0,paddingRight:8,display:"inline"}},o.a.createElement(d,null)):null)};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InlineListProps",filename:"src/components/InlineListProps.jsx"}});var x=function(e){var t=e.name,n=e.value,a=e.onClick;return o.a.createElement("span",{onClick:a},o.a.createElement("span",null,o.a.createElement(O,null),t?"".concat(t,": ").concat(n):n.toString()))},D=function(e){var t=e.name,n=e.value,a=e.onClick;return o.a.createElement("span",{onClick:a},o.a.createElement("span",null,o.a.createElement(O,null),t?"".concat(t,": ").concat(n.constructor.name," {"):"".concat(n.constructor.name," {")),o.a.createElement("span",null,o.a.createElement(h,{value:n}),o.a.createElement("span",null,"}")))},f=function(e){var t=e.name,n=e.value,a=e.onClick;return m(n)?o.a.createElement(x,{name:t,value:n,onClick:a}):o.a.createElement(D,{name:t,value:n,onClick:a})};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClosedObject",filename:"src/components/DirObject.jsx"}});var w=function(e){var t=e.name,n=e.value,a=e.onClick;return o.a.createElement("span",null,o.a.createElement("span",{onClick:a},o.a.createElement(y,null),o.a.createElement("span",null,t&&o.a.createElement("span",null,t,": "),o.a.createElement(g,{value:n}))),o.a.createElement(E,{value:n}))};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OpenObject",filename:"src/components/DirObject.jsx"}});var S=function(e){var t=e.name,n=e.value,a=e.collapsed,l=void 0===a||a,r=e.Closed,c=Object(i.useState)(!l),A=Object(b.a)(c,2),s=A[0],u=A[1];return s?o.a.createElement(w,{onClick:function(){return u(!1)},name:t,value:n}):o.a.createElement(r,{onClick:function(){return u(!0)},name:t,value:n})};S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsible",filename:"src/components/Collapsible.jsx"}});var G=function(e){var t=e.name,n=e.value,a=e.onClick;return o.a.createElement("span",{onClick:a},o.a.createElement("span",null,o.a.createElement(O,null),t?"".concat(t,": Array (").concat(n.length,") ["):"Array ["),o.a.createElement(h,{value:n,showKeys:!1}),o.a.createElement("span",null,"]"))};G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClosedArray",filename:"src/components/DirArray.jsx"}});var M=function(e){var t=e.name,n=e.color,a=e.withCaret,l=e.value;return o.a.createElement("span",null,a&&o.a.createElement(B,null),t&&o.a.createElement("span",{style:{paddingRight:4}},t,":"),o.a.createElement("span",{style:{color:n}},l))};M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DirAtomic",filename:"src/components/DirAtomic.jsx"}});var v=function(e){var t,n=e.name,a=e.value,l=e.withCaret,r=e.closed,c=e.collapsed,A=void 0===c||c,s=Object(i.useContext)(u),m=s.undefinedColor,b=s.nullColor,d=s.booleanColor,j=s.nanColor,p=s.numericColor,C=s.stringColor;if(void 0===a)t=o.a.createElement(M,{name:n,withCaret:l,value:"undefined",color:m});else if(null===a)t=o.a.createElement(M,{name:n,withCaret:l,value:"null",color:b});else if("boolean"===typeof a)t=o.a.createElement(M,{name:n,withCaret:l,value:a.toString(),color:d});else if("number"===typeof a)t=o.a.createElement(M,{name:n,withCaret:l,value:a.toString(),color:isNaN(a)?j:p});else if("string"===typeof a)t=o.a.createElement(M,{name:n,withCaret:l,value:'"'.concat(a,'"'),color:C});else{var O;O=a instanceof Array?G:f,t=r?o.a.createElement(g,{name:n,value:a}):o.a.createElement(S,{Closed:O,name:n,value:a,collapsed:A})}return t};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dir",filename:"src/components/Dir.jsx"}});var K=function(e){var t=e.value,n=e.collapsed,a=void 0===n||n,l=Object(i.useContext)(u),r=l.color,c=l.fontSize,A=l.fontFamily;return o.a.createElement("div",{style:{fontFamily:A,fontSize:c,color:r}},o.a.createElement(v,{value:t,collapsed:a}))};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DirDefaultStyle",filename:"src/index.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DirContext",filename:"src/index.js"}}),"undefined"!==typeof K&&K&&K===Object(K)&&Object.isExtensible(K)&&Object.defineProperty(K,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dir",filename:"src/index.js"}}),n.d(t,"default",function(){return T});var I={},Y="wrapper";function T(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(Y,Object(a.a)({},I,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"usage"},"Usage"),Object(c.b)("p",null,"react-dir is designed to render arbitrary JS objects and primitive types, similar to ",Object(c.b)("inlineCode",{parentName:"p"},"console.dir()")," in your browser's console."),Object(c.b)("h2",{id:"dir"},"Dir"),Object(c.b)(A.d,{of:K,mdxType:"Props"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Dir")," component is the primary component you will use. "),Object(c.b)(A.c,{__position:1,__code:"<Dir value={{ a: 1, b: 2 }} />",__scope:{props:this?this.props:n,Playground:A.c,Props:A.d,Dir:K,DirContext:u,DirDefaultStyle:s},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtSD2C1CABCWUiBEcPQsAICiyK1GAwDCKACGcAhElgdhMKNWV2g9OABHISRVGwAiIPYQNJSwvjTUVMFUF0FFjlOXD2M4-B2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ2MgAWSz2AANks6z1jAYCADFvWgRJjP4ZxDgRB1MBgoR-CWIhqEoOA7IRLzqx8mhnAgXDLnYABGJybPkBSlKmABBOYtPYCMoPIGwoHQMNuI5LSxEq6MZHYFENO4YA8PUrF5C3GtgBq6B6uCAAycbxkSeZKGaEa6oa7hlrlMBkMlAZUHadgAH4NlGsMIyaq4FrG1BCurKQZCrN8zBhdVjiYlipiO5rWsusrl2rBMpIIHBfMyFIrwIQaa1rSj2FYeIGW6qDXCuHKlg8K4ACZuMwzcVykX7_sB4HBqkT6brML8QEE4TRI0LQKGA_QGEIh7fqWKC8hgajaFo7iZPYfg5NEEAVVQBn7TQygZksGbNN4nmQH7MXzQ4-Y4H4QXheIiH_BIsj7FqnIeLdfgPU-dcaDgSRKJV20Hqgyj2ewOitYERjmNCVi-u6fXjUNyRwmgM3Pji_0BaK6hlIh7Sqsh6GYCWKgElmOBc201EGUat7dOrYqdMLKAhSWNK2MymPDT8gKki57TWbt2iI1t2naI_dYugIPpzCjb7a3azrYFhkuaH8ohAvz4CMqy2PKFzo55AGlcE1t3Wo6gGHgChpeYEwuO4LubJus3hPsgx0Hax3WR1kb87BconA5fFyW7G0jOLGMIwrE2RfU4iCc6CneoeXWVeGRXFFrfJWOAkQ2SfiYdgAB1TYEwMhDhzlvROhZfw-AAZpDwyRMAu1YpVHBz1OB2BTjAJqf9M4T2QdkIBA4JagK8BPMw8hBZ3SwERbOlF6JUXrg7Siztnru24oLUm5MATpn0GbK-mgsCAV0CBAwYE1aSU1MzXIidq5TE9rKXmmpLZCwksAuhUsDaywHArO-eilE221jwrm0tDYel9lAf2kRA6WIklBRw8c7gQA8FxLRMsPReOQb42A7j2GeMofvPW3NvbBOieE62Dhc6J3QDqDw6gtiaNiSAD0lF0mZMlIk-0niUnZBKgITIyQAne0ohUqpxT1ZkRKhEQe5A7EmLyc01psQ9GsPYVncOlUoKoG9MXDBSx8x4HsK4ZuscymLCQdEiqJC07cBao_QsqBlKbIsMhHBaBsheLziuVArsoDHPIiuBh5JUCXIgTWUZdyJ4nI7mco8_RyD3JXCiacKRLnrEwpXdRPDa42JogQc-FhYBTGNtQfQgsLAQGaBGDBWkVr7KYoc9ATVdmoJNlMCOs9wbdMiL0juYNRlHm6lS9exKLBTJmc3bqjLZmjgumDMGGC-AgExZAZ06B-D0pzkKbqfLsWXI5ZyzGHcoVc3nCg5FlU0XLW0mchcOkVxwozIS96nKSUCBaWS8gwraU0rGVK_VrLmXAGtey4V3L-DqqgEKilNY46iuAM6yVxKZVgzlZhBV3QlURkVjAOa79uiqpljc8UQdcVasdPCzMRK3WMDqT0k1bqLBmq9Ra4VdqCAstxEy-12bI3dQwTgCI7E_lHUtZyj1AhuqxvcD6t1fqawBuhM44NKKw0RpVStJ1oQiCBAEPwBNHdtUulTfq9NpK2mmrGeao8DawaFuLRMUtBB101m5SvaO1bKC1oKPW4VTbuq2AAHKuGvai6OTU9pPMuewK47yMixHbfqztFhu1Bs4P2yWg7o7ou0vwX5BRJ2aunUmnVFV27zozca5d1K81roLSWtlRbbVYebnuiwB7ij8AACSHrXoVEAxQCMiubcASDM5v3SqPv-3tMGwYwuSQlbIiKawhrRWgFE7gEQRvqfBKd-r7ALIqlJ7j6AxOJF4xYQNbG8UWFk6kmTCyClZKU9xRN4iU09Gk3tRDnLGDxO3jkXNtLMIHowYfFcx09Xmcs_kPxjJy0aZ3sAbz6AaM2fzeW-z0caN7ys7vKJVm92_vYAGpuo5W74uTQQQWzCzBXxvkY--7HI00LFtlsBqBEgPNpflkB8AcAMZSA8wt5XCs3IeeQBZ9W744Ea-scLqTWv0OEC6i-JMlBkyEj7GIzixGB3_HAGR2g5F00URJX6OS-Z9OdGwh6gyGJPVdmxDiXEH6dZeWWGWJx0BpAEH4hkMU9JCjZkdq4_B0CzO2IheC13M7YcuQ9kAT2BAvYaSAB584oAQG3l9k7z3XuJHe3s8M_Kjn3Yh39qHMP2DesR49yHAPSttoxz9rHMBoeA_WK255k9vuISCEHUro7P1fLx5TugqPqvg_4FENINBXCo4LgPQK33A4JSSoyYnqUR5FwRijJhgt7r2k29wiFFUcbkFNLQDRYKnbbbdnt0h0v1uy9DlMfIv4dPSW0iqjZCWW4CHMAJ7ZBBhPhuaGKFIZ42HsAAD7u8jZwO3DuI1aiyGl4RQ3REztNpINzoS_zSNkbTUC4F2FM2zqzdiWQOle0ELo4O-j2GGLvjkm-5ilaNOzjqeYqATfZPsbk82ZFK-rZl7Cg3DpvHuf28MtHYylgTKWVZlZaJi5-bWRbihdv2AAG0xZ0CWInAgZe6AAF0Kop_t7QCMABCLr2Q5XNyS1P8wpmsbz4rxkrJew7kg52N1V66yOqjmPxGZivaOSYUC2uit5GGSOerM5szCYh_UBSaxDbDX5NS36z4P4kIv6d5oa2Yf4ObsCdrnzpZk4hIebXy0L54HbVh-Y9aVbgLrBlZRQFZtbVYPIYJ4FwBFYlaHat7ULEEVZUE3JS6DbKCh5wYSIR5RapJTYzY0x6Dx5KJLbV4rbZ5KJ55KwF5mJhrKxiEeLsB6i3bp7aI16KFdAl5QRG5kgwCV7KGBKOJjYuJEBuLZ5mBZxb7oDAIZAxCaTYE5pjKUFVaogFDkHRyOFIgsH-iKTN5ubZAZS_gIYjJd7e7yBgEtRmaMCJTuBHzobdCTTsDFBkZwFXDUYrif5_g1rOEzjnqXSSBRGoA3SCy-HoD-HaEYEkGSHaQWFWHCgQDwAsLeFj7FFriwA-ARxBFHjd6gahHpyHZj774VS25CaKSO7sAKa7Qyzj78Bvoyy6TZ4WDmFlKDGgaCb24jGiaVLwQTH8AL7THfaUa8a77W4uYJj5FHwWCxHsDxGJGxGYQpF7rAD757qRF2QFHCqMBqHdCxbbhnHErDRlINpSC_E_5B5mDNGOitHlGMEVTVEDjWF1FwANGN5bLKTFGBEwHjLdFhHrBaGwCV4PprxPonGrjcF-GERcRv7rzwGhaIGDS_5YzgloIYmrpUkhYUa0lnxFGknoBQnZYwnck1E2GImsHDbCRh4ECSJ16n6Si8Gx4CEKIJ6MyajLZZ6qwGKYGSHV6F4yEaEt5UIxLV5BLcm6kAAytgBAwCGEOSHoZpKIlpupDQqAIOzotpFp6Eeh3sjpzpMArp9pchESDg2GJpTEDsO6Woow5gNSNeO6upuJOh0pVenSBhfsE21Aq2WclACZEhthuWRB2ZVBZB_8bhDBhWBB1YgBl-2wjha0iknhWcfmpReJCZ6JtKXRa8SwFZwBw-LmLx7g5-QBV-jxF-wBM8HcvZbxaaO6wZYAUw3xOktKExNxtmVwZGDmxQMxVamRdaL-WMeRrxBMe50RZg58DZ5J8ZhSf0WWWBewWZGp9RIcTRCyLR2Auh7RGJbZDIHZw5Ow3ZER-R_ZlZ3UnZOwo5YM455xq4QZIZHJbqsRwqe0S5FqK56RHwBuaIkoQoOAcBwAxG5aKRq5R6xU6FEQAgWFFqOkqRY5h5E5YFwJ86Xphyvp7pbJX-MF86ZxcxlG8gQJ-5u5dFx8wJJ5T5EJL5CZvJ15mZF5-ZSJeuTej5cmr5HerZkaX5A5uwPR6yOJZ5-JGCRJf-q4CyjZ55Z-lJdm0claNJwFIBQ5al3-f6Mx-lFmwlaCuhpl1J7JVlQF352wdlcWRR2mYlV5lRN5Uld5wpXhyJWcx-ilkcylPeVl3ZmyRxbcWM_FtFrxAFwBXltlEF_-2G4ZIw5gc5pxvF5aFxC58R4FtxVwPF0RNG_-3J7lrFxVAlpV861FEFjATFYsdgLFVJsWtVNFflnh0VgVYVFUmyFBJZbWZZFgVl1Z60OOR4jh1WnhIiI24pkphqmxiQsps2ceCpQhypIhqpVsIs41Wp0hFi_pSSDFLp5plpHpNed1PpD16EupU50FUZQS2GDeslKJUwfm4xb5cV0cqllZiVluSWjl_5nlNllZoF5maVrmUFM5bF-q85Yyi5SRSFYxO1lUBFa8OAsAM4EwPR4-65324xUxCgxKg1nVL13Vg4fVmEcAwwIwAA0oTnAN1E_onL5eldEXMbsQoPTXxW1cNQNhfnJgpuJcFZNcWfmWAjtQ8vNdNaAjWeQEtdlEratVLetWKRweHshm0ntfwfIvTItsdSYqIWqbnhdSYtqddXbUkjuteHBKgOpdaRHr9aYWtgMs3ibbEC2cEU2pMnhqOB-R7GEblslcSeBX8YWlcVNBZthu7e4LsJuA8RVSnf-d3DAL3HZJ2AUCKBACkIQFcE5OjGINVfTc8Xndrr3E2tXekdxR1eLUeSCZ4UHeQHLTmQrWvO4cVk1ojrrVkTVoQQ4erZVoWdWHVtPUwX1mtSHhtUbRKZIJ8WbUBPKZbYniosniCgrlGbbWdU0vLhzImRnjgMmeNgHGmX7ZFc3p8QhjHZslnFBHFF0ODs3UCmondhCurhojvolsceOR1I3cAFBCwIlHBEFDLGgN6TFLRtXeNAAMRYAowmQoxuRKj02gmoAG1iIEpmxM1UEx77U70LZ71miqIr5p7H2nU54PT5lSHyw6k3UlKOxPVdITocPETP3fUb23YfVp0e1e2Gk-3Nx_UB1j6kPolooaUj4LHN7j5UDIQOyz6ODqNL7AowCp5r45QmRypZzbDc0VSV4nj36FWCmJC3pHhwAEkMjGPN6QACDKTaSmOJAFmX4wARgmTjzqPONj5wTuPsCePeOxC-NqM0DnxQ3HGOWuzgNdSQPsAg4ojuxGLfaoDwpIP6SGRXD-N9j2QFDTkEAIxuTV1_GuMog4BRAzARi7C35qY1iojJDNNgxx36UY21gg5hOE7dQ-W5UY0LpHB9Xj7bAL6YSbrAAkKv4rrAA-Xo3dPbgg5DN_p6ZgwbzRA1SVSkK5bdOPChRHh9hwm1GaRspo4iA-4gSYA5CfyBAhDkAIhwCaYRi0rlwTAFB2Ag6mPCpPzfDxCwDFxxAJAZBLCVAhAGS06mzn4dSRDdCa3djbI-4nMiAiB3wcg4B_OIGSAlRPMvMFD4gwCygTBCAjB2B9nYAIgzBIv1COn4jcarCJxwCTLdDqB5BTAnBbRTCTgILwJEDYtx3OobM1h7qhHPGrPvEQxmr8BywRBhrTEHoWOniizyuSw6hgCOOkIC01hSCSuwUhN_Qk0pAFiH7lqMC9Nw034tSaNtA0ARjRNTAADUuURjiN3Tqdzc6dntSzwzz9LVerEAEFzmzqgJPsUAdJ-DpDfdOWA9gCC91By9bBq9hm69jNb1PVW9c2ghVtZoKpZoJeLDl1bDztp9HCZE3DtevDLtnDAj3tnx0jG2ze6bdp7pb5PebNowXNXj_en5HURcFUhjkNo-yk4T5jYl4TWrQTyk1Tuq4TVWPjfjM-Rc07UwhrFU87cAi7-QWUsT1YnTWMiT-dvcaTu2GkmTMs2TzoSDRdDkKQpTVwAAHEsNA2SPBN9gg4ctMdPBBcALO7U7MBGA00sBAK_cKge2VT0xANixYJ4wM_VTWMeyk7eyUyGQU6SMUzOKXeXWU-wM-8cLYG-3A_wJ-9eyAOjNi2s7qxbJB1yuZekeM5MzB48vM525zWY3tLsFcOKgKghxuhHThnzXSrR-6gst1LM8xy1WDMABAOwOvitP-8awWOaLlB7l7oa8TXQCa3iHtNduR--ucgh4G0M3KpszuQa_4Ea1p6a8SWBb00h1BChzOA--wIU05ykNhxXXhy-4R7Ax-06V--Rz-9ix8UoQG5IPq_qiG4Z7ua7JG54S226Zm0Ff3UWYPQm7NR1Ozd2_cAmx1tWDuzrWFVhaOuOkm6KUQylmbDulmwdbvUqTQwff_RfU9SfUw-dRUcYhnk7cXnw-W-ffbNwzfUYSYTJTI6idhuiadA1Io7lu_asM3N_UdhXH_WrnXBCsA1bilWOQ3ck1A75--_AwF86OaH4qcNsEgziOgBME-xh8XVh2XV5_hz_e60NNN8EHtO9-YAZwkGG_xcgUUdhjGxNZ1rrGGEPdDlLY_U0ajbqta5Bc3GIGgxgwAKzXg4NSA7piC67jeA35URkv1vSeujhI_oMoxo_2C4OSMk849Nsw9etiOE-37E-znY8ilJTbCuBpBTbUBykW1gSbJOpjL8DfY_DFjVAZDmg_jaGo78CsAZD5D33fYmQ4Aq8mSy8_bwDK6g5Isi8ywlT9sBHS9cSYBkiUCJC5h5CEt8zmhi9_Clga9RBoB68kfhhUwa-m_fzwgIl694qPaqQu8gAAB6OUOAKMqvqOFgOiBbSAMsIfbkOAj7OAbkkfMsPX8AgfIfKPOAAA7GH6n9H5KJaJEJnzlAn0nynyAICkwiIvb7gLoJACkDzwQxQ_zyAHMbQD6FkCL_wMruKLQOaDb7MDMPwPIAoNPEAA",mdxType:"Playground"},Object(c.b)(K,{value:{a:1,b:2},mdxType:"Dir"})),Object(c.b)("h3",{id:"primitive-types"},"Primitive types"),Object(c.b)("p",null,"react-dir accepts keyword constants (such as ",Object(c.b)("inlineCode",{parentName:"p"},"null"),", ",Object(c.b)("inlineCode",{parentName:"p"},"NaN"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),") as well as simple values (like strings and numbers), displaying them with color highlighting similar to Firefox's ",Object(c.b)("inlineCode",{parentName:"p"},"console.dir()"),". "),Object(c.b)("h4",{id:"null"},"Null"),Object(c.b)(K,{value:null,mdxType:"Dir"}),Object(c.b)("h4",{id:"nan"},"NaN"),Object(c.b)(K,{value:NaN,mdxType:"Dir"}),Object(c.b)("h4",{id:"undefined"},"Undefined"),Object(c.b)(K,{value:void 0,mdxType:"Dir"}),Object(c.b)("h4",{id:"boolean-values"},"Boolean values"),Object(c.b)(K,{value:!0,mdxType:"Dir"}),Object(c.b)(K,{value:!1,mdxType:"Dir"}),Object(c.b)("h4",{id:"numerics"},"Numerics"),Object(c.b)(K,{value:3.1459,mdxType:"Dir"}),Object(c.b)(K,{value:Math.pow(2,32),mdxType:"Dir"}),Object(c.b)("h4",{id:"strings"},"Strings"),Object(c.b)(K,{value:"String",mdxType:"Dir"}),Object(c.b)("h3",{id:"complex-types"},"Complex types"),Object(c.b)("h4",{id:"object"},"Object"),Object(c.b)("p",null,"Properties of objects can be any type"),Object(c.b)(K,{value:{a:1,b:2,c:/[A-Z]{3}/,d:"String"},mdxType:"Dir"}),Object(c.b)("p",null,"And can even nest arrays or other objects"),Object(c.b)(K,{value:{array:[1,2,3]},mdxType:"Dir"}),Object(c.b)("p",null,"react-dir will only render up to 10 propertye by default. It will indicate that\nadditional properties are available with ellipses. Expand the example below, then click the ellipses\nat the end to see up to 10 more properties."),Object(c.b)(K,{value:{a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11},mdxType:"Dir"}),Object(c.b)("h4",{id:"array"},"Array"),Object(c.b)("p",null,"In the simplest case, arrays, only have simple values"),Object(c.b)(K,{value:[1,2,3],mdxType:"Dir"}),Object(c.b)("p",null,"Just as above, only 10 elements are shown by default"),Object(c.b)(K,{value:[1,2,3,4,5,6,7,8,9,10,11],mdxType:"Dir"}),Object(c.b)("p",null,"However, react-dir also supports testing arrays and objects"),Object(c.b)(K,{value:[1,2,[{obj:{a:"String"}}]],mdxType:"Dir"}),Object(c.b)("h4",{id:"regular-expressions"},"Regular Expressions"),Object(c.b)("p",null,"When we encounter a regular expression, we render it slightly differently than other objects"),Object(c.b)(K,{value:/[A-Z]{3}/,mdxType:"Dir"}),Object(c.b)("h4",{id:"dates"},"Dates"),Object(c.b)("p",null,"Dates are also treated as a special case"),Object(c.b)(K,{value:new Date,mdxType:"Dir"}),Object(c.b)("h2",{id:"customization"},"Customization"),Object(c.b)("p",null,"In case you don't like the defaults, react-dir allows you to specify new coloring for each type of element through the ",Object(c.b)("inlineCode",{parentName:"p"},"DirContext")),Object(c.b)(A.c,{__position:16,__code:"<DirContext.Provider value={{ ...DirDefaultStyle, color: 'purple' }}>\n  <Dir value={{ a: [1, 2, 3], b: /[A-Z]{3}/, c: 'String', d: null }} />\n</DirContext.Provider>",__scope:{props:this?this.props:n,Playground:A.c,Props:A.d,Dir:K,DirContext:u,DirDefaultStyle:s},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtSD2C1CABCWUiBEcPQsAICiyK1GAwDCKACGcAhElgdhMKNWV2g9OABHISRVGwAiIPYQNJSwvjTUVMFUF0FFjlOXD2M4-B2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ2MgAWSz2AANks6z1jAYCADFvWgRJjP4ZxDgRB1MBgoR-CWIhqEoOA7IRLzqx8mhnAgXDLnYABGJybPkBSlKmABBOYtPYCMoPIGwoHQMNuI5LSxEq6MZHYFENO4YA8PUrF5C3GtgBq6B6uCAAycbxkSeZKGaEa6oa7hlrlMBkMlAZUHadgAH4NlGsMIyaq4FrG1BCurKQZCrN8zBhdVjiYlipiO5rWsusrl2rBMpIIHBfMyFIrwIQaa1rSjqNoWicDQyhWC4DJ2FYeIGW6qCcAxyjGOY0JWL6mAlioKAhWMmY-jJGBtvkAaVzBxhKKRlGYDRkIrgAbRypYACYliTABdJYPCuSQ2ZK80AC0-eAJN5EkQnjPY6cUms44rlQXGoG4zDN1p2tJAh4DsD-2H4anUG9d-_7AeBwapE-m6zC_EBBOE0SNC0ChDdA8CiMkzUligvIYEho3uJk9h-Dk0QQBVVBCIe2GZksGbNN4iOQH7SgZnNDj5jgfhY_j-0oIZ_wSLI-xapyHi3X4D1PnXGg4H1siC9tB6S4rw3aPogRsee_Gw7TuvJHCaBm8-OL_RjorqGUhntKqxmoAZQnKASWY4FzbTUQZRq3t06tip0wtifIw1gIyrKljSgh_KIQKw-0oOQ9oiMDZoggP3WLoCD6cwozfVrO1TqsAWa33voFG-l9MoE1PkKLW5sEwQyrsvVGwBkYrxgJhImcE7jZG6rgze2RtbmyurGdY39zqx0ojgTOScU52G0ofCwxgjBWE2Gg7oEQJx0CnPUHk6xMEMiuInZOeccBIhsqwkw7AADqmwJiIx4UQ_BhZfw-GEZpDwyRMA41YpVPRz1OB2F3jAJqgij7rzwVvdAoiBziPgDgLw68zDyFjndLAvtO7nw_lDOi5c-5PVxmxDiXF3GOyUM7ISAJ0z6GbrQzQWBAK6BAgYMCRcNRmgDrkLer8pg12NJHTUbc44STEYw8O_B6E50YaUzJJ8_Gh0KbKOuHox5QAnpEKe9SJJQUcBvO4EAPDhKqSAD0AybHDNgL07xDpBm2KHrXcZkhJnEPQLMjuDhia2J1B4dQWwCljI9JRPZBzJSbOLtshK2QSoCEyMkFp6cTlkTuQ8y5xFKIlQiA_cgSyikrK-T82IpTPG-2PgvSqUFUDejgVopY-Y8D2FcL_QmOzshrwWdvcYaJujyCatwFqLDCyoGUsSiwyE9FoGyAMoU0iazqwSLS8iK4XHklQMy-lFgYUcvXnSlc6sjz9HIJylcKIlbMvWJhZ-eTu4EHfl3T-VCLCwCmA3ag-hY4WAgM0CMWitIrUpUxal6AmrkvUY3KYi9db01ecC8gutuWwu6jCo8F0wZg0Rci3-3UvUotHO6j1FgtF8BAEayAzoNkgEdfAgQ3Vw0muZYGsGOsgHKrDvOLenBdX6uWtpRlUAzUrnVRmK170g22oEN8yIIKgFg1dczYADbk0er9T64AbaA0xpDfwAt_AY1EyFC6jWSbdaprBumzCmbug6sqrnGAc0uEGu0vwNl4pp5FqASWl01q63gztTWh1e6nVHhdbCltnrcTetHL6q9_qCAXprCGjBTMcAREVgUI6j6LCDrjcANd7hR17vHTWSd0JOkzt1fOxduaVq9tCEQQIAh-CbrBtuzMu6K1AsPTGhtZ63Uxs7QQW9Exr0Pu7UzbqWi32UA_TOL9A6-V_tsAAOVcCxvVTMmp7R5cy9gasEMZFiEBoNIGLBgendmudKcYNM2XencVBQUM6WLY6DVGHy0esrdW35uHnVNvPYRu97aiPfq4d1Yo_AAAkL6sGFRAMUMzv7uqKZnCJj1Yn2ASYgypoBqrrm2K1TWWdnGsGcFJQQdwCJF1vPgqhj19h0U5G0olm56BYuJCCxYKdPnzUWFS4slLSWzmHKy9xVTcSNPkCS7tTTdM1n4JyHhgzbrzO2YZKQlcx06s1kYA1_IIzGTHoCwQ4ABWSF6dPS17BFGsFUaZk56x6zCFLca4-zzk6f6jn_ha9TBBY4RNQLQ-hjimG-eDUzexWdTuSNQIkelDarsMIka5lI9KiNPZu2y-l1W0ufcYc44QUAfurdsf9iRbK3Gxydi7UeMROmxKnv-OAyTtCpP0AwBpv0xlR1Bc6LxD0IUMWCXjMJ3RmHrF_VcfgJx0BpAECMhkMU9JCmDkx6nIB0Aou2IheCzOj73uZRzrnAgefvJAPS-cUAID4KF-nEXYu-cS_WAmyNcuafc954kfn3KR3s_l5r8XD3AP6416LxCMBtfK-rAB3lZ8OcW7oDr9ggqhMitNyAR3096WvfVyAKIaQaCuGdxAgKSQOdTwSklRk1uLC3yvtlHKXModgsJ3PKYTTaIVUtuQU0tB8kKqCfo0JGkqH3XtMffIv4SvSW0rmolW2_4CHMPqtAKIosLuaGKFIZ4vHsAAD796XW3yLilO8kSyAd6HUTYfoYIM3fr0y_xJJSV7dJPsHq_RyUHdiWR_mtMECUmeZTfYVLzmMmp8787H4aVBHU8xUA16OcPQFZEn94_L2q9P8ypmDYqkvBtJYeFU-GxbFMxJYcbauAlBvKxCLdgNmLOOgJYLeAge_OgPmCqHfSLWgCMAAQlUVsXTV_h20QPMD2kATpjQMf32UOT2A5Wlx2G6lekJQ6lHCoIjGYggw5Ewma2bTay0U62rG6woN60gLoMS1iG2CYOgNYNQIfwjDMW4Jd30z4OfQEPYBAyoUO0X0GzoQcUqQp2rEgPBycSkXWEeyimuwB1e3pS0RMLgFu3u0p1B2yHsMB1cWoUiWUFnzU1LQXxcPQGR1R09j0G9ix01BxyP0LnKX0PPxf0vzqRvz6XYD1FZ332eUkFSK6A-RPirwpif3SLaTh3HkR2oDx2PgIOyETgyBiE0kMJPWyjPycRsKEUu0sOe1MLuxT39EUm_362yAyl_H_2hVhSALk3xTehEMYESncHNmm3YEmnYGKBsz4KuEcxXHaz_HfVRE_W4OjEkBmNQBuljn6PQEGIpj0KsPP20kqPQGqOFAgHgA8V6LgNOLXFgB8EXhGKPDGLCwmJYOJWPlIIqlbwiw7xi3uXglq34DZn4H43Tl0mPx_W_1-yzTrzkxH3BOaAy2hJAD5jhI53syC2IObx62mLsiON1nmMWOWOm0wjWMfWAFIMfXJNmJjUYCyO6E823EOKQR0lRJmyASkF5MoSnzMDeMdA-MuI6LO1uPuNqLgGeM_xJWUlOOGOUJ-KXX-MGjyNgCf1CwZG4zJNOPOK4l4PPX4IWw0MGmEJXD6wCPeOwA1MbVUMo02MEPExOICOlNOwqjlIHBqMeMVK8OiWEjnwSTfxoMlCCNX1CPX3CLNEiLNByKaLsHiIHFqTzhyP6QCMKJWVOOzPYAABlbACBE4MJjlJASyURyzCyGhUBpdnRqyyz0I8yPR6zGyYBmzayki5kyMiymIAkyMtRRhzAnkR4yNCzdSYACjxzxl2l4cukiAelj8zAgSoyWyri6jztnS3CWjqw7D2ibszDqxqAJCdg3C1pFJujj5IDTSZyNz1TACuElgzyGDdhtTNNWTzA3zJDupfydgaYhSRS90-t70BywAphuSdIG1ataTm0rgbMBDih4TqNtilYGMhSDiKTbZsK2T3wTikt7yn8fSDC9gNzUznjbyktHSsACivjnTfjV5xD3z94WCpjDiWK_ymT6DJCgK6YQKK1-zBzrSqSG0Y09p4Lz1ELNiPh080RJQhQcA-DgBLNhs1ikLX1ioFKIgBBlKLTVKW1hScK7TBKtMOzqVuzWy1CrToLvyxBET7N5BjL8K6Y8LKTLp3LjjxSaLJTsASKTsyLKAKLYiniFJlTqK0t6KoVGKXyuKdg2KdTCI9SNyDTzFasRCEw7zkqHzzkphzTWsbK7N4qpCeLzztgPSvN4TMrVxfKNECiCrsFLTiqALSrWrKqqFICArQqztgq8rKLwqCcK9v8qDoqADRi4rWrEqdySSAFTKTLQLOLWr_zeLAK-Ssr70RyRhzBoKEwzKg0LBqSpp7K6SrgXKjizMsrcyiqOtRLhtzq-SHqbUrKs47AbqmrPMnqhCxTH8H9uqtyztiVDzUzHD6VWrLz1pjcjw9ydiZxuiYcYlwyW4q1ITEgYy0c19McJJscX9cdeyE4eqL8Myr86yGzLLSzyy2zJALKmyKb0JCzhLIKqbJzVz8dwU-ikscSGLnzgCprPziVZqySlrVq2qRb-KtN9qtNGaoL1qYLYU4KVjpL2AcSIxNKsEcBYAZwJgJi2YUKOccTYSFAbUvKbUaauy6bXrmrbq4BhgRgABpS3OAbqTgreSqgSnCxE_EhQL6tysyrQwitLDLUi64nc4GnqyRVGsGkWiGxSKGxo8O17eGmfRG3w-JZGnTWIdGkItJLG32HG5ZPG6I0_Qm9MrOTM-ABm-9a8OCVAD8yslmpUoar_OA7DX5J8ia39BFYzUcJivFGQgW7bUkmq-yqkojBY46sjau9wXYTcRk2CxY78jqMnFmOyTsAoEUCAFIQgK4JyRBU6h6lkzi0BRtaqJjPegQn23rE2767o1uzOwKkOoGtokGk85E-3I86w2Gt7cw2FGGpWd7buggNwyHTw1ABGsM1OpuTI1nLOoCOM3Ozff2E-F-OVPMwu9uK5TPZ_ZZDGYohHSeMo1miK7_Tk__fu5wuAqCOKLoOXX9J-XJNnT-QvfJIgwe8wRe4-lmFgRKOCIKdONATsmKWNRBcaAAYiwC5hMi5jciVAep-vAdiUtWbheruFgfRzCOxqQcDi3l31oDQaiIwamFTKJrLpJvxswbIipsokLNIbnI9E5Mrt_intruZvvQ_ybpVKmBUbOyXn1X5ooeUjZioGQgCRQMcBCYwJlRgF0ZgAjByhMnTWPm2EdoqhItPB1G2vlMSDYyPDgDSsSe_0gAEGUm0mScSAcLgAYNiZMjXhCYKbgLghKfYDKYqaqYjGCZoCoUbx22HtxiXq6mACgmlxRHxkcQ51QA1SEf0kMiuBqb7HsgKAgqAdyjckQSpKKZRBwCiBmAjF2ABJjVRGSDyw9UFpqoOtrGl2act26gqtlqw0sferZm2D5kwiI26jMR4P0wqruvObculzua8zKzBhwWiBqkqnSuOZTUkFCiPD7ADIeM0n9RdxEHCxAkwByB4UCBCHIARDgEWQjAbSSHxAKDsGl2SZjVYW-HiFgDgTiASAyCWEqBCAMkEybjoI6kiG6CvI2jnnCzhZEBEEYQ5BwApY0MkBKhxbxYKHxBgFlAmCEBGDsHcGhCwARBmG7FQHqHrPxBuVWC3jgARW6HUDyCmBOC2imEnGUU2CIFFcFoLSBZrEfXxRZP-fZIZjw2qSEAiHnThOfTSdHFhm9ZTh1DAHybdqvtdb3WAEab-k1pSALHIPZMueWuAGYJajCbaBoHaczamAAGpcoEnxbzmwKnGa6Z6AWOS0jdq9ZI2g1usC0jLR4oAbSfrvHg7tyn6sE3CkQk7vCU7Kt59qaybaaaz0I1HMaMlNHEzcaDGT8CaAaTHs4zGi6tkGY7HkabG0j12HGiGPHj4zbvH1TgCbbRgHbymKpwCOpYEKp4nprATv8WnUmNycAWn8mgtj4Nmy0WmcBKnYhqnkDYF6nlIY2Kpv3f2EQIx8gsounqxTm7S-nOHBn2BhmS9YAxn04JnnQhHV6HIUglmrgAAOJYbhskeCDnAR6lOE6mPk4AT9rZ2YCMXZpYCAch4bOD4bBMaXUViwMpm5y6msRDqCHDxZwc2Z0kBZmcDere5Zoj44WwUjvh_gCjrDkALWUVgF5BVuDjj1R555_j-tfTE9-2lJvaXYK4VXCbbTy9Uje9Z2-IV27jmsAUngYAD5xz6tsGYACAdgXAlaOjuNgsc0XKAfIfGNjWugeNvEPaZnVTgTBIfjqQWtg69NYFvYqNsLgLqLnrOmS5wT-ZtemcfD9gOZ4TyTze7e9gWTkj3h8j4dmPNZ7TytroH5g6xLiAPk-tjWRt3GFt7og9i21Rh-jt1ortj-iRV-jqW2s9-4Mbpxb7dYKD-OgG5ShDJDXt0MxRvbBfe9cd-BydvOrRhh_JfR5M8xoxku5ZBIrMs7xpRVfxNshckogh6eRu9m14-9dU06Bqfx2AslVYX-Whs-6VI7uVZhuVVhpvOa4Cik_psBJD6rsj_hur80EZU4bYIRnEdACYQj8TgrlIKTir2Tuh6jqkr74IPaMn8wOLqARtv2n6sjdtwGynKuMMbtro0B4h973-JZsht6Et0cMQMRiRgAVmvBkakDIzEFjk59VM2tHN55YP55BiF65lF_sFkdWXvSl9T2Gq59HGcb2cqhkKV-tOn2UCSm2FcDSGR2oFjJzrAmJV7VhX4A5x-GLGqAyHNB_Apmd34FYAyHyEIY5xMhwBD5Ml9853gFzxlw1Zd_ThKivaGO964kwDJEoESFzDyGlajnNDd7-FLAj6iDQDj6U_DHdgj9T74XhCDLj_NRp1UhL5AAAD0cocAuZQ_ncLBilTuOcW-3IcACOcA3JO_04ruK6kB04W_hecAAB2Nvkf7vyUS0SIRvvvgfof_tasC6eQGHfP3AXQSAFIG3sBjGvbkARE2gH0LIF3_gXPcUWgc0HP2YGYfgHf6meQIAA",mdxType:"Playground"},Object(c.b)(u.Provider,{value:Object(l.a)({},s,{color:"purple"})},Object(c.b)(K,{value:{a:[1,2,3],b:/[A-Z]{3}/,c:"String",d:null},mdxType:"Dir"}))),Object(c.b)("p",null,"You can even see all of the available properties here"),Object(c.b)(K,{value:s,collapsed:!1,mdxType:"Dir"}),"~")}T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/Usage.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-usage.aed1dea0f76d791cc18b.js.map
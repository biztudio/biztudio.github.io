webpackJsonp([0],{131:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=r(68),o=n(i);r(95);var a=r(336),u=n(a),l=r(342),s=n(l),d=r(347),c=n(d),f=r(353),v=n(f),h=r(130);o.default.component("Input",h.Input),o.default.component("numbergrid",s.default),o.default.component("numbercolumn",u.default),o.default.component("alphabetgrid",c.default),o.default.component("sudoku",v.default);new o.default({el:"#capp",data:{sudoku_level_model:3,sudoku_mode_model:0,sudoku_level_list:[{value:"2",label:"Easy"},{value:"3",label:"Normal"},{value:"4",label:"Interesting"},{value:"5",label:"Challenge"}],sudoku_mode_list:[{value:"0",label:"Practice"},{value:"1",label:"Answer"}],group_model:1,height_model:10,width_model:3,gridlevel_model:5,case_mode_model:1,case_list:[{value:"1",label:"Upper Case"},{value:"0",label:"Lower Case"},{value:"3",label:"Mixed Mode"},{value:"4",label:"Study Mode"},{value:"2",label:"Number Mode"}],group_aln_list:[{value:"1",label:"1 group"},{value:"2",label:"2 groups"},{value:"3",label:"3 groups"},{value:"4",label:"4 groups"},{value:"5",label:"5 groups"},{value:"6",label:"6 groups"},{value:"7",label:"7 groups"},{value:"8",label:"8 groups"}]},watch:{sudoku_level_list:function(){}},methods:{add_new_todoitem:function(){console.log("Hi, todo.")}}})},336:function(e,t,r){"use strict";function n(e){r(337)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(340),o=r.n(i),a=r(341),u=r(67),l=n,s=u(o.a,a.a,!1,l,null,null);t.default=s.exports},337:function(e,t,r){var n=r(338);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(66)("7bcffefa",n,!0)},338:function(e,t,r){t=e.exports=r(65)(void 0),t.push([e.i,"[draggable=true]{cursor:move}.columngroup{max-width:300px}",""])},339:function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=o[0],u=o[1],l=o[2],s=o[3],d={id:e+":"+i,css:u,media:l,sourceMap:s};n[a]?n[a].parts.push(d):r.push(n[a]={id:a,parts:[d]})}return r}},340:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(49),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){return{_number_columns:[],_digit_pool:[]}},created:function(){this.draw_columns()},mount:function(){this.draw_columns()},watch:{group:function(){this.draw_columns()},height:function(){this.draw_columns()},width:function(){this.draw_columns()}},methods:{draw_columns:function(){var e=this.group?this.group:0,t=this.height?this.height:0,r=this.width?this.width:0;if(e>10||t>20||r>10)return void alert("参数设置超限！");var n={color:"#000000",fontWeight:"bold",fontSize:"30px"};this._number_columns=[],this._digit_pool=[1,2,3,4,5,6,7,8,9];for(var o=this._digit_pool.slice(0),a=0;a<e;a++){for(var u=[],l=0;l<t;l++){for(var s=[],d=0;d<r;d++){var c=i.default.get_random_number_index(o.length),f=o[c];s.push(f),o.splice(c,1),(!o||o.length<=0)&&(o=this._digit_pool.slice(0))}u.push(s),o=this._digit_pool.slice(0)}this._number_columns.push({data:u,style_config:n})}}},props:["width","height","group","id"]}},341:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:e.id}},[r("div",{staticStyle:{display:"none"}},[e._v(e._s(e.group)+"."+e._s(e.height)+"."+e._s(e.width))]),e._v(" "),e._l(e._number_columns,function(t,n){return r("div",{staticClass:"columngroup",style:t.style_config,attrs:{draggable:"true"}},[r("table",[r("thead",[r("tr",[r("th",{attrs:{colspan:t.data[0].length}},[e._v("第 "+e._s(n+1)+" 组")])])]),e._v(" "),e._l(t.data,function(t,n){return r("tr",e._l(t,function(t,n){return r("td",{staticStyle:{width:"50px"}},[e._v(e._s(t))])}))})],2)])})],2)},i=[],o={render:n,staticRenderFns:i};t.a=o},342:function(e,t,r){"use strict";function n(e){r(343)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(345),o=r.n(i),a=r(346),u=r(67),l=n,s=u(o.a,a.a,!1,l,null,null);t.default=s.exports},343:function(e,t,r){var n=r(344);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(66)("378cb824",n,!0)},344:function(e,t,r){t=e.exports=r(65)(void 0),t.push([e.i,"[draggable=true]{cursor:move}.grid_container{border-collapse:collapse;border:none}.grid_cell{border:1px solid#000}.columngroup{max-width:500px}",""])},345:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(49),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){return{_grids:[]}},created:function(){this.draw_grid()},mount:function(){this.draw_grid()},watch:{group:function(){this.draw_grid()},grid_level:function(){this.draw_grid()}},methods:{draw_grid:function(){var e=this.grid_level?this.grid_level:0;if(e<=2||e>10)return void alert("请设置更有意义的级别(3~10)！");for(var t=e,r=e,n=this.group?this.group:0,o=[],a={color:"#000000",fontWeight:"bold",fontSize:"20px"},u=1;u<=Math.pow(e,2);u++)o.push(u);var l=o.slice(0);this._grids=[];for(var s=0;s<n;s++){for(var d=[],c=0;c<t;c++){for(var f=[],v=0;v<r;v++){var h=i.default.get_random_number_index(l.length),p=l[h];f.push(p),l.splice(h,1)}d.push(f)}l=o.slice(0),this._grids.push({data:d,style_config:a})}}},props:["group","grid_level","id"]}},346:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:e.id}},[r("div",{staticStyle:{display:"none"}},[e._v(e._s(e.group)+"."+e._s(e.grid_level))]),e._v(" "),e._l(e._grids,function(t,n){return r("div",{staticClass:"columngroup",style:t.style_config,attrs:{draggable:"true"}},[r("table",{staticClass:"grid_container"},[r("thead",[r("tr",[r("th",{attrs:{colspan:t.data[0].length}},[e._v("第 "+e._s(n+1)+" 组")])])]),e._v(" "),e._l(t.data,function(t,n){return r("tr",e._l(t,function(t,n){return r("td",{staticStyle:{border:"solid#000 1px"}},[r("div",{staticStyle:{width:"50px",height:"50px","text-align":"center",position:"relative",top:"15px"}},[e._v(e._s(t))])])}))})],2)])})],2)},i=[],o={render:n,staticRenderFns:i};t.a=o},347:function(e,t,r){"use strict";function n(e){r(348)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(350),o=r.n(i),a=r(352),u=r(67),l=n,s=u(o.a,a.a,!1,l,null,null);t.default=s.exports},348:function(e,t,r){var n=r(349);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(66)("4cbf2bd9",n,!0)},349:function(e,t,r){t=e.exports=r(65)(void 0),t.push([e.i,"[draggable=true]{cursor:move}.grid_container{border-collapse:collapse;border:none}.grid_cell{border:1px solid#000}.time_score{border-color:#878787;border-style:solid;border-top-width:0;border-right-width:0;border-bottom-width:1px;border-left-width:0;font-size:15px;width:100px}",""])},350:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(351),o=n(i),a=r(49),u=n(a);t.default={data:function(){return{_grids:[]}},created:function(){this.draw_grid()},mount:function(){this.draw_grid()},watch:{group:function(){this.draw_grid()},case_mode:function(){this.draw_grid()}},methods:{draw_grid:function(){var e=2==this.case_mode,t=3==this.case_mode,r=4==this.case_mode,n=r?3:this.group?this.group:1,i=e?5:6,a=1==this.case_mode,l=[],s=[];if(e||r)for(var d=1;d<=5*i;d++)s.push(d);this._grids=[];for(var c=0;c<n;c++){var f=[];if(e)for(var v=s.slice(0),h=0;h<s.length;h++){var p=u.default.get_random_number_index(v.length),_=v[p];l.push(_),v.splice(p,1)}else r?(l=c<2?o.default.get_letter_list(1==c):s.slice(0),l.reverse()):l=o.default.get_letter_list_random(a);for(var g=0;g<5;g++){for(var m=[],y=0;y<i;y++)if(l.length>0){var b=l.pop();if(t){var x=u.default.get_random_number_index(i);(x==y||c==x&&0==y||c%(x+1)==y&&c*x*y>0||c%(x+1)==g&&c*x*g>0)&&"i"!=b&&(b=b.toUpperCase())}m.push(b)}else m.push("");f.push(m)}var w=30+400*parseInt(c/4),S=10+c%4*360,I={color:"#000000",fontWeight:"bold",fontSize:e?"25px":"30px",position:"absolute",top:w+"px",left:S+"px"};this._grids.push({data:f,style_config:I})}}},props:["group","case_mode","id"]}},351:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(49),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={source:"abcdefghijklmnopqrstuvwxyz",get_letter_list:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Array,r=!0,n=!1,i=void 0;try{for(var o,a=this.source[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var u=o.value;t.push(e?u.toUpperCase():u)}}catch(e){n=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}return t},get_letter_list_random:function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.get_letter_list(e),r=t.length-1,n=[],o=0;o<=r;o++){var a=i.default.get_random_number_index(t.length);n[o]=t[a],t.splice(a,1)}return n}}},352:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:e.id}},[r("div",{staticStyle:{display:"none"}},[e._v(e._s(e.group)+"."+e._s(e.case_mode))]),e._v(" "),e._l(e._grids,function(t,n){return r("div",{style:t.style_config,attrs:{draggable:"true"}},[r("table",{staticClass:"grid_container"},[r("thead",[r("tr",[r("th",{attrs:{colspan:t.data[0].length}},[e._v("Group "+e._s(n+1))])])]),e._v(" "),e._l(t.data,function(t,n){return r("tr",e._l(t,function(t,n){return r("td",{staticStyle:{border:"solid#000 1px"}},[r("div",{staticStyle:{width:"50px",height:"50px","text-align":"center",position:"relative",top:"5px"}},[e._v(e._s(t))])])}))})],2),e._v(" "),e._m(0,!0)])})],2)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticStyle:{"font-size":"15px"}},[e._v("Time(s):"),r("input",{staticClass:"time_score",attrs:{type:"text"}})])}],o={render:n,staticRenderFns:i};t.a=o},353:function(e,t,r){"use strict";function n(e){r(354)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(356),o=r.n(i),a=r(358),u=r(67),l=n,s=u(o.a,a.a,!1,l,null,null);t.default=s.exports},354:function(e,t,r){var n=r(355);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(66)("000b8ad2",n,!0)},355:function(e,t,r){t=e.exports=r(65)(void 0),t.push([e.i,"[draggable=true]{cursor:move}.grid_container{border-collapse:collapse;border:none;background-color:#fff}.grid_cell{border:1px solid#000}.sudoku_input{left:10px;position:relative;color:#936;border-color:#fff;border-style:solid;border-top-width:0;border-right-width:0;border-bottom-width:1px;border-left-width:0;font-size:25px;width:26px}",""])},356:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(357),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){return console.log("new data..."),{_grid_container:[],_grids:[],_sudokuPuzzle:[]}},created:function(){this._sudokuPuzzle=i.default.getSudokuPuzzle(this.level).SudokuPuzzle,this.drawsudoku()},watch:{level:function(){this._sudokuPuzzle=i.default.getSudokuPuzzle(this.level).SudokuPuzzle,this.drawsudoku()}},methods:{drawsudoku:function(){this._grids=[];for(var e=(void 0!=this.mode&&this.mode&&this.mode,i.default.getStartIndesInGrids(this._sudokuPuzzle)),t=0;t<9;t++){var r=[],n=e[t],o=i.default.getIndexListInGrid(n),a=[],u=!0,l=!1,s=void 0;try{for(var d,c=o[Symbol.iterator]();!(u=(d=c.next()).done);u=!0){var f=d.value;a.push(this._sudokuPuzzle[f])}}catch(e){l=!0,s=e}finally{try{!u&&c.return&&c.return()}finally{if(l)throw s}}for(var v=0;v<3;v++){for(var h=[],p=0;p<3;p++)if(a.length>0){var _=a.shift();h.push(_)}r.push(h)}var g=25+155*parseInt(t/3),m=5+t%3*155,y={color:"#000000",fontWeight:"bold",fontSize:"25px",position:"absolute",top:g+"px",left:m+"px"};this._grids.push({data:r,style_config:y})}}},props:["group","level","mode","id"]}},357:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(49),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={checkSudoku:function(e){var t=this.getStartIndesInGrids(),r=this.getIndexListInColum(0),n=0,i=!0,o=!1,a=void 0;try{for(var u,l=t[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){var s=u.value,d=this.getIndexListInGrid(s);n=0;var c=!0,f=!1,v=void 0;try{for(var h,p=d[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){n+=1*e[h.value]}}catch(e){f=!0,v=e}finally{try{!c&&p.return&&p.return()}finally{if(f)throw v}}if(45!=n)return{validation:!1,check:1,refindex:s,checksum:n}}}catch(e){o=!0,a=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw a}}console.log("Sudoku is valid in grids.");var _=!0,g=!1,m=void 0;try{for(var y,b=r[Symbol.iterator]();!(_=(y=b.next()).done);_=!0){var x=y.value;n=0;for(var w=x;w<x+9;w++)n+=1*e[w];if(45!=n)return{validation:!1,check:2,refindex:x,checksum:n}}}catch(e){g=!0,m=e}finally{try{!_&&b.return&&b.return()}finally{if(g)throw m}}console.log("Sudoku is valid in lines.");for(var S=0;S<9;S++){var I=this.getIndexListInColum(S);n=0;var k=!0,C=!1,M=void 0;try{for(var z,P=I[Symbol.iterator]();!(k=(z=P.next()).done);k=!0){n+=1*e[z.value]}}catch(e){C=!0,M=e}finally{try{!k&&P.return&&P.return()}finally{if(C)throw M}}if(45!=n)return{validation:!1,check:3,refindex:S,checksum:n}}return console.log("Sudoku is valid in columns."),{validation:!0,check:0,refindex:0,checksum:n}},generateSeedArray:function(e){var t=[],r=e.slice(0);for(var n in e){var n=i.default.get_random_number_index(r.length),o=r[n];t.push(o),r.splice(n,1)}return t},getLineIndex:function(e){return Math.floor(e/9)},getColumnIndex:function(e){return e%9},getStartIndexInLine:function(e){return 9*this.getLineIndex(e)},getIndexListInColum:function(e){for(var t=this.getColumnIndex(e),r=[],n=0;n<9;n++)r.push(t+9*n);return r},getInitializedSudoku9:function(){for(var e=[],t=0;t<81;t++)e.push(0);return e},getStartIndesInGrids:function(e){e||(e=this.getInitializedSudoku9());var t=[];for(var r in e){var n=Math.floor(r/9),i=r%9,o=Math.floor(i/3),a=Math.floor(n/3),u=3*a*9+3*o;t.includes(u)||t.push(u)}return t},getIndexListInGrid:function(e,t){t||(t=this.getStartIndesInGrids());var r=this.getLineIndex(e),n=this.getColumnIndex(e),i=[],o=!0,a=!1,u=void 0;try{for(var l,s=t[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){var d=l.value,c=this.getColumnIndex(d),f=this.getLineIndex(d),v=n-c,h=r-f;if(v>=0&&v<=2&&h>=0&&h<=2){for(var p=0;p<3;p++)i.push(1*(d+p)),i.push(1*(d+p+9)),i.push(1*(d+p+18));break}}}catch(e){a=!0,u=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw u}}return i.sort(function(e,t){return e<t?-1:e>t?1:0})},validateNumberPositionInColumn:function(e,t,r){var n=this.getIndexListInColum(e),i=!0,o=!0,a=!1,u=void 0;try{for(var l,s=n[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){if(r[l.value]==t){i=!1;break}}}catch(e){a=!0,u=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw u}}return i},getSudokuSourceData:function(){for(var e=this,t=[1,2,3,4,5,6,7,8,9],r=[],n=0;n<81;n++)r.push(0);var i=[];for(var o in r){var a=Math.floor(o/9),u=o%9,l=Math.floor(u/3),s=Math.floor(a/3),d=3*s*9+3*l;i.includes(d)||i.push(d)}var c=this.generateSeedArray(t),f=c.slice(0),v=0;for(var h in r){var p=this.getLineIndex(h);if(p%3<1&&0==r[h]){if(v!=p){if(3==p||6==p){var _=f.shift();f.push(_)}v=p}var g=this.getColumnIndex(h);r[h]=f[g]}}v=0;for(var m in r){var y=this.getLineIndex(m);if(y%3==1&&0==r[m]){if(v!=y){if(1==y||4==y||7==y){var b=f.shift();f.push(b),b=f.shift(),f.push(b)}v=y}var x=this.getColumnIndex(m);r[m]=f[x]}}f=c.slice(0);var w=!0,S=!1,I=void 0;try{for(var k,C=i[Symbol.iterator]();!(w=(k=C.next()).done);w=!0){var M=k.value;if("break"===function(t){if(e.getLineIndex(t)>3)return"break";var n=e.getIndexListInGrid(t),i=[],o=[],a=!0,u=!1,l=void 0;try{for(var s,d=n[Symbol.iterator]();!(a=(s=d.next()).done);a=!0){var c=s.value;r[c]>0?i.push(r[c]):o.push(c)}}catch(e){u=!0,l=e}finally{try{!a&&d.return&&d.return()}finally{if(u)throw l}}var v=f.filter(function(e){return!i.includes(e)}),h=[],p=!0,_=!1,g=void 0;try{for(var m,y=v[Symbol.iterator]();!(p=(m=y.next()).done);p=!0)for(var b=m.value,x=0;x<o.length;x++){var w=o[x],S=0,I=0;0==x?(S=o[1*x+1],I=o[1*x+2]):1==x?(S=o[1*x-1],I=o[1*x+1]):(S=o[1*x-2],I=o[1*x-1]);var k=e.validateNumberPositionInColumn(w,b,r)?1:0,C=e.validateNumberPositionInColumn(S,b,r)?1:0,M=e.validateNumberPositionInColumn(I,b,r)?1:0;h.push({number:b,flag:k,flag_ref1:C,flag_ref2:M,sudokuindex:w})}}catch(e){_=!0,g=e}finally{try{!p&&y.return&&y.return()}finally{if(_)throw g}}var z=[],P=!0,L=!1,j=void 0;try{for(var N,R=h[Symbol.iterator]();!(P=(N=R.next()).done);P=!0){var E=N.value;1==E.flag&&E.flag+E.flag_ref1+E.flag_ref2<2&&(r[E.sudokuindex]=E.number,z.push(E.sudokuindex))}}catch(e){L=!0,j=e}finally{try{!P&&R.return&&R.return()}finally{if(L)throw j}}var G=h.filter(function(e){return 1==e.flag&&e.flag+e.flag_ref1+e.flag_ref2>=1&&!z.includes(e.sudokuindex)});G&&(r[G[0].sudokuindex]=G[0].number)}(M))break}}catch(e){S=!0,I=e}finally{try{!w&&C.return&&C.return()}finally{if(S)throw I}}for(var z=72;z<81;z++){var P=this.getIndexListInColum(z),L=0,j=!0,N=!1,R=void 0;try{for(var E,G=P[Symbol.iterator]();!(j=(E=G.next()).done);j=!0){var O=E.value;L+=1*r[O]}}catch(e){N=!0,R=e}finally{try{!j&&G.return&&G.return()}finally{if(N)throw R}}r[z]=45-L}return r},getPuzzleLevel:function(e){return e?e<2?2:e>5?5:e:3},getHidePositionInGrid:function(e){e=this.getPuzzleLevel(e);for(var t=[],r=[0,1,2,3,4,5,6,7,8],n=0;n<e;n++){var o=i.default.get_random_number_index(r.length);t.push(r[o]),r.splice(o,1)}return t},getSudokuPuzzle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=this.getSudokuSourceData(),r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var l=a.value;r.push({value:l,display:l})}}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}var s=this.getStartIndesInGrids(t),d=!0,c=!1,f=void 0;try{for(var v,h=s[Symbol.iterator]();!(d=(v=h.next()).done);d=!0){var p=v.value,_=this.getIndexListInGrid(p),g=this.getHidePositionInGrid(e),m=!0,y=!1,b=void 0;try{for(var x,w=g[Symbol.iterator]();!(m=(x=w.next()).done);m=!0){r[_[x.value]].display=0}}catch(e){y=!0,b=e}finally{try{!m&&w.return&&w.return()}finally{if(y)throw b}}}}catch(e){c=!0,f=e}finally{try{!d&&h.return&&h.return()}finally{if(c)throw f}}return{SudokuPuzzle:r,Level:e}}}},358:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:e.id}},[r("div",{staticStyle:{display:"none"}},[e._v(e._s(e.level)+"."+e._s(e.mode))]),e._v(" "),r("div",{staticStyle:{"background-color":"#0066CC",width:"475px",height:"475px"}},e._l(e._grids,function(t,n){return r("div",{style:t.style_config},[r("table",{staticClass:"grid_container"},e._l(t.data,function(t,n){return r("tr",e._l(t,function(t,n){return r("td",{staticStyle:{border:"solid#0066CC 1px"}},[r("div",{staticStyle:{width:"50px",height:"50px","text-align":"center",position:"relative",top:"5px"}},[t.display>0?r("span",[e._v(e._s(t.display))]):e._e(),e._v(" "),t.display<=0&&e.mode>0?r("span",{staticStyle:{"font-style":"oblique",color:"gray"}},[e._v(e._s(t.value))]):e._e(),e._v(" "),t.display<=0&&e.mode<=0?r("span",[r("input",{staticClass:"sudoku_input",attrs:{type:"text",maxlength:"1",onkeypress:"return event.charCode >= 49 && event.charCode <= 57"}})]):e._e()])])}))}))])}))])},i=[],o={render:n,staticRenderFns:i};t.a=o},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get_random_number_index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;0==e&&(e=2);var t=10*Math.random();return Math.ceil(t)%e}}},65:function(e,t){function r(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var o=n(i);return[r].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},66:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=d[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));d[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return p;n.parentNode.removeChild(n)}if(_){var o=v++;n=f||(f=i()),t=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),t=u.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=r(339),d={},c=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,v=0,h=!1,p=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var i=s(e,t);return n(i),function(t){for(var r=[],o=0;o<i.length;o++){var a=i[o],u=d[a.id];u.refs--,r.push(u)}t?(i=s(e,t),n(i)):i=[];for(var o=0;o<r.length;o++){var u=r[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},67:function(e,t){e.exports=function(e,t,r,n,i,o){var a,u=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,u=e.default);var s="function"==typeof u?u.options:u;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},s._ssrRegister=d):n&&(d=n),d){var c=s.functional,f=c?s.render:s.beforeCreate;c?(s._injectStyles=d,s.render=function(e,t){return d.call(t),f(e,t)}):s.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:u,options:s}}}},[131]);
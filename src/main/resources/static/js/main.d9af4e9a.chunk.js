(this["webpackJsonpstudent-ikbo-12-17"]=this["webpackJsonpstudent-ikbo-12-17"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(8),r=n.n(s),j=(n(15),n(3)),o=n(4),u=n(6),a=n(5),l=(n.p,n(16),n(17),n(21)),d=n(0),h=function(){return fetch("http://localhost:8080/student/").then((function(t){return t.json()}))},b=function(){return fetch("http://localhost:8080/plan/").then((function(t){return t.json()}))},O=function(){return fetch("http://localhost:8080/journal/").then((function(t){return t.json()}))},p=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){var t;return Object(j.a)(this,n),(t=e.call(this)).state={activeGroup:0,students:null,plan:null,journal:null},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;h().then((function(e){t.setState({students:e})})),b().then((function(e){t.setState({plan:e})})),O().then((function(e){t.setState({journal:e})}))}},{key:"render",value:function(){var t=this;return 0==this.state.activeGroup?Object(d.jsxs)("div",{className:"App",children:[this.state.students?Object(d.jsx)(x,{students:this.state.students}):null,Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:0})},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:1})},children:"\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u044f"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:2})},children:"\u0416\u0443\u0440\u043d\u0430\u043b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:3})},children:"\u041f\u0435\u0440\u0435\u0441\u0434\u0430\u0447\u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0443"})]}):1==this.state.activeGroup?Object(d.jsxs)("div",{className:"App",children:[this.state.plan?Object(d.jsx)(f,{plan:this.state.plan}):null,Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:0})},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:1})},children:"\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u044f"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:2})},children:"\u0416\u0443\u0440\u043d\u0430\u043b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:3})},children:"\u041f\u0435\u0440\u0435\u0441\u0434\u0430\u0447\u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0443"})]}):2==this.state.activeGroup?Object(d.jsxs)("div",{className:"App",children:[this.state.journal?Object(d.jsx)(v,{journal:this.state.journal}):null,Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:0})},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:1})},children:"\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u044f"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:2})},children:"\u0416\u0443\u0440\u043d\u0430\u043b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:3})},children:"\u041f\u0435\u0440\u0435\u0441\u0434\u0430\u0447\u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0443"})]}):3==this.state.activeGroup?Object(d.jsxs)("div",{className:"App",children:[this.state.journal?Object(d.jsx)(k,{journal:this.state.journal}):null,Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:0})},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:1})},children:"\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u044f"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:2})},children:"\u0416\u0443\u0440\u043d\u0430\u043b"}),Object(d.jsx)("button",{onClick:function(){t.setState({activeGroup:3})},children:"\u041f\u0435\u0440\u0435\u0441\u0434\u0430\u0447\u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0443"})]}):void 0}}]),n}(c.Component),x=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(l.a,{bordered:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"\u0424\u0418\u041e"}),Object(d.jsx)("th",{children:"ID \u0413\u0440\u0443\u043f\u043f\u044b"})]})}),Object(d.jsx)("tbody",{children:this.props.students.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[e+1," "]}),Object(d.jsxs)("td",{children:[t.surname," ",t.name," ",t.second_name]}),Object(d.jsx)("td",{children:t.study_group_id})]})}))})]})}}]),n}(c.Component),f=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(l.a,{bordered:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"ID \u041f\u0440\u0435\u0434\u043c\u0435\u0442\u0430"}),Object(d.jsx)("th",{children:"ID \u0422\u0438\u043f\u0430 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0430"})]})}),Object(d.jsx)("tbody",{children:this.props.plan.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[e+1," "]}),Object(d.jsxs)("td",{children:[t.subject_id," "]}),Object(d.jsx)("td",{children:t.exam_type_id})]})}))})]})}}]),n}(c.Component),v=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(l.a,{bordered:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(d.jsx)("th",{children:"ID \u041f\u0440\u0435\u0434\u043c\u0435\u0442\u0430"}),Object(d.jsx)("th",{children:"ID \u041e\u0446\u0435\u043d\u043a\u0438"})]})}),Object(d.jsx)("tbody",{children:this.props.journal.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[t.student_id," "]}),Object(d.jsx)("td",{children:t.study_plan_id}),Object(d.jsx)("td",{style:{color:"4"!=t.mark_id?"black":"red"},children:t.mark_id})]})}))})]})}}]),n}(c.Component),k=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(l.a,{bordered:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(d.jsx)("th",{children:"ID \u041f\u0440\u0435\u0434\u043c\u0435\u0442\u0430"}),Object(d.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0434\u0430\u0447"})]})}),Object(d.jsx)("tbody",{children:this.props.journal.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[t.student_id," "]}),Object(d.jsx)("td",{children:t.study_plan_id}),Object(d.jsx)("td",{children:t.count})]})}))})]})}}]),n}(c.Component),C=p,m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.d9af4e9a.chunk.js.map
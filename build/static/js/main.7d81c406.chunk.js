(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,a){e.exports=a(363)},363:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),c=a(41),l=a(42),d=a(44),i=a(43),m=a(45),u=a(379),_=a(381),p=a(380),h=a(378),E=a(372),f=function(e){return r.a.createElement(E.a,{title:"TRUCKPAD",style:{borderBottom:"1px solid rgb(0, 0, 0, 0.30)"}})},g=a(62),v=a.n(g),y="http://localhost:8000";function b(e,t){return v.a.post("http://localhost:8000/api/driver/upload/"+t,e)}function C(e){return v.a.get("http://localhost:8000/api/driver/get-one/".concat(e))}function D(e){return v.a.post("http://localhost:8000/api/driver/status/".concat(e._id),{active:e.active})}var I=a(374),j=a(366),O=a(367),S=a(136),x=a(368),k=a(371),w=a(364),P=a(70),B=a.n(P),A=I.a.Title,N=function(e){var t=e.drivers,a=e.onInsert,n=e.onDetail;return r.a.createElement(j.a,{type:"flex",justify:"center",style:{marginTop:10}},r.a.createElement(O.a,{span:12},r.a.createElement(j.a,null,r.a.createElement(O.a,{span:6},r.a.createElement(A,{level:3},"Motoristas")),r.a.createElement(O.a,{offset:14,span:4},r.a.createElement(S.a,{type:"primary",icon:"plus",onClick:a},"Cadastrar")),r.a.createElement(x.a,null)),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(k.a,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e){return r.a.createElement(k.a.Item,{key:e._id,actions:[r.a.createElement(S.a,{type:"primary",icon:"profile",onClick:function(){return n(e._id)}},"Detalhes")],extra:r.a.createElement("img",{src:e.image_path?e.image_path:B.a,style:{width:180},alt:"foto do motorista"})},r.a.createElement(k.a.Item.Meta,{title:r.a.createElement("div",null,!e.active&&r.a.createElement(w.a,{color:"#f50"},"Desativado"),r.a.createElement("b",null,e.name)),description:r.a.createElement("div",null,r.a.createElement("p",null,"Cidade: ",e.city),r.a.createElement("p",null,"Estado: ",e.state),r.a.createElement("p",null,"Data de nascimento: ",new Date(e.birth_date).toLocaleDateString("en-GB")))}))}})))))},R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={drivers:[]},a.onInsert=function(){a.props.history.push("/cadastrar")},a.onDetail=function(e){a.props.history.push("/".concat(e,"/detalhes"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:8000/api/driver/get-all").then(function(t){e.setState({drivers:t.data})})}},{key:"render",value:function(){return r.a.createElement(N,Object.assign({},this.state,this.props,{onInsert:this.onInsert,onDetail:this.onDetail}))}}]),t}(n.Component),q=a(71),G=a(102),T=a(373),M=a(376),H=a(370),F=a(369),L=a(174),U=a.n(L),z=function(e){return r.a.createElement(U.a,{mask:"999.999.999-99",value:e.value,onChange:e.onChange},function(t){return r.a.createElement(M.a,Object.assign({placeholder:e.placeholder},t))})},J=I.a.Title,V=function(e){var t=e.name,a=(e.birth_date,e.state,e.city,e.addresses_street_name),n=e.addresses_state,s=(e.addresses_country,e.addresses_neighborhood),o=e.addresses_city,c=e.addresses_street_number,l=e.addresses_complement,d=e.addresses_postal_code,i=(e.documents_expires_at_cnh,e.documents_country_cnh,e.documents_number_cnh),m=(e.documents_doc_type_cnh,e.documents_category_cnh),u=(e.documents_country_cpf,e.documents_number_cpf),_=(e.documents_doc_type_cpf,e.msgError),p=e.onChange,h=e.onChangeCpf,E=e.onChangeBirthDate,f=e.onChangeExpireDate,g=e.onChangeImage,v=e.onReturn,y=e.onSave,b=e.img,C=e.fileInput;return r.a.createElement(j.a,{type:"flex",justify:"center",style:{marginTop:10,marginBottom:10}},r.a.createElement(O.a,{span:12},r.a.createElement(j.a,null,r.a.createElement(O.a,{span:3},r.a.createElement(S.a,{type:"primary",icon:"left",onClick:v},"Voltar"))),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(T.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(J,{level:4},"Dados pessoais"))),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:23},r.a.createElement(T.a.Item,{label:"Nome:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Digite o nome completo do motorista",name:"name",value:t,onChange:p})))),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:12},r.a.createElement(T.a.Item,{label:"CPF:",vertical:!0,required:!0},r.a.createElement(z,{placeholder:"Digite o CPF",value:u,onChange:h}))),r.a.createElement(O.a,{offset:1,span:11},r.a.createElement(T.a.Item,{label:"Data de nascimento:",vertical:!0,required:!0},r.a.createElement(H.a,{onChange:E})))),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:8},r.a.createElement(T.a.Item,{label:"CNH:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Digite a CNH",name:"documents_number_cnh",value:i,onChange:p}))),r.a.createElement(O.a,{offset:1,span:7},r.a.createElement(T.a.Item,{label:"Categoria da CNH:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Ex.: ABCD",name:"documents_category_cnh",value:m,onChange:p}))),r.a.createElement(O.a,{offset:1,span:7},r.a.createElement(T.a.Item,{label:"Data de expira\xe7\xe3o:",vertical:!0,required:!0},r.a.createElement(H.a,{onChange:f})))),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(J,{level:4},"Endere\xe7o completo"))),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:19},r.a.createElement(T.a.Item,{label:"Endere\xe7o:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Digite o endere\xe7o completo",name:"addresses_street_name",value:a,onChange:p}))),r.a.createElement(O.a,{offset:1,span:4},r.a.createElement(T.a.Item,{label:"N\xfamero:",vertical:!0},r.a.createElement(M.a,{placeholder:"Digite o n\xba",name:"addresses_street_number",value:c,onChange:p})))),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:8},r.a.createElement(T.a.Item,{label:"Complemento:",vertical:!0},r.a.createElement(M.a,{placeholder:"Digite o complemento",name:"addresses_complement",value:l,onChange:p}))),r.a.createElement(O.a,{offset:1,span:7},r.a.createElement(T.a.Item,{label:"Bairro:",vertical:!0},r.a.createElement(M.a,{placeholder:"Digite o bairro",name:"addresses_neighborhood",value:s,onChange:p}))),r.a.createElement(O.a,{offset:1,span:7},r.a.createElement(T.a.Item,{label:"CEP:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Digite o CEP",name:"addresses_postal_code",value:d,onChange:p})))),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:12},r.a.createElement(T.a.Item,{label:"Cidade:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Digite a cidade",name:"addresses_city",value:o,onChange:p}))),r.a.createElement(O.a,{offset:1,span:11},r.a.createElement(T.a.Item,{label:"Estado:",vertical:!0,required:!0},r.a.createElement(M.a,{placeholder:"Digite o estado",name:"addresses_state",value:n,onChange:p})))),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("div",null,_&&r.a.createElement(F.a,{message:_,type:"error"})),r.a.createElement(S.a,{type:"primary",icon:"save",onClick:y},"Salvar"))))))),r.a.createElement(O.a,{span:4},b(),r.a.createElement("div",null,r.a.createElement("input",{type:"file",style:{display:"none"},onChange:g,ref:function(e){C=e}}),r.a.createElement(S.a,{type:"primary",icon:"camera",onClick:function(){return C.click()},block:!0},"Adicionar foto"))))},W=a(377),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={driver_id:null,msgError:null,image:null,file:null},a.onChange=function(e,t){a.setState(Object(G.a)({},e.target.name,e.target.value))},a.onChangeCpf=function(e,t){a.setState({documents_number_cpf:e.target.value})},a.onChangeBirthDate=function(e,t){a.setState({birth_date:e})},a.onChangeExpireDate=function(e,t){a.setState({documents_expires_at_cnh:e})},a.onChangeImage=function(e){var t=e.target.files[0];a.setState({image:URL.createObjectURL(t),file:t})},a.onReturn=function(){var e=a.state.driver_id;e?a.props.history.push("/".concat(e,"/detalhes")):a.props.history.push("/")},a.onSave=function(){var e,t=a.state,n=t.driver_id,r=t.name,s=t.birth_date,o=t.state,c=t.city,l=t.file,d=t.addresses_street_name,i=t.addresses_state,m=t.addresses_country,u=t.addresses_neighborhood,_=t.addresses_city,p=t.addresses_street_number,h=t.addresses_complement,E=t.addresses_postal_code,f=t.documents_expires_at_cnh,g=t.documents_country_cnh,y=t.documents_number_cnh,C=t.documents_doc_type_cnh,D=t.documents_category_cnh,I=t.documents_country_cpf,j=t.documents_number_cpf,O=t.documents_doc_type_cpf;""===r?a.setState({msgError:"Por favor, preencher o nome do motorista."}):j.includes("_")?a.setState({msgError:"Por favor, verifique o CPF."}):""===s?a.setState({msgError:"Por favor, selecione a data de nascimento."}):""===y?a.setState({msgError:"Por favor, preencher o n\xfamero da CNH."}):""===D?a.setState({msgError:"Por favor, selecione a categoria da CNH."}):""===d?a.setState({msgError:"Por favor, preencher o endere\xe7o completo."}):""===E?a.setState({msgError:"Por favor, preencher o CEP."}):""===_?a.setState({msgError:"Por favor, preencher a cidade."}):""===i?a.setState({msgError:"Por favor, preencher o estado."}):(a.setState({msgError:null}),n?(e={driver_id:n,name:r,birth_date:s,state:o,city:c,addresses_street_name:d,addresses_state:i,addresses_country:m,addresses_neighborhood:u,addresses_city:_,addresses_street_number:p,addresses_complement:h,addresses_postal_code:E,documents_expires_at_cnh:f,documents_country_cnh:g,documents_number_cnh:y,documents_doc_type_cnh:C,documents_category_cnh:D,documents_country_cpf:I,documents_number_cpf:j,documents_doc_type_cpf:O},v.a.post("http://localhost:8000/api/driver/edit/".concat(e.driver_id),{name:e.name,birth_date:e.birth_date,state:e.state,city:e.city,addresses_street_name:e.addresses_street_name,addresses_state:e.addresses_state,addresses_country:e.addresses_country,addresses_neighborhood:e.addresses_neighborhood,addresses_city:e.addresses_city,addresses_street_number:e.addresses_street_number,addresses_complement:e.addresses_complement,addresses_postal_code:e.addresses_postal_code,documents_expires_at_cnh:e.documents_expires_at_cnh,documents_country_cnh:e.documents_country_cnh,documents_number_cnh:e.documents_number_cnh,documents_doc_type_cnh:e.documents_doc_type_cnh,documents_category_cnh:e.documents_category_cnh,documents_country_cpf:e.documents_country_cpf,documents_number_cpf:e.documents_number_cpf,documents_doc_type_cpf:e.documents_doc_type_cpf})).then(function(e){if(l){var t=new FormData;return t.append("file",l),b(t,n)}return null}).then(function(){a.onReturn(),W.a.success("Motorista editado com sucesso.")}):function(e){return v.a.put("http://localhost:8000/api/driver/insert",{name:e.name,birth_date:e.birth_date,state:e.state,city:e.city,addresses_street_name:e.addresses_street_name,addresses_state:e.addresses_state,addresses_country:e.addresses_country,addresses_neighborhood:e.addresses_neighborhood,addresses_city:e.addresses_city,addresses_street_number:e.addresses_street_number,addresses_complement:e.addresses_complement,addresses_postal_code:e.addresses_postal_code,documents_expires_at_cnh:e.documents_expires_at_cnh,documents_country_cnh:e.documents_country_cnh,documents_number_cnh:e.documents_number_cnh,documents_doc_type_cnh:e.documents_doc_type_cnh,documents_category_cnh:e.documents_category_cnh,documents_country_cpf:e.documents_country_cpf,documents_number_cpf:e.documents_number_cpf,documents_doc_type_cpf:e.documents_doc_type_cpf})}({driver_id:n,name:r,birth_date:s,state:o,city:c,addresses_street_name:d,addresses_state:i,addresses_country:m,addresses_neighborhood:u,addresses_city:_,addresses_street_number:p,addresses_complement:h,addresses_postal_code:E,documents_expires_at_cnh:f,documents_country_cnh:g,documents_number_cnh:y,documents_doc_type_cnh:C,documents_category_cnh:D,documents_country_cpf:I,documents_number_cpf:j,documents_doc_type_cpf:O}).then(function(e){if(l){var t=new FormData;return t.append("file",l),b(t,e.data)}return null}).then(function(){a.onReturn(),W.a.success("Motorista cadastrado com sucesso.")}))},a.img=function(){var e=a.state,t=e.image,n=e.image_path;return t?r.a.createElement("img",{src:t,alt:"foto do motorista",style:{width:240}}):n?r.a.createElement("img",{src:n,alt:"foto do motorista",style:{width:240}}):r.a.createElement("img",{src:B.a,alt:"foto do motorista",style:{width:240}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.driver_id;t?C(t).then(function(a){e.setState(Object(q.a)({driver_id:t},a.data,{image_path:a.data.image_path?"".concat(y,"/").concat(a.data.image_path):null}))}):this.setState({driver_id:null,msgError:null,image:null,file:null,name:"",birth_date:"",state:"",city:"",addresses_street_name:"",addresses_state:"",addresses_country:"",addresses_neighborhood:"",addresses_city:"",addresses_street_number:"",addresses_complement:"",addresses_postal_code:"",documents_expires_at_cnh:"",documents_country_cnh:"",documents_number_cnh:"",documents_doc_type_cnh:"",documents_category_cnh:"",documents_country_cpf:"",documents_number_cpf:"",documents_doc_type_cpf:""})}},{key:"render",value:function(){return r.a.createElement(V,Object.assign({},this.state,this.props,{onChange:this.onChange,onChangeCpf:this.onChangeCpf,onChangeBirthDate:this.onChangeBirthDate,onChangeExpireDate:this.onChangeExpireDate,onChangeImage:this.onChangeImage,onReturn:this.onReturn,onSave:this.onSave,img:this.img}))}}]),t}(n.Component),$=a(382),Q=a(375),X=I.a.Paragraph,Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.onOpen=function(){a.setState(Object(q.a)({visible:!0},a.props.driver))},a.onClose=function(){a.setState({visible:!1})},a.onInactive=function(){var e=a.state._id;D({_id:e,active:!1}).then(function(){a.onClose(),a.props.onGet(e),W.a.success("Motorista desativado com sucesso.")})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,a=t.visible,n=t.name;return r.a.createElement(r.a.Fragment,null,e({open:this.onOpen}),r.a.createElement(Q.a,{title:"Desativar motorista",visible:a,okType:"danger",okText:"Sim",cancelText:"N\xe3o",onOk:this.onInactive,onCancel:this.onClose},r.a.createElement(I.a,null,r.a.createElement(X,null,"Tem certeza que deseja desativar o motorista ",n,"?"))))}}]),t}(r.a.Component),Z=I.a.Title,ee=function(e){var t=e.image_path,a=e._id,n=e.name,s=e.birth_date,o=(e.state,e.city,e.addresses_street_name),c=e.addresses_state,l=(e.addresses_country,e.addresses_neighborhood),d=e.addresses_city,i=e.addresses_street_number,m=e.addresses_complement,u=e.addresses_postal_code,_=e.documents_expires_at_cnh,p=(e.documents_country_cnh,e.documents_number_cnh),h=(e.documents_doc_type_cnh,e.documents_category_cnh),E=(e.documents_country_cpf,e.documents_number_cpf),f=(e.documents_doc_type_cpf,e.active),g=e.onGet,v=e.onEdit,y=e.onReturn,b=e.onActive;return r.a.createElement(j.a,{type:"flex",justify:"center",style:{marginTop:10}},r.a.createElement(O.a,{span:16},r.a.createElement(j.a,null,r.a.createElement(O.a,{span:4},r.a.createElement(S.a,{type:"primary",icon:"left",onClick:y},"Voltar")),r.a.createElement(O.a,{span:20},r.a.createElement(Z,{level:3},"Detalhes do motorista")),r.a.createElement(x.a,null)),r.a.createElement(j.a,null,r.a.createElement(O.a,{span:8},r.a.createElement("img",{src:t||B.a,style:{width:240},alt:"foto do motorista"})),r.a.createElement(O.a,{span:16},r.a.createElement(S.a,{type:"primary",icon:"edit",onClick:v},"Editar"),f?r.a.createElement(Y,{onGet:g,driver:{name:n,_id:a}},function(e){var t=e.open;return r.a.createElement(S.a,{type:"danger",icon:"delete",onClick:t},"Desativar")}):r.a.createElement(S.a,{onClick:b},"Ativar"),r.a.createElement($.a,{title:"Dados"},r.a.createElement($.a.Item,{label:"Nome"},n),f?r.a.createElement($.a.Item,{label:"Status"},"Ativo"):r.a.createElement($.a.Item,{label:"Status"},"Desativado"),r.a.createElement($.a.Item,{label:"Data de nascimento"},new Date(s).toLocaleDateString("en-GB"))),r.a.createElement($.a,{title:"Documentos"},r.a.createElement($.a.Item,{label:"CPF"},E),r.a.createElement($.a.Item,{label:"CNH"},p),r.a.createElement($.a.Item,{label:"Categoria da CNH"},h),r.a.createElement($.a.Item,{label:"Data da expira\xe7\xe3o da CNH"}," ",new Date(_).toLocaleDateString("en-GB"))),r.a.createElement($.a,{title:"Endere\xe7o completo"},r.a.createElement($.a.Item,{label:"Endere\xe7o"},o),r.a.createElement($.a.Item,{label:"N\xfamero"},i),r.a.createElement($.a.Item,{label:"Complemento"},m),r.a.createElement($.a.Item,{label:"Bairro"},l),r.a.createElement($.a.Item,{label:"CEP"},u),r.a.createElement($.a.Item,{label:"Cidade"},d),r.a.createElement($.a.Item,{label:"Estado"},c))))))},te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={driver_id:null},a.onGet=function(e){C(e).then(function(t){a.setState(Object(q.a)({driver_id:e},t.data,{image_path:t.data.image_path?"".concat(y,"/").concat(t.data.image_path):null}))})},a.onEdit=function(){var e=a.state.driver_id;a.props.history.push("/".concat(e,"/editar"))},a.onReturn=function(){a.props.history.push("/")},a.onActive=function(){var e=a.state._id;D({_id:e,active:!0}).then(function(){a.onGet(e),W.a.success("Motorista ativado com sucesso.")})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.driver_id;this.onGet(e)}},{key:"render",value:function(){return r.a.createElement(ee,Object.assign({},this.state,this.props,{onGet:this.onGet,onEdit:this.onEdit,onReturn:this.onReturn,onActive:this.onActive}))}}]),t}(n.Component),ae=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(_.a,null,r.a.createElement(p.a,{path:"/",component:R,exact:!0}),r.a.createElement(p.a,{path:"/cadastrar",component:K,exact:!0}),r.a.createElement(p.a,{path:"/:driver_id/editar",component:K,exact:!0}),r.a.createElement(p.a,{path:"/:driver_id/detalhes",component:te,exact:!0}),r.a.createElement(h.a,{path:"/"}))))}}]),t}(r.a.Component);a(361),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){e.exports=a.p+"static/media/not-camera.a904f40f.png"}},[[184,2,1]]]);
//# sourceMappingURL=main.7d81c406.chunk.js.map
let Q=0,R=`string`,M=1,T=`Object`,O=`utf-8`,L=null,N=`undefined`,U=4,S=`function`,J=128,I=Array,P=Error,V=Object,K=undefined;var C=(async(a,b)=>{if(typeof Response===S&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===S){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==L){return `${a}`};if(b==R){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==S){const b=a.name;if(typeof b==R&&b.length>Q){return `Function(${b})`}else{return `Function`}};if(I.isArray(a)){const b=a.length;let c=`[`;if(b>Q){c+=l(a[Q])};for(let d=M;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>M){d=c[M]}else{return toString.call(a)};if(d==T){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return T}};if(a instanceof P){return `${a.name}: ${a.message}\n${a.stack}`};return d});var E=((a,b)=>{});var A=((a,b)=>{a=a>>>Q;const c=z();const d=c.subarray(a/U,a/U+ b);const e=[];for(let a=Q;a<d.length;a++){e.push(f(d[a]))};return e});var g=(a=>{if(d===b.length)b.push(b.length+ M);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var v=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h75246a73204bf2af(c,d,u(e))}finally{b[t++]=K}});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var H=(async(b)=>{if(a!==K)return a;if(typeof b===N){b=new URL(`trunk-template-181e7a5183d16d76_bg.wasm`,import.meta.url)};const c=D();if(typeof b===R||typeof Request===S&&b instanceof Request||typeof URL===S&&b instanceof URL){b=fetch(b)};E(c);const {instance:d,module:e}=await C(await b,c);return F(d,e)});var r=(()=>{if(q===L||q.byteLength===Q){q=new Int32Array(a.memory.buffer)};return q});var x=(a=>a===K||a===L);var c=(a=>b[a]);var G=(b=>{if(a!==K)return a;const c=D();E(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return F(d,b)});var F=((b,c)=>{a=b.exports;H.__wbindgen_wasm_module=c;q=L;y=L;i=L;a.__wbindgen_start();return a});var D=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_listenerid_12315eee21527820=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/U+ M]=x(d)?Q:d;r()[a/U+ Q]=!x(d)});b.wbg.__wbg_setlistenerid_3183aae8fa5840fb=((a,b)=>{c(a).__yew_listener_id=b>>>Q});b.wbg.__wbg_subtreeid_e348577f7ef777e3=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/U+ M]=x(d)?Q:d;r()[a/U+ Q]=!x(d)});b.wbg.__wbg_setsubtreeid_d32e6327eef1f7fc=((a,b)=>{c(a).__yew_subtree_id=b>>>Q});b.wbg.__wbg_cachekey_b61393159c57fd7b=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/U+ M]=x(d)?Q:d;r()[a/U+ Q]=!x(d)});b.wbg.__wbg_setcachekey_80183b7cfc421143=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>Q});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new P();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,M)}});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==M){b.a=Q;return !0};const c=!1;return c});b.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===S;return b});b.wbg.__wbg_error_71d6845bf00a930f=((b,c)=>{var d=A(b,c).slice();a.__wbindgen_free(b,c*U,U);console.error(...d)});b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return x(b)?Q:g(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return B(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_d47e0c50fa2904e0=function(){return B(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===Q?K:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return x(b)?Q:g(b)});b.wbg.__wbg_instanceof_Element_f614cf57d4316979=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_0819c2800784a176=((b,d)=>{const e=c(d).namespaceURI;var f=x(e)?Q:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_69934f9195df65af=((b,d)=>{const e=c(d).outerHTML;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbg_children_3ab614807b5f0709=(a=>{const b=c(a).children;return g(b)});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return B(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return B(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_bubbles_f0783dc095f8e220=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_191799b8e0ab3254=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_value_ab23a75318ea828f=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbg_setvalue_918a8ae77531a942=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_parentNode_f3957fdd408a62f7=(a=>{const b=c(a).parentNode;return x(b)?Q:g(b)});b.wbg.__wbg_parentElement_86a7612dde875ba9=(a=>{const b=c(a).parentElement;return x(b)?Q:g(b)});b.wbg.__wbg_lastChild_8f7b6f3825115eff=(a=>{const b=c(a).lastChild;return x(b)?Q:g(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return x(b)?Q:g(b)});b.wbg.__wbg_setnodeValue_8656e865e9b11bbb=((a,b,d)=>{c(a).nodeValue=b===Q?K:k(b,d)});b.wbg.__wbg_textContent_efe8338af53ddf62=((b,d)=>{const e=c(d).textContent;var f=x(e)?Q:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbg_appendChild_bd383ec5356c0bdb=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_insertBefore_882082ef4c5d7766=function(){return B(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_14b08321b677677a=function(){return B(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_cb6366cb0956ce29=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_99e27ed8897850f2=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_addEventListener_1b158e9e95e0ab00=function(){return B(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_setchecked_3b12f3d602a63e47=((a,b)=>{c(a).checked=b!==Q});b.wbg.__wbg_value_c93cb4b4d352228e=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbg_setvalue_9bd3f93b3864ddbf=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>Q];return g(d)});b.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return B(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new V();return g(a)});b.wbg.__wbg_self_086b5302bcafb962=function(){return B((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return B((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return B((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return B((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbg_from_a663e01d8dab8e44=(a=>{const b=I.from(c(a));return g(b)});b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=V.is(c(a),c(b));return d});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_set_37a50e901587b477=function(){return B(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/U+ M]=g;r()[b/U+ Q]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new P(k(a,b))});b.wbg.__wbindgen_closure_wrapper536=((a,b,c)=>{const d=s(a,b,249,v);return g(d)});b.wbg.__wbindgen_closure_wrapper666=((a,b,c)=>{const d=s(a,b,297,w);return g(d)});return b});var z=(()=>{if(y===L||y.byteLength===Q){y=new Uint32Array(a.memory.buffer)};return y});var w=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7d2210de59623b2c(b,c,g(d))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var s=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Q;try{return e(c,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===K){const c=n.encode(a);const d=b(c.length,M)>>>Q;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,M)>>>Q;const f=j();let g=Q;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Q){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,M)>>>Q;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var j=(()=>{if(i===L||i.byteLength===Q){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>Q;return h.decode(j().subarray(a,a+ b))});var u=(a=>{if(t==M)throw new P(`out of js stack`);b[--t]=a;return t});let a;const b=new I(J).fill(K);b.push(K,L,!0,!1);let d=b.length;const h=typeof TextDecoder!==N?new TextDecoder(O,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw P(`TextDecoder not available`)}};if(typeof TextDecoder!==N){h.decode()};let i=L;let m=Q;const n=typeof TextEncoder!==N?new TextEncoder(O):{encode:()=>{throw P(`TextEncoder not available`)}};const o=typeof n.encodeInto===S?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=L;let t=J;let y=L;export default H;export{G as initSync}
(()=>{var i=class{};var a=class extends i{constructor(e){super(),this._port=e,this._disconnected=!1,this._listeners=[],e.onDisconnect.addListener(()=>{this._disconnected=!0})}onAny(e){let s=t=>{e(t.topic,t.args)};return this._port.onMessage.addListener(s),this._listeners.push(s),()=>{this._listeners.splice(this._listeners.indexOf(s),1),this._port.onMessage.removeListener(s)}}on(e,s){let t=n=>{n.topic===e&&s.apply(null,n.args)};return this._port.onMessage.addListener(t),this._listeners.push(t),()=>{this._listeners.splice(this._listeners.indexOf(t),1),this._port.onMessage.removeListener(t)}}once(e,s){let t=n=>{n.topic===e&&(s.apply(null,n.args),this._port.onMessage.removeListener(t))};this._port.onMessage.addListener(t)}emit(e,s){return this._disconnected?!1:(this._port.postMessage({topic:e,args:s}),!0)}destroy(){this._listeners.forEach(e=>window.removeEventListener("message",e)),this._listeners=[]}};var d=class extends i{constructor(e,s){super(),this._source=e,this._destination=s,this._listeners=[]}onAny(e){let s=t=>{t.source!==window||!t.data||!t.data.topic||t.data.source!==this._destination||e(t.data.topic,t.data.args)};return window.addEventListener("message",s),this._listeners.push(s),()=>{this._listeners.splice(this._listeners.indexOf(s),1),window.removeEventListener("message",s)}}on(e,s){let t=n=>{n.source!==window||!n.data||n.data.source!==this._destination||!n.data.topic||n.data.topic===e&&s.apply(null,n.data.args)};return window.addEventListener("message",t),this._listeners.push(t),()=>{this._listeners.splice(this._listeners.indexOf(t),1),window.removeEventListener("message",t)}}once(e,s){let t=n=>{n.source!==window||!n.data||n.data.source!==this._destination||!n.data.topic||(n.data.topic===e&&s.apply(null,n.data.args),window.removeEventListener("message",t))};window.addEventListener("message",t)}emit(e,s){return window.postMessage({source:this._source,topic:e,args:s},"*"),!0}destroy(){this._listeners.forEach(e=>window.removeEventListener("message",e)),this._listeners=[]}};var h=()=>{let o=!1,e=!1,s=chrome.runtime.connect({name:"content-script"}),t=()=>{n.emit("shutdown"),n.destroy(),l.destroy(),o=!0};s.onDisconnect.addListener(t);let n=new d("angular-devtools-content-script","angular-devtools-backend"),l=new a(s),u=()=>{n.emit("handshake")};if(l.onAny((r,c)=>{n.emit(r,c)}),n.onAny((r,c)=>{e=!0,l.emit(r,c)}),!e){console.log("Attempting initialization",new Date);let r=()=>{e||o||(u(),setTimeout(r,500))};r()}};globalThis.main=h;})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=content_script_bundle.js.map
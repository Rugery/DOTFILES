(()=>{function i(e){let u=Boolean(e.ng),t=document.querySelector("[ng-version]"),s=!1,n=!1;if(t){n=!0;let o=t.getAttribute("ng-version"),r=o?parseInt(o.split(".")[0],10):-1;o&&(r>=12||r===0)&&(s=!0)}e.postMessage({isIvy:typeof t?.__ngContext__<"u",isAngular:n,isDebugMode:u,isSupportedAngularVersion:s,isAngularDevTools:!0},"*"),n||setTimeout(()=>i(e),1e3)}i(window);})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=detect_angular_for_extension_icon_bundle.js.map

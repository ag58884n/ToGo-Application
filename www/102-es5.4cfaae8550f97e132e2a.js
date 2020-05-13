function asyncGeneratorStep(t,e,n,i,o,s,r){try{var a=t[s](r),c=a.value}catch(d){return void n(d)}a.done?e(c):Promise.resolve(c).then(i,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function r(t){asyncGeneratorStep(s,i,o,r,a,"next",t)}function a(t){asyncGeneratorStep(s,i,o,r,a,"throw",t)}r(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{WbT0:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toggle",(function(){return a}));var i=n("dSyh"),o=(n("AfW+"),n("aiEM")),s=n("Dl6n"),r=n("opz7");const a=class{constructor(t){Object(i.l)(this,t),this.inputId="ion-tg-".concat(d++),this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=Object(i.d)(this,"ionChange",7),this.ionFocus=Object(i.d)(this,"ionFocus",7),this.ionBlur=Object(i.d)(this,"ionBlur",7),this.ionStyle=Object(i.d)(this,"ionStyle",7)}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)}connectedCallback(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(null,"mUkt"));case 2:e.t0={el:t.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>t.onStart(),onMove:e=>t.onMove(e),onEnd:e=>t.onEnd(e)},t.gesture=e.sent.createGesture(e.t0),t.disabledChanged();case 5:case"end":return e.stop()}}),e)})))()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){c(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(r.d)())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const t=this.inputId,e=this.disabled,n=this.checked,r=this.activated,a=this.color,c=this.el,d=Object(i.e)(this),l=t+"-lbl",g=Object(o.f)(c),h=this.getValue();return g&&(g.id=l),Object(o.a)(!0,c,this.name,n?h:"",e),Object(i.i)(i.a,{onClick:this.onClick,role:"checkbox","aria-disabled":e?"true":null,"aria-checked":"".concat(n),"aria-labelledby":l,class:Object.assign(Object.assign({},Object(s.a)(a)),{[d]:!0,"in-item":Object(s.c)("ion-item",c),"toggle-activated":r,"toggle-checked":n,"toggle-disabled":e,interactive:!0})},Object(i.i)("div",{class:"toggle-icon"},Object(i.i)("div",{class:"toggle-inner"})),Object(i.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:e,ref:t=>this.buttonEl=t}))}get el(){return Object(i.f)(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:8px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"}},c=(t,e,n,i)=>{const o="rtl"===t.dir;return e?!o&&i>n||o&&-i<n:!o&&-i<n||o&&i>n};let d=0}}]);
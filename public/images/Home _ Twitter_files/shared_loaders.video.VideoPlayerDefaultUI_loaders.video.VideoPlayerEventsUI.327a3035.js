(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+xEG":function(e,t,a){"use strict";var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("t62R"),o=a("Zl35"),l=a("3XMw"),c=a.n(l),u=a("Lsrn"),p=a("k/Ka");const d=(e={})=>Object(p.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[u.a.root,e.style],viewBox:"0 0 24 24"},r.createElement("g",null,r.createElement("path",{d:"M17.273 15.78c-.148 0-.298-.045-.43-.137l-4.326-3.03c-.2-.14-.32-.368-.32-.613V7.89c0-.414.336-.75.75-.75s.75.336.75.75v3.72l4.007 2.806c.34.237.422.705.185 1.044-.147.208-.38.32-.617.32z"}),r.createElement("path",{d:"M12.947 1.25c-4.633 0-8.713 3.002-10.172 7.298L1.51 5.538c-.158-.382-.594-.564-.98-.403-.382.16-.56.6-.4.982L2.175 11c.08.19.233.338.424.41.095.037.194.053.294.05.102-.005.203-.03.296-.074l4.778-2.282c.374-.178.532-.625.354-1-.178-.374-.63-.53-1-.352L4.103 9.29c1.175-3.837 4.764-6.54 8.845-6.54 5.1 0 9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25c-3.337 0-6.428-1.81-8.066-4.72-.2-.36-.658-.488-1.02-.285-.36.203-.488.66-.285 1.02 1.903 3.383 5.495 5.484 9.373 5.484 5.928 0 10.75-4.823 10.75-10.75S18.874 1.25 12.948 1.25z"})));d.metadata={width:24,height:24};var h=d,b=a("Wms4"),m=a("vCAy"),y=a("rHpw"),g=a("Q0n6"),_=a("kCRK");const E=c.a.ed617674,f=c.a.j190bf19,O=c.a.f1ad0df1,R=c.a.ef16ab2b;class v extends r.PureComponent{constructor(...e){super(...e),s()(this,"_renderLeftBadges",(e=>{const t=Object(g.e)(e);if(t&&t.contentType===_.a.GIF)return r.createElement(b.a,null,r.createElement(i.c,{weight:"bold"},"GIF"));const a=[this._renderDurationBadge(e),this._renderViewCountBadge(e)].concat(this.props.additionalBadges).filter(Boolean);return a.length>0?a:null})),s()(this,"_renderRightBadges",(e=>{const t=[this._renderTimecodeBadge(e),this._render360Badge(e)].concat(this.props.additionalBadges).filter(Boolean);return t.length>0?t:null})),s()(this,"_render360Badge",(e=>{const t=Object(g.e)(e);if(t&&t.is360)return r.createElement(b.a,{key:"360-badge"},E)})),s()(this,"_renderTimecodeBadge",(e=>{const t=Object(g.i)(Object(g.e)(e));if(t&&t>=1)return r.createElement(b.a,{key:"timecode-badge"},r.createElement(i.c,null,r.createElement(h,{style:C.timecodeIcon}),Object(g.b)(t)))})),s()(this,"_renderDurationBadge",(e=>{const{playerDisplayOptions:t}=this.props;if(t&&t.badgeConfiguration&&t.badgeConfiguration.hideDuration)return null;const a=Object(g.j)(e);return a&&a.isLive?r.createElement(b.a,{key:"live-badge",type:"live"},f):r.createElement(b.a,{key:"time-badge"},r.createElement(o.a,{periodic:!0},(({playerState:e})=>r.createElement(P,{key:"time-badge-time",playerState:e}))))})),s()(this,"_renderViewCountBadge",(e=>{const{playerDisplayOptions:t}=this.props;if(t&&t.badgeConfiguration&&t.badgeConfiguration.hideViewCount)return null;const a=Object(g.k)(e),n=a&&Object(g.a)(a);return n?r.createElement(b.a,{key:"view-count-badge"},n):null}))}render(){const{playerState:e,position:t,show:a}=this.props;if(!e||!a)return null;const n="left"===t?this._renderLeftBadges(e):this._renderRightBadges(e);return n?r.createElement(m.a,{align:t},n):null}}s()(v,"defaultProps",{show:!0});const C=y.a.create((e=>({root:{position:"relative"},rightBadges:{position:"absolute",right:e.spaces.space12,bottom:e.spaces.space12},leftBadges:{position:"absolute",left:e.spaces.space12,bottom:e.spaces.space12},timecodeIcon:{marginRight:e.spaces.space2,marginBottom:e.spaces.space1,height:"1em"}}))),P=r.memo((function({playerState:e}){const t=Object(g.e)(e);if(!t)return null;const{advertiserName:a,currentTimeMs:n,durationMs:s,displayType:o}=t;if(s&&(e.isPlaying||n<s)){const e=Object(g.b)((s-n)/1e3);return o===_.c.AD?a?r.createElement(i.c,null,R({advertiserName:a,timeRemaining:e})):r.createElement(i.c,null,O({timeRemaining:e})):r.createElement(i.c,null,e)}return s?r.createElement(i.c,null,Object(g.b)(s/1e3)):null}),((e,t)=>{const a=Object(g.e)(e.playerState),n=Object(g.e)(t.playerState);if(!n||!a)return!1;if(["advertiserName","durationMs","displayType"].some((e=>n[e]!==a[e])))return!1;const s=e=>e&&Object(g.b)((e.durationMs-e.currentTimeMs)/1e3);return!(s(a)!==s(n))}));t.a=v},"0nHQ":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("Yyzf"),o=a("3XMw"),l=a.n(o);const c=l.a.c1658fc6,u={BROADCAST_REQUEST_ERROR:c,BROADCAST_ENDED_NO_REPLAY:l.a.ce871584,BROADCAST_NOT_FOUND:l.a.c101eb95,CONFIG_USER_DATA_NETWORK_ERROR:c,CONFIG_NETWORK_ERROR:c,DMCA_TAKEDOWN_ERROR:l.a.gb24a513,EUROPEAN_COPYRIGHT_VIOLATION:l.a.hcaf3e62,LIVE_PARSE_ERROR:c,LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID:c,LIVE_STREAM_ACQUISITION_NETWORK_ERROR:c,LIVE_VIDEO_GEOBLOCK_ERROR:l.a.if05c037,LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR:l.a.d420171a,LIVE_VIDEO_GEOLOCATION_PROMPT:l.a.b1eb72f9,MEDIA_NOT_SUPPORTED:l.a.c057680b,MEDIA_SRC_INVALID_ERROR:c,MEDIA_ABORTED:c,MEDIA_NETWORK_ERROR:c,MEDIA_DECODE_ERROR:c,MEDIA_GEOBLOCK_ERROR:l.a.i5dfae6e,MEDIA_UNKNOWN_CODE_ERROR:c,ORIGINAL_CONTEXT_DELETED:l.a.c2388276,UNSUPPORTED_TYPE:c,VMAP_NETWORK_ERROR:c,VMAP_PARSE_ERROR:c};class p extends r.Component{constructor(...e){super(...e),s()(this,"_handleReload",(()=>{const{playerApi:e,playerState:t}=this.props;if(!t||!t.errorInfo)return;const{canRetry:a}=t.errorInfo;return a?()=>{e&&e.reload()}:void 0}))}render(){const{displayBackgroundImage:e=!1,imageSrc:t,playerApi:a,playerState:n}=this.props;return a&&n?r.createElement(i.a,{displayBackgroundImage:e,errorMessage:this._buildMessage(),iconPlayError:"BROADCAST_NOT_FOUND"===n.error,imageSrc:t||n.posterImage,onReloadPress:this._handleReload()}):null}_buildMessage(){if(this.props.playerState){const{error:e,errorData:t}=this.props.playerState;if("LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR"===e||"EUROPEAN_COPYRIGHT_VIOLATION"===e){const{copyrightHolder:a}=t||{};return a?u[e]({holder:a}):c}return e&&u[e]||c}}}},"5VhU":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("6RCM"),o=a("3XMw"),l=a.n(o),c=a("rHpw"),u=a("MWbm");const p=l.a.d2c9614f;class d extends r.Component{constructor(...e){super(...e),s()(this,"state",{dimensions:{width:0,height:0}}),s()(this,"_renderGuests",((e,t)=>{const a=Object.keys(e.guests).map((t=>{const a=e.audioLevels.guests[t]||0;return{...e.guests[t],AudioLevel:a/100}})),{dimensions:n}=this.state;if(!n.width||!a.length)return null;const s=.1875*n.width;return r.createElement(u.a,{style:h.guestIndicators},a.map((e=>r.createElement(u.a,{key:e.ParticipantIndex,style:h.guestIndicator},r.createElement(i.a,{accessibilityLabel:p,audioLevel:e.AudioLevel,participantIndex:e.ParticipantIndex,paused:!t.isPlaying,profileImageUrl:e.ProfileUrl,size:s})))))})),s()(this,"_handleLayout",(e=>{this.setState((e=>()=>{const{width:t,height:a}=e.nativeEvent.layout;return{dimensions:{width:t,height:a}}})(e))}))}render(){const{guestsState:e,playerState:t}=this.props;return e&&e.guests&&t?r.createElement(u.a,{onLayout:this._handleLayout,pointerEvents:"none",style:h.overlay},this._renderGuests(e,t)):null}}const h=c.a.create((e=>({overlay:{...c.a.absoluteFillObject,flexGrow:1},guestIndicators:{marginTop:e.spaces.space20,marginLeft:e.spaces.space20,flexDirection:"row"},guestIndicator:{marginRight:e.spaces.space16}})))},"6RCM":function(e,t,a){"use strict";var n=a("ERkP"),s=a("U+Jl"),r=a("rHpw"),i=a("MWbm");function o({color:e}){const t={backgroundColor:e};return n.createElement(n.Fragment,null,n.createElement(i.a,{style:[l.overlay,t]}),n.createElement(i.a,{style:[l.overlay,l.blackOverlay]}))}const l=r.a.create((e=>({overlay:{position:"absolute",width:"100%",height:"100%",borderRadius:e.borderRadii.xLarge,backgroundColor:e.colors.translucentBlack77},blackOverlay:{backgroundColor:"rgba(0,0,0,0.2)"}}))),c=Object.freeze([{label:"Orange",value:"rgb(245, 166, 35)"},{label:"Purple",value:"rgb(171, 112, 212)"},{label:"Green",value:"rgb(153, 206, 98)"},{label:"Periwinkle",value:"rgb(92, 117, 220)"},{label:"Red",value:"rgb(213, 77, 129)"},{label:"Yellow",value:"rgb(222, 213, 105)"},{label:"Teal",value:"rgb(94, 213, 177)"},{label:"Pink",value:"rgb(230, 151, 220)"},{label:"Brown",value:"rgb(146, 100, 62)"},{label:"VividTangerine",value:"rgb(255, 169, 138)"},{label:"SkyBlue",value:"rgb(132, 225, 235)"},{label:"Fern",value:"rgb(105, 171, 99)"},{label:"Carnation",value:"rgb(248, 91, 91)"}]);var u=a("xJf9"),p=a("8eiz"),d=a("U+bB");function h({profileImageUrl:e=b,...t}){const a=Object(p.c)(t.size),s={...a,transform:[{scale:`${t.scale}`}]};return n.createElement(i.a,{style:[s,u.a.transitionTransform,m.scalingAvatar]},n.createElement(d.a,{defaultSource:b,source:e,style:a}))}const b="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",m=r.a.create((e=>({scalingAvatar:{position:"absolute",borderRadius:e.borderRadii.infinite,overflow:"hidden"}})));function y(e){const{size:t}=e,a=t*g,r=e.paused?0:e.audioLevel,i=function(e){const t=(e-1)%c.length;return(c[t]||c[0]).value}(e.participantIndex);return n.createElement(n.Fragment,null,n.createElement(o,{color:i}),n.createElement(s.a,{scale:_(r),size:a,translate:f(r,t)}),n.createElement(s.a,{scale:_(r),size:a,translate:f(r,t)}),n.createElement(s.a,{scale:_(r),size:a,translate:f(r,t)}),n.createElement(h,{profileImageUrl:e.profileImageUrl,scale:E(r),size:a}))}const g=.692,_=e=>.95+(.2+Object(p.a)(.5))*e,E=e=>1+.05*e,f=(e,t)=>({x:Object(p.b)()*e*Object(p.a)(.05*t),y:Object(p.b)()*e*Object(p.a)(.05*t)});const O=r.a.create((e=>({root:{userSelect:"none",overflow:"hidden",justifyContent:"center",alignItems:"center"}})));t.a=function({accessibilityLabel:e,...t}){const{size:a}=t,s={...Object(p.c)(a)};return n.createElement(i.a,{accessibilityLabel:e,style:[s,O.root]},n.createElement(y,t))}},Ur4q:function(e,t,a){"use strict";var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("kCRK"),o=a("Q0n6"),l=a("7nmT"),c=a.n(l),u=a("rHpw"),p=a("MWbm");class d extends r.Component{constructor(...e){super(...e),s()(this,"state",{grabbing:!1}),s()(this,"_firstClick",!0),s()(this,"_componentRef",r.createRef()),s()(this,"_handleMouseDown",(()=>{const{playerState:e}=this.props,t=e&&Object(o.e)(e);t&&t.is360&&this._setEventListener("mousemove",this._handleMouseMove),this._setEventListener("mouseup",this._handleMouseUp)})),s()(this,"_handleMouseMove",(()=>{const{playerState:e}=this.props,t=e&&Object(o.e)(e);t&&t.is360&&(this.setState({grabbing:!0}),this._setEventListener("mouseup",this._handleGrabRelease)),this._unsetEventListener("mousemove",this._handleMouseMove),this._unsetEventListener("mouseup",this._handleMouseUp)})),s()(this,"_handleGrabRelease",(()=>{this.setState({grabbing:!1}),this._unsetEventListener("mouseup",this._handleGrabRelease)})),s()(this,"_handleMouseUp",(e=>{this._unsetEventListener("mousemove",this._handleMouseMove),this._unsetEventListener("mouseup",this._handleMouseUp),this._handleClick(e)})),s()(this,"_handleClick",(e=>{const{hideControls:t,isTouchOnlyUI:a,playerDisplayOptions:n,playerApi:s,playerState:r,onClick:l}=this.props;if(l)return l(e);if(s&&r){if(this._firstClick&&(this._firstClick=!1,r.isMuted))return void s.unmute();if(a&&t)return;const{play:e,replay:l,pause:c}=s,u=Object(o.e)(r),p=u&&u.isLive,d=n&&n.liveClickthrough,h=u&&d&&d.enabled&&u.isLive&&r.isPlaying&&!u.is360;if(a&&t)return;u&&u.currentTimeMs===u.durationMs?l():r.isPlaying&&!p&&u&&u.contentType===i.a.GIF?c():r.isPlaying?h?this._handleLiveClickthrough():p||c():e()}})),s()(this,"_setEventListener",((e,t)=>{const a=c.a.findDOMNode(this._componentRef.current);a&&a.addEventListener(e,t)})),s()(this,"_unsetEventListener",((e,t)=>{const a=c.a.findDOMNode(this._componentRef.current);a&&a.removeEventListener(e,t)})),s()(this,"_handleLiveClickthrough",(()=>{const{playerDisplayOptions:e,playerState:t,playerApi:a}=this.props,n=e&&e.liveClickthrough,s=t&&Object(o.e)(t);if(n&&t&&s&&a){const e=n.url||t.eventUrl||s.broadcastShareUrl;e&&(window.open(e,n.target||"_blank"),a.liveClickthroughClicked())}}))}render(){const{playerState:e}=this.props,{grabbing:t}=this.state,a=e&&Object(o.e)(e),n=a&&a.is360;return r.createElement(p.a,{onMouseDown:this._handleMouseDown,ref:this._componentRef,style:[u.a.absoluteFill,n?t?h.base360grabbing:h.base360:h.base]})}}const h=u.a.create((e=>({base:{cursor:"pointer"},base360:{cursor:"grab"},base360grabbing:{cursor:"grabbing"}})));t.a=d},VLhD:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l}));var n=a("mf6X"),s=a("rOXj");const r=a("aITJ").b.isMobileOS()&&s.a.isTouchSupported(),i=Object.freeze({A11YHook:"VideoPlayerDefaultUI-A11YHook",ControlBar:"VideoPlayerDefaultUI-ControlBar",HashtagHighlight:"VideoPlayerDefaultUI-HashtagHighlight",Root:"VideoPlayerDefaultUI-Root",VideoCTA:"VideoPlayerDefaultUI-VideoCTA"});function o(e,t,a){const{isPlaying:n}=e,s=!!e.error,r=e.controls.isPosterShown,o=s||r;if(a){const e=0!==t.click.size,a=t.touch.has(i.ControlBar);return o||n&&!e&&!a}const l=!t.focused.size&&!t.mouseover.has(i.Root),c=t.mouseover.size>1,u=0!==t.mousemove.size;return o||n&&l||n&&!t.focused.size&&!u&&!c}const l=(e,t)=>{switch(e){case"gif":return n.a.GIF;case"broadcast":return t?n.a.LIVE_BROADCAST:n.a.REPLAY_BROADCAST;case"media_entity":case"vmap":default:return n.a.VOD}}},aoyV:function(e,t,a){"use strict";var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("Qwev"),o=a("Q0n6"),l=a("rHpw"),c=a("MWbm");class u extends r.Component{constructor(...e){super(...e),s()(this,"_playInitiatedTime",null),s()(this,"state",{waitingForPlayback:!1}),s()(this,"_checkPlayRequest",((e,t)=>{const a=t&&"PLAY_REQUESTED"===t.controls.playState,n=a&&(!e||"PLAY_REQUESTED"!==e.controls.playState);a?n&&this._startPlaybackWait():this._clearPlaybackWait()})),s()(this,"_clearPlaybackWait",(()=>{clearInterval(this._bufferingCheck),this._playInitiatedTime=null})),s()(this,"_startPlaybackWait",(()=>{const{waitingForPlaybackThresholdMs:e}=this.props;this._clearPlaybackWait(),this._playInitiatedTime=Date.now(),this._bufferingCheck=setInterval((()=>{if(!this._playInitiatedTime)return this._clearPlaybackWait();const t=this._playInitiatedTime;Date.now()-t>e&&(this.setState({waitingForPlayback:!0}),this._clearPlaybackWait())}),100)}))}static getDerivedStateFromProps(e){const{playerState:t}=e;return t&&"PLAY_REQUESTED"===t.controls.playState?null:{waitingForPlayback:!1}}componentWillUnmount(){this._clearPlaybackWait()}componentDidMount(){this._checkPlayRequest(null,this.props.playerState)}componentDidUpdate(e){this._checkPlayRequest(e.playerState,this.props.playerState)}render(){const{playerState:e}=this.props;if(!e)return null;const t=Object(o.e)(e);return t&&t.isBuffering||this.state.waitingForPlayback?r.createElement(c.a,{pointerEvents:"none",style:[l.a.absoluteFill,p.buttonContainer]},r.createElement(i.a,{color:l.a.theme.colors.white,size:60})):null}}s()(u,"defaultProps",{waitingForPlaybackThresholdMs:1e3});const p=l.a.create((e=>({buttonContainer:{justifyContent:"center",alignItems:"center"}})));t.a=u},fZNH:function(e,t,a){"use strict";var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("Q0n6"),o=a("3XMw"),l=a.n(o),c=a("CKsB"),u=a("rHpw"),p=a("kCRK"),d=a("shC7"),h=a("MWbm");const b=l.a.f5224367,m=l.a.f1b6bcec;class y extends r.Component{constructor(...e){super(...e),s()(this,"state",{openContextMenu:!1,positionX:0,positionY:0}),s()(this,"_handleOpenContextMenu",(e=>t=>{var a;if(t.preventDefault(),null!=e&&null!=(a=e.source)&&a.id&&(e.source.type===p.e.TWEET||e.source.type===p.e.BROADCAST)){document.addEventListener("click",this._handleCloseContextMenu);const e=t.currentTarget.getBoundingClientRect();this.setState({openContextMenu:!0,positionX:t.clientX-e.left,positionY:t.clientY-e.top})}})),s()(this,"_handleCloseContextMenu",(()=>{this.state.openContextMenu&&(document.removeEventListener("click",this._handleCloseContextMenu),this.setState({openContextMenu:!1}))})),s()(this,"_handleCopyVideoAddress",(()=>{document.addEventListener("copy",this._handleCopy),document.execCommand("copy")})),s()(this,"_handleCopy",(e=>{var t,a;const{playerState:n}=this.props,s=null==n||null==(t=n.source)?void 0:t.id,r=null==n||null==(a=n.source)?void 0:a.type;s&&r&&e.clipboardData&&(r===p.e.BROADCAST?e.clipboardData.setData("text/plain",`https://twitter.com/i/broadcasts/${s}`):r===p.e.TWEET&&e.clipboardData.setData("text/plain",`https://twitter.com/i/status/${s}`),e.preventDefault()),document.removeEventListener("copy",this._handleCopy)})),s()(this,"_isGif",(e=>{const t=e&&Object(i.j)(e);return t&&t.contentType===p.a.GIF}))}render(){const{children:e,playerState:t}=this.props,{openContextMenu:a,positionX:n,positionY:s}=this.state,i=this._isGif(t),o=d.a.getConstants().isRTL?{top:s,right:n}:{top:s,left:n};return r.createElement(h.a,{onContextMenu:this._handleOpenContextMenu(t),style:u.a.absoluteFill},e,a&&r.createElement(h.a,{style:[g.menuWrapper,o]},r.createElement(c.a,{actionText:i?m:b,onClick:this._handleCopyVideoAddress})))}}t.a=y;const g=u.a.create((e=>({menuWrapper:{borderRadius:e.borderRadii.small,position:"absolute",overflow:"hidden",backgroundColor:e.colors.navigationBackground,boxShadow:e.boxShadows.medium,display:"table"}})))},mNIZ:function(e,t,a){"use strict";var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("/yvb"),o=a("Q0n6"),l=a("3XMw"),c=a.n(l),u=a("I/9y"),p=a("rHpw"),d=a("+aTU"),h=a("kCRK"),b=a("w05h");const m=c.a.a681babd,y=c.a.db3cd325;class g extends r.PureComponent{constructor(...e){super(...e),s()(this,"_buildMessage",(e=>{const{playerState:t}=this.props,a=t&&Object(o.e)(t);if(a&&a.displayType===h.c.AD){const{advertiserName:t}=a;switch(e.type){case h.d.watch_now:return t?Object(b.e)({advertiserName:t}):b.j;case h.d.shop:return t?Object(b.c)({advertiserName:t}):b.h;case h.d.see_more:return t?Object(b.b)({advertiserName:t}):b.g;case h.d.go_to:return t?Object(b.a)({advertiserName:t}):b.f;case h.d.visit_site:default:return t?Object(b.d)({advertiserName:t}):b.i}}const n=new d.a(e.url).getHostname(),s=0===n.indexOf("www.")?n.substr(4):n;switch(e.type){case h.b.WATCH:return m({trimmedHostname:s});case h.b.VISIT:default:return y({trimmedHostname:s})}})),s()(this,"_handlePress",((e,t)=>()=>{e.callToActionClicked(),window.open(t.url,"_blank")}))}componentDidMount(){const{playerApi:e,playerState:t}=this.props,a=t&&Object(o.e)(t);a&&a.cta&&e&&e.callToActionImpression()}render(){const{playerApi:e,playerState:t}=this.props;if(!t||!e)return null;const a=Object(o.e)(t);if(a&&a.cta){const t=a.cta,n=this._buildMessage(t);return r.createElement(i.a,{accessibilityLabel:n,icon:r.createElement(u.a,null),onPress:this._handlePress(e,t),style:_.root,type:"onMedia"},n)}return null}}const _=p.a.create((e=>({root:{position:"absolute",left:e.spaces.space12,top:e.spaces.space12}})));t.a=g},mf6X:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("KEM+"),s=a.n(n),r=(a("kYxP"),a("ERkP")),i=a("Zl35"),o=a("3XMw"),l=a.n(o),c=a("cm6r"),u=a("a6qo"),p=a("rHpw"),d=a("mXq/"),h=a("MWbm"),b=a("kRXa"),m=a("Q0n6");const y=l.a.f17dfdb5,g=l.a.j190bf19,_=l.a.f6dc9146,E=l.a.d30c74fd,f=l.a.c9a642f9,O=Object.freeze({LIVE_BROADCAST:"liveBroadcast",REPLAY_BROADCAST:"replayBroadcast",VOD:"vod",GIF:"gif",SLATE:"slate"});class R extends r.Component{constructor(...e){super(...e),s()(this,"_handlePlayPress",(()=>{const{playerApi:e}=this.props;e&&e.play()})),s()(this,"_renderBottomRow",(({isHovered:e})=>{const{isPlaying:t}=this.props.playerState,{isLive:a,mediaType:n}=this.props,s=n===O.VOD,i=e&&t;return r.createElement(h.a,{style:v.bottomRow},this._renderMediaLabel({isVod:s,isLive:a,withRemaining:i}),r.createElement(h.a,{style:v.right},r.createElement(b.a,{accessibilityLabelIcon:E,accessibilityLabelSlider:f,isMuted:this.props.playerState.isMuted,onMuteToggle:this._handleMuteToggle,onSliderChange:this._handleSliderChange,volumePercent:100*this.props.playerState.volume})))})),s()(this,"_renderMediaLabel",(({isVod:e,isLive:t,withRemaining:a})=>t?r.createElement(u.a,{align:"left",type:"live"},g):r.createElement(i.a,{periodic:!0},(({playerState:t})=>this._renderPlaybackTime({isVod:e,withRemaining:a,playerState:t}))))),s()(this,"_renderPlaybackTime",(({playerState:e,isVod:t,withRemaining:a})=>{const n=Object(m.e)(e),s=Object(m.f)(n),i=Object(m.d)(n),o=s&&i&&Object(m.b)(s-i),l=s&&i&&`${Object(m.b)(i)} / ${Object(m.b)(s)}`;let c;return t?l&&o&&(c=a?l:o):c=a?l:_,c?r.createElement(u.a,{align:"left",bold:!t&&!a},c):null})),s()(this,"_handleSliderChange",(e=>{this.props.playerApi.setVolume(e/100)})),s()(this,"_handleMuteToggle",(()=>{const{playerApi:e,playerState:t}=this.props,{isMuted:a}=t;a?e.unmute():e.mute()})),s()(this,"_handleClick",(()=>{const{playerApi:e,playerState:t}=this.props,{isPlaying:a}=t;a?e.pause():e.play()}))}render(){const{isPlaying:e}=this.props.playerState;return r.createElement(c.a,{interactiveStyles:null,pointerEvents:"box-none",style:v.overlay},(({isHovered:t})=>r.createElement(r.Fragment,null,r.createElement(h.a,{onClick:this._handleClick,style:v.overlay},r.createElement(h.a,{style:v.playButtonContainer},!e&&r.createElement(d.a,{accessibilityLabel:y,onPress:this._handlePlayPress}))),this._renderBottomRow({isHovered:t}))))}}const v=p.a.create((e=>({overlay:{...p.a.absoluteFillObject,flexGrow:1},playButtonContainer:{alignItems:"center",flexGrow:1,justifyContent:"center"},bottomRow:{position:"absolute",bottom:0,flexGrow:1,zIndex:1,paddingStart:e.spaces.space12,paddingEnd:e.spaces.space4,width:"100%"},controlsContainer:{alignItems:"center",justifyContent:"space-between",flexDirection:"row",flexGrow:1,flexShrink:0},left:{alignItems:"center",flexDirection:"row",flexGrow:1,justifyContent:"flex-start"},right:{alignItems:"center",flexDirection:"row",flexGrow:1,justifyContent:"flex-end"},totalTime:{paddingHorizontal:e.spaces.space4}})));t.b=R},oH2E:function(e,t,a){"use strict";var n=a("97Jx"),s=a.n(n),r=a("KEM+"),i=a.n(r),o=(a("kYxP"),a("ERkP")),l=a("U+bB"),c=a("cm6r"),u=a("rHpw"),p=a("mXq/"),d=a("Q0n6");class h extends o.Component{constructor(...e){super(...e),i()(this,"_playVideo",(e=>t=>{e&&e.play(),t&&t.stopPropagation()}))}render(){const{playerApi:e,playerState:t,withPlayButton:a}=this.props;if(!(e&&t&&t.controls&&t.controls.isPosterShown))return null;const n=Object(d.j)(t),r=this.props.imageSrc||t.posterImage,i=Object(d.l)(n);return o.createElement(c.a,s()({},a?null:{accessibilityLabel:i},{focusable:!a,interactiveStyles:null,onPress:this._playVideo(e),style:[u.a.absoluteFill,b.buttonContainer]}),r&&o.createElement(l.a,{resizeMode:"cover",source:r,style:u.a.absoluteFill}),a&&o.createElement(p.a,{accessibilityLabel:i,onPress:this._playVideo(e),type:"video"}))}}i()(h,"defaultProps",{withPlayButton:!0});const b=u.a.create((e=>({buttonContainer:{justifyContent:"center",alignItems:"center"}})));t.a=h}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI.327a3035.js.map
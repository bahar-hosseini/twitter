(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0Ki6":function(t,e,o){"use strict";var n=o("KEM+"),s=o.n(n),i=o("ERkP"),a=o("CHgo"),r=o("fs1G"),l=o("rHpw"),h=o("rOXj"),c=o("MWbm"),d=o("Enqy");const u=h.a.isTouchSupported(),m={zoom:1,lastX:0,lastY:0,zoomCenter:{x:0,y:0}},p={height:0,width:0,left:0,right:0,top:0,bottom:0},_=(t,e,o)=>Math.min(e,Math.max(t,o)),g=(t,e)=>Math.sqrt(Math.pow(t.clientY-e.clientY,2)+Math.pow(t.clientX-e.clientX,2));class f extends i.Component{constructor(t){super(t),s()(this,"_itemDimensions",p),s()(this,"_ref",i.createRef()),s()(this,"_setTouchableNode",(t=>{this._touchableNode!==t&&(this._touchableNode=t,this._removeTouchListener&&this._removeTouchListener(),this._touchableNode&&(this._removeTouchListener=Object(a.a)(this._touchableNode,this._handleTouchMove,!1)))})),s()(this,"_handleTouchStart",(t=>{this._ref.current&&(this._zoomedDimensions=this._ref.current.getBoundingClientRect()),this._moved=!1;const e=t.touches.length;2===e?(t.preventDefault(),this._handlePinchStart(t)):1===e&&this._handleTapStart(t)})),s()(this,"_handleTouchMove",(t=>{const e=t.touches.length;2===e?this._handlePinchMove(t):1===e&&(this._moved=!0,this._handlePanMove(t)),t.preventDefault()})),s()(this,"_handleTouchEnd",(t=>{const{maxZoom:e,minZoom:o,onTap:n}=this.props,s=_(o,e,this.state.zoom),{zoom:i}=this.state;i!==s&&1===s?this.resetZoom():this.setState({lastX:0,lastY:0,zoom:s}),0===t.touches.length?(this._lastTouchTime&&this._lastTouchTime+300>t.timeStamp?(this._clickTimer&&clearTimeout(this._clickTimer),this._handleDoubleTap(t)):i<=1&&!this._moved&&(this._clickTimer=setTimeout(n,300)),this._lastTouchTime=t.timeStamp):t.preventDefault()})),this.state={...m}}static getDerivedStateFromProps(t,e){return u&&t.resetZoom?(t.onZoomed(!1),{...m}):e}render(){if(!u)return this.props.children;const{zoom:t,zoomCenter:e}=this.state,o=this._moved,n={zoom:Object(d.spring)(t),zoomCenterX:Object(d.spring)(e.x),zoomCenterY:Object(d.spring)(e.y)};return i.createElement(c.a,{onTouchEnd:this._handleTouchEnd,onTouchStart:this._handleTouchStart,ref:this._setTouchableNode,style:v.fill},i.createElement(d.Motion,{style:n},(({zoom:t,zoomCenterX:n,zoomCenterY:s})=>i.createElement(c.a,{ref:this._ref,style:[v.fill,{transform:[{scale:t}],transformOrigin:`${o?n:e.x}px ${o?s:e.y}px`}]},this.props.children))))}componentDidMount(){u&&this._updateWindowDimensions()}componentWillUnmount(){this._removeTouchListener&&this._removeTouchListener()}resetZoom(){this.props.onZoomed(!1),this.setState({zoom:m.zoom})}_handlePanMove(t){if(this.state.zoom<=1||!this._zoomedDimensions||!this._windowDimensions)return;const{clientX:e,clientY:o}=t.touches[0];if(!this.state.lastX||!this.state.lastY)return void this.setState({lastX:e,lastY:o});const{lastX:n,lastY:s,zoomCenter:{x:i,y:a}}=this.state,{height:r,width:l}=this._windowDimensions,{height:h,width:c}=this._zoomedDimensions;let d=0,u=0;c-l>0&&(d=e-n),h-r>0&&(u=o-s),this.setState({lastX:e,lastY:o,zoomCenter:{x:Math.min(Math.max(i-d,0),l),y:Math.min(Math.max(a-u,0),r)}})}_handlePinchStart(t){const{touches:e}=t;if(this._updateWindowDimensions(),this._lastDistance=g(e[0],e[1]),1===this.state.zoom){const t=(o=e[0],n=e[1],{x:(o.clientX+n.clientX)/2,y:(o.clientY+n.clientY)/2});this.setState({zoomCenter:this._getZoomCenter(t.x,t.y)}),this.props.onZoomed(!0)}var o,n}_handlePinchMove(t){const{zoom:e,zoomCenter:o}=this.state,{maxZoom:n,maxZoomBounce:s,minZoom:i,minZoomBounce:a}=this.props;if(0===o.x&&0===o.y)return void(2===t.touches.length&&this._handlePinchStart(t));const r=g(t.touches[0],t.touches[1]),l=this._lastDistance?r/this._lastDistance:1,h=_(i-a,n+s,e*l);this._lastDistance=r,this.setState({zoom:h})}_handleTapStart(t){const{touches:e}=t;this._tapCenter=this._getZoomCenter(e[0].clientX,e[0].clientY)}_handleDoubleTap(t){const{maxZoom:e,onZoomed:o}=this.props;1!==this.state.zoom?this.resetZoom():(this._updateWindowDimensions(),this.setState({zoom:e,zoomCenter:this._tapCenter||m.zoomCenter}),o(!0))}_getZoomCenter(t,e){this._ref.current&&(this._itemDimensions=this._ref.current.getBoundingClientRect());const{left:o,top:n}=this._itemDimensions;return{x:t-o,y:e-n}}_updateWindowDimensions(){this._windowDimensions={height:window.innerHeight,width:window.innerWidth}}}s()(f,"defaultProps",{maxZoom:2.5,maxZoomBounce:.15,minZoom:1,minZoomBounce:.15,onTap:r.a,onZoomed:r.a,resetZoom:!1});const v=l.a.create((t=>({fill:{flex:1}})));e.a=f},"2doW":function(t,e,o){"use strict";var n=o("KEM+"),s=o.n(n),i=o("ERkP"),a=o("97Jx"),r=o.n(a),l=(o("kYxP"),o("3XMw")),h=o.n(l),c=o("mN6z"),d=o("U+bB"),u=o("MWbm"),m=o("0Ki6"),p=o("3dad"),_=o("r1lV"),g=o("rHpw"),f=o("JYMr");const v=h.a.b327c129,y=h.a.gff1f69e;class b extends i.PureComponent{constructor(...t){super(...t),s()(this,"state",{loadingVariant:null,imageLoading:!1}),s()(this,"_handleLoadStart",(()=>this.setState({imageLoading:!0}))),s()(this,"_handleLoadEnd",(()=>this.setState({imageLoading:!1})))}componentDidMount(){this._mountPromiseForTesting=b._selectCachedVariant(this.props.photo).then((t=>this.setState({loadingVariant:t})))}componentDidUpdate(t,e){Object(c.a)(t.photo,this.props.photo)||(this.setState({loadingVariant:null}),b._selectCachedVariant(this.props.photo).then((t=>this.setState({loadingVariant:t}))))}render(){const{dataSaver:t,onError:e,onLoad:o,onTap:n,onZoomed:s,photo:a,resetZoom:r,zoomable:l,style:h,imageStyle:c}=this.props,{loadingVariant:p}=this.state,_=(t&&p&&Math.max(p.width,p.height)>=680?p.uri:null)||b._selectSource(a);if(!_||null===p)return null;const g=i.createElement(d.a,{accessibilityLabel:a.ext_alt_text?a.ext_alt_text:v,defaultSource:p&&p.uri,draggable:!0,onError:p?void 0:e,onLoad:o,onLoadEnd:this._handleLoadEnd,onLoadStart:this._handleLoadStart,resizeMode:"contain",source:_,style:[C.img,c]});return i.createElement(u.a,{style:h},this.state.imageLoading?w:null,l?i.createElement(m.a,{onTap:n,onZoomed:s,resetZoom:r},g):g)}static _selectCachedVariant(t){const e=p.a.getOriginalImage(t);return e?_.a.selectLargestCachedVariant(e):Promise.resolve()}static _selectSource(t){const e=p.a.getOriginalImage(t);return e&&_.a.selectLargestUrl(e)}}s()(b,"defaultProps",{zoomable:!1});const C=g.a.create((t=>({img:{...g.a.absoluteFillObject,height:"auto",margin:"auto",maxHeight:"100%",maxWidth:"100%",width:"auto"},progressBar:{position:"absolute",top:0,zIndex:1}}))),w=i.createElement(f.a,{ariaValueText:y,indeterminate:!0,style:C.progressBar});var E=b,x=o("RCZO"),D=o("Modb"),P=o("XrEN");class S extends i.PureComponent{constructor(...t){super(...t),s()(this,"_handlePlaybackStarted",(()=>{this._player&&!this.props.isCurrentlyDisplayed&&this._player.pause()})),s()(this,"_setPlayer",(t=>{this._player=t,this._player&&this.props.isCurrentlyDisplayed&&this._player.play()}))}render(){const{style:t}=this.props;return i.createElement(u.a,{style:t},i.createElement(u.a,{style:T.root},this._renderVideo()))}componentDidUpdate(t){const{isCurrentlyDisplayed:e}=this.props;this._player&&e!==t.isCurrentlyDisplayed&&(e?this._player.play():this._player.pause())}_renderVideo(){const{promotedContent:t,video:e,videoId:o}=this.props;return i.createElement(D.a,r()({},P.a.extractVideoProps(o,e),{onPlaybackStarted:this._handlePlaybackStarted,playbackCoordination:null,promotedContent:t,setPlayer:this._setPlayer,withPostPlayback:!0}))}}const T=g.a.create({root:{flexBasis:0,flexGrow:1,flexShrink:1,justifyContent:"center"}});var M=S,I=o("ziVO"),L=o("q9Zt"),Z=o("7N4s"),k=o("JsJV");const z=h.a.ac85c6b1;class O extends i.Component{constructor(...t){super(...t),s()(this,"state",{error:null,containerDimensions:{width:0,height:0}}),s()(this,"_handleError",(t=>{this.setState({error:t.nativeEvent.error})})),s()(this,"_handleLoad",(()=>{this.setState({error:null})})),s()(this,"_handleMediaPress",(t=>{t.stopPropagation()})),s()(this,"_handleRetry",(()=>{this.setState({error:null})})),s()(this,"_handleOpenImageURI",(()=>{k.a.openURL(this.props.mediaDetail.media_url_https)})),s()(this,"_handleLayout",(t=>{const{nativeEvent:{layout:{height:e,width:o}}}=t;this.setState({containerDimensions:{width:o,height:e}})}))}shouldComponentUpdate(t,e){return!Object(c.a)(t,this.props)||!Object(c.a)(e,this.state)}UNSAFE_componentWillReceiveProps(t){this.setState({error:null})}render(){const{isCurrentlyDisplayed:t,mediaDetail:e,onDismiss:o,onTap:n,promotedContent:s,videoId:a,isAvatar:l,...h}=this.props,{width:c,height:d}=e.original_info||{},{error:m,containerDimensions:{width:p,height:_}}=this.state,{isModal:g}=this.context,f=g||l?Object(x.f)({mediaWidth:c,mediaHeight:d,containerWidth:p,containerHeight:_},l):R.mediaItem;return i.createElement(I.a,{onDismiss:o,onLayout:g||l?this._handleLayout:void 0,style:R.root},m?i.createElement(L.a,{onRetry:this._handleRetry,style:R.errorDetail,title:z,withLightOnDarkColorScheme:!0}):null,m?null:i.createElement(u.a,{onClick:this._handleMediaPress,style:f},"photo"===e.type?i.createElement(E,r()({},h,{imageStyle:l&&R.avatarImage,onError:this._handleError,onLoad:this._handleLoad,onTap:n,photo:e,style:R.container,zoomable:!0})):P.a.isVideo(e)&&a?i.createElement(M,{isCurrentlyDisplayed:t,promotedContent:s,style:R.container,video:e,videoId:a}):null))}}s()(O,"contextType",Z.a);const R=g.a.create((t=>({root:{flexGrow:1,justifyContent:"center",alignItems:"center",flexShrink:1},mediaItem:{flexGrow:1,width:"100%",height:"100%"},container:{height:"100%",position:"absolute",width:"100%"},errorDetail:{alignItems:"center",alignSelf:"center",justifyContent:"center",position:"absolute",height:"100%",maxWidth:400},avatarImage:{borderRadius:t.borderRadii.infinite,margin:t.spaces.space16}})));var B=O,Y=o("lklz"),X=o("uavX"),W=o("fs1G");class V extends i.Component{constructor(t,e){super(t,e),s()(this,"_getItemVideoId",(t=>{const{videoId:e}=this.props;return e||(t=>Y.b.forTweet(t.expanded_url.split("/")[3]))(t)})),s()(this,"_handleMediaDetailZoomed",(t=>{const{onMediaDetailZoomed:e}=this.props;this.state.isZoomed!==t&&this.setState({isZoomed:t}),e&&e(t)})),this.state={isZoomed:!1}}shouldComponentUpdate(t,e){return!Object(c.a)(t,this.props)||!Object(c.a)(e,this.state)}render(){const{dataSaver:t,dominantColor:e,mediaIndex:o,mediaItems:n,onDismiss:s,onMediaItemChanged:a,onTap:r,promotedContent:l}=this.props,{isZoomed:h}=this.state,c=n.map(((e,a)=>{const c=P.a.isVideo(e),d=this._getItemVideoId(e),u=o===a;return c&&d||!c?i.createElement(B,{dataSaver:t,isAvatar:this.props.isAvatar,isCurrentlyDisplayed:u,key:a,mediaDetail:n[a],onDismiss:h?void 0:s,onTap:r,onZoomed:u?this._handleMediaDetailZoomed:void 0,promotedContent:l,resetZoom:o!==a,videoId:d}):null}));return i.createElement(u.a,{style:U.root},n.length>1?i.createElement(X.b,{currentSlide:o,dominantColor:e,locked:h||1===n.length,onChange:a,shouldAlwaysEnableKeyboardNavigation:!0,withReducedNavButtonClickArea:P.a.isVideo(n[o])},c):c)}}s()(V,"defaultProps",{mediaIndex:0,onMediaDetailZoomed:W.a,onMediaItemChanged:W.a});const U=g.a.create((t=>({root:{flex:1,zIndex:1}})));e.a=V},JsJV:function(t,e,o){"use strict";var n=o("6/RC"),s=o("tI3i"),i=o.n(s),a=n.canUseDOM?window.location.href:"",r=function(){function t(){var t=this;this._eventCallbacks={},this.addEventListener=function(e,o){t._eventCallbacks[e]?t._eventCallbacks[e].push(o):t._eventCallbacks[e]=[o]},this.removeEventListener=function(e,o){var n=t._eventCallbacks[e].filter((function(t){return t.toString()!==o.toString()}));t._eventCallbacks[e]=n}}var e=t.prototype;return e._dispatchEvent=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];var s=this._eventCallbacks[t];null!=s&&Array.isArray(s)&&s.map((function(t){t.apply(void 0,o)}))},e.canOpenURL=function(){return Promise.resolve(!0)},e.getInitialURL=function(){return Promise.resolve(a)},e.openURL=function(t){try{return l(t),this._dispatchEvent("onOpen",t),Promise.resolve()}catch(t){return Promise.reject(t)}},e._validateURL=function(t){i()("string"==typeof t,"Invalid URL: should be a string. Was: "+t),i()(t,"Invalid URL: cannot be empty")},t}(),l=function(t){if(n.canUseDOM){var e=new URL(t,window.location).toString();window.open(e,"_blank","noopener")}};e.a=new r},UPvq:function(t,e,o){"use strict";o.d(e,"a",(function(){return f}));var n=o("KEM+"),s=o.n(n),i=(o("kYxP"),o("ERkP")),a=o("RCZO"),r=o("3XMw"),l=o.n(r),h=o("hOZg"),c=o("MWbm"),d=o("mw9i"),u=o("cm6r"),m=o("/yvb"),p=o("7N4s"),_=o("rHpw");const g=l.a.ia5e7487;class f extends i.Component{constructor(...t){super(...t),s()(this,"_handleCloseButtonPress",(t=>{t.stopPropagation();const{onCloseButtonPress:e}=this.props;e()})),s()(this,"_handleBackgroundPress",(()=>{const{onCloseButtonPress:t}=this.props,{isModal:e}=this.context;e&&t()}))}render(){const{children:t,backgroundColor:e,mediaItem:o,mediaUrl:n,hideButtons:s,topRightButton:r,footerButtons:l,overlayFooter:p}=this.props,{isModal:_}=this.context,f={backgroundColor:e.rgba,...a.a},y={backgroundColor:e.rgb,...a.a},b=[v.root,_?f:y,{position:_?"relative":"fixed"}];return i.createElement(i.Fragment,null,i.createElement(c.a,{onClick:this._handleBackgroundPress,style:b},t,l?i.createElement(c.a,{pointerEvents:s?"none":void 0,style:[v.footerButtons,p&&f,p&&v.footerButtonsAbsolute,s&&v.fadeOut]},i.createElement(d.a,{withGutter:!0},l)):null),i.createElement(u.a,{accessibilityRole:"none",interactiveStyles:null,onClick:this._handleCloseButtonPress,pointerEvents:s?"none":void 0,style:[v.buttonWrapper,v.buttonWrapperLeft,a.a,s&&v.fadeOut]},(t=>i.createElement(m.a,{accessibilityLabel:g,dominantColor:e.rgb,hoverLabel:{label:g},icon:i.createElement(h.a,null),interactivityState:t,onClick:this._handleCloseButtonPress,type:o||n?"onMedia":"invertedPrimary"}))),r?i.createElement(c.a,{pointerEvents:s?"none":void 0,style:[v.buttonWrapper,v.buttonWrapperRight,a.a,s&&v.fadeOut]},r):null)}}s()(f,"contextType",p.a),s()(f,"defaultProps",{hideButtons:!1});const v=_.a.create((t=>({root:{overflowX:"hidden",overflowY:"hidden",height:"100%",width:"100%"},buttonWrapper:{position:"absolute",top:0,padding:t.spaces.space12,alignItems:"center",justifyContent:"center",cursor:"pointer"},buttonWrapperLeft:{left:0},buttonWrapperRight:{right:0},fadeOut:{opacity:0},footerButtons:{width:"100%",alignSelf:"center"},footerButtonsAbsolute:{position:"absolute",bottom:0,paddingBottom:_.a.iPhoneOffsetBottom,zIndex:1}})))},ziVO:function(t,e,o){"use strict";var n=o("KEM+"),s=o.n(n),i=(o("kYxP"),o("ERkP")),a=o("MWbm");const r={startX:0,startY:0};class l extends i.Component{constructor(...t){super(...t),s()(this,"_pullDistanceY",0),s()(this,"_pullInfo",{...r}),s()(this,"_handleTouchStart",(t=>{this._pullInfo.startX=t.touches[0].clientX,this._pullInfo.startY=t.touches[0].clientY})),s()(this,"_handleTouchMove",(t=>{if("number"!=typeof this._pullInfo.startX||"number"!=typeof this._pullInfo.startY)return;const e=t.touches[0],o=e.clientX-this._pullInfo.startX,n=e.clientY-this._pullInfo.startY;Math.abs(o)>10||(t.preventDefault(),this._updatePullPosition(n))})),s()(this,"_handleTouchEnd",(t=>{Math.abs(this._pullDistanceY)>50?this._handleDismiss():this._resetPullInfo()})),s()(this,"_updatePullPosition",(t=>{this._pullDistanceY=t})),s()(this,"_handleDismiss",(()=>{const{onDismiss:t}=this.props;t&&t(),this._resetPullInfo()})),s()(this,"_resetPullInfo",(()=>{this._updatePullPosition(0),this._pullInfo={...r}}))}render(){const{children:t,onDismiss:e,onLayout:o,style:n}=this.props,s=!!e;return i.createElement(a.a,{onLayout:o,onTouchEnd:s?this._handleTouchEnd:void 0,onTouchMove:s?this._handleTouchMove:void 0,onTouchStart:s?this._handleTouchStart:void 0,style:n},t)}}e.a=l}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.DirectMessages~bundle.TweetMediaDetail~bundle.UserAvatar.cb270845.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[74,69],{"1RVd":function(e,t,s){"use strict";s.r(t),s.d(t,"InlineComposeContainer",(function(){return h}));var n=s("97Jx"),a=s.n(n),o=s("ERkP"),i=s("GVND"),r=s("Ub51"),c=s("MWbm"),d=s("7N4s"),l=s("cHvH"),u=s("rHpw");const h=({getTweetHeight:e,history:t,location:s,richTextInputContext:n,typeaheadWrapper:u,parentTweetId:h,replyPressToggle:m})=>{const{isModal:E}=o.useContext(d.a);return o.createElement(l.a,null,(({windowWidth:d})=>o.createElement(i.a.Consumer,null,(i=>o.createElement(c.a,{style:p.root},o.createElement(r.a,a()({},i,{getTweetHeight:e,history:t,isInline:!0,isModal:E,location:s,parentTweetId:h,replyPressToggle:m,richTextInputContext:n,selectedCommunityIdFromLocationState:void 0,typeaheadWrapper:u,windowWidth:d})))))))},p=u.a.create((e=>({root:{backgroundColor:e.colors.cellBackground,zIndex:1}})));t.default=h},GVND:function(e,t,s){"use strict";var n=s("ERkP");const a=n.createContext({onAnimationStarted:()=>{},onAnimationEnded:()=>{},onHeightChanged:()=>{}});t.a=a},M5JI:function(e,t,s){"use strict";s.r(t);s("ERkP");var n=s("SADN"),a=s("1RVd");t.default=Object(n.a)(a.default)},SADN:function(e,t,s){"use strict";var n=s("97Jx"),a=s.n(n),o=s("ERkP"),i=s("RH6X"),r=s("rziq"),c=s("hHEM"),d=s("keCP");const l={convertEmojiToEntities:c.a.convertEmojiToEntities,element:d.a,initEditorState:c.a.initEditorState,insertTextAtCursor:c.a.insertTextAtCursor,updateOverflowStyle:c.a.updateOverflowStyle,dismissComposerCommandName:r.a,sendTweetCommandName:r.b};t.a=e=>t=>o.createElement(e,a()({},t,{richTextInputContext:l,typeaheadWrapper:i.a}))},XpKj:function(e,t,s){"use strict";s.d(t,"d",(function(){return c})),s.d(t,"b",(function(){return l})),s.d(t,"f",(function(){return p})),s.d(t,"e",(function(){return m})),s.d(t,"c",(function(){return E})),s.d(t,"a",(function(){return S}));var n=s("oEOe"),a=s("kGix"),o=s("Ssj5");const i="scheduledTweets",r={fetchStatus:a.a.NONE,scheduledTweets:[]},c="FETCH_SCHEDULED_TWEETS",d=Object.freeze({REQUEST:"rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST",SUCCESS:"rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS",FAILURE:"rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE"}),l="DELETE_SCHEDULED_TWEET",u=Object.freeze({REQUEST:"rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST",SUCCESS:"rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS",FAILURE:"rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE"});function h(e=r,t){switch(t.type){case d.SUCCESS:if(t.payload)return{...e,fetchStatus:a.a.LOADED,scheduledTweets:t.payload};break;case d.FAILURE:return{...e,fetchStatus:a.a.FAILED};case d.REQUEST:return{...e,fetchStatus:a.a.LOADING};case u.SUCCESS:{const{meta:a}=t;return a&&a.deleteScheduledTweetId?{...e,scheduledTweets:(s=a.deleteScheduledTweetId,n=e.scheduledTweets,n.filter((e=>e.rest_id!==s)))}:e}default:return e}var s,n;return e}o.a.register({[i]:h});const p=e=>e.scheduledTweets.scheduledTweets,m=e=>e.scheduledTweets.fetchStatus,E=()=>(e,t,{api:s})=>Object(n.b)(e,{request:s.Scheduling.fetchScheduledTweets,params:{}})({actionTypes:d,context:c}).then((()=>{})),S=e=>(t,s,{api:a})=>Object(n.b)(t,{request:a.Scheduling.deleteScheduledTweet,params:{scheduled_tweet_id:e}})({actionTypes:u,context:l,meta:{deleteScheduledTweetId:e}})},pcjM:function(e,t,s){"use strict";s.r(t),s.d(t,"Compose",(function(){return Ie}));var n=s("KEM+"),a=s.n(n),o=(s("kYxP"),s("ERkP")),i=s("HPNB"),r=(s("VAZu"),s("Ub51")),c=s("xVN5"),d=s("pidX"),l=s("AspN"),u=s("XOJV"),h=s("G6rE"),p=s("xZGM"),m=s("0KEI"),E=s("hqKg"),S=s("oEGd"),T=s("rU/Q"),C=s("XpKj");const w=e=>(t,s)=>{const n=((e,t)=>t.location.state)(0,s);return n?e(n):void 0},g=Object(E.createSelector)(((e,t)=>t.activeUser),h.e.selectLoggedInUser,((e,t)=>e||t)),_=(e,t)=>{const{location:{query:s}}=t;return s&&"string"==typeof s.in_reply_to?s.in_reply_to:void 0},f=w((e=>e.inReplyToStatusId)),y=(e,t)=>t.location.pathname.indexOf("/intent/")>-1,b=w((e=>e.defaultText)),R=w((e=>e.quotedStatus)),D=({mediaIds:e,cardUrl:t,...s})=>s,H=w((e=>e.isSelfThreadReply)),I=w((e=>e.hideUnsentTweetsButton)),v=w((e=>e.headingSubtitle)),x=w((e=>e.headingTitle)),U=w((e=>e.selectedCommunityId)),A=Object(E.createSelector)((e=>c.n(e,"")),((e,t)=>{const s=b(e,t);return Object(d.a)(t.location)||s}),((e,t)=>t.quotedStatus?t.quotedStatus:R(e,t)),l.i,y,((e,t,s,n,a)=>e.map(((e,o)=>({...D(e),media:n.filter((t=>e.mediaIds.some((e=>e===t.id)))),quotedStatus:0===o?s:void 0,text:0===o&&t&&!a?t:e.text}))))),B=Object(E.createStructuredSelector)({activeUser:g,composerData:A,draftTweets:T.e,inReplyToStatus:(e,t)=>{const s=_(0,t)||f(e,t);return s?u.a.selectHydrated(e,s):void 0},inReplyToStatusId:_,isIntentRoute:y,isSelfThreadReply:H,isSending:e=>c.q(e,""),scheduledTweets:C.f,sendingProgress:c.s,composeSemanticCoreId:w((e=>e.composeSemanticCoreId)),hideUnsentTweetsButton:I,subtitle:v,title:x,selectedCommunityIdFromLocationState:U,shouldShowCommunityAudienceEducation:(e,t)=>Object(p.q)(e,p.d)}),O={createDraftTweetApiErrorHandler:Object(m.d)(T.d),createScheduledTweetApiErrorHandler:Object(m.d)(C.d),fetchScheduledTweets:C.c,fetchDraftTweets:T.c,addCommunityAudienceEducationFlag:()=>Object(p.o)(p.d)};var j=Object(S.g)(B,O),L=s("RgK2"),F=s.n(L),k=s("jHSc"),M=s("MXY2"),N=s("3XMw"),P=s.n(N),W=s("iFPY"),V=s("QbaN"),q=s("oQhu"),z=s("v6aA"),Q=s("rxPX");const J=e=>Object(p.q)(e,p.l);var X=Object(Q.a)().propsFromState((()=>({shouldShowNewsletterCallout:J}))).propsFromActions((()=>({addFlag:p.o}))),G=s("Lsrn"),K=s("k/Ka");const Y=(e={})=>Object(K.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[G.a.root,e.style],viewBox:"0 0 32 32"},o.createElement("g",null,o.createElement("path",{d:"M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"}),o.createElement("path",{d:"M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z"})));Y.metadata={width:32,height:32};var Z=Y,$=s("MWbm"),ee=s("4zmP"),te=s("rHpw");const se=P.a.ed33a3b6,ne=P.a.d5bda8b3,ae=P.a.i859a9d3,oe=te.a.create((e=>({revueCallout:{marginBottom:e.spaces.space4,marginTop:e.spaces.space20}})));var ie=X((({addFlag:e,shouldShowNewsletterCallout:t})=>{const{featureSwitches:s}=o.useContext(z.a),n=s.isTrue("responsive_web_newsletters_callout_enabled");return t&&n?o.createElement($.a,{style:oe.revueCallout},o.createElement(ee.a,{Icon:Z,action:{label:ae,link:"https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more"},headline:se,onClose:()=>{e(p.l)},text:ne,withCloseButton:!0})):null})),re=s("7nmT"),ce=s.n(re),de=s("Dtul"),le=s("zh9S"),ue=s("7JQg"),he="tweetButton",pe=s("/yvb"),me=s("JYMr"),Ee=s("cHvH"),Se=s("feu+"),Te=s("7N4s");const Ce=P.a.b8f0483e,we=P.a.a133d13e,ge=P.a.a1183237,_e=P.a.da2663f5,fe=P.a.j24c37b2,ye="compose",be={page:ye},Re={page:ye,section:"reply"},De={context:"compose_intent_logged_in"},He={viewType:"send_tweet"};class Ie extends o.Component{constructor(...e){super(...e),a()(this,"state",{isValid:!1}),a()(this,"_handleDismissCommunityAudienceEducation",(()=>{this.props.addCommunityAudienceEducationFlag()})),a()(this,"_handleAppBarHeight",Object(q.a)((()=>{const e=ce.a.findDOMNode(this._appBarRef);return e&&e instanceof window.Element&&e.getBoundingClientRect().height||50}))),a()(this,"_handleBackClick",(()=>{this._composeContainerRef&&this._composeContainerRef.handleDismissComposer()})),a()(this,"_handleCloseComposer",(()=>{this._appBarRef&&this._appBarRef.goBack()})),a()(this,"_handleSendTweet",(()=>{this._composeContainerRef&&this._composeContainerRef.handleTweetOrRetweet()})),a()(this,"_setValidity",(e=>{e!==this.state.isValid&&this.setState({isValid:e})})),a()(this,"_getScribeNamespace",(()=>this.props.inReplyToStatus||this.props.inReplyToStatusId?Re:be)),a()(this,"_getScribeData",(()=>{const{activeUser:e,isIntentRoute:t}=this.props;return t&&e?De:F.a})),a()(this,"_renderAppBarRightControl",(()=>{const{isValid:e}=this.state,{isModal:t}=this.context,{inReplyToStatus:s,isSelfThreadReply:n,isSending:a,activeUser:i}=this.props,r=!e||a||!i;return t?void 0:o.createElement(pe.a,{clientEventContext:He,disabled:r,onPress:this._handleSendTweet,size:"normalCompact",testID:he,type:"primary"},Object(M.a)({inReplyToStatus:!!s,isSelfThreadReply:!!n,isQuoteTweet:!!this.isQuoteTweet,isRetweet:!!this.isRetweet,isScheduled:!!this.isScheduled,isThread:this.isThread}))})),a()(this,"_renderHeaderWithProgressBar",(e=>{const{isModal:t}=this.context,{sendingProgress:s,isSending:n}=this.props;return o.createElement(o.Fragment,null,o.createElement(me.a,{progress:n?Math.max(s,.02):0,style:[ve.progressBar,t&&ve.progressBarModal]}),e)})),a()(this,"_renderUnsentHeading",(()=>{const{draftTweets:e,hideUnsentTweetsButton:t,scheduledTweets:s}=this.props;if(!t&&(s.length>0||e.length>0))return o.createElement($.a,{style:ve.unsentHeadingContainer},o.createElement(pe.a,{onPress:this._handleOpenUnsent,size:"normalCompact",type:"text"},we))})),a()(this,"_handleOpenUnsent",(()=>{const{history:e}=this.props;Object(le.c)({...this._getScribeNamespace(),element:"unsent_tweets",action:"click"}),e.push("/compose/tweet/unsent/drafts")})),a()(this,"_setAppBarRef",(e=>{this._appBarRef=e})),a()(this,"_handleComposeContainerRef",(e=>{this._composeContainerRef=e}))}componentDidMount(){const{activeUser:e,createDraftTweetApiErrorHandler:t,createScheduledTweetApiErrorHandler:s,fetchDraftTweets:n,fetchScheduledTweets:a}=this.props;this._unlockReload=de.a.acquire(),e&&(a().catch(s()),n().catch(t()))}componentWillUnmount(){this._unlockReload()}render(){const{history:e,location:t,activeUser:s,composerData:n,isIntentRoute:a,subtitle:c,title:d,composeHeader:l,composeSemanticCoreId:u,customizePropsForSingleComposerItem:h,quotedStatus:p,richTextInputContext:m,typeaheadWrapper:E,selectedCommunityIdFromLocationState:S}=this.props,T=a&&!s,{isModal:C}=this.context;return o.createElement(ue.b,{data:this._getScribeData(),namespace:this._getScribeNamespace()},o.createElement(Ee.a,null,(({windowWidth:a})=>{const w=i.a.shouldRenderAsModal(a),g=(T||this.showCommunityAudienceEducation)&&w,_=(null==n?void 0:n.length)>1;return o.createElement(o.Fragment,null,this.showCommunityAudienceEducation?o.createElement(Se.a,{actionLabel:fe,graphicDisplayMode:"none",headline:ge,onAction:this._handleDismissCommunityAudienceEducation,onClose:this._handleDismissCommunityAudienceEducation,subtext:_e,withCloseButton:!1}):null,T&&o.createElement(W.a,{history:e,location:t}),!g&&o.createElement(o.Fragment,null,o.createElement(k.b,{appBarRef:this._setAppBarRef,clientEventViewType:ye,documentTitle:Ce,hideBackButton:!1,history:e,middleControl:this._renderUnsentHeading(),onBackClick:this._handleBackClick,renderHeader:this._renderHeaderWithProgressBar,rightControl:this._renderAppBarRightControl(),subtitle:c,title:d},o.createElement(r.a,{activeUser:s,composeHeader:l,composeSemanticCoreId:u,customizePropsForSingleComposerItem:h,history:e,isModal:C,location:t,onCloseComposer:this._handleCloseComposer,onHandleAppBarHeight:this._handleAppBarHeight,onRef:this._handleComposeContainerRef,quotedStatus:p,richTextInputContext:m,selectedCommunityIdFromLocationState:S,setValidity:this._setValidity,typeaheadWrapper:E,windowWidth:a})),_?o.createElement(ie,null):null))})))}get showCommunityAudienceEducation(){const{inReplyToStatus:e,selectedCommunityIdFromLocationState:t,shouldShowCommunityAudienceEducation:s}=this.props,n=!!(null!=e&&e.community_id_str||t);return s&&n}get isThread(){return this.props.composerData.length>1}get isRetweet(){const{composerData:e}=this.props,t=0===e[0].media.length;return!this.isThread&&e[0].quotedStatus&&""===e[0].text&&t}get isQuoteTweet(){const{composerData:e}=this.props;return!this.isThread&&!!e[0].quotedStatus}get isScheduled(){const{composerData:e}=this.props;return Object(V.h)(e[0].scheduledFor)}}a()(Ie,"contextType",Te.a);const ve=te.a.create((e=>({progressBar:{position:"fixed",borderTopLeftRadius:e.borderRadii.small,borderTopRightRadius:e.borderRadii.small,zIndex:e.componentZIndices.appBarZIndex+1},progressBarModal:{position:"absolute"},unsentHeadingContainer:{marginLeft:"auto"}})));t.default=j(Ie)},ynU0:function(e,t,s){"use strict";s.r(t);s("ERkP");var n=s("pcjM"),a=s("SADN");t.default=Object(a.a)(n.default)}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.RichTextCompose.7f511645.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{"1Cz6":function(e,t,n){"use strict";var r=n("ERkP"),o=n("t62R"),s=n("MAI/"),i=n("3XMw"),a=n.n(i),l=n("cm6r"),c=n("cHvH"),d=n("Wd7d"),u=n("rHpw"),p=n("U+bB"),m=n("MWbm");const h=e=>{const{children:t,context:n,onFacepilesClick:i,onFacepilesImpression:h,imageSrc:f,knownFollowers:b,subtitle:g,title:_,withAdditionalControls:E}=e,{firstUsername:C,knownFollowersAvatarUrls:y,trendingFollowersUrl:S,usersCount:v}=b||{},k=b&&b.knownFollowersAvatarUrls.length>3;r.useEffect((()=>{k&&h&&h()}),[k,h]);const x=f?r.createElement(p.a,{source:f,style:w.iconCustom}):null,F=n?r.createElement(m.a,{style:E?w.condensedContextV2:w.condensedContext},r.createElement(o.c,{align:"left",color:"gray700",numberOfLines:3,size:"subtext2"},n),r.createElement(m.a,{style:E?w.buttonTopMargin:[w.buttonBottomMargin,w.buttonLeftMargin]},t)):null,A=r.createElement(c.a,null,(({windowWidth:e})=>{const n=d.a.isNarrowScreenWidth(e)?"xLarge":"xxLarge",c=e<u.a.theme.breakpoints.xSmall?w.buttonWrap:void 0,p=E?w.facepileV2:null;return r.createElement(m.a,{style:E?null:[w.knownFollowersContainer,c]},r.createElement(l.a,{interactiveStyles:null,link:S,onPress:i,style:E?w.interactiveStyleV2:w.interactiveStyle},(({isHovered:e})=>r.createElement(r.Fragment,null,r.createElement(s.a,{style:[w.facepile,p],userAvatarSize:n,userAvatarUrls:y}),r.createElement(o.c,{color:"gray700",dir:"ltr",numberOfLines:2,size:"subtext2",style:[e&&w.underline]},((e,t)=>r.createElement(a.a.I18NFormatMessage,{$i18n:"bb2cd6d3"},e,t))(C,v))))),(e=>{const n=e<u.a.theme.breakpoints.xSmall?w.buttonBottomMargin:[w.buttonBottomMargin,w.buttonLeftMargin];return E?[t]:r.createElement(m.a,{style:n},t)})(e))})),I=b&&k?A:F;return r.createElement(r.Fragment,null,x,r.createElement(o.c,{color:"normal",size:"title2",weight:"heavy"},_),g?r.createElement(o.c,{color:"gray700",size:"subtext2",weight:"bold"},g):null,I)};h.defaultProps={withAdditionalControls:!1};const w=u.a.create((e=>({buttonBottomMargin:{marginBottom:e.spaces.space16},buttonLeftMargin:{marginLeft:e.spaces.space20},buttonTopMargin:{marginTop:e.spaces.space20},buttonWrap:{flexWrap:"wrap-reverse"},condensedContext:{marginTop:e.spaces.space16,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},condensedContextV2:{marginTop:e.spaces.space16},iconCustom:{alignSelf:"flex-start",borderRadius:e.borderRadii.infinite,height:e.spaces.space32,width:e.spaces.space32,marginTop:e.spaces.space8,marginBottom:e.spaces.space8},facepile:{marginBottom:e.spaces.space16,alignSelf:"flex-start"},facepileV2:{marginRight:e.spaces.space8,marginTop:e.spaces.space16},interactiveStyle:{flexShrink:1},interactiveStyleV2:{flexDirection:"row",alignItems:"center"},knownFollowersContainer:{marginTop:e.spaces.space16,marginBottom:e.spaces.space16,flexDirection:"row",justifyContent:"space-between",flexGrow:1,flexShrink:1},underline:{textDecorationLine:"underline"}})));t.a=h},K0xN:function(e,t,n){"use strict";n.r(t),n.d(t,"TopicHeader",(function(){return L}));var r=n("KEM+"),o=n.n(r),s=(n("kYxP"),n("ERkP")),i=n("Qyxo"),a=n("Zejx"),l=n("G6rE"),c=n("rxPX"),d=n("0KEI");const u=(e,t)=>a.a.select(e,t.topicId),p=(e,t)=>{const n=((e,t)=>{var n;return l.e.selectMany(e,(null==(n=t.facepile)?void 0:n.userIds)||[])})(e,t);return Object(i.a)(n,(e=>!e||e.blocking||e.muting?void 0:e))};var m=Object(c.a)().propsFromState((()=>({topic:u,users:p}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(d.d)("TOPIC_HEADER"),follow:a.a.follow,unfollow:a.a.unfollow,undoTopicNotInterested:a.a.undoNotInterested}))).withAnalytics(),h=n("LWCC"),w=n("3XMw"),f=n.n(w),b=n("Tp1h"),g=n("YICZ"),_=n("vYiB"),E=n("caTy"),C=n("Jkc4"),y=n("xM7j"),S=n("MWbm"),v=n("v6aA"),k=n("1Cz6"),x=n("cHvH"),F=n("Wd7d"),A=n("rHpw");const I=f.a.b1850062,U=f.a.d69b2d90,N=f.a.gf5e9ea6;class L extends s.Component{constructor(...e){super(...e),o()(this,"_additionalControlsEnabled",this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),o()(this,"_handleUndoTopicNotInterested",(()=>{const{createLocalApiErrorHandler:e,topic:t,undoTopicNotInterested:n}=this.props;this._scribeAction({element:"topic",action:"un_not_interested"}),t&&n(t.id).catch(e())})),o()(this,"_handleOnFollow",(()=>{const{analytics:e,createLocalApiErrorHandler:t,follow:n,topicId:r}=this.props;n(r).catch(t()),e.scribeAction("follow")})),o()(this,"_handleOnUnfollow",(()=>{const{analytics:e,createLocalApiErrorHandler:t,topicId:n,unfollow:r}=this.props;r(n).catch(t()),e.scribeAction("unfollow")})),o()(this,"_handleOnClickFacepiles",(()=>{this._scribeAction({element:"facepile",action:"click"})})),o()(this,"_handleFacepilesImpression",(()=>{this._scribeAction({element:"facepile",action:"impression"})}))}render(){const{facepile:e,onFollowHeaderOffscreen:t,topic:n,topicLandingContext:r,users:o}=this.props,{description:i,name:a,icon_url:l}=n||{},c=o.slice(0,4).map((e=>e.profile_image_url_https)),d=(null==e?void 0:e.facepileUrl)&&Object(E.b)(e.facepileUrl),u=o&&o.length>3?{firstUsername:o[0].name||"",usersCount:o.length-1,knownFollowersAvatarUrls:c,trendingFollowersUrl:d||""}:void 0,p=l&&this.context.featureSwitches.isTrue("topic_icons_enabled")?l:void 0;return n?s.createElement(S.a,{style:T.root},s.createElement(C.a,{customText:a,displayMode:b.a.topic},(e=>s.createElement(_.a,{onOffscreenChange:t},s.createElement(k.a,{children:this._renderTopicActions(),context:r,imageSrc:p,knownFollowers:u,onFacepilesClick:this._handleOnClickFacepiles,onFacepilesImpression:this._handleFacepilesImpression,subtitle:i,title:a,withAdditionalControls:this._additionalControlsEnabled}))))):null}_renderTopicActions(){const{topic:e}=this.props;return e?s.createElement(x.a,null,(({windowWidth:t})=>{const n=F.a.isNarrowScreenWidth(t)?T.mainViewSmall:T.mainView,r=this._additionalControlsEnabled?F.a.isNarrowScreenWidth(t)?T.followButtonSmall:T.followButton:null,o=F.a.isNarrowScreenWidth(t)?T.notInterestButtonSmall:T.notInterestButton;return s.createElement(s.Fragment,null,e.not_interested&&this._additionalControlsEnabled?this._renderTopicContextTombstone():s.createElement(S.a,{style:n},!this._additionalControlsEnabled||e.following||e.not_interested?null:s.createElement(g.a,{pullRight:!0,size:"normal",style:o,text:I,topicId:e.id,type:A.a.isVdlRefreshEnabled()?"experimentalSecondary":"secondary",withIconOnly:!1}),s.createElement(h.a,{showRelationshipChangeConfirmation:!0,size:"normal",style:r,topic:e,useDefaultText:!1})))})):null}_renderTopicContextTombstone(){return s.createElement(y.a,{actionText:N,children:U,inline:!0,onClick:this._handleUndoTopicNotInterested})}_scribeAction(e){const{analytics:t}=this.props;t.scribe(e)}}o()(L,"contextType",v.a);const T=A.a.create((e=>({root:{marginHorizontal:e.componentDimensions.gutterHorizontal,marginVertical:e.componentDimensions.gutterVertical},mainView:{flexDirection:"row",flexGrow:1},mainViewSmall:{flexWrap:"wrap"},notInterestButton:{justifyContent:"center",flexBasis:1,flexGrow:1,marginRight:e.spaces.space4},followButton:{justifyContent:"center",flexBasis:1,flexGrow:1,marginLeft:e.spaces.space4,minWidth:"inherit"},followButtonSmall:{marginTop:e.spaces.space8,marginLeft:0,width:"100%"},notInterestButtonSmall:{width:"100%"}}))),P=m(L);t.default=P},ZQ2e:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n("KEM+"),o=n.n(r),s=n("ERkP"),i=(n("kYxP"),n("t62R")),a=n("ir4X"),l=n("0PHd"),c=n("rHpw"),d=n("oSwX"),u=n("pBrB"),p=n("jV+4"),m=n("wCd/"),h=n("MWbm");class w extends s.PureComponent{constructor(...e){super(...e),o()(this,"_renderKnownFollowerSocialContext",(()=>{const{isAllowedToViewOptions:e,isLoggedIn:t,knownFollowers:n,userScreenName:r}=this.props,{avatarUrls:o,count:i,names:a}=n,{followersYouKnow:c}=e;return c&&t?s.createElement(h.a,{style:[f.marginTopXSmall,f.minHeight]},"number"==typeof i&&s.createElement(l.a,{knownFollowersAvatarUrls:o,knownFollowersCount:i,knownFollowersNames:a,userScreenName:r})):null}))}render(){return s.createElement(h.a,{style:f.root},this._renderUserAvatar(),s.createElement(h.a,{style:f.marginTopXXSmall},this._renderUserName(),this._renderHighlightedUserLabel()),this._renderErrorMessage(),this._renderUserDescription(),this._renderUserStats(),this._renderKnownFollowerSocialContext())}_renderUserAvatar(){const{followButton:e,isAllowedToViewOptions:t,isLoggedIn:n,onAvatarClick:r,promotedContent:o,userScreenName:i,userAvatarUri:a}=this.props,{avatar:l,followButton:c}=t;return s.createElement(h.a,{style:f.row},s.createElement(d.default,{accessibilityHidden:!0,focusable:!1,onClick:r,promotedContent:o,screenName:i,size:"jumbo",uri:l?a:void 0,withLink:!0}),c&&n&&e?e:null)}_renderUserName(){const{isAllowedToViewOptions:e,isUserProtected:t,isUserVerified:n,onScreenNameClick:r,promotedContent:o,userName:i,userScreenName:a,userTranslatorType:l,userWithFollowsYou:c}=this.props,{badges:d,followIndicator:u,fullName:m}=e;return s.createElement(p.a,{badgeContext:"account",isProtected:d?t:void 0,isVerified:d?n:void 0,name:m?i:a,onLinkClick:r,promotedContent:o,screenName:a,translatorType:d?l:void 0,withFollowsYou:u&&c,withLink:!0,withStackedLayout:!0})}_renderHighlightedUserLabel(){const{isAllowedToViewOptions:e,userHighlightedLabel:t}=this.props,{label:n}=e;return n&&t?s.createElement(a.a,{label:t}):null}_renderErrorMessage(){const{errorMessage:e}=this.props;return e?s.createElement(h.a,{style:f.marginTopXXSmall},s.createElement(i.c,null,e)):null}_renderUserDescription(){const{isAllowedToViewOptions:e,userDescription:t,userWithheldDescription:n,userEntities:r,userWithheldEntities:o,userId:i}=this.props,{description:a}=e;return a&&t?s.createElement(h.a,{style:[f.row,f.marginTopXSmall]},s.createElement(u.a,{description:t,entities:r,userId:i,withheldDescription:n,withheldEntities:o})):null}_renderUserStats(){const{isAllowedToViewOptions:e,isUserStatsWithLink:t,onUserStatsPress:n,userScreenName:r,userFollowersCount:o,userFriendsCount:i}=this.props,{stats:a}=e;return a?s.createElement(h.a,{style:[f.row,f.marginTopXSmall]},s.createElement(m.a,{followersCount:o,friendsCount:i,onPress:n,screenName:r,withLink:t})):null}}const f=c.a.create((e=>({root:{padding:e.spaces.space16},row:{flexDirection:"row",justifyContent:"space-between"},marginTopXSmall:{marginTop:e.spaces.space12},marginTopXXSmall:{marginTop:e.spaces.space4},minHeight:{minHeight:e.spaces.space20}})));var b=n("3XMw");const g=n.n(b).a.ef633577;class _ extends s.PureComponent{render(){const{onAvatarClick:e,onScreenNameClick:t,userScreenName:n}=this.props,r={protected:!1,isUserStatsWithLink:!1,verified:!1,profile_image_url_https:"",description:"",entities:{},followers_count:0,friends_count:0,id_str:"",followed_by:!1};return s.createElement(w,{errorMessage:g,isAllowedToViewOptions:{avatar:!1,badges:!0,description:!1,followButton:!1,followIndicator:!0,followersYouKnow:!1,fullName:!1,label:!1,stats:!1},isLoggedIn:!1,isUserProtected:r.protected,isUserStatsWithLink:r.isUserStatsWithLink,isUserVerified:r.verified,knownFollowers:{avatarUrls:[],names:[]},onAvatarClick:e,onScreenNameClick:t,userAvatarUri:r.profile_image_url_https,userDescription:r.description,userEntities:r.entities,userFollowersCount:r.followers_count,userFriendsCount:r.friends_count,userId:r.id_str,userName:n,userScreenName:n,userWithFollowsYou:r.followed_by,userWithheldDescription:void 0,userWithheldEntities:void 0})}}class E extends s.PureComponent{render(){return s.createElement(w,this.props)}}o()(E,"Suspended",_)},ehWl:function(e,t,n){"use strict";n.r(t),n.d(t,"formatNumber",(function(){return M})),n.d(t,"ListDetail",(function(){return R}));var r=n("KEM+"),o=n.n(r),s=(n("kYxP"),n("ERkP")),i=n("iPch"),a=n("kHBp"),l=n("RqPI"),c=n("G6rE"),d=n("rxPX"),u=n("0KEI");const p=(e,t)=>{const{listId:n}=t;return n?a.a.select(e,n):void 0},m=(e,t)=>{const n=p(e,t),r=null==n?void 0:n.user;return r?c.e.select(e,r):void 0},h=(e,t)=>i.h(e,t.listId);var w=Object(d.a)().propsFromState((()=>({list:p,user:m,loggedInUserId:l.p,media:h}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(u.d)("LIST_DETAIL"),subscribe:a.a.subscribe,unsubscribe:a.a.unsubscribe}))).withAnalytics(),f=n("f5/l"),b=n("muX9"),g=n("a5gf"),_=n("YeIG"),E=n("Tp1h"),C=n("Jkc4"),y=n("MWbm"),S=n("MtXG"),v=n("TIdA"),k=n("A91F"),x=n("rHpw"),F=n("9Xij"),A=n("t62R"),I=n("jV+4"),U=n("/yvb"),N=n("CGyZ"),L=n("v6aA"),T=n("3XMw"),P=n.n(T);const M=P.a.d58baa7e,O=P.a.ca5d0a81,B=P.a.j681933d;class R extends s.Component{constructor(...e){super(...e),o()(this,"_renderImage",(()=>{const{media:e}=this.props,{image:t}=e;if(t&&!Object(_.a)(t)){const{url:e}=t;return s.createElement(s.Fragment,null,s.createElement(b.a,null,s.createElement("meta",{content:e,property:"og:image"})),s.createElement(v.a,{accessibilityLabel:"",aspectMode:k.a.exact(3),backgroundColor:x.a.theme.colors.gray300,image:t}))}return s.createElement(F.a,{ratio:3},s.createElement(y.a,{style:W.placeholderImageContainer}))})),o()(this,"_renderListDescription",(()=>{const{list:e,user:t}=this.props;if(e){const{name:n,description:r,member_count:o,subscriber_count:i,mode:a}=e,l=i||0,c=o||0,d="private"===a;return s.createElement(y.a,{style:W.description},s.createElement(y.a,{style:[W.name,W.text]},s.createElement(A.c,{align:"center",size:"headline1",weight:"bold"},n.trim()),d?s.createElement(g.a,{accessibilityLabel:B,style:W.iconLock}):null),r?s.createElement(s.Fragment,null,s.createElement(b.a,null,s.createElement("meta",{content:r.trim(),property:"og:description"})),s.createElement(A.c,{align:"center",style:W.text},r.trim())):null,t?s.createElement(I.a,{isProtected:t.protected,isVerified:t.verified,name:t.name,onLinkClick:this._handleUserNamePress,profileImageUrl:t.profile_image_url_https,screenName:t.screen_name,style:W.text,withLink:!0}):null,this._renderCount(l,c),this._renderActionButton())}})),o()(this,"_renderCount",((e,t)=>{const{basePath:n}=this.props,r=M(e),o=M(t);return s.createElement(S.a.Group,null,s.createElement(S.a,{count:t,link:`${n}/members`,onPress:this._handleMembersCountPress},s.createElement(P.a.I18NFormatMessage,{$i18n:"b38e130b"},s.createElement(S.a.Value,null,P.a.ibd0106d({formattedCount:o})),s.createElement(S.a.Label,null,P.a.cface2d0({count:t})))),s.createElement(S.a,{count:e,link:`${n}/followers`,onPress:this._handleSubscribersCountPress},(i=e,a=r,s.createElement(P.a.I18NFormatMessage,{$i18n:"d2924acb"},s.createElement(S.a.Value,null,P.a.ec08efe3({formattedCount:a})),s.createElement(S.a.Label,null,P.a.h9f711f0({count:i}))))));var i,a})),o()(this,"_handleEditPress",(()=>{this._scribe({element:"edit",action:"click"})})),o()(this,"_handleUserNamePress",(()=>{this._scribe({element:"user",action:"click"})})),o()(this,"_handleMembersCountPress",(()=>{this._scribe({element:"list_member",action:"click"})})),o()(this,"_handleSubscribersCountPress",(()=>{this._scribe({element:"list_subscribed",action:"click"})})),o()(this,"_handleSubscribeActions",(()=>{const{list:e,subscribe:t,unsubscribe:n,createLocalApiErrorHandler:r}=this.props;if(e){const o=e.following,s=e.id_str;Object(f.a)(r,o,s,t,n,this._scribe)}})),o()(this,"_renderActionButton",(()=>{const{basePath:e,list:t,loggedInUserId:n,user:r,withEditButton:o}=this.props;if(t&&t.user){const i=null==r?void 0:r.blocking;return t.user===n&&o?s.createElement(U.a,{link:`${e}/info`,onPress:this._handleEditPress,style:W.button,type:"experimentalSecondary"},O):t.user!==n?s.createElement(y.a,{style:W.button},s.createElement(C.a,{customText:t.name,displayMode:E.a.subscribe,userFullName:r&&r.name},(e=>s.createElement(N.a,{disabled:i,isFollowing:!!t.following,onFollow:e(this._handleSubscribeActions),onUnfollow:e(this._handleSubscribeActions),showRelationshipChangeConfirmation:!1,type:"list"})))):null}})),o()(this,"_scribe",(e=>{const{analytics:t}=this.props;t.scribe(e)}))}componentDidMount(){this._scribe({action:"impression"})}render(){const{list:e,withRoundedCorners:t}=this.props;return e?s.createElement(y.a,{style:[W.container,t&&W.hoverCard]},this._renderImage(),this._renderListDescription()):null}}o()(R,"contextType",L.a),o()(R,"defaultProps",{withEditButton:!0});const W=x.a.create((e=>({container:{borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor,borderStyle:"solid"},hoverCard:{borderRadius:e.borderRadii.xLarge,overflow:"hidden"},button:{marginTop:e.spaces.space20,marginBottom:e.spaces.space12},description:{paddingVertical:e.spaces.space12,paddingHorizontal:e.spaces.space12,alignItems:"center"},name:{flexDirection:"row",justifyContent:"center",alignItems:"center"},iconLock:{color:e.colors.text,marginLeft:e.spaces.space2},text:{width:"100%",marginBottom:e.spaces.space12},placeholderImageContainer:{backgroundColor:e.colors.gray300,height:"100%"}}))),H=w(R);t.default=H},jHwr:function(e,t,n){"use strict";t.a=(e,t)=>{let n=null;const r=()=>{n=null,e()};return()=>(n||(n=t(r)),n)}},uvhM:function(e,t,n){"use strict";n.r(t),n.d(t,"UserProfileCardContainer",(function(){return I}));var r=n("KEM+"),o=n.n(r),s=(n("kYxP"),n("ERkP")),i=n("XnvM"),a=n("SwJK"),l=n("P1r1"),c=n("rxPX"),d=n("0KEI"),u=n("G6rE");const p=Object(u.g)([u.a]),m=(e,t)=>p(e,t.screenName),h=(e,t)=>u.e.selectByScreenName(e,t.screenName),w=(e,t)=>u.e.selectIsUserNotFound(e,t.screenName),f=(e,t)=>u.e.selectIsUserSuspended(e,t.screenName),b=(e,t)=>u.e.selectIsUserWithheld(e,t.screenName),g=(e,t)=>{const n=h(e,t);return null==n?void 0:n.highlightedLabel},_=(e,t)=>{const n=((e,t)=>u.e.selectIdByScreenName(e,t.screenName))(e,t);return{avatarUrls:a.a(e,n),count:a.b(e,n),names:a.c(e,n)}};var E=Object(c.a)().propsFromState((()=>({displaySensitiveMedia:l.l,fetchStatus:m,isNotFound:w,isSuspended:f,isWithheld:b,knownFollowers:_,user:h,userHighlightedLabel:g}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(d.d)("USER_PROFILE_CARD"),fetchOneUserByScreenNameIfNeeded:u.e.fetchOneByScreenNameIfNeeded,fetchKnownFollowersIfNeeded:i.a}))).withAnalytics(),C=n("GOQE"),y=n("kGix"),S=n("v//M"),v=n("uIZp"),k=n("Jkc4"),x=n("ZQ2e"),F=n("v6aA"),A=n("7wqI");class I extends s.Component{constructor(...e){super(...e),o()(this,"_renderUserProfileCard",(()=>{const{displaySensitiveMedia:e,isNotFound:t,isSuspended:n,isWithheld:r,knownFollowers:o,onAvatarClick:i,onScreenNameClick:a,promotedContent:l,screenName:c,user:d,userHighlightedLabel:u}=this.props;if(n)return s.createElement(x.a.Suspended,{onAvatarClick:i,onScreenNameClick:a,userScreenName:c});if(!d)return null;const{loggedInUserId:p}=this.context,m=Object(A.a)({displaySensitiveMedia:e,isNotFound:t,isSuspended:n,isWithheld:r,loggedInUserId:p,user:d}),h=!!p&&p===d.id_str,w=Object(A.b)({isOwnProfile:h,user:d});return s.createElement(k.a,null,(e=>s.createElement(x.a,{followButton:this._renderFollowUserButton(),isAllowedToViewOptions:m,isLoggedIn:!!p,isUserProtected:d.protected,isUserStatsWithLink:w,isUserVerified:d.verified,knownFollowers:o,onAvatarClick:i,onScreenNameClick:a,onUserStatsPress:e(),promotedContent:l,userAvatarUri:d.profile_image_url_https,userDescription:d.description,userEntities:d.entities,userFollowersCount:d.followers_count,userFriendsCount:d.friends_count,userHighlightedLabel:u,userId:d.id_str,userName:d.name,userScreenName:c,userTranslatorType:d.translator_type,userWithFollowsYou:d.followed_by,userWithheldDescription:d.withheld_description,userWithheldEntities:d.withheld_entities})))})),o()(this,"_renderFollowUserButton",(()=>{const{promotedContent:e,showRelationshipChangeConfirmation:t,user:n}=this.props,r=null==n?void 0:n.id_str;return r?s.createElement(v.a,{promotedContent:e,showRelationshipChangeConfirmation:t,userId:r}):void 0})),o()(this,"_handleFetchUser",(()=>{const{createLocalApiErrorHandler:e,fetchOneUserByScreenNameIfNeeded:t,screenName:n}=this.props;t(n).catch((t=>{e(C.a)(t)}))})),o()(this,"_handleFetchKnownFollowers",(()=>{const{createLocalApiErrorHandler:e,fetchKnownFollowersIfNeeded:t,user:n}=this.props,r=null==n?void 0:n.id_str;r&&t(r).catch(e({}))}))}componentDidMount(){this._handleFetchUser(),this._handleFetchKnownFollowers()}componentDidUpdate(e){var t,n;(null==(t=e.user)?void 0:t.id_str)!==(null==(n=this.props.user)?void 0:n.id_str)&&this._handleFetchKnownFollowers()}render(){const{isSuspended:e,fetchStatus:t}=this.props;return s.createElement(S.a,{fetchStatus:e?y.a.LOADED:t,onRequestRetry:this._handleFetchUser,render:this._renderUserProfileCard})}}o()(I,"contextType",F.a);const U=E(I);t.default=U},"z2a+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n("97Jx"),o=n.n(r),s=n("KEM+"),i=n.n(s),a=n("ERkP"),l=n("zfvc"),c=n("siLd"),d=n("jHwr"),u=n("VY6S"),p=n("w9LO"),m=n("TCjc"),h=n("nb/L"),w=n("Oe3h"),f=n("0FVZ"),b=n("rHpw"),g=n("i4Oy"),_=n("shC7"),E=n("MWbm");class C extends a.Component{constructor(e,t){super(e,t),i()(this,"_renderInnerBody",(()=>{const{withArrow:e,children:t}=this.props;return a.createElement(a.Fragment,null,e&&a.createElement(h.a,{style:this._getArrowStyle()}),t)})),i()(this,"_setContentNode",(e=>{this._contentNode=e||void 0,this._scheduleUpdate()})),i()(this,"_handleEsc",(e=>{const{onDismiss:t}=this.props,{altKey:n,ctrlKey:r,metaKey:o,key:s}=e;!(n||r||o)&&"Escape"===s&&t&&t()})),i()(this,"_updatePosition",(()=>{if(!this._mounted)return;const{anchorNode:e,preferredHorizontalOrientation:t,preferredVerticalOrientation:n,withArrow:r,withFixedPosition:o}=this.props,s=b.a.theme.borderRadiiPx.large,i=Object(c.c)({anchorNode:e,contentNode:this._contentNode,preferredHorizontalOrientation:t,preferredVerticalOrientation:n,withArrow:r,withFixedPosition:o,borderRadius:s});if(!i)return;const{arrowPositionStart:a,bottom:l,top:d,left:u,right:p}=i;this.setState({arrowPositionStart:a,bottom:l,left:u,right:p,top:d})})),this.state=Object.freeze({}),this._scheduleUpdate=Object(d.a)(this._updatePosition,window.requestAnimationFrame),this._scheduleDebouncedUpdate=Object(u.a)(this._scheduleUpdate,250)}componentDidMount(){this._mounted=!0,g.a.addEventListener("change",this._scheduleDebouncedUpdate)}componentWillUnmount(){const{onHoverCardUnmount:e}=this.props;this._mounted=!1,g.a.removeEventListener("change",this._scheduleDebouncedUpdate),e&&e()}render(){const{enableClickOutsideToDismiss:e,onAnimateComplete:t,onDismiss:n,show:r,withFixedPosition:s,withFocusContainer:i,withMask:c,withRoundedSides:d}=this.props,{bottom:u,top:h,left:b,right:g}=this.state,_=void 0===h&&void 0===u,C=_||!i?a.Fragment:p.a,S={top:h,bottom:u,left:b,right:g},v=[_?y.initialRenderWrapper:s?y.contentWrapperFixed:y.contentWrapperAbsolute,S],k=d?y.infiniteCornerRadius:y.defaultCornerRadius;return a.createElement(f.a.Dropdown,null,a.createElement(m.a.Provider,{value:{isInHoverCard:!0}},e?a.createElement(E.a,{onClick:n,style:[y.mask,c&&y.withMask]}):null,a.createElement(E.a,{onKeyUp:this._handleEsc,ref:this._setContentNode,style:v},a.createElement(C,null,a.createElement(l.b,{animateMount:!0,duration:"long",onAnimateComplete:t,show:r,type:"fade"},(({isAnimating:e})=>c?a.createElement(E.a,{style:[y.contentRoot,k]},this._renderInnerBody()):a.createElement(w.a,{id:"HoverCard",minimizeReporting:e},((e,t)=>a.createElement(E.a,o()({ref:e()},t({style:[y.contentRoot,k]})),this._renderInnerBody())))))))))}_getArrowStyle(){const{arrowPositionStart:e,bottom:t}=this.state;let n;if(e){n=[y.arrow,t?y.downArrow:y.upArrow];const r=`calc(${e}px - ${h.a.metadata.width/2}px)`;_.a.getConstants().isRTL?n.push({right:r}):n.push({left:r})}return n}}const y=b.a.create((e=>({arrow:{color:e.colors.cellBackground,filter:`drop-shadow(${e.spaces.space1} -${e.spaces.space1} ${e.spaces.space1} ${e.colors.gray200})`,fontSize:e.fontSizes.subtext2,position:"absolute",width:`${h.a.metadata.width}px`},contentWrapperAbsolute:{position:"absolute"},contentWrapperFixed:{backfaceVisibility:"hidden",position:"fixed"},initialRenderWrapper:{opacity:0,position:"fixed"},contentRoot:{backgroundColor:e.colors.cellBackground,boxShadow:e.boxShadows.medium},defaultCornerRadius:{borderRadius:e.borderRadii.xLarge},infiniteCornerRadius:{borderRadius:e.borderRadii.infinite},mask:{...b.a.absoluteFillObject,position:"fixed",userSelect:"none"},withMask:{backgroundColor:e.colors.maskColor},downArrow:{bottom:`-${e.fontSizes.subtext3}`,transform:"rotate(180deg)"},upArrow:{top:`-${e.fontSizes.subtext3}`}})))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard.d346b3f5.js.map
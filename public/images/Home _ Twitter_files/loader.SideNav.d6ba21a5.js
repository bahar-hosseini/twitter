(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{"0kTQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("k49u"),s=n("LVU8"),r=n("3XMw");const c=n.n(r).a.b20a3893,i={[a.a.AppInReadOnlyMode]:{customAction:s.b},[a.a.TargetUserNotFound]:{toast:{text:c}},showToast:!0}},"55jz":function(e,t,n){"use strict";var a=n("KEM+"),s=n.n(a),r=(n("kYxP"),n("ERkP")),c=n("k49u"),i=n("3XMw"),o=n.n(i),l=n("IMYl"),d=n("fs1G"),u=n("MWbm"),p=n("Irs7"),h=n("OOKO"),m=n("CKsB"),g=n("t62R"),_=n("IMA+"),w=n("Znyr"),E=n("G1WX"),b=n("rHpw");const A=o.a.d86bbf0f,C=o.a.h6beb5fa,y=o.a.b7dc3884;class f extends r.Component{constructor(...e){super(...e),s()(this,"_renderAdditionalMenuItems",(()=>(this.props.additionalMenuItems||[]).map(((e,t)=>r.createElement(r.Fragment,{key:t},0===t?r.createElement(h.a,null):null,r.createElement(m.a,{Icon:e.Icon,actionText:e.actionText,isSelected:e.isSelected,link:e.link,onClick:this._handleMenuItemClick(e.scribeElement,e.onClick),selectable:!0,testID:e.testID})))))),s()(this,"_renderTitle",(()=>{const{title:e}=this.props;return e?r.createElement(g.c,{size:"headline1",style:I.title,weight:"bold"},e):null})),s()(this,"_renderUserAccounts",(()=>{const{accountUsers:e,activeUser:t,withBadges:n=!1}=this.props;return e.filter((e=>e.user_id!==(null==t?void 0:t.id_str))).length>0?r.createElement(r.Fragment,null,e.map((e=>{const a=e.user_id===t.id_str,s=e.badgeCount;return r.createElement(_.a,{accessibilityLabel:a?void 0:y({screenName:e.screen_name}),avatarUri:e.avatar_image_url,decoration:this._renderUserDecoration({badgeCount:s,withBadges:n,isActiveUser:a}),displayMode:"UserCompact",isProtected:e.is_protected,isVerified:e.is_verified,key:e.user_id,name:e.name,onCellClick:a?void 0:this._handleMultiAccountSwitch({hasBadge:!!s,isProtected:e.is_protected,userId:e.user_id}),screenName:e.screen_name,userId:e.user_id,withBottomBorder:!0,withLink:!1})}))):r.createElement(_.a,{avatarUri:t.profile_image_url_https,decoration:this._renderUserDecoration({withBadges:n,isActiveUser:!0}),displayMode:"UserCompact",isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,userId:t.id_str,withBottomBorder:!0,withLink:!1})})),s()(this,"_renderUserDecoration",(({badgeCount:e,withBadges:t,isActiveUser:n})=>n?r.createElement(l.a,{style:[I.iconCheckMark,I.userDecoration]}):e&&t?r.createElement(w.a,{count:e,standalone:!0,style:I.userDecoration,truncatedCountFormatter:C,unreadCountLabel:A}):void 0)),s()(this,"_handleMultiAccountSwitch",(({hasBadge:e,isProtected:t,userId:n})=>()=>{const{accountSwitch:a,onClose:s}=this.props;a({hasBadge:e,isProtected:t,userId:n}),s()})),s()(this,"_handleFetch",(()=>{const{createLocalApiErrorHandlerAccountsFetch:e,fetchAccounts:t}=this.props;t().catch(e({[c.a.AppInReadOnlyMode]:{customAction:d.a}}))})),s()(this,"_handleMenuItemClick",((e,t)=>()=>{const{analytics:n,onClose:a}=this.props;e&&n.scribe({element:e,action:"click"}),null==t||t(),a()}))}render(){const{fetchStatus:e,shouldDisplayFetchRenderer:t}=this.props;return r.createElement(u.a,{style:I.menuContainer},this._renderTitle(),t?r.createElement(E.a,{fetchStatus:e,onRequestRetry:this._handleFetch,render:this._renderUserAccounts}):this._renderUserAccounts(),this._renderAdditionalMenuItems())}}const I=b.a.create((e=>({iconCheckMark:{color:e.colors.primary,flexShrink:0},menuContainer:{paddingVertical:e.spaces.space12},userDecoration:{marginLeft:e.spaces.space12},title:{paddingBottom:e.componentDimensions.gutterVertical,paddingHorizontal:e.componentDimensions.gutterHorizontal}})));t.a=Object(p.a)(f)},LzTg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var a=n("KEM+"),s=n.n(a),r=n("ERkP"),c=(n("kYxP"),n("G6rE")),i=n("rxPX"),o=n("0KEI"),l=n("auX9"),d=n("kGix");var u=Object(i.a)().propsFromState((()=>({fetchStatus:l.g,loggedInUser:c.e.selectLoggedInUser,multiAccountUsers:l.j,hasMultiAccountBadges:l.h}))).propsFromActions((()=>({createLocalApiErrorHandlerAccountSwitch:Object(o.d)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"),createLocalApiErrorHandlerMultiListFetch:Object(o.d)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"),fetchMultiAccountList:l.c,switchAccount:l.l}))).adjustStateProps((({fetchStatus:e,loggedInUser:t,multiAccountUsers:n,hasMultiAccountBadges:a})=>({fetchStatus:e===d.a.NONE?d.a.LOADING:e,hasMultiAccountBadges:!!t&&a,loggedInUser:t,multiAccountUsers:n}))).withAnalytics({page:"nav",section:"account_switcher"}),p=n("3Wr5"),h=n("55jz"),m=n("0kTQ"),g="SideNav_AccountSwitcher_Button",_="AccountSwitcher_AddAccount_Button",w="AccountSwitcher_Logout_Button",E="AccountSwitcher_ManageAccounts_Button",b=n("yrzJ"),A=n("y8wG"),C=n("v6aA"),y=n("3XMw"),f=n.n(y);const I=f.a.j0a8da6e,S=f.a.c6f2bf00;class M extends r.Component{constructor(...e){super(...e),s()(this,"_renderMenuSheet",(e=>{const{createLocalApiErrorHandlerMultiListFetch:t,fetchMultiAccountList:n,fetchStatus:a,loggedInUser:s,multiAccountUsers:c}=this.props;return s?r.createElement(h.a,{accountSwitch:this._multiAccountSwitch,accountUsers:c,activeUser:s,additionalMenuItems:this._getAdditionalAccountMenuItems(),createLocalApiErrorHandlerAccountsFetch:t,fetchAccounts:n,fetchStatus:a,onClose:e,shouldDisplayFetchRenderer:this._hasMultiAccountCookie(),withBadges:!0}):null})),s()(this,"_multiAccountSwitch",(({hasBadge:e,isProtected:t,userId:n})=>{const{analytics:a,createLocalApiErrorHandlerAccountSwitch:s,switchAccount:r}=this.props;a.scribe({component:t?"switch_to_protected_account":"switch_account",element:e?"account_badged":"account",action:"click"}),r({user_id:n}).catch(s(m.a))})),s()(this,"_getAdditionalAccountMenuItems",(()=>{const{loggedInUser:e,multiAccountUsers:t}=this.props,n=t.length>1,a=[];var s;return t.length>=5||a.push({actionText:I,link:this.context.featureSwitches.isTrue("stateful_login_enabled")?"/i/flow/login":"/account/add",scribeElement:"add_existing_account",testID:_}),n&&a.push({actionText:S,link:"/account/switch",scribeElement:"manage_accounts",testID:E}),e&&a.push({actionText:(s=e.screen_name,r.createElement(f.a.I18NFormatMessage,{$i18n:"i9bec47a"},r.createElement(b.a,{color:"normal",screenName:s}))),link:"/logout",scribeElement:"log_out",testID:w}),a})),s()(this,"_handleAccountSwitcherClick",(()=>{const{analytics:e}=this.props;e.scribe({action:"click"})})),s()(this,"_hasMultiAccountCookie",(()=>{const{hasMultiAccountCookie:e}=Object(p.a)();return e}))}render(){const{analytics:e,hasMultiAccountBadges:t,isExpanded:n,loggedInUser:a}=this.props;return r.createElement(A.a,{analytics:e,currentUser:a,hasMultiAccountBadges:t,interactiveViewTestId:g,isExpanded:n,renderMenuSheet:this._renderMenuSheet})}}s()(M,"contextType",C.a);var k=u(M),x=n("1eTX"),B=n("jwTb"),T=n("Irs7"),U=n("eqgg");const v=f.a.g34f2c63({verb:""});class L extends r.Component{constructor(...e){super(...e),s()(this,"_handlePress",(e=>{const{analytics:t}=this.props;t.scribe({component:"new_tweet_button",action:"click"})}))}render(){const{composeOptions:e,isExpanded:t,testID:n}=this.props;return r.createElement(U.a,{icon:H,isExpanded:t,label:v,link:{pathname:"/compose/tweet",state:e},onPress:this._handlePress,testID:n})}}const H=r.createElement(B.a,null);var P=Object(T.a)(L),N=n("N5qz"),D="SideNav_NewTweet_Button",O=n("MWbm"),F=n("cHvH"),R=n("rHpw");class z extends r.Component{render(){const{SideNavButton:e,TabBar:t,history:n,isCollapsedSmall:a,isExpanded:s,isLoggedIn:c,isTwoColumn:i,logoButton:o,location:l,onTabRefresh:d,TeamsSwitcher:u,widthStyle:p,withTweetButton:h}=this.props,m=[j.root,p,a?j.rootPaddingSmall:j.rootPaddingNormal],g=o||r.createElement(x.a,{onClick:d,pullLeft:!1,size:"large"});return r.createElement(F.a,null,(({windowHeight:a})=>r.createElement(O.a,{style:m},r.createElement(O.a,{style:[j.topSection,!s&&j.alignItemsCenter]},r.createElement(O.a,{style:j.topControl},g),r.createElement(O.a,{style:[j.appTabBar,!s&&j.alignItemsCenter]},r.createElement(t,{history:n,layout:"vertical",location:l,onTabRefresh:d,wideMode:i,withExtendedItems:!0,withLabel:s})),c&&(e||h)?this._renderButton(a):null),c?r.createElement(O.a,{style:[j.footerContainer,!s&&j.alignItemsCenter]},r.createElement(k,{isExpanded:s}),u?r.createElement(u,{isExpanded:s}):null):null)))}_renderButton(e){const{SideNavButton:t,composeOptions:n,isExpanded:a}=this.props;return r.createElement(O.a,{style:[j.button,!a&&j.alignItemsCenter,"tall"===N.a.getHeightMode(e)&&j.withTallHeight]},t?r.createElement(t,{isExpanded:a}):r.createElement(P,{composeOptions:n,isExpanded:a,testID:D}))}}s()(z,"defaultProps",{withTweetButton:!0});const j=R.a.create((e=>({root:{height:"100%",overflowY:"auto",justifyContent:"space-between"},rootPaddingNormal:{paddingHorizontal:e.spaces.space12},rootPaddingSmall:{paddingHorizontal:e.spaces.space4},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.space2,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.space4,marginTop:e.spaces.space2,width:"100%"},button:{marginVertical:e.spaces.space4,width:"90%"},withTallHeight:{marginVertical:e.spaces.space16},alignItemsCenter:{alignItems:"center"},settingsButton:{marginBottom:e.spaces.space20,marginHorizontal:e.spaces.space4},footerContainer:{marginVertical:e.spaces.space12}})))},y8wG:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("KEM+"),s=n.n(a),r=(n("kYxP"),n("ERkP")),c=n("ZUOq"),i=n("3XMw"),o=n.n(i),l=n("ACHU"),d=n("aWzz"),u=n("MWbm"),p=n("I4+6"),h=n("rHpw"),m=n("XP29"),g=n("jV+4"),_=n("Znyr"),w=n("OiMc"),E=n("cm6r");const b=o.a.d86bbf0f,A=o.a.h6beb5fa,C=o.a.b8e1d524,y=o.a.gef27c4c;class f extends r.Component{constructor(...e){super(...e),s()(this,"_renderUser",(e=>{const{isExpanded:t}=this.props,{name:n,screen_name:a,profile_image_url_https:s,protected:c,verified:i}=e;return r.createElement(r.Fragment,null,r.createElement(u.a,null,r.createElement(m.a,{accessibilityLabel:n,screenName:a,size:"xLarge",uri:s}),t?null:this._renderBadge()),t?r.createElement(r.Fragment,null,r.createElement(g.a,{isProtected:c,isVerified:i,name:n,screenName:a,style:I.userName,withStackedLayout:!0}),r.createElement(u.a,{style:I.iconContainer},r.createElement(l.a,{style:I.icon}),t?this._renderBadge():null)):null)})),s()(this,"_renderEmptyState",(()=>{const{renderEmptyState:e}=this.props;return e?r.createElement(u.a,{style:I.emptyStateWrapper},e()):null})),s()(this,"_renderBadge",(()=>{const{isExpanded:e,hasMultiAccountBadges:t}=this.props;return t?r.createElement(_.a,{pip:!0,style:e&&I.pip,truncatedCountFormatter:A,unreadCountLabel:b}):null})),s()(this,"_handleAccountSwitcherClick",(()=>{const{analytics:e}=this.props;e.scribe({action:"click"})}))}render(){const{accessibilityLabel:e,currentUser:t,hoverLabel:n,interactiveViewTestId:a,isExpanded:s,renderEmptyState:c,renderMenuSheet:i}=this.props;return t||c?r.createElement(w.a,{contentStyle:I.menuContainer,enableEnterKeyToggle:!0,renderContent:i,withArrow:!0,withFixedPosition:!0},r.createElement(E.a,{accessibilityLabel:e||y,accessibilityRole:"button",hoverLabel:s?void 0:{label:n||C},interactiveStyles:p.a.generate({backgroundColor:"transparent",color:h.a.theme.colors.text}),onClick:this._handleAccountSwitcherClick,style:I.anchorContainer,testID:a},t?this._renderUser(t):this._renderEmptyState())):null}}s()(f,"contextTypes",{featureSwitches:d.object});const I=h.a.create((e=>({anchorContainer:{alignItems:"center",borderRadius:e.borderRadii.infinite,display:"flex",flexDirection:"row",padding:e.spaces.space12},icon:{color:e.colors.text},iconContainer:{alignItems:"flex-end",flexGrow:1},pip:{position:"absolute",right:`calc(-1 * ${e.spaces.space4})`,top:`calc(-1 * ${e.spaces.space4})`},userName:{flexGrow:1,marginHorizontal:e.spaces.space12},menuContainer:{width:c.a.cardWidth.normal},emptyStateWrapper:{height:e.spaces.space40,minWidth:e.spaces.space40,width:"100%"}})))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNav.d6ba21a5.js.map
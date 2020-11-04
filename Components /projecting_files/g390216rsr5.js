if (self.CavalryLogger) { CavalryLogger.start_js(["6vp1S"]); }

__d("FriendingCometFriendRequestSendMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}],f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'},{args:null,kind:"FragmentSpread",name:"ProfileCometTimelineTabTopBanner_user"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[f,{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},c,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'},{alias:null,args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_TOP"},{kind:"Literal",name:"supported",value:["ProfilePlusAdminNotice","ProfileAppealBanner","ProfileBanner","ProfileEscapeHatch","ProfilePYMKBanner"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfilePlusCometAdminNotice_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusAdminNotice",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometAppealBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileAppealBanner",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometBannerGeneric_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileBanner",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometEscapeHatch_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileEscapeHatch",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"FriendingCometProfilePYMKHScroll_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePYMKBanner",abstractKey:null},{kind:"InlineFragment",selections:[c],type:"Node",abstractKey:"__isNode"}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_TOP",supported:["ProfilePlusAdminNotice","ProfileAppealBanner","ProfileBanner","ProfileEscapeHatch","ProfilePYMKBanner"])'}],storageKey:null}],storageKey:null}]},params:{id:"3309814672458840",metadata:{},name:"FriendingCometFriendRequestSendMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("ProfileActionMutationUtils_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileActionMutationUtils_action",selections:[{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometActionFriendRequestHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e=[b];return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionFriendRequestHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[a,b,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"restrictable_profile_owner",plural:!1,selections:[a,{kind:"InlineFragment",selections:[b,c,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},d],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[b,c,d],type:"RestrictedUser",abstractKey:null},{kind:"InlineFragment",selections:e,type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:e,storageKey:null}],type:"ProfileActionFriendRequest",abstractKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionFriendRequestHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionFriendRequestHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"restrictable_profile_owner",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"User",abstractKey:null},{kind:"InlineFragment",selections:a,type:"RestrictedUser",abstractKey:null}],storageKey:null}],type:"ProfileActionFriendRequest",abstractKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActiveFriendMenu_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometIncomingFriendRequestMenu_action"}],storageKey:null}],type:"ProfileActionFriendRequestHandler",abstractKey:null}}();e.exports=a}),null);
__d("FriendRequestError",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({SELF_OVER_FRIEND_LIMIT:1431006,SELF_OVER_FRIEND_LIMIT_SUBSCRIBED:1431016,SIGMA_WARN:1407026});e.exports=a}),null);
__d("FriendingCometErrorHandler.react",["fbt","CometRelayErrorHandling","FriendRequestError","JSResource","React","SilenceableErrorMessageUtils","cometPushToast","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";f.useFriendingErrorHandler=a;var h=b("React"),i=b("JSResource")("FriendingCometErrorDialog.react").__setRef("FriendingCometErrorHandler.react");function a(a){var c=b("useCometLazyDialog")(i),d=c[0],e=h.useCallback(function(c){var f=b("SilenceableErrorMessageUtils").getMetadataFromError(c);if(b("SilenceableErrorMessageUtils").shouldHideErrorMessage(f))return;c.name==="NetworkTransportError"?b("cometPushToast").cometPushErrorToast({message:g._("Connection error. Please check your Internet connection.")},5e3):(c.code===b("FriendRequestError").SELF_OVER_FRIEND_LIMIT||c.code===b("FriendRequestError").SELF_OVER_FRIEND_LIMIT_SUBSCRIBED||c.code===b("FriendRequestError").SIGMA_WARN)&&(b("CometRelayErrorHandling").markErrorAsHandled(c),d({addFriendErrorHandler:e,addFriendId:a.addFriendId,addFriendSource:a.addFriendSource,error:c}))},[a.addFriendId,a.addFriendSource,d]);return e}}),null);
__d("ProfileActionMutationUtils",["fbt","CometRelay","WebPixelRatio","ProfileActionMutationUtils_action.graphql"],(function(a,b,c,d,e,f,g){"use strict";f.getFakeProfileActionID=a;f.getOptimisticActionForFriendshipStatus=c;var h;h!==void 0?h:h=b("ProfileActionMutationUtils_action.graphql");function a(a,b,c,d){return btoa("profile_action"+a+":"+b+":"+((a=c)!=null?a:"")+":"+((b=d)!=null?b:""))}function c(a){var c="";switch(a){case"ARE_FRIENDS":c=g._("Friends").toString();break;case"CAN_REQUEST":c=g._("Add Friend").toString();break;case"INCOMING_REQUEST":c=g._("Respond").toString();break;case"OUTGOING_REQUEST":c=g._("Cancel Request").toString();break}return{__typename:"ProfileActionFriendRequest",icon_image:{height:16*b("WebPixelRatio").get(),scale:b("WebPixelRatio").get(),uri:null,width:16*b("WebPixelRatio").get()},is_optimistic_update:!0,title:{text:c}}}}),null);
__d("FriendingCometFriendRequestSendMutation",["CometRelay","ProfileActionMutationUtils","WebPixelRatio","FriendingCometFriendRequestSendMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("FriendingCometFriendRequestSendMutation.graphql");function a(a,c,d,e,f,g){var i=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus("OUTGOING_REQUEST");return b("CometRelay").commitMutation(a,{mutation:h,onError:e,optimisticResponse:{friend_request_send:{friend_requestees:[{comet_profile_banner:null,friendship_status:"OUTGOING_REQUEST",id:c,profile_action:babelHelpers["extends"]({},i,{id:b("ProfileActionMutationUtils").getFakeProfileActionID(c,1)})}]}},variables:{input:{friend_requestee_ids:[c],people_you_may_know_location:f,refs:[g],source:d},scale:b("WebPixelRatio").get()}})}}),null);
__d("ProfileCometActionFriendRequestHandler.react",["CometLazyPopoverTrigger.react","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestSendMutation","JSResource","React","promiseDone","recoverableViolation","ProfileCometActionFriendRequestHandler_handler.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("JSResource")("ProfileCometActiveFriendMenu.react").__setRef("ProfileCometActionFriendRequestHandler.react"),j=b("JSResource")("ProfileCometIncomingFriendRequestMenu.react").__setRef("ProfileCometActionFriendRequestHandler.react"),k=b("JSResource")("FriendingCometFriendRequestCancelMutation").__setRef("ProfileCometActionFriendRequestHandler.react");function a(a){var c,d,e=a.children,f=a.handler;a=a.popoverPosition;var l=b("CometRelay").useRelayEnvironment();f=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometActionFriendRequestHandler_handler.graphql"),f);f=f.profile_action;var m=(f==null?void 0:(c=f.restrictable_profile_owner)==null?void 0:c.id)||"0";m==="0"&&b("recoverableViolation")("Missing profile ID","profile_comet");var n=b("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:m,addFriendSource:"profile_button"});c=h.useCallback(function(){b("FriendingCometFriendRequestSendMutation").commit(l,m,"profile_button",n)},[l,n,m]);var o=h.useCallback(function(){b("promiseDone")(k.load().then(function(a){a=a.commit;a(l,m,"profile",n)}))},[l,n,m]);d=f==null?void 0:(d=f.restrictable_profile_owner)==null?void 0:d.friendship_status;if(d==null){b("recoverableViolation")("Failed to fetch friendship status for profile "+m,"profile_comet");return null}var p=null;switch(d){case"ARE_FRIENDS":p=i;break;case"CAN_REQUEST":return e({onPress:c});case"INCOMING_REQUEST":p=j;break;case"OUTGOING_REQUEST":return e({onPress:o});case"CANNOT_REQUEST":return null;default:b("recoverableViolation")("Unknown friendship status "+d+" for profile "+m,"profile_comet");return null}return!p||!f?e({}):h.jsx(b("CometLazyPopoverTrigger.react"),{autoAlign:!0,popoverProps:{action:f},popoverResource:p,position:a,preloadTrigger:"button",children:function(a,b,c,d,f,g){return e({onHoverIn:d,onHoverOut:f,onPress:b,onPressIn:g,ref:a})}})}}),null);
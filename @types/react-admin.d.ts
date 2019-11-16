declare module "react-admin" {

export const Admin: React.ComponentType<any>;
// function WithContext() {
//         var _temp, _this, _ret;
// 
//         _classCallCheck(this, WithContext);
// 
//         for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
//           args[_key] = arguments[_key];
//         }
// 
//         return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
//           return getChildContext(_this.props);
//         }, _temp), _possibleConstructorReturn(_this, _ret);
//       }
export const AdminRouter: React.ComponentType<any>;
// function GetContext(ownerProps, context) {
//       return factory(_extends({}, ownerProps, context));
//     }
export const createAppReducer: Function;
// function (customReducers, locale, messages) {
//     return redux_1.combineReducers(__assign({ admin: admin_1.default, i18n: i18n_1.default(locale, messages), form: redux_form_1.reducer, router: react_router_redux_1.routerReducer }, customReducers));
// }
export const adminReducer: Function;
// function combination() {
//     var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
//     var action = arguments[1];
// 
//     if (shapeAssertionError) {
//       throw shapeAssertionError;
//     }
// 
//     if (process.env.NODE_ENV !== 'production') {
//       var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
//       if (warningMessage) {
//         (0, _warning2['default'])(warningMessage);
//       }
//     }
// 
//     var hasChanged = false;
//     var nextState = {};
//     for (var _i = 0; _i < finalReducerKeys.length; _i++) {
//       var _key = finalReducerKeys[_i];
//       var reducer = finalReducers[_key];
//       var previousStateForKey = state[_key];
//       var nextStateForKey = reducer(previousStateForKey, action);
//       if (typeof nextStateForKey === 'undefined') {
//         var errorMessage = getUndefinedStateErrorMessage(_key, action);
//         throw new Error(errorMessage);
//       }
//       nextState[_key] = nextStateForKey;
//       hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
//     }
//     return hasChanged ? nextState : state;
//   }
export const i18nReducer: Function;
// function (initialLocale, defaultMessages) {
//     return redux_1.combineReducers({
//         locale: locale_1.default(initialLocale),
//         messages: messages_1.default(defaultMessages),
//         loading: loading_1.default,
//     });
// }
export const queryReducer: Function;
// function (previousState, _a) {
//     var type = _a.type, payload = _a.payload;
//     switch (type) {
//         case exports.SET_SORT:
//             if (payload.sort === previousState.sort) {
//                 return __assign({}, previousState, { order: oppositeOrder(previousState.order), page: 1 });
//             }
//             return __assign({}, previousState, { sort: payload.sort, order: payload.order || exports.SORT_ASC, page: 1 });
//         case exports.SET_PAGE:
//             return __assign({}, previousState, { page: payload });
//         case exports.SET_PER_PAGE:
//             return __assign({}, previousState, { page: 1, perPage: payload });
//         case exports.SET_FILTER: {
//             return __assign({}, previousState, { page: 1, filter: payload });
//         }
//         default:
//             return previousState;
//     }
// }
export const CoreAdmin: React.ComponentType<any>;
// function WithContext() {
//         var _temp, _this, _ret;
// 
//         _classCallCheck(this, WithContext);
// 
//         for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
//           args[_key] = arguments[_key];
//         }
// 
//         return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
//           return getChildContext(_this.props);
//         }, _temp), _possibleConstructorReturn(_this, _ret);
//       }
export const CoreAdminRouter: React.ComponentType<any>;
// function GetContext(ownerProps, context) {
//       return factory(_extends({}, ownerProps, context));
//     }
export const createAdminStore: Function;
// function (_a) {
//     var dataProvider = _a.dataProvider, history = _a.history, _b = _a.customReducers, customReducers = _b === void 0 ? {} : _b, _c = _a.authProvider, authProvider = _c === void 0 ? null : _c, _d = _a.customSagas, customSagas = _d === void 0 ? [] : _d, _e = _a.i18nProvider, i18nProvider = _e === void 0 ? i18n_1.defaultI18nProvider : _e, initialState = _a.initialState, _f = _a.locale, locale = _f === void 0 ? 'en' : _f;
//     var messages = i18nProvider(locale);
//     var appReducer = reducer_1.default(customReducers, locale, messages);
//     var resettableAppReducer = function (state, action) {
//         return appReducer(action.type !== authActions_1.USER_LOGOUT ? state : undefined, action);
//     };
//     var saga = function rootSaga() {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, effects_1.all([
//                         sideEffect_1.adminSaga(dataProvider, authProvider, i18nProvider)
//                     ].concat(customSagas).map(effects_1.fork))];
//                 case 1:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     };
//     var sagaMiddleware = redux_saga_1.default();
//     var typedWindow = window;
//     var store = redux_1.createStore(resettableAppReducer, initialState, redux_1.compose(redux_1.applyMiddleware(sagaMiddleware, formMiddleware_1.default, react_router_redux_1.routerMiddleware(history)), typeof typedWindow !== 'undefined' &&
//         typedWindow.__REDUX_DEVTOOLS_EXTENSION__
//         ? typedWindow.__REDUX_DEVTOOLS_EXTENSION__()
//         : function (f) { return f; }));
//     sagaMiddleware.run(saga);
//     return store;
// }
export const RoutesWithLayout: React.ComponentType<any>;
// function (_a) {
//     var catchAll = _a.catchAll, children = _a.children, customRoutes = _a.customRoutes, dashboard = _a.dashboard, title = _a.title;
//     var childrenAsArray = react_1.default.Children.toArray(children);
//     var firstChild = childrenAsArray.length > 0
//         ? childrenAsArray[0]
//         : null;
//     return (react_1.default.createElement(react_router_dom_1.Switch, null,
//         customRoutes &&
//             customRoutes.map(function (route, key) { return react_1.cloneElement(route, { key: key }); }),
//         react_1.Children.map(children, function (child) { return (react_1.default.createElement(react_router_dom_1.Route, { key: child.props.name, path: "/" + child.props.name, render: function (props) {
//                 return react_1.cloneElement(child, __assign({ 
//                     // The context prop instruct the Resource component to
//                     // render itself as a standard component
//                     context: 'route' }, props));
//             } })); }),
//         dashboard ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function (routeProps) { return (react_1.default.createElement(WithPermissions_1.default, __assign({ authParams: {
//                     route: 'dashboard',
//                 } }, routeProps, { render: function (props) { return react_1.createElement(dashboard, props); } }))); } })) : firstChild ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function () { return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/" + firstChild.props.name }); } })) : null,
//         react_1.default.createElement(react_router_dom_1.Route, { render: function () {
//                 return react_1.createElement(catchAll, {
//                     title: title,
//                 });
//             } })));
// }
export const Resource: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const GET_LIST: string;
export const GET_ONE: string;
export const GET_MANY: string;
export const GET_MANY_REFERENCE: string;
export const CREATE: string;
export const UPDATE: string;
export const UPDATE_MANY: string;
export const DELETE: string;
export const DELETE_MANY: string;
export const fetchActionsWithRecordResponse: [string, string, string];
export const fetchActionsWithArrayOfIdentifiedRecordsResponse: [string, string, string];
export const fetchActionsWithArrayOfRecordsResponse: [string, string, string, string, string];
export const fetchActionsWithTotalResponse: [string, string];
export const CRUD_GET_MANY_ACCUMULATE: string;
export const crudGetManyAccumulate: Function;
// function (resource, ids) { return ({
//     type: exports.CRUD_GET_MANY_ACCUMULATE,
//     payload: { resource: resource, ids: ids },
//     meta: { accumulate: dataActions_1.crudGetMany },
// }); }
export const CRUD_GET_MATCHING_ACCUMULATE: string;
export const crudGetMatchingAccumulate: Function;
// function (reference, relatedTo, pagination, sort, filter) {
//     var action = dataActions_1.crudGetMatching(reference, relatedTo, pagination, sort, filter);
//     return {
//         type: exports.CRUD_GET_MATCHING_ACCUMULATE,
//         meta: {
//             accumulate: function () { return action; },
//             accumulateValues: function () { return true; },
//             accumulateKey: JSON.stringify(__assign({ resource: reference, relatedTo: relatedTo }, action.payload)),
//         },
//     };
// }
export const USER_LOGIN: string;
export const USER_LOGIN_LOADING: string;
export const USER_LOGIN_FAILURE: string;
export const USER_LOGIN_SUCCESS: string;
export const userLogin: Function;
// function (payload, pathName) { return ({
//     type: exports.USER_LOGIN,
//     payload: payload,
//     meta: { auth: true, pathName: pathName },
// }); }
export const USER_CHECK: string;
export const USER_CHECK_SUCCESS: string;
export const userCheck: Function;
// function (payload, pathName, routeParams) { return ({
//     type: exports.USER_CHECK,
//     payload: __assign({}, payload, { routeParams: routeParams }),
//     meta: { auth: true, pathName: pathName },
// }); }
export const USER_LOGOUT: string;
export const userLogout: Function;
// function (redirectTo) { return ({
//     type: exports.USER_LOGOUT,
//     payload: { redirectTo: redirectTo },
//     meta: { auth: true },
// }); }
export const crudCreate: Function;
// function (resource, data, basePath, redirectTo) {
//     if (redirectTo === void 0) { redirectTo = 'edit'; }
//     return ({
//         type: exports.CRUD_CREATE,
//         payload: { data: data },
//         meta: {
//             resource: resource,
//             fetch: dataFetchActions_1.CREATE,
//             onSuccess: {
//                 notification: {
//                     body: 'ra.notification.created',
//                     level: 'info',
//                     messageArgs: {
//                         smart_count: 1,
//                     },
//                 },
//                 redirectTo: redirectTo,
//                 basePath: basePath,
//             },
//             onFailure: {
//                 notification: {
//                     body: 'ra.notification.http_error',
//                     level: 'warning',
//                 },
//             },
//         },
//     });
// }
export const CRUD_CREATE: string;
export const CRUD_CREATE_LOADING: string;
export const CRUD_CREATE_FAILURE: string;
export const CRUD_CREATE_SUCCESS: string;
export const crudDelete: Function;
// function (resource, id, previousData, basePath, redirectTo, refresh) {
//     if (redirectTo === void 0) { redirectTo = 'list'; }
//     if (refresh === void 0) { refresh = true; }
//     return ({
//         type: exports.CRUD_DELETE,
//         payload: { id: id, previousData: previousData },
//         meta: {
//             resource: resource,
//             fetch: dataFetchActions_1.DELETE,
//             onSuccess: {
//                 notification: {
//                     body: 'ra.notification.deleted',
//                     level: 'info',
//                     messageArgs: {
//                         smart_count: 1,
//                     },
//                 },
//                 refresh: refresh,
//                 redirectTo: redirectTo,
//                 basePath: basePath,
//             },
//             onFailure: {
//                 notification: {
//                     body: 'ra.notification.http_error',
//                     level: 'warning',
//                 },
//             },
//         },
//     });
// }
export const CRUD_DELETE: string;
export const CRUD_DELETE_LOADING: string;
export const CRUD_DELETE_FAILURE: string;
export const CRUD_DELETE_SUCCESS: string;
export const crudDeleteMany: Function;
// function (resource, ids, basePath, refresh) {
//     if (refresh === void 0) { refresh = true; }
//     return ({
//         type: exports.CRUD_DELETE_MANY,
//         payload: { ids: ids },
//         meta: {
//             resource: resource,
//             fetch: dataFetchActions_1.DELETE_MANY,
//             onSuccess: {
//                 notification: {
//                     body: 'ra.notification.deleted',
//                     level: 'info',
//                     messageArgs: {
//                         smart_count: ids.length,
//                     },
//                 },
//                 basePath: basePath,
//                 refresh: refresh,
//                 unselectAll: true,
//             },
//             onFailure: {
//                 notification: {
//                     body: 'ra.notification.http_error',
//                     level: 'warning',
//                 },
//             },
//         },
//     });
// }
export const CRUD_DELETE_MANY: string;
export const CRUD_DELETE_MANY_LOADING: string;
export const CRUD_DELETE_MANY_FAILURE: string;
export const CRUD_DELETE_MANY_SUCCESS: string;
export const crudGetAll: Function;
// function (resource, sort, filter, maxResults, callback) { return ({
//     type: exports.CRUD_GET_ALL,
//     payload: { sort: sort, filter: filter, pagination: { page: 1, perPage: maxResults } },
//     meta: {
//         resource: resource,
//         fetch: dataFetchActions_1.GET_LIST,
//         onSuccess: {
//             callback: callback,
//         },
//         onFailure: {
//             notification: {
//                 body: 'ra.notification.http_error',
//                 level: 'warning',
//             },
//         },
//     },
// }); }
export const CRUD_GET_ALL: string;
export const CRUD_GET_ALL_LOADING: string;
export const CRUD_GET_ALL_FAILURE: string;
export const CRUD_GET_ALL_SUCCESS: string;
export const crudGetList: Function;
// function (resource, pagination, sort, filter) { return ({
//     type: exports.CRUD_GET_LIST,
//     payload: { pagination: pagination, sort: sort, filter: filter },
//     meta: {
//         resource: resource,
//         fetch: dataFetchActions_1.GET_LIST,
//         onFailure: {
//             notification: {
//                 body: 'ra.notification.http_error',
//                 level: 'warning',
//             },
//         },
//     },
// }); }
export const CRUD_GET_LIST: string;
export const CRUD_GET_LIST_LOADING: string;
export const CRUD_GET_LIST_FAILURE: string;
export const CRUD_GET_LIST_SUCCESS: string;
export const crudGetMany: Function;
// function (resource, ids) { return ({
//     type: exports.CRUD_GET_MANY,
//     payload: { ids: ids },
//     meta: {
//         resource: resource,
//         fetch: dataFetchActions_1.GET_MANY,
//         onFailure: {
//             notification: {
//                 body: 'ra.notification.http_error',
//                 level: 'warning',
//             },
//         },
//     },
// }); }
export const CRUD_GET_MANY: string;
export const CRUD_GET_MANY_LOADING: string;
export const CRUD_GET_MANY_FAILURE: string;
export const CRUD_GET_MANY_SUCCESS: string;
export const crudGetManyReference: Function;
// function (reference, target, id, relatedTo, pagination, sort, filter, source) { return ({
//     type: exports.CRUD_GET_MANY_REFERENCE,
//     payload: { target: target, id: id, pagination: pagination, sort: sort, filter: filter, source: source },
//     meta: {
//         resource: reference,
//         relatedTo: relatedTo,
//         fetch: dataFetchActions_1.GET_MANY_REFERENCE,
//         onFailure: {
//             notification: {
//                 body: 'ra.notification.http_error',
//                 level: 'warning',
//             },
//         },
//     },
// }); }
export const CRUD_GET_MANY_REFERENCE: string;
export const CRUD_GET_MANY_REFERENCE_LOADING: string;
export const CRUD_GET_MANY_REFERENCE_FAILURE: string;
export const CRUD_GET_MANY_REFERENCE_SUCCESS: string;
export const crudGetMatching: Function;
// function (reference, relatedTo, pagination, sort, filter) { return ({
//     type: exports.CRUD_GET_MATCHING,
//     payload: { pagination: pagination, sort: sort, filter: filter },
//     meta: {
//         resource: reference,
//         relatedTo: relatedTo,
//         fetch: dataFetchActions_1.GET_LIST,
//         onFailure: {
//             notification: {
//                 body: 'ra.notification.http_error',
//                 level: 'warning',
//             },
//         },
//     },
// }); }
export const CRUD_GET_MATCHING: string;
export const CRUD_GET_MATCHING_LOADING: string;
export const CRUD_GET_MATCHING_FAILURE: string;
export const CRUD_GET_MATCHING_SUCCESS: string;
export const crudGetOne: Function;
// function (resource, id, basePath, refresh) {
//     if (refresh === void 0) { refresh = true; }
//     return ({
//         type: exports.CRUD_GET_ONE,
//         payload: { id: id },
//         meta: {
//             resource: resource,
//             fetch: dataFetchActions_1.GET_ONE,
//             basePath: basePath,
//             onFailure: {
//                 notification: {
//                     body: 'ra.notification.item_doesnt_exist',
//                     level: 'warning',
//                 },
//                 redirectTo: 'list',
//                 refresh: refresh,
//             },
//         },
//     });
// }
export const CRUD_GET_ONE: string;
export const CRUD_GET_ONE_LOADING: string;
export const CRUD_GET_ONE_FAILURE: string;
export const CRUD_GET_ONE_SUCCESS: string;
export const crudUpdate: Function;
// function (resource, id, data, previousData, basePath, redirectTo, refresh) {
//     if (redirectTo === void 0) { redirectTo = 'show'; }
//     if (refresh === void 0) { refresh = true; }
//     return ({
//         type: exports.CRUD_UPDATE,
//         payload: { id: id, data: data, previousData: previousData },
//         meta: {
//             resource: resource,
//             fetch: dataFetchActions_1.UPDATE,
//             onSuccess: {
//                 notification: {
//                     body: 'ra.notification.updated',
//                     level: 'info',
//                     messageArgs: {
//                         smart_count: 1,
//                     },
//                 },
//                 refresh: refresh,
//                 redirectTo: redirectTo,
//                 basePath: basePath,
//             },
//             onFailure: {
//                 notification: {
//                     body: 'ra.notification.http_error',
//                     level: 'warning',
//                 },
//             },
//         },
//     });
// }
export const CRUD_UPDATE: string;
export const CRUD_UPDATE_LOADING: string;
export const CRUD_UPDATE_FAILURE: string;
export const CRUD_UPDATE_SUCCESS: string;
export const crudUpdateMany: Function;
// function (resource, ids, data, basePath, refresh) {
//     if (refresh === void 0) { refresh = true; }
//     return ({
//         type: exports.CRUD_UPDATE_MANY,
//         payload: { ids: ids, data: data },
//         meta: {
//             resource: resource,
//             fetch: dataFetchActions_1.UPDATE_MANY,
//             onSuccess: {
//                 notification: {
//                     body: 'ra.notification.updated',
//                     level: 'info',
//                     messageArgs: {
//                         smart_count: ids.length,
//                     },
//                 },
//                 basePath: basePath,
//                 refresh: refresh,
//                 unselectAll: true,
//             },
//             onFailure: {
//                 notification: {
//                     body: 'ra.notification.http_error',
//                     level: 'warning',
//                 },
//             },
//         },
//     });
// }
export const CRUD_UPDATE_MANY: string;
export const CRUD_UPDATE_MANY_LOADING: string;
export const CRUD_UPDATE_MANY_FAILURE: string;
export const CRUD_UPDATE_MANY_SUCCESS: string;
export const FETCH_START: string;
export const fetchStart: Function;
// function () { return ({ type: exports.FETCH_START }); }
export const FETCH_END: string;
export const fetchEnd: Function;
// function () { return ({ type: exports.FETCH_END }); }
export const FETCH_ERROR: string;
export const fetchError: Function;
// function () { return ({ type: exports.FETCH_ERROR }); }
export const FETCH_CANCEL: string;
export const fetchCancel: Function;
// function () { return ({ type: exports.FETCH_CANCEL }); }
export const CRUD_SHOW_FILTER: string;
export const showFilter: Function;
// function (resource, field) { return ({
//     type: exports.CRUD_SHOW_FILTER,
//     payload: { field: field },
//     meta: { resource: resource },
// }); }
export const CRUD_HIDE_FILTER: string;
export const hideFilter: Function;
// function (resource, field) { return ({
//     type: exports.CRUD_HIDE_FILTER,
//     payload: { field: field },
//     meta: { resource: resource },
// }); }
export const CRUD_SET_FILTER: string;
export const setFilter: Function;
// function (resource, field, value) { return ({
//     type: exports.CRUD_SET_FILTER,
//     payload: { field: field, value: value },
//     meta: { resource: resource },
// }); }
export const INITIALIZE_FORM: string;
export const initializeForm: Function;
// function (initialValues) { return ({
//     type: exports.INITIALIZE_FORM,
//     payload: initialValues,
// }); }
export const RESET_FORM: string;
export const resetForm: Function;
// function () { return ({ type: exports.RESET_FORM }); }
export const BEFORE_LOCATION_CHANGE: string;
export const beforeLocationChange: Function;
// function (_a) {
//     var payload = _a.payload, meta = _a.meta;
//     return ({
//         type: exports.BEFORE_LOCATION_CHANGE,
//         payload: payload,
//         meta: meta,
//     });
// }
export const CRUD_CHANGE_LIST_PARAMS: string;
export const changeListParams: Function;
// function (resource, params) { return ({
//     type: exports.CRUD_CHANGE_LIST_PARAMS,
//     payload: params,
//     meta: { resource: resource },
// }); }
export const SET_LIST_SELECTED_IDS: string;
export const setListSelectedIds: Function;
// function (resource, ids) { return ({
//     type: exports.SET_LIST_SELECTED_IDS,
//     payload: ids,
//     meta: { resource: resource },
// }); }
export const TOGGLE_LIST_ITEM: string;
export const toggleListItem: Function;
// function (resource, id) { return ({
//     type: exports.TOGGLE_LIST_ITEM,
//     payload: id,
//     meta: { resource: resource },
// }); }
export const CHANGE_LOCALE: string;
export const changeLocale: Function;
// function (locale) { return ({
//     type: exports.CHANGE_LOCALE,
//     payload: locale,
// }); }
export const CHANGE_LOCALE_SUCCESS: string;
export const changeLocaleSuccess: Function;
// function (locale, messages) { return ({
//     type: exports.CHANGE_LOCALE_SUCCESS,
//     payload: {
//         locale: locale,
//         messages: messages,
//     },
// }); }
export const CHANGE_LOCALE_FAILURE: string;
export const changeLocaleFailure: Function;
// function (locale, error) { return ({
//     type: exports.CHANGE_LOCALE_FAILURE,
//     error: error,
//     payload: {
//         locale: locale,
//     },
// }); }
export const SHOW_NOTIFICATION: string;
export const showNotification: Function;
// function (
// // A translatable label or text to display on notification
// message, 
// // The type of the notification
// type, 
// // Specify additional parameters of notification
// notificationOptions) {
//     if (type === void 0) { type = 'info'; }
//     return ({
//         type: exports.SHOW_NOTIFICATION,
//         payload: __assign({}, notificationOptions, { type: type,
//             message: message }),
//     });
// }
export const HIDE_NOTIFICATION: string;
export const hideNotification: Function;
// function () { return ({
//     type: exports.HIDE_NOTIFICATION,
// }); }
export const REGISTER_RESOURCE: string;
export const registerResource: Function;
// function (resource) { return ({
//     type: exports.REGISTER_RESOURCE,
//     payload: resource,
// }); }
export const UNREGISTER_RESOURCE: string;
export const unregisterResource: Function;
// function (resourceName) { return ({
//     type: exports.UNREGISTER_RESOURCE,
//     payload: resourceName,
// }); }
export const TOGGLE_SIDEBAR: string;
export const toggleSidebar: Function;
// function () { return ({
//     type: exports.TOGGLE_SIDEBAR,
// }); }
export const SET_SIDEBAR_VISIBILITY: string;
export const setSidebarVisibility: Function;
// function (isOpen) { return ({
//     type: exports.SET_SIDEBAR_VISIBILITY,
//     payload: isOpen,
// }); }
export const REFRESH_VIEW: string;
export const refreshView: Function;
// function () { return ({
//     type: exports.REFRESH_VIEW,
// }); }
export const UNDOABLE: string;
export const startUndoable: Function;
// function (action) { return ({
//     type: exports.UNDOABLE,
//     payload: { action: action },
// }); }
export const UNDO: string;
export const undo: Function;
// function () { return ({
//     type: exports.UNDO,
// }); }
export const COMPLETE: string;
export const complete: Function;
// function () { return ({
//     type: exports.COMPLETE,
// }); }
export const START_OPTIMISTIC_MODE: string;
export const startOptimisticMode: Function;
// function () { return ({
//     type: exports.START_OPTIMISTIC_MODE,
// }); }
export const STOP_OPTIMISTIC_MODE: string;
export const stopOptimisticMode: Function;
// function () { return ({
//     type: exports.STOP_OPTIMISTIC_MODE,
// }); }
export const Authenticated: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const WithPermissions: React.ComponentType<any>;
// function GetContext(ownerProps, context) {
//       return factory(_extends({}, ownerProps, context));
//     }
export const AUTH_LOGIN: string;
export const AUTH_CHECK: string;
export const AUTH_ERROR: string;
export const AUTH_LOGOUT: string;
export const AUTH_GET_PERMISSIONS: string;
export const defaultI18nProvider: Function;
// function (locale) { return ra_language_english_1.default; }
export const translate: Function;
// function (BaseComponent) {
//     warning_1.default(typeof BaseComponent === 'string', "The translate function is a Higher Order Component, and should not be called directly with a translation key. Use the translate function passed as prop to your component props instead:\n\nconst MyHelloButton = ({ translate }) => (\n    <button>{translate('myroot.hello.world')}</button>\n);");
//     var _a = (BaseComponent.defaultProps || {}), translateToDiscard = _a.translate, defaultProps = __rest(_a, ["translate"]);
//     var TranslatedComponent = /** @class */ (function (_super) {
//         __extends(TranslatedComponent, _super);
//         function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
//         TranslatedComponent.prototype.render = function () {
//             var _this = this;
//             return (react_1.default.createElement(TranslationContext_1.TranslationContext.Consumer, null, function (_a) {
//                 var translate = _a.translate, locale = _a.locale;
//                 return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, _this.props)));
//             }));
//         };
//         TranslatedComponent.defaultProps = defaultProps;
//         TranslatedComponent.displayName = wrapDisplayName_1.default(BaseComponent, 'translate');
//         return TranslatedComponent;
//     }(react_1.Component));
//     return TranslatedComponent;
// }
export const TranslationProvider: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const withTranslate: Function;
// function (BaseComponent) {
//     warning_1.default(typeof BaseComponent === 'string', "The translate function is a Higher Order Component, and should not be called directly with a translation key. Use the translate function passed as prop to your component props instead:\n\nconst MyHelloButton = ({ translate }) => (\n    <button>{translate('myroot.hello.world')}</button>\n);");
//     var _a = (BaseComponent.defaultProps || {}), translateToDiscard = _a.translate, defaultProps = __rest(_a, ["translate"]);
//     var TranslatedComponent = /** @class */ (function (_super) {
//         __extends(TranslatedComponent, _super);
//         function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
//         TranslatedComponent.prototype.render = function () {
//             var _this = this;
//             return (react_1.default.createElement(TranslationContext_1.TranslationContext.Consumer, null, function (_a) {
//                 var translate = _a.translate, locale = _a.locale;
//                 return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, _this.props)));
//             }));
//         };
//         TranslatedComponent.defaultProps = defaultProps;
//         TranslatedComponent.displayName = wrapDisplayName_1.default(BaseComponent, 'translate');
//         return TranslatedComponent;
//     }(react_1.Component));
//     return TranslatedComponent;
// }
export const DEFAULT_LOCALE: string;
export const resolveBrowserLocale: Function;
// function (defaultLocale) {
//     if (defaultLocale === void 0) { defaultLocale = index_1.DEFAULT_LOCALE; }
//     // from http://blog.ksol.fr/user-locale-detection-browser-javascript/
//     // Rely on the window.navigator object to determine user locale
//     var _a = window.navigator, language = _a.language, browserLanguage = _a.browserLanguage, userLanguage = _a.userLanguage;
//     return (language || browserLanguage || userLanguage || defaultLocale).split('-')[0];
// }
export const mergeTranslations: Function;
// function () {
//     var translationsModules = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         translationsModules[_i] = arguments[_i];
//     }
//     return merge_1.default.apply(void 0, [{}].concat(translationsModules));
// }
export const TranslationContext: {};
// $$typeof: "symbol"
// _calculateChangedBits: null
// _currentValue: {"locale":"string","translate":"function (id) { return id; }"}
// _currentValue2: {"locale":"string","translate":"function (id) { return id; }"}
// _threadCount: "number"
// Provider: {"$$typeof":"symbol","_context":"string"}
// Consumer: {"$$typeof":"symbol","_context":"string","_calculateChangedBits":null}
// _currentRenderer: null
// _currentRenderer2: null
export const getElementsFromRecords: Function;
// function (records, types) {
//     var fieldValues = getValuesFromRecords_1.default(records);
//     return Object.keys(fieldValues)
//         .reduce(function (fields, fieldName) {
//         return fields.concat(inferElementFromValues_1.default(fieldName, fieldValues[fieldName], types));
//     }, [])
//         .filter(function (inferredElement) { return inferredElement.isDefined(); });
// }
export const InferredElement: React.ComponentType<any>;
// function InferredElement(type, props, children) {
//         this.type = type;
//         this.props = props;
//         this.children = children;
//     }
export const downloadCSV: Function;
// function (csv, filename) {
//     var fakeLink = document.createElement('a');
//     fakeLink.style.display = 'none';
//     document.body.appendChild(fakeLink);
//     var blob = new Blob([csv], { type: 'text/csv' });
//     if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//         // Manage IE11+ & Edge
//         window.navigator.msSaveOrOpenBlob(blob, filename + ".csv");
//     }
//     else {
//         fakeLink.setAttribute('href', URL.createObjectURL(blob));
//         fakeLink.setAttribute('download', filename + ".csv");
//         fakeLink.click();
//     }
// }
export const FieldTitle: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const getFetchedAt: Function;
// function (newRecordIds, oldRecordFetchedAt, now, cacheDuration) {
//     if (newRecordIds === void 0) { newRecordIds = []; }
//     if (oldRecordFetchedAt === void 0) { oldRecordFetchedAt = {}; }
//     if (now === void 0) { now = new Date(); }
//     if (cacheDuration === void 0) { cacheDuration = defaultCacheDuration; }
//     // prepare new records and timestamp them
//     var newFetchedAt = {};
//     newRecordIds.forEach(function (recordId) { return (newFetchedAt[recordId] = now); });
//     // remove outdated entry
//     var latestValidDate = new Date();
//     latestValidDate.setTime(latestValidDate.getTime() - cacheDuration);
//     var stillValidFetchedAt = pickBy_1.default(oldRecordFetchedAt, function (date) { return date > latestValidDate; });
//     return __assign({}, stillValidFetchedAt, newFetchedAt);
// }
export const getFieldLabelTranslationArgs: Function;
// function (options) {
//     if (!options) {
//         return [''];
//     }
//     var label = options.label, resource = options.resource, source = options.source;
//     return typeof label !== 'undefined'
//         ? [label, { _: label }]
//         : typeof source !== 'undefined'
//             ? [
//                 "resources." + resource + ".fields." + source,
//                 {
//                     _: inflection_1.default.transform(source, ['underscore', 'humanize']),
//                 },
//             ]
//             : [''];
// }
export const HttpError: React.ComponentType<any>;
// function HttpError(message, status, body) {
//         if (body === void 0) { body = null; }
//         var _this = _super.call(this, message) || this;
//         _this.message = message;
//         _this.status = status;
//         _this.body = body;
//         _this.name = _this.constructor.name;
//         if (typeof Error.captureStackTrace === 'function') {
//             Error.captureStackTrace(_this, _this.constructor);
//         }
//         else {
//             _this.stack = new Error(message).stack;
//         }
//         _this.stack = new Error().stack;
//         return _this;
//     }
export const linkToRecord: Function;
// function (basePath, id, linkType) {
//     if (linkType === void 0) { linkType = 'edit'; }
//     var link = basePath + "/" + encodeURIComponent(id);
//     if (linkType === 'show') {
//         return link + "/show";
//     }
//     return link;
// }
export const Mutation: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const Query: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const removeEmpty: Function;
// function (object) {
//     return Object.keys(object).reduce(function (acc, key) {
//         var _a;
//         var child = object[key];
//         if (isObject(object[key])) {
//             child = removeEmpty(object[key]);
//         }
//         return isEmpty(child) ? acc : __assign({}, acc, (_a = {}, _a[key] = child, _a));
//     }, {});
// }
export const removeKey: Function;
// function (target, path) {
//     var _a;
//     var paths = path.split('.');
//     if (paths.length === 1) {
//         return removeKey(target, path);
//     }
//     var deepKey = paths[0];
//     var deep = deepRemoveKey(target[deepKey], paths.slice(1).join('.'));
//     if (Object.keys(deep).length === 0) {
//         return removeKey(target, deepKey);
//     }
//     return Object.assign({}, target, (_a = {}, _a[deepKey] = deep, _a));
// }
export const resolveRedirectTo: Function;
// function (redirectTo, basePath, id, data) {
//     if (typeof redirectTo === 'function') {
//         return redirectTo(basePath, id, data);
//     }
//     switch (redirectTo) {
//         case 'list':
//             return basePath;
//         case 'create':
//             return basePath + "/create";
//         case 'edit':
//             return linkToRecord_1.default(basePath, id);
//         case 'show':
//             return linkToRecord_1.default(basePath, id) + "/show";
//         default:
//             return redirectTo;
//     }
// }
export const TestContext: React.ComponentType<any>;
// function TestContext(props) {
//         var _this = _super.call(this, props) || this;
//         _this.storeWithDefault = null;
//         _this.renderChildren = function () {
//             var children = _this.props.children;
//             return typeof children === 'function'
//                 ? children({ store: _this.storeWithDefault })
//                 : children;
//         };
//         var _a = props.store, store = _a === void 0 ? {} : _a, _b = props.enableReducers, enableReducers = _b === void 0 ? false : _b;
//         _this.storeWithDefault = enableReducers
//             ? createAdminStore_1.default({
//                 initialState: merge_1.default(exports.defaultStore, store),
//                 dataProvider: function () { return Promise.resolve({}); },
//                 history: history_1.createMemoryHistory(),
//             })
//             : redux_1.createStore(function () { return merge_1.default(exports.defaultStore, store); });
//         return _this;
//     }
export const warning: Function;
// function (condition, message) {
//     if (condition && process.env.NODE_ENV !== 'production') {
//         console.warn(message); // eslint-disable-line
//     }
// }
export const withDataProvider: Function;
// function (Component) {
//     return react_redux_1.connect(null, mapDispatchToProps)(Component);
// }
export const fetchUtils: {};
// createHeadersFromOptions: "function (options) {\n    var requestHeaders = (options.headers ||\n        new Headers({\n            Accept: 'application/json',\n        }));\n    if (!requestHeaders.has('Content-Type') &&\n        !(options && (!options.method || options.method === 'GET')) &&\n        !(options && options.body && options.body instanceof FormData)) {\n        requestHeaders.set('Content-Type', 'application/json');\n    }\n    if (options.user && options.user.authenticated && options.user.token) {\n        requestHeaders.set('Authorization', options.user.token);\n    }\n    return requestHeaders;\n}"
// fetchJson: "function (url, options) {\n    if (options === void 0) { options = {}; }\n    var requestHeaders = exports.createHeadersFromOptions(options);\n    return fetch(url, __assign({}, options, { headers: requestHeaders }))\n        .then(function (response) {\n        return response.text().then(function (text) { return ({\n            status: response.status,\n            statusText: response.statusText,\n            headers: response.headers,\n            body: text,\n        }); });\n    })\n        .then(function (_a) {\n        var status = _a.status, statusText = _a.statusText, headers = _a.headers, body = _a.body;\n        var json;\n        try {\n            json = JSON.parse(body);\n        }\n        catch (e) {\n            // not json, no big deal\n        }\n        if (status < 200 || status >= 300) {\n            return Promise.reject(new HttpError_1.default((json && json.message) || statusText, status, json));\n        }\n        return Promise.resolve({ status: status, headers: headers, body: body, json: json });\n    });\n}"
// queryParameters: "function (obj, opts) {\n\tvar defaults = {\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none'\n\t};\n\n\topts = objectAssign(defaults, opts);\n\n\tif (opts.sort === false) {\n\t\topts.sort = function () {};\n\t}\n\n\tvar formatter = encoderForArrayFormat(opts);\n\n\treturn obj ? Object.keys(obj).sort(opts.sort).map(function (key) {\n\t\tvar val = obj[key];\n\n\t\tif (val === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (val === null) {\n\t\t\treturn encode(key, opts);\n\t\t}\n\n\t\tif (Array.isArray(val)) {\n\t\t\tvar result = [];\n\n\t\t\tval.slice().forEach(function (val2) {\n\t\t\t\tif (val2 === undefined) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tresult.push(formatter(key, val2, result.length));\n\t\t\t});\n\n\t\t\treturn result.join('&');\n\t\t}\n\n\t\treturn encode(key, opts) + '=' + encode(val, opts);\n\t}).filter(function (x) {\n\t\treturn x.length > 0;\n\t}).join('&') : '';\n}"
// flattenObject: "function (value, path) {\n    if (path === void 0) { path = []; }\n    var _a;\n    if (isValidObject(value)) {\n        return Object.assign.apply(Object, [{}].concat(Object.keys(value).map(function (key) {\n            return exports.flattenObject(value[key], path.concat([key]));\n        })));\n    }\n    else {\n        return path.length ? (_a = {}, _a[path.join('.')] = value, _a) : value;\n    }\n}"
export const getListControllerProps: Function;
// function (props) {
//     return injectedProps.reduce(function (acc, key) {
//         var _a;
//         return (__assign({}, acc, (_a = {}, _a[key] = props[key], _a)));
//     }, {});
// }
export const sanitizeListRestProps: Function;
// function (props) {
//     return Object.keys(props)
//         .filter(function (propName) { return !injectedProps.includes(propName); })
//         .reduce(function (acc, key) {
//         var _a;
//         return (__assign({}, acc, (_a = {}, _a[key] = props[key], _a)));
//     }, {});
// }
export const CreateController: React.ComponentType<any>;
// function (props) {
//     var propNames = Object.keys(props);
//     var missingProps = requiredProps.filter(function (prop) { return !propNames.includes(prop); });
//     if (missingProps.length > 0) {
//         throw new Error("<" + displayName + "> component is not properly configured, some essential props are missing.\nBe sure to pass the props from the parent. Example:\n\nconst My" + displayName + " = props => (\n    <" + displayName + " {...props}></" + displayName + ">\n);\n\nThe missing props are: " + missingProps.join(', '));
//     }
//     return react_1.default.createElement(WrappedComponent, __assign({}, props));
// }
export const EditController: React.ComponentType<any>;
// function (props) {
//     var propNames = Object.keys(props);
//     var missingProps = requiredProps.filter(function (prop) { return !propNames.includes(prop); });
//     if (missingProps.length > 0) {
//         throw new Error("<" + displayName + "> component is not properly configured, some essential props are missing.\nBe sure to pass the props from the parent. Example:\n\nconst My" + displayName + " = props => (\n    <" + displayName + " {...props}></" + displayName + ">\n);\n\nThe missing props are: " + missingProps.join(', '));
//     }
//     return react_1.default.createElement(WrappedComponent, __assign({}, props));
// }
export const ListController: React.ComponentType<any>;
// function (props) {
//     var propNames = Object.keys(props);
//     var missingProps = requiredProps.filter(function (prop) { return !propNames.includes(prop); });
//     if (missingProps.length > 0) {
//         throw new Error("<" + displayName + "> component is not properly configured, some essential props are missing.\nBe sure to pass the props from the parent. Example:\n\nconst My" + displayName + " = props => (\n    <" + displayName + " {...props}></" + displayName + ">\n);\n\nThe missing props are: " + missingProps.join(', '));
//     }
//     return react_1.default.createElement(WrappedComponent, __assign({}, props));
// }
export const ShowController: React.ComponentType<any>;
// function (props) {
//     var propNames = Object.keys(props);
//     var missingProps = requiredProps.filter(function (prop) { return !propNames.includes(prop); });
//     if (missingProps.length > 0) {
//         throw new Error("<" + displayName + "> component is not properly configured, some essential props are missing.\nBe sure to pass the props from the parent. Example:\n\nconst My" + displayName + " = props => (\n    <" + displayName + " {...props}></" + displayName + ">\n);\n\nThe missing props are: " + missingProps.join(', '));
//     }
//     return react_1.default.createElement(WrappedComponent, __assign({}, props));
// }
export const ReferenceArrayFieldController: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const ReferenceFieldController: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const ReferenceManyFieldController: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const ReferenceArrayInputController: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const ReferenceInputController: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const addField: Function;
// function (BaseComponent, fieldProps) {
//     if (fieldProps === void 0) { fieldProps = {}; }
//     var WithFormField = function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); };
//     return WithFormField;
// }
export const FormDataConsumer: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(redux_form_1.FormName, null, function (_a) {
//     var form = _a.form;
//     return react_1.default.createElement(ConnectedFormDataConsumerView, __assign({ form: form }, props));
// })); }
export const FormField: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const formMiddleware: Function;
// function () {
//     var previousLocation;
//     return function (next) { return function (action) {
//         if (action.type !== react_router_redux_1.LOCATION_CHANGE ||
//             (action.payload.state && action.payload.state.skipFormReset)) {
//             return next(action);
//         }
//         // history allows one to redirect to the same location which can happen
//         // when using a special menu for a create page for instance. In this case,
//         // we don't want to reset the form.
//         // See https://github.com/marmelab/react-admin/issues/2291
//         if (isEqual_1.default(action.payload, previousLocation)) {
//             return next(action);
//         }
//         previousLocation = action.payload;
//         next(formActions_1.resetForm());
//         next(redux_form_1.destroy(constants_1.REDUX_FORM_NAME));
//         return next(action);
//     }; };
// }
export const getDefaultValues: Function;
// function () {
//     if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
//       // apply arguments instead of spreading for performance.
//       lastResult = func.apply(null, arguments);
//     }
// 
//     lastArgs = arguments;
//     return lastResult;
//   }
export const withDefaultValue: Function;
// function (DecoratedComponent) {
//     return react_redux_1.connect(function () { return ({ decoratedComponent: DecoratedComponent }); }, { initializeForm: formActions_1.initializeForm })(DefaultValueView);
// }
export const isRequired: Function;
// function (validate) {
//     if (validate && validate.isRequired) {
//         return true;
//     }
//     if (Array.isArray(validate)) {
//         return !!validate.find(function (it) { return it.isRequired; });
//     }
//     return false;
// }
export const required: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const minLength: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const maxLength: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const minValue: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const maxValue: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const number: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const regex: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const email: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const choices: Function;
// function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;
// 
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   }
export const REDUX_FORM_NAME: string;
export const getResources: Function;
// function (state) { return admin_1.getResources(state.admin); }
export const getReferenceResource: Function;
// function (state, props) {
//     return admin_1.getReferenceResource(state.admin, props);
// }
export const getLocale: Function;
// function (state) { return i18n_1.getLocale(state.i18n); }
export const getNotification: Function;
// function (state) { return state.admin.notifications[0]; }
export const getPossibleReferences: Function;
// function (referenceState, possibleValues, selectedIds) {
//     if (selectedIds === void 0) { selectedIds = []; }
//     if (!possibleValues) {
//         return null;
//     }
//     if (possibleValues.error) {
//         return possibleValues;
//     }
//     possibleValues = Array.from(possibleValues);
//     selectedIds.forEach(function (id) {
//         return possibleValues.some(function (value) { return value === id; }) ||
//             possibleValues.unshift(id);
//     });
//     return possibleValues
//         .map(function (id) { return referenceState.data[id]; })
//         .filter(function (r) { return typeof r !== 'undefined'; });
// }
export const getPossibleReferenceValues: Function;
// function (state, props) {
//     return admin_1.getPossibleReferenceValues(state.admin, props);
// }
export const getIds: Function;
// function (state, relatedTo) {
//     return state.admin.references.oneToMany[relatedTo] &&
//         state.admin.references.oneToMany[relatedTo].ids;
// }
export const getReferences: Function;
// function (state, reference, relatedTo) {
//     var ids = exports.getIds(state, relatedTo);
//     if (typeof ids === 'undefined') {
//         return undefined;
//     }
//     if (!state.admin.resources[reference]) {
//         // eslint-disable-next-line no-console
//         console.error("Invalid Resource \"" + reference + "\"\n" +
//             ("You are trying to display or edit a field of a resource called \"" + reference + "\", ") +
//             'but it has not been declared.\n' +
//             "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField and ReferenceManyField.", { ids: ids });
//     }
//     return ids
//         .map(function (id) {
//         var resource = state.admin.resources[reference];
//         if (!resource) {
//             return undefined;
//         }
//         return resource.data[id];
//     })
//         .filter(function (r) { return typeof r !== 'undefined'; })
//         .reduce(function (prev, record) {
//         prev[record.id] = record; // eslint-disable-line no-param-reassign
//         return prev;
//     }, {});
// }
export const getReferencesByIds: Function;
// function (state, reference, ids) {
//     if (ids.length === 0) {
//         return {};
//     }
//     if (!state.admin.resources[reference]) {
//         // eslint-disable-next-line no-console
//         console.error("Invalid Resource \"" + reference + "\"\n" +
//             ("You are trying to display or edit a field of a resource called \"" + reference + "\", ") +
//             'but it has not been declared.\n' +
//             "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField.", { ids: ids });
//     }
//     var references = ids
//         .map(function (id) {
//         var resource = state.admin.resources[reference];
//         if (!resource) {
//             return undefined;
//         }
//         return resource.data[id];
//     })
//         .filter(function (r) { return typeof r !== 'undefined'; })
//         .reduce(function (prev, record) {
//         prev[record.id] = record; // eslint-disable-line no-param-reassign
//         return prev;
//     }, {});
//     return Object.keys(references).length > 0 ? references : null;
// }
export const nameRelatedTo: Function;
// function (reference, id, resource, target, filter) {
//     if (filter === void 0) { filter = {}; }
//     var keys = Object.keys(filter);
//     if (!keys.length) {
//         return resource + "_" + reference + "@" + target + "_" + id;
//     }
//     return resource + "_" + reference + "@" + target + "_" + id + "?" + keys
//         .map(function (key) { return key + "=" + JSON.stringify(filter[key]); })
//         .join('&');
// }
export const adminSaga: Function;
// function (dataProvider, authProvider, i18nProvider) {
//     return function admin() {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, effects_1.all([
//                         i18n_1.default(i18nProvider)(),
//                         auth_1.default(authProvider)(),
//                         undo_1.default(),
//                         fetch_1.default(dataProvider)(),
//                         error_1.default(),
//                         accumulate_1.default(),
//                         redirection_1.default(),
//                         refresh_1.default(),
//                         notification_1.default(),
//                         callback_1.default(),
//                         unload_1.default(),
//                     ])];
//                 case 1:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     };
// }
export const authSaga: Function;
// function (authProvider) {
//     if (!authProvider) {
//         return function () { return null; };
//     }
//     function handleAuth(action) {
//         var type, payload, error, meta, _a, authPayload, redirectTo, e_1, errorMessage, error_1, e_2, nextPathname;
//         return __generator(this, function (_b) {
//             switch (_b.label) {
//                 case 0:
//                     type = action.type, payload = action.payload, error = action.error, meta = action.meta;
//                     _a = type;
//                     switch (_a) {
//                         case authActions_1.USER_LOGIN: return [3 /*break*/, 1];
//                         case authActions_1.USER_CHECK: return [3 /*break*/, 11];
//                         case authActions_1.USER_LOGOUT: return [3 /*break*/, 17];
//                         case fetchActions_1.FETCH_ERROR: return [3 /*break*/, 20];
//                     }
//                     return [3 /*break*/, 29];
//                 case 1:
//                     _b.trys.push([1, 7, , 10]);
//                     return [4 /*yield*/, effects_1.put({ type: authActions_1.USER_LOGIN_LOADING })];
//                 case 2:
//                     _b.sent();
//                     return [4 /*yield*/, effects_1.call(authProvider, auth_1.AUTH_LOGIN, payload)];
//                 case 3:
//                     authPayload = _b.sent();
//                     return [4 /*yield*/, effects_1.put({
//                             type: authActions_1.USER_LOGIN_SUCCESS,
//                             payload: authPayload,
//                         })];
//                 case 4:
//                     _b.sent();
//                     return [4 /*yield*/, meta.pathName ||
//                             effects_1.select(nextPathnameSelector)];
//                 case 5:
//                     redirectTo = _b.sent();
//                     return [4 /*yield*/, effects_1.put(react_router_redux_1.push(redirectTo || '/'))];
//                 case 6:
//                     _b.sent();
//                     return [3 /*break*/, 10];
//                 case 7:
//                     e_1 = _b.sent();
//                     return [4 /*yield*/, effects_1.put({
//                             type: authActions_1.USER_LOGIN_FAILURE,
//                             error: e_1,
//                             meta: { auth: true },
//                         })];
//                 case 8:
//                     _b.sent();
//                     errorMessage = typeof e_1 === 'string'
//                         ? e_1
//                         : typeof e_1 === 'undefined' || !e_1.message
//                             ? 'ra.auth.sign_in_error'
//                             : e_1.message;
//                     return [4 /*yield*/, effects_1.put(notificationActions_1.showNotification(errorMessage, 'warning'))];
//                 case 9:
//                     _b.sent();
//                     return [3 /*break*/, 10];
//                 case 10: return [3 /*break*/, 29];
//                 case 11:
//                     _b.trys.push([11, 13, , 16]);
//                     return [4 /*yield*/, effects_1.call(authProvider, auth_1.AUTH_CHECK, payload)];
//                 case 12:
//                     _b.sent();
//                     return [3 /*break*/, 16];
//                 case 13:
//                     error_1 = _b.sent();
//                     return [4 /*yield*/, effects_1.call(authProvider, auth_1.AUTH_LOGOUT)];
//                 case 14:
//                     _b.sent();
//                     return [4 /*yield*/, effects_1.put(react_router_redux_1.replace({
//                             pathname: (error_1 && error_1.redirectTo) || '/login',
//                             state: { nextPathname: meta.pathName },
//                         }))];
//                 case 15:
//                     _b.sent();
//                     return [3 /*break*/, 16];
//                 case 16: return [3 /*break*/, 29];
//                 case 17: return [4 /*yield*/, effects_1.put(react_router_redux_1.push((action.payload && action.payload.redirectTo) ||
//                         '/login'))];
//                 case 18:
//                     _b.sent();
//                     return [4 /*yield*/, effects_1.call(authProvider, auth_1.AUTH_LOGOUT)];
//                 case 19:
//                     _b.sent();
//                     return [3 /*break*/, 29];
//                 case 20:
//                     _b.trys.push([20, 22, , 28]);
//                     return [4 /*yield*/, effects_1.call(authProvider, auth_1.AUTH_ERROR, error)];
//                 case 21:
//                     _b.sent();
//                     return [3 /*break*/, 28];
//                 case 22:
//                     e_2 = _b.sent();
//                     return [4 /*yield*/, effects_1.select(currentPathnameSelector)];
//                 case 23:
//                     nextPathname = _b.sent();
//                     return [4 /*yield*/, effects_1.call(authProvider, auth_1.AUTH_LOGOUT)];
//                 case 24:
//                     _b.sent();
//                     return [4 /*yield*/, effects_1.put(react_router_redux_1.push({
//                             pathname: '/login',
//                             state: { nextPathname: nextPathname },
//                         }))];
//                 case 25:
//                     _b.sent();
//                     return [4 /*yield*/, effects_1.put(notificationActions_1.hideNotification())];
//                 case 26:
//                     _b.sent();
//                     return [4 /*yield*/, effects_1.put(notificationActions_1.showNotification('ra.notification.logged_out', 'warning'))];
//                 case 27:
//                     _b.sent();
//                     return [3 /*break*/, 28];
//                 case 28: return [3 /*break*/, 29];
//                 case 29: return [2 /*return*/];
//             }
//         });
//     }
//     return function watchAuthActions() {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, effects_1.all([
//                         effects_1.takeEvery(function (action) { return action.meta && action.meta.auth; }, handleAuth),
//                         effects_1.takeLatest(fetchActions_1.FETCH_ERROR, handleAuth),
//                     ])];
//                 case 1:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     };
// }
export const callbackSaga: Function;
// function default_1() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.callback; }, handleCallback)];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const fetchSaga: Function;
// function (dataProvider) {
//     return function watchFetch() {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, effects_1.takeEvery(exports.takeFetchAction, handleFetch, dataProvider)];
//                 case 1:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     };
// }
export const errorSaga: Function;
// function default_1() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.fetchResponse; }, handleResponse)];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const notificationSaga: Function;
// function default_1() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, effects_1.takeEvery(
//                 // @ts-ignore
//                 function (action) { return action.meta && action.meta.notification; }, handleNotification)];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const redirectionSaga: Function;
// function default_1() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, effects_1.takeEvery(
//                 // @ts-ignore
//                 function (action) { return action.meta && typeof action.meta.redirectTo !== 'undefined'; }, handleRedirection)];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const accumulateSaga: Function;
// function default_1() {
//     var accumulations, tasks;
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0:
//                 accumulations = {};
//                 tasks = {};
//                 return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.accumulate; }, exports.accumulateFactory(tasks, accumulations, exports.finalizeFactory(tasks, accumulations)))];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const refreshSaga: Function;
// function default_1() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.refresh; }, handleRefresh)];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const i18nSaga: Function;
// function (i18nProvider) {
//     function loadMessages(action) {
//         var locale, messages, err_1;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0:
//                     locale = action.payload;
//                     return [4 /*yield*/, effects_1.put(actions_1.fetchStart())];
//                 case 1:
//                     _a.sent();
//                     _a.label = 2;
//                 case 2:
//                     _a.trys.push([2, 5, , 7]);
//                     return [4 /*yield*/, effects_1.call(i18nProvider, locale)];
//                 case 3:
//                     messages = _a.sent();
//                     return [4 /*yield*/, effects_1.put(actions_1.changeLocaleSuccess(locale, messages))];
//                 case 4:
//                     _a.sent();
//                     return [3 /*break*/, 7];
//                 case 5:
//                     err_1 = _a.sent();
//                     return [4 /*yield*/, effects_1.put(actions_1.changeLocaleFailure(action.payload.locale, err_1))];
//                 case 6:
//                     _a.sent();
//                     return [3 /*break*/, 7];
//                 case 7: return [4 /*yield*/, effects_1.put(actions_1.fetchEnd())];
//                 case 8:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     }
//     return function () {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, effects_1.all([effects_1.takeLatest(actions_1.CHANGE_LOCALE, loadMessages)])];
//                 case 1:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     };
// }
export const undoSaga: Function;
// function watchUndoable() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: 
//             // @ts-ignore
//             return [4 /*yield*/, effects_1.takeEvery(undoActions_1.UNDOABLE, handleUndoRace)];
//             case 1:
//                 // @ts-ignore
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const unloadSaga: Function;
// function watchUnload() {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, effects_1.takeEvery(undoActions_1.START_OPTIMISTIC_MODE, handleStartOptimistic)];
//             case 1:
//                 _a.sent();
//                 return [4 /*yield*/, effects_1.takeEvery(undoActions_1.STOP_OPTIMISTIC_MODE, handleStopOptimisticMode)];
//             case 2:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }
export const Link: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const defaultTheme: {};
// palette: {"secondary":{"light":"string","main":"string","dark":"string","contrastText":"string"}}
// typography: {"title":{"fontWeight":"number"}}
export const Login: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const LoginForm: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Logout: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const BulkDeleteButton: React.ComponentType<any>;
// function (_a) {
//     var undoable = _a.undoable, props = __rest(_a, ["undoable"]);
//     return undoable ? (react_1.default.createElement(BulkDeleteWithUndoButton_1.default, __assign({}, props))) : (react_1.default.createElement(BulkDeleteWithConfirmButton_1.default, __assign({}, props)));
// }
export const BulkDeleteWithConfirmButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const BulkDeleteWithUndoButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const Button: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const CloneButton: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const CreateButton: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const DeleteButton: React.ComponentType<any>;
// function (_a) {
//     var undoable = _a.undoable, props = __rest(_a, ["undoable"]);
//     return undoable ? (react_1.default.createElement(DeleteWithUndoButton_1.default, __assign({}, props))) : (react_1.default.createElement(DeleteWithConfirmButton_1.default, __assign({}, props)));
// }
export const DeleteWithConfirmButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const DeleteWithUndoButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const EditButton: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const ExportButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const ListButton: React.ComponentType<any>;
// function (_a) {
//     var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? 'ra.action.list' : _c, icon = _a.icon, rest = __rest(_a, ["basePath", "label", "icon"]);
//     return (react_1.default.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: basePath, label: label }, rest), icon));
// }
export const SaveButton: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const ShowButton: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const RefreshButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const RefreshIconButton: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const Create: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(ra_core_1.CreateController, __assign({}, props), function (controllerProps) { return react_1.default.createElement(exports.CreateView, __assign({}, props, controllerProps)); })); }
export const CreateView: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const CreateActions: React.ComponentType<any>;
// function (_a) {
//     var basePath = _a.basePath, className = _a.className, hasList = _a.hasList, rest = __rest(_a, ["basePath", "className", "hasList"]);
//     return (react_1.default.createElement(CardActions_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasList && react_1.default.createElement(button_1.ListButton, { basePath: basePath })));
// }
export const Edit: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(ra_core_1.EditController, __assign({}, props), function (controllerProps) { return react_1.default.createElement(exports.EditView, __assign({}, props, controllerProps)); })); }
export const EditView: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const EditActions: React.ComponentType<any>;
// function (_a) {
//     var basePath = _a.basePath, className = _a.className, data = _a.data, hasShow = _a.hasShow, resource = _a.resource, rest = __rest(_a, ["basePath", "className", "data", "hasShow", "resource"]);
//     return (react_1.default.createElement(CardActions_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasShow && react_1.default.createElement(button_1.ShowButton, { basePath: basePath, record: data })));
// }
export const EditGuesser: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Show: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(ra_core_1.ShowController, __assign({}, props), function (controllerProps) { return react_1.default.createElement(exports.ShowView, __assign({}, props, controllerProps)); })); }
export const ShowView: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const ShowActions: React.ComponentType<any>;
// function (_a) {
//     var basePath = _a.basePath, className = _a.className, data = _a.data, hasEdit = _a.hasEdit, resource = _a.resource, rest = __rest(_a, ["basePath", "className", "data", "hasEdit", "resource"]);
//     return (react_1.default.createElement(CardActions_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasEdit && react_1.default.createElement(button_1.EditButton, { basePath: basePath, record: data })));
// }
export const ShowGuesser: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const SimpleShowLayout: React.ComponentType<any>;
// function (_a) {
//     var basePath = _a.basePath, className = _a.className, children = _a.children, record = _a.record, resource = _a.resource, version = _a.version, rest = __rest(_a, ["basePath", "className", "children", "record", "resource", "version"]);
//     return (react_1.default.createElement(CardContentInner_1.default, __assign({ className: className, key: version }, sanitizeRestProps(rest)), react_1.Children.map(children, function (field) {
//         return field && react_1.isValidElement(field) ? (react_1.default.createElement("div", { key: field.props.source, className: classnames_1.default("ra-field ra-field-" + field.props.source, field.props.className) }, field.props.addLabel ? (react_1.default.createElement(Labeled_1.default, { record: record, resource: resource, basePath: basePath, label: field.props.label, source: field.props.source, disabled: false }, field)) : typeof field.type === 'string' ? (field) : (react_1.cloneElement(field, {
//             record: record,
//             resource: resource,
//             basePath: basePath,
//         })))) : null;
//     })));
// }
export const TabbedShowLayout: React.ComponentType<any>;
// function C(props) {
//     var wrappedComponentRef = props.wrappedComponentRef,
//         remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);
// 
//     return _react2.default.createElement(_Route2.default, {
//       children: function children(routeComponentProps) {
//         return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
//           ref: wrappedComponentRef
//         }));
//       }
//     });
//   }
export const Tab: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const TabbedShowLayoutTabs: React.ComponentType<any>;
// function (_a) {
//     var children = _a.children, match = _a.match, value = _a.value, rest = __rest(_a, ["children", "match", "value"]);
//     return (react_1.default.createElement(Tabs_1.default, __assign({ indicatorColor: "primary", value: value }, rest), react_1.Children.map(children, function (tab, index) {
//         if (!tab || !react_1.isValidElement(tab))
//             return null;
//         // Builds the full tab tab which is the concatenation of the last matched route in the
//         // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
//         // and the tab path.
//         // This will be used as the Tab's value
//         var tabPath = getTabFullPath(tab, index, match.url);
//         return react_1.cloneElement(tab, {
//             context: 'header',
//             value: tabPath,
//         });
//     })));
// }
export const FormInput: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const FormTab: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const SimpleForm: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const SimpleFormIterator: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const TabbedForm: React.ComponentType<any>;
// function C(props) {
//     var wrappedComponentRef = props.wrappedComponentRef,
//         remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);
// 
//     return _react2.default.createElement(_Route2.default, {
//       children: function children(routeComponentProps) {
//         return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
//           ref: wrappedComponentRef
//         }));
//       }
//     });
//   }
export const Toolbar: React.ComponentType<any>;
// function WithTheme(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithTheme);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTheme).call(this));
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.state = {
//           // We use || as the function call is lazy evaluated.
//           theme: _themeListener.default.initial(context) || getDefaultTheme()
//         };
//         return _this;
//       }
export const ArrayField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const BooleanField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const ChipField: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const DateField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const EmailField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const FileField: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const ImageField: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const FunctionField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const NumberField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const ReferenceField: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const ReferenceArrayField: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const ReferenceManyField: React.ComponentType<any>;
// function (_a) {
//     var children = _a.children, props = __rest(_a, ["children"]);
//     if (react_1.default.Children.count(children) !== 1) {
//         throw new Error('<ReferenceManyField> only accepts a single child (like <Datagrid>)');
//     }
//     return (react_1.default.createElement(ra_core_1.ReferenceManyFieldController, __assign({}, props), function (controllerProps) { return (react_1.default.createElement(exports.ReferenceManyFieldView, __assign({}, props, __assign({ children: children }, controllerProps)))); }));
// }
export const RichTextField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const SelectField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const TextField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const UrlField: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const ArrayInput: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const AutocompleteArrayInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const AutocompleteInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const BooleanInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const CheckboxGroupInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const DateInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const DateTimeInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const DisabledInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const FileInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const ImageInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const Labeled: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const LongTextInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const NullableBooleanInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const NumberInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const RadioButtonGroupInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const ReferenceArrayInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const ReferenceInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const ResettableTextField: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const SearchInput: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const SelectArrayInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const SelectInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const TextInput: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); }
export const AppBar: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const AppBarMobile: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const CardActions: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const CardContentInner: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Confirm: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const DashboardMenuItem: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const Error: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Header: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Headroom: React.ComponentType<any>;
// function (_a) {
//     var children = _a.children;
//     return (react_1.default.createElement(react_headroom_1.default, { style: defaultStyle }, children));
// }
export const Layout: React.ComponentType<any>;
// function LayoutWithTheme(props) {
//         var _this = _super.call(this, props) || this;
//         _this.theme = styles_1.createMuiTheme(props.theme);
//         return _this;
//     }
export const Loading: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const LinearProgress: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const LoadingIndicator: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const Menu: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const MenuItemLink: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const NotFound: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Notification: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const RecordTitle: React.ComponentType<any>;
// function (_a) {
//     var defaultTitle = _a.defaultTitle, record = _a.record, title = _a.title;
//     return record ? (react_1.default.createElement(TitleDeprecated_1.default, { title: title, record: record, defaultTitle: defaultTitle })) : ('');
// }
export const Responsive: React.ComponentType<any>;
// function WithTheme(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithTheme);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTheme).call(this));
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.state = {
//           // We use || as the function call is lazy evaluated.
//           theme: _themeListener.default.initial(context) || getDefaultTheme()
//         };
//         return _this;
//       }
export const Sidebar: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const Title: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const TitleForRecord: React.ComponentType<any>;
// function (_a) {
//     var defaultTitle = _a.defaultTitle, record = _a.record, title = _a.title;
//     return record ? (react_1.default.createElement(Title_1.default, { title: title, record: record, defaultTitle: defaultTitle })) : ('');
// }
export const UserMenu: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const ViewTitle: React.ComponentType<any>;
// function (_a) {
//     var _b = _a.className, className = _b === void 0 ? undefined : _b, title = _a.title, rest = __rest(_a, ["className", "title"]);
//     if (process.env.NODE_ENV !== 'production') {
//         // eslint-disable-next-line no-console
//         console.warn('<ViewTitle> is deprecated, please use <Title> instead');
//     }
//     return (react_1.default.createElement(Responsive_1.default, { xsmall: react_1.default.createElement(react_1.Fragment, null,
//             react_1.default.createElement(AppBarMobile_1.default, __assign({ className: classnames_1.default('title', className), title: title }, rest)),
//             react_1.default.createElement("span", null, " ")), medium: react_1.default.createElement(CardContent_1.default, __assign({ className: classnames_1.default('title', className) }, rest),
//             react_1.default.createElement(Typography_1.default, { variant: "title" }, title)) }));
// }
export const BulkActions: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const BulkActionsToolbar: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const BulkDeleteAction: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const Datagrid: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const DatagridLoading: React.ComponentType<any>;
// function (_a) {
//     var classes = _a.classes, className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, nbChildren = _a.nbChildren, _b = _a.nbFakeLines, nbFakeLines = _b === void 0 ? 5 : _b;
//     return (react_1.default.createElement(Table_1.default, { className: classnames_1.default(classes.table, className) },
//         react_1.default.createElement(TableHead_1.default, null,
//             react_1.default.createElement(TableRow_1.default, { className: classes.row },
//                 expand && react_1.default.createElement(TableCell_1.default, { className: classes.expandHeader }),
//                 hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: "none", className: classes.expandIconCell },
//                     react_1.default.createElement(Checkbox_1.default, { className: "select-all", color: "primary", checked: false }))),
//                 times(nbChildren, function (key) { return (react_1.default.createElement(TableCell_1.default, { padding: "none", variant: "head", className: classes.headerCell, key: key },
//                     react_1.default.createElement(Placeholder, null))); }))),
//         react_1.default.createElement(TableBody_1.default, null, times(nbFakeLines, function (key1) { return (react_1.default.createElement(TableRow_1.default, { key: key1, style: { opacity: 1 / (key1 + 1) } },
//             expand && (react_1.default.createElement(TableCell_1.default, { padding: "none", className: classes.expandIconCell },
//                 react_1.default.createElement(IconButton_1.default, { className: classes.expandIcon, component: "div", "aria-hidden": "true" },
//                     react_1.default.createElement(ExpandMore_1.default, null)))),
//             hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: "none", className: classes.expandIconCell },
//                 react_1.default.createElement(Checkbox_1.default, { className: "select-all", color: "primary", checked: false }))),
//             times(nbChildren, function (key2) { return (react_1.default.createElement(TableCell_1.default, { padding: "none", className: classes.rowCell, key: key2 },
//                 react_1.default.createElement(Placeholder, null))); }))); }))));
// }
export const DatagridBody: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const DatagridRow: React.ComponentType<any>;
// function Connect(props, context) {
//         _classCallCheck(this, Connect);
// 
//         var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
// 
//         _this.version = version;
//         _this.state = {};
//         _this.renderCount = 0;
//         _this.store = props[storeKey] || context[storeKey];
//         _this.propsMode = Boolean(props[storeKey]);
//         _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
// 
//         (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
// 
//         _this.initSelector();
//         _this.initSubscription();
//         return _this;
//       }
export const DatagridHeaderCell: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const DatagridCell: React.ComponentType<any>;
// function (_a) {
//     var className = _a.className, field = _a.field, record = _a.record, basePath = _a.basePath, resource = _a.resource, rest = __rest(_a, ["className", "field", "record", "basePath", "resource"]);
//     return (react_1.default.createElement(TableCell_1.default, __assign({ className: classnames_1.default(className, field.props.cellClassName), numeric: field.props.textAlign === 'right', padding: "none" }, sanitizeRestProps(rest)), react_1.default.cloneElement(field, {
//         record: record,
//         basePath: field.props.basePath || basePath,
//         resource: resource,
//     })));
// }
export const Filter: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const FilterButton: React.ComponentType<any>;
// function TranslatedComponent() {
//             return _super !== null && _super.apply(this, arguments) || this;
//         }
export const FilterForm: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const List: React.ComponentType<any>;
// function (props) { return (react_1.default.createElement(ra_core_1.ListController, __assign({}, props), function (controllerProps) { return react_1.default.createElement(exports.ListView, __assign({}, props, controllerProps)); })); }
export const ListView: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const ListActions: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const ListGuesser: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const ListToolbar: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const Pagination: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const PaginationLimit: React.ComponentType<any>;
// function ShouldUpdate() {
//         _classCallCheck(this, ShouldUpdate);
// 
//         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
//       }
export const SimpleList: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }
export const SingleFieldList: React.ComponentType<any>;
// function WithStyles(props, context) {
//         var _this;
// 
//         (0, _classCallCheck2.default)(this, WithStyles);
//         _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
//         _this.disableStylesGeneration = false;
//         _this.jss = null;
//         _this.sheetOptions = null;
//         _this.sheetsManager = sheetsManager;
//         _this.stylesCreatorSaved = null;
//         _this.theme = null;
//         _this.unsubscribeId = null;
//         _this.state = {};
//         _this.jss = context[ns.jss] || jss;
//         var muiThemeProviderOptions = context.muiThemeProviderOptions;
// 
//         if (muiThemeProviderOptions) {
//           if (muiThemeProviderOptions.sheetsManager) {
//             _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
//           }
// 
//           _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
//         } // Attach the stylesCreator to the instance of the component as in the context
//         // of react-hot-loader the hooks can be executed in a different closure context:
//         // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
// 
// 
//         _this.stylesCreatorSaved = stylesCreator;
//         _this.sheetOptions = (0, _extends2.default)({
//           generateClassName: generateClassName
//         }, context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.
// 
//         _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;
// 
//         _this.attach(_this.theme);
// 
//         _this.cacheClasses = {
//           // Cache for the finalized classes value.
//           value: null,
//           // Cache for the last used classes prop pointer.
//           lastProp: null,
//           // Cache for the last used rendered classes pointer.
//           lastJSS: {}
//         };
//         return _this;
//       }

}
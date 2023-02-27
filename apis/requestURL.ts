const prefix = 'api/v1';

export const GET_PROFILE = `${prefix}/user/profile`;
export const GET_USER_ORDERS = `${prefix}/order`;
export const GET_USER_ORDERS_DETAIL = (_id: number) => `${prefix}/order/${_id}/detail`;
export const GET_USER_ORDERS_LOG_DETAIL = (_id: number) => `${prefix}/order/${_id}/logistics/detail`;
export const GET_USER_DAILY_SEQUENCE = `${prefix}/user/activity/daily-check/record`;
export const GET_ADMIN_PROFILE = `${prefix}/admin/user/profile`;
export const GET_ADMIN_ORDERS = `${prefix}/admin/order`;
export const GET_ADMIN_ORDERS_DETAIL = (_id: number) => `${prefix}/admin/order/${_id}/detail`;
export const GET_ADMIN_ORDERS_LOG_DETAIL = (_id: number) => `${prefix}/admin/order/${_id}/logistics/detail`;
export const GET_PRODUCT = (_categoryId: '') => `${prefix}/product?categoryId=${_categoryId}`;
export const GET_ALL_PRODUCT = `${prefix}/product`;
export const GET_WEB_PAGES = `${prefix}/web-page`;
export const GET_PRODUCT_CATEGORY = `${prefix}/product-category`;
export const GET_DAILY_SEQUENCE = `${prefix}/check-content/sequence`;
export const GET_HOME_BANNER = `${prefix}/home-banner`;

export const USER_REGISTER = `${prefix}/user/register`;
export const USER_LOGIN = `${prefix}/user/login`;
export const ADMIN_LOGIN = `${prefix}/admin/user/login`;

export const POST_HOME_BANNER = `${prefix}/admin/home-banner`;
export const POST_PRODUCT = `${prefix}/admin/product`;
export const POST_PRODUCT_CATEGORY = `${prefix}/admin/product-category`;
export const POST_USER_ACTIVATATION = `${prefix}/user/activity/activate`;
export const POST_USER_DAILY_CHECK = (_id: number) => `${prefix}/user/activity/daily-check/${_id}`;
export const POST_PAYMENT_PRE = `${prefix}/payment/pre-settlement`;
export const POST_PAYMENT = `${prefix}/payment`;

export const UPDATE_HOME_BANNER = (_id: number) => `${prefix}/admin/home-banner/${_id}`;
export const UPDATE_PRODUCT = (_id: number) => `${prefix}/admin/product/${_id}`;
export const UPDATE_PRODUCT_CATEGORY = (_id: number) => `${prefix}/admin/product-category/${_id}`;
export const UPDATE_WEB_PAGES = (_id: number) => `${prefix}/admin/web-page/${_id}`;

export const DELETE_HOME_BANNER = (_id: number) => `${prefix}/admin/home-banner/${_id}`;
export const DELETE_PRODUCT = (_id: number) => `${prefix}/admin/product/${_id}`;
export const DELETE_PRODUCT_CATEGORY = (_id: number) => `${prefix}/admin/product-category/${_id}`;

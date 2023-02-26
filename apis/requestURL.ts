const API_VERSION_PREFIX = 'api/v1';

export const GET_PROFILE = `${API_VERSION_PREFIX}/user/profile`;
export const GET_USER_ORDERS = `${API_VERSION_PREFIX}/order`;
export const GET_ADMIN_PROFILE = `${API_VERSION_PREFIX}/admin/user/profile`;
export const GET_ADMIN_ORDERS = `${API_VERSION_PREFIX}/admin/order`;
export const GET_PRODUCT = (_categoryId: '') => `${API_VERSION_PREFIX}/product?categoryId=${_categoryId}`;
export const GET_ALL_PRODUCT = `${API_VERSION_PREFIX}/product`;
export const GET_PRODUCT_CATEGORY = `${API_VERSION_PREFIX}/product-category`;
export const GET_DAILY_SEQUENCE = `${API_VERSION_PREFIX}/check-content/sequence`;
export const GET_HOME_BANNER = `${API_VERSION_PREFIX}/home-banner`;

export const USER_REGISTER = `${API_VERSION_PREFIX}/user/register`;
export const USER_LOGIN = `${API_VERSION_PREFIX}/user/login`;
export const ADMIN_LOGIN = `${API_VERSION_PREFIX}/admin/user/login`;

export const POST_HOME_BANNER = `${API_VERSION_PREFIX}/admin/home-banner`;
export const POST_PRODUCT = `${API_VERSION_PREFIX}/admin/product`;
export const POST_PRODUCT_CATEGORY = `${API_VERSION_PREFIX}/admin/product-category`;
export const POST_USER_ACTIVATATION = `${API_VERSION_PREFIX}/user/activity/activate`;
export const POST_PAYMENT = `${API_VERSION_PREFIX}/payment`;

export const UPDATE_HOME_BANNER = (_id: number) => `${API_VERSION_PREFIX}/admin/home-banner/${_id}`;
export const UPDATE_PRODUCT = (_id: number) => `${API_VERSION_PREFIX}/admin/product/${_id}`;
export const UPDATE_PRODUCT_CATEGORY = (_id: number) => `${API_VERSION_PREFIX}/admin/product-category/${_id}`;

export const DELETE_HOME_BANNER = (_id: number) => `${API_VERSION_PREFIX}/admin/home-banner/${_id}`;
export const DELETE_PRODUCT = (_id: number) => `${API_VERSION_PREFIX}/admin/product/${_id}`;
export const DELETE_PRODUCT_CATEGORY = (_id: number) => `${API_VERSION_PREFIX}/admin/product-category/${_id}`;

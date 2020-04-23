import { combineReducers } from 'redux';
import userReducer from '../user/user-slice';
import cartReducer from '../cart/cart-slice';
import directoryReducer from '../directory/directory-slice';
import shopReducer from '../shop/shop-slice';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

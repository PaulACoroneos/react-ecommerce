import { combineReducers } from 'redux';
import userReducer from '../user/user-slice';
import cartReducer from '../cart/cart-slice';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

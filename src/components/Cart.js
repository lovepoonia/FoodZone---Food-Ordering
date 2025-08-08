import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem";
import { clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";


const Cart = ()=> {
    const cartItems = useSelector((store) => store.cart.items);
     
    const dispatch = useDispatch();
    const handleclear = () =>{
      dispatch(clearCart());
      alert("Order Placed Successfully");
    }

  return (
    <div className=" text-center m-4 p-4" >
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleclear}>Order Place</button>
        {cartItems.length == 0 && <div className="text-2xl font-bold">Cart is Empty <Link to="/"><span className="text-blue-500">Go Back</span></Link></div>}
            <CartItem item={cartItems}/>
        </div>
    </div>
  )
}

export default Cart
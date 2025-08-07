import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { removeItem } from "../utils/cartSlice";
import { useState } from "react";

const CartItemData = ({item}) => {
    const dispatch = useDispatch();
    const handelRemoveItem = (item) => {
        dispatch(removeItem(item.card.info.id));
    }
    const [quantity, setQuantity] = useState(1);
    const info = item.card.info;
  return (
    <div>        
        <div key={info.id} className="flex justify-between items-center p-2 border-b-2">
            <div>
                
                <h2 className="font-bold">{info.name}</h2>
                <p>Price: ₹{(info.price*quantity || info.defaultPrice*quantity) / 100}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <img src={CDN_URL+ item.card.info.imageId} alt="New Add Coming Soon..." className="w-32"/>
                <div className="flex items-center gap-2">
                    <button onClick={() => setQuantity(quantity => quantity > 1 ? quantity - 1 : 1)} className="bg-gray-300 px-2 rounded">-</button>
                    <button onClick={() => setQuantity(quantity + 1)} className="bg-green-500 text-white px-2 rounded">+</button>
                    <button className="bg-red-500 text-white px-2 rounded" onClick={()=>{handelRemoveItem(item)}}>Remove</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItemData

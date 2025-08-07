import CartItemData from "./CartItemData";

const CartItem = ({ item }) => {
    return (
        <div className="p-2 border-t-2 border-gray-300">
            {item.map((itemCart) => (
                <CartItemData key={itemCart.card.info.id} item={itemCart} />
            ))}
        </div>
    );
};

export default CartItem;

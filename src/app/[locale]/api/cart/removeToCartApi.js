const URL = "https://back.suwalifstore.com/cart/remove/";
const lang = window.localStorage.getItem("translation")
const USER_TOKEN = localStorage.getItem("user");
const removeToCartApi = async (setError, setAllCart, setCartNumber, setloading, productId) => {
    setloading(true)
    try {
        const response = await fetch(`${URL}${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "accept-language": lang,
                'authorization': `suwOZ0${USER_TOKEN}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            setAllCart(result.cartItems)
            setCartNumber(result.totalPrice)
            setloading(false)
        } else {
            if (response.status == 500) {
                setError(result.message);
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)
    }
}
export default removeToCartApi;
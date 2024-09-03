const URL = "https://back.suwalifstore.com/cart/update/";
const lang = window.localStorage.getItem("translation")
const USER_TOKEN = window.localStorage.getItem("user")
const updateToCartApi = async (setCartLoading, setError, productId, data, setAllCart, setCartNumber) => {
    setCartLoading(true)
    try {
        const response = await fetch(`${URL}${productId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang,
                'authorization': `suwOZ0${USER_TOKEN}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            setAllCart(result.cartItems)
            setCartNumber(result.totalPrice)
            setCartLoading(false);
        } else {
            if (response.status == 404) {
                setError(result.message)
                setCartLoading(false);
            } else if (response.status == 400) {
                setError(result.message)
                setCartLoading(false);
            }
            else if (response.status == 500) {
                setError(result.message)
                setCartLoading(false);
            }
            setCartLoading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setCartLoading(false)
    }
}
export default updateToCartApi;
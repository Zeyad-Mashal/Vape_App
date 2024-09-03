const URL = "https://back.suwalifstore.com/product/details/";
const lang = window.localStorage.getItem("translation")
const getProductByIdApi = async (setloading, setError, setProducts, setRelatedproducts, productId, setOriginalPrice) => {
    setloading(true)
    try {
        const response = await fetch(`${URL}${productId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
        });

        const result = await response.json();

        if (response.ok) {
            setProducts(result.product)
            setOriginalPrice(result.product.price)
            setRelatedproducts(result.relatedProducts)
            setloading(false);

        } else {
            if (response.status == 404) {
                setError(result.message)
                setloading(false);
            } else if (response.status == 500) {
                setError(result.message)
                setloading(false);
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)
    }
}
export default getProductByIdApi;
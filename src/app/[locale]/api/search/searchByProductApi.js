const URL = "https://back.suwalifstore.com/product/search?q=";
const lang = window.localStorage.getItem("translation")
const searchByProductApi = async (setloading, setError, setSearchedProducts, product) => {
    setloading(true)
    try {
        const response = await fetch(`${URL}${product}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
        });

        const result = await response.json();

        if (response.ok) {
            setSearchedProducts(result.products)
            setloading(false);
            console.log(result.products);

        } else {
            if (response.status == 400) {
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
export default searchByProductApi;
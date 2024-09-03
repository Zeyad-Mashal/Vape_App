const URL = "https://back.suwalifstore.com/product/getByCategory/";
const lang = window.localStorage.getItem("translation")
const getByCategoryApi = async (setloading, setError, setAllProductsByCategory, categoryId) => {
    setloading(true)
    try {
        const response = await fetch(`${URL}${categoryId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
        });

        const result = await response.json();

        if (response.ok) {
            setAllProductsByCategory(result.products)
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
export default getByCategoryApi;
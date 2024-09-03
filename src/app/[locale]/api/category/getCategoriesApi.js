const URL = "https://back.suwalifstore.com/category/get";
const lang = window.localStorage.getItem("translation")
const getCategoriesApi = async (setloading, setError, setAllCategories) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
        });

        const result = await response.json();
        console.log(result);

        if (response.ok) {
            setAllCategories(result.categories)
            setloading(false);
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
export default getCategoriesApi;
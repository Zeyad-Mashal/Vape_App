const URL = "https://back.suwalifstore.com/product/getBySection?section=";
const lang = window.localStorage.getItem("translation")
const getBySection = async (setloading, setError, setBySection, sections) => {
    setloading(true)
    try {
        const response = await fetch(`${URL}${sections}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
        });

        const result = await response.json();

        if (response.ok) {
            setBySection(result.products)
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
export default getBySection;
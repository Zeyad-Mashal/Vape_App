const URL = "https://back.suwalifstore.com/feedback/get?type=visible";
const getRatingApi = async (setloading, setError, setAllRatings) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if (response.ok) {
            setAllRatings(result)
            setloading(false);
        } else {
            if (response.status == 500) {
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
export default getRatingApi;
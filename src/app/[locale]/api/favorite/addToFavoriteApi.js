const URL = "https://back.suwalifstore.com/favorite/add/";
const lang = window.localStorage.getItem("translation")
const USER_TOKEN = window.localStorage.getItem("user")
const addToFavoriteApi = async (setloading, setError, productId) => {
    setloading(true)
    try {
        const response = await fetch(`${URL}${productId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang,
                'authorization': `suwOZ0${USER_TOKEN}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            document.querySelector(".fav_icon").style.color = "red";
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
export default addToFavoriteApi;
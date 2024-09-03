const URL = "https://back.suwalifstore.com/favorite/remove/";
const lang = window.localStorage.getItem("translation")
const USER_TOKEN = localStorage.getItem("user");
const deleteFavoriteApi = async (setError, setAllFavorite, setLoading, productId) => {
    setLoading(true)
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
            setAllFavorite(result.favorites)
            setLoading(false)
        } else {
            if (response.status == 404) {
                setError(result.message);
            }
            setLoading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setLoading(false)
    }
}
export default deleteFavoriteApi;
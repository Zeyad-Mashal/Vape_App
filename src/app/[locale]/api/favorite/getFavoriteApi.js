const URL = "https://back.suwalifstore.com/favorite/get";
const lang = window.localStorage.getItem("translation")
const USER_TOKEN = window.localStorage.getItem("user")
const getFavoriteApi = async (setloading, setError, setAllFavorite) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang,
                'authorization': `suwOZ0${USER_TOKEN}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            setAllFavorite(result.favorites)
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
export default getFavoriteApi;
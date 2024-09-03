const URL = "https://back.suwalifstore.com/auth/login";
const lang = window.localStorage.getItem("translation");
const LoginAPI = async (setLoading, setError, data) => {
    setLoading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            setLoading(false);
            document.querySelector(".code").style.display = "flex"
        } else {
            if (response.status == 404) {
                setError(result.message)
                setLoading(false);
            } else if (response.status == 400) {
                setError(result.message)
                setLoading(false);
            }
            else if (response.status == 500) {
                setError(result.message)
                setLoading(false);
            }
            setLoading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setLoading(false)
    }
}
export default LoginAPI;
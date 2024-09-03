const URL = "https://back.suwalifstore.com/auth/verify";
const lang = window.localStorage.getItem("translation")
const VerificationLoginCode = async (setloading, setError, data) => {
    setloading(true)
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



        if (response.ok) {
            setloading(false);
            localStorage.setItem("user", result.token);
            window.location.reload();
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
export default VerificationLoginCode;
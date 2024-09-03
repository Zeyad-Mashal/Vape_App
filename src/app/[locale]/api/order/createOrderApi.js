const URL = "https://back.suwalifstore.com/order/create";
const USER_TOKEN = window.localStorage.getItem("user")
const createOrderApi = async (setloading, setError, setOrder, setUser, orderData) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'authorization': `suwOZ0${USER_TOKEN}`
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();
        console.log(result);


        if (response.ok) {
            setOrder(result.order)
            setUser(result.user)
            document.querySelector(".order_created").style.display = "flex";
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
export default createOrderApi;
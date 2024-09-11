"use client"
import { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"

function BootStrapClient() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, []);
    return null
}

export default BootStrapClient;
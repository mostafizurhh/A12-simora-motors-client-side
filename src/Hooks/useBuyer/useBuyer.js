import { useEffect, useState } from "react"

export const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/Buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsBuyer(data.isBuyer)
                    setIsBuyerLoading(false)
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading,]
}
import { useEffect, useState } from "react";
import { carJson } from "../car.js"
const Page1 = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        setCars(carJson)
    }, [])
    return (
        <div className='h-max	 bg-red-300'>Pageasdassfddad 1
            Pageasdassfddad 1Pageasdassfddad 1
            <br />
            Pageasdassfddad 1

        </div>
    )
}

export default Page1
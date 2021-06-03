import {useState, useEffect} from 'react'
import axios from 'axios'

const useGetCountries = () => {
    const [countries, setCountries] = useState({})
    useEffect(
        () => {
            const fetchCountries = async () => {
                const api = 'https://docs.openaq.org/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country'
            try{
                const response = await axios.get(api)
                setCountries(response.data.results)
            }
            catch(error) {
                console.log('Error is : ', error)
            }
            }
            fetchCountries()
        },
        []
    )
    return [{countries}]
}
export default useGetCountries

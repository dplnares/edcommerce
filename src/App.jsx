import axios from "axios"
import { useEffect, useState } from "react"

export const App = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get('https://dev-ecommerce.alexyslozada.com/api/v1/public/products')
    .then(({data}) => setProducts(data.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Hola mundo</h1>
      <p>[JSON.stringify(products)]</p>  
    </div>
    
  )
}
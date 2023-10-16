import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // in the hooks we can't pass async methods to the 
  // How to write efy
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
      ; (async () => {
        try {
          setLoading(true)
          setError(false)
          const response = await axios.get('/api/products?search=' + category, {
            signal: controller.signal
          });
          setProduct(response.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request cancelled', error.message);
            return
          }
          console.error('Error fetching data:', error);
          setError(true)
        } finally {
          setLoading(false)
        }
      })()

    return () => {
      controller.abort()
    }

  }, [category]);
  if (error) {
    return <div>
      Error in loading Data
    </div>
  }
  if (loading) {
    return <div>Loading data ....</div>
  }
  return (
    <>
      <h1> Anukul and React Query</h1>
      <h2>No of product : {product.length}</h2>
      <input type="text" placeholder="search" onChange={(e) => { setCategory(e.target.value) }} value={category} />
      <div>
        <ul>
          {
            product.map((product) => {
              return <p>{product.productName} category : {product.category} </p>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App

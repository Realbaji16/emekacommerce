import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products/Products'

const CategoryProduct = () => {

    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() =>{
        const fetchProdducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProdducts()
    }, [])

      if (products.length === 0) return <div>Loading....</div>
    return (
    <div>
        <Products products ={products}/>
    </div>
  )
}

export default CategoryProduct
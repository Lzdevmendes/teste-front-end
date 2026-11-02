import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/productService'
import type { Product } from '../types/product'

type Status = 'loading' | 'success' | 'error'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    let active = true
    fetchProducts()
      .then((data) => {
        if (!active) return
        setProducts(data)
        setStatus('success')
      })
      .catch(() => {
        if (active) setStatus('error')
      })
    return () => {
      active = false
    }
  }, [])

  return { products, status }
}

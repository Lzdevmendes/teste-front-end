import type { Product, ProductsResponse } from '../types/product'

const REMOTE_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
const DEV_PROXY_URL = '/api/produtos'
const LOCAL_URL = `${import.meta.env.BASE_URL}produtos.json`

async function request(url: string): Promise<Product[]> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Falha ao buscar ${url}: ${response.status}`)
  const data: ProductsResponse = await response.json()
  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inesperada da API de produtos')
  }
  return data.products
}

// O servidor da API nao envia CORS. Em dev usamos o proxy do Vite.
// Em producao a copia local em /produtos.json garante o funcionamento.
export async function fetchProducts(): Promise<Product[]> {
  const sources = import.meta.env.DEV
    ? [DEV_PROXY_URL, REMOTE_URL, LOCAL_URL]
    : [REMOTE_URL, LOCAL_URL]

  let lastError: unknown
  for (const url of sources) {
    try {
      return await request(url)
    } catch (error) {
      lastError = error
    }
  }
  throw lastError
}

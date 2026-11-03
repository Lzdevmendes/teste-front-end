import { formatCurrency, formatInstallment } from './formatCurrency'

describe('formatCurrency', () => {
  it('formata em reais com virgula decimal', () => {
    expect(formatCurrency(1499.9)).toBe('R$ 1.499,90')
  })

  it('formata valores inteiros', () => {
    expect(formatCurrency(15000)).toBe('R$ 15.000,00')
  })
})

describe('formatInstallment', () => {
  it('divide o valor em 2 parcelas por padrao', () => {
    expect(formatInstallment(100)).toBe('ou 2x de R$ 50,00 sem juros')
  })
})

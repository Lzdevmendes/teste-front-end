const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatCurrency(value: number): string {
  return brl.format(value).replace(/\s/g, ' ')
}

export function formatInstallment(value: number, parts = 2): string {
  return `ou ${parts}x de ${formatCurrency(value / parts)} sem juros`
}

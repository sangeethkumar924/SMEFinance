export default function formatCurrency(value, currency = 'INR'){
const num = Number(value) || 0
return new Intl.NumberFormat('en-IN', { style: 'currency',
currency }).format(num)
}
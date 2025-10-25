export function required(value){
return value ? null : 'Required'
}
export function minLength(value, len){
return (value && value.length >= len) ? null : `Minimum ${len} characters`
}
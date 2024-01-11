export interface IFormField {
  rules?: { required?: boolean; message?: string }[]
  name: string
  placeholder?: string
}

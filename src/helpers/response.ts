interface TypeResponse {
  error: boolean
  msg: string
  data: any
}

export const successResponse = (data: any): TypeResponse => {
  return {
    error: false,
    msg: 'Ok',
    data
  }
}

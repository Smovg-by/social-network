export const required = (value: string) => {
  return value ? undefined : 'Field if required'
}

export const maxLengthCreator = (maxlength: number) => (value: string) => {
  return value.length > maxlength ? (`Max length is ${maxlength} symbols`) : undefined
}

export const maxLength10 = maxLengthCreator(10)
export const maxLength20 = maxLengthCreator(20)

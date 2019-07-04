import { INC, DEC } from '../actions/actionTypes'

export const increment = () => ({ type: INC })

export const decrement = () => {
  return {
    type: DEC
  }
}
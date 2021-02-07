export default interface Card {
  id: number
  name: string
  type: string
  description: string
  cardImages: {
    original: string
    small: string
  }
}
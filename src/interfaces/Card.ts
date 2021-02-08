export default interface Card {
  id: number | undefined
  name: string | undefined
  type: string | undefined
  description: string | undefined
  cardImages: {
    original: string | undefined
    small: string | undefined
  } | undefined
}
import Card from "../interfaces/Card"


export const getCards = (cardsFromAPI: any[]): Card[] => {
  return cardsFromAPI.map(cardFromAPI => showCard(cardFromAPI))
}

export const showCard = (cardFromAPI: any): Card => {

  const card: Card = {
    id: cardFromAPI.id,
    name: cardFromAPI.name,
    description: cardFromAPI.desc,
    type: cardFromAPI.type,
    cardImages: {
      original: cardFromAPI.card_images[0].image_url,
      small: cardFromAPI.card_images[0].image_url_small
    }
  }

  return card
}
import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { getCards } from '../../services'
import styles from './Cards.module.css'
import CardItem from './components/CardItem'

export default function Cards() {
  const [offset, setOffset] = useState(0)

  const getCardsService = (limit: number, offset: number) => {
    return `?num=${limit}&offset=${offset}&view=List&misc=yes`
  }

  function nextPage() {
    const newOffset = offset + 30
    setOffset(newOffset)
    window.scrollTo(0, 0)
  }

  function backPage() {
    if (offset > 0) {
      const newOffset = offset - 30
      setOffset(newOffset)
    }
    window.scrollTo(0, 0)
  }

  const { data } = useFetch<any>(getCardsService(30, offset))

  if (!data) {
    return (
      <h1>Loading...</h1>
    )
  }

  const cards = getCards(data.data)

  return (
    <>
      <div className={styles.cards}>
        {cards ? cards.map(card => (
          <CardItem key={card.id} card={card} />
        )) : null}
      </div>
      <hr />
      <div className={styles['page-buttons-content']}>
        <button
          className={`${styles['page-button']}`}
          onClick={backPage} disabled={offset === 0}
        >
          Back
        </button>
        <button
          className={`${styles['page-button']}`}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  )
}
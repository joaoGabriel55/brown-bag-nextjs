import React from 'react'
import Link from 'next/link'
import Card from '../../../../interfaces/Card'
import styles from './CardItem.module.css'


export default function CardItem({ card }) {
  const { id, name, description, type, cardImages } = card as Card
  return (
    <div className={styles['card-container']}>
      <Link href={{ pathname: `/showCard/${id}` }}>
        <div className={styles['card-image']}>
          <figure>
            <img src={cardImages.small} width="108px" alt={name} />
          </figure>
        </div>
      </Link>
      <div className={styles['card-info']}>
        <h3>{name}</h3>
        <span>{description}</span>
        <div className={styles['card-type']}>
          <span><strong>Type: {type}</strong></span>
        </div>
      </div>
    </div>
  )
}

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { showCard } from '../../services'
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import styles from './ShowCard.module.css'

export default function ShowCard() {
  const router = useRouter()
  const { query: { id } } = router

  const showCardService = (id: number) => {
    return `?id=${id}`
  }

  const { data } = useFetch<any>(showCardService(Number(id)))

  if (!data) {
    return (
      <h1>Loading...</h1>
    )
  }
  const card = showCard(data.data[0])

  return (
    <AnimatedCard config={{
      rotation: 18, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
      transition: {
        duration: 0.5,
        timingMode: "ease"
      },
      transform: {
        figureIcon: {
          rotation: -20,
          translateZ: -160
        }
      }
    }}
      style={{
        width: 'calc(100vh - 100px)'
      }}
    >
      <div className={styles['card-figure-container']}>
        <figure>
          <img src={card.cardImages.original} alt={card.name} />
        </figure>
      </div>
    </AnimatedCard>
  )
}

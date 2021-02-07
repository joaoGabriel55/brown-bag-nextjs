import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import React from 'react';
import { showCard } from '../../services';
import { API } from '../../services/api';
import styles from './ShowCard.module.css';

export default function ShowCard({ card }) {

  if (!card) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <AnimatedCard className={styles['card-figure-container']}
      config={{
        rotation: 18,
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
    >
      <div>
        <figure>
          <img src={card.cardImages.original} alt={card.name} />
        </figure>
      </div>
    </AnimatedCard>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.params
  const showCardService = (id: number) => `?id=${id}`

  const response = await API.get(showCardService(id));
  const card = showCard(response.data.data[0])

  return {
    props: {
      card: card
    }
  }

}

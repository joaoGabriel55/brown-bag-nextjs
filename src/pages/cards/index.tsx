import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export default function Cards() {
  const GET_CARDS_URL = `?num=30&offset=30&view=List&misc=yes`

  const { data, error } = useFetch<any>(GET_CARDS_URL)

  return (
    <div>
      {data ? data.data.map(card => (
        <div>{card.name}</div>
      )) : null}
      {/* {JSON.stringify(data.data)} */}
    </div>
  )
}
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Cards from './cards';
import Alert from './shared/components/alert';
import styles from './styles/Home.module.css';


export default function Home() {

  const [email, setEmail] = useState('')
  const [openAlert, setOpenAlert] = useState(false)


  function subscribeToReceiveNewCardsNotification(event: FormEvent) {
    event.preventDefault()
    axios.post('api/subscribe', { email })
      .then(() => {
        setEmail('')
        setOpenAlert(true)
        setTimeout(() => {
          setOpenAlert(false)
        }, 5000)
      })
      .catch(() => {
        console.log('Error');
      })
  }


  return (
    <div className={styles.container}>
      <Alert open={openAlert} text={'Subscription done!'} />
      <form
        className={styles['input-email']}
        onSubmit={subscribeToReceiveNewCardsNotification}
      >
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <button className={styles['subscribe-button']}>Subscribe</button>
      </form>

      <Cards />
    </div>
  )
}

import { useRef, useState } from 'react';
import Image from 'next/image';
import background from '../../public/subscribe-background.jpg';

import Notification from '../ui/notification';

import styles from './subscribe.module.scss';

function Subscribe() {
  const [notification, setNotification] = useState(null);
  const emailRef = useRef('');

  async function handleSubmit(e) {
    e.preventDefault();

    setNotification({ status: 'pending', message: 'Registering email...' });

    const response = await fetch('/api/email/', {
      method: 'POST',
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok)
      setNotification({ status: 'error', message: 'Something went wrong!' });

    if (response.status === 201) {
      setNotification({ status: 'success', message: data.message });
    } else {
      setNotification({ status: 'error', message: data.message });
    }
    emailRef.current.value = '';
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={background}
          alt="subscribe background"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Subscribe to blog</h1>
          <h4 className={styles.paragraph}>
            Sign up to our newsletters and we&apos;ll keep <br /> you in the
            loop.
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email Address..."
              className={styles.input}
              required
              ref={emailRef}
            />
            <input type="submit" value="Subscribe" className={styles.button} />
          </form>
        </div>
      </div>
      {notification && (
        <Notification
          title={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default Subscribe;

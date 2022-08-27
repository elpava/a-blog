import { useRef, useState } from 'react';

import PrimaryButton from '../ui/primary-button';
import Notification from '../ui/notification';

import styles from './contact.module.scss';

async function storeData(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Something went wrong!');

  return data;
}

function Contact() {
  const [requestStatus, setRequestStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const nameInputRef = useRef('');
  const emailInputRef = useRef('');
  const messageInputRef = useRef('');
  let notificationMessage;

  const onSubmitHandler = async e => {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredMessage = messageInputRef.current?.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    setRequestStatus('pending');

    try {
      await storeData(formData);

      setRequestStatus('success');
    } catch (err) {
      setRequestStatus('error');
      setErrorMessage(err.message);
    }

    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageInputRef.current.value = '';
  };

  switch (requestStatus) {
    case 'pending':
      notificationMessage = 'Sending message...';
      break;
    case 'success':
      notificationMessage = 'Message sent successfully.';
      break;
    case 'error':
      notificationMessage = errorMessage;
      break;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Let&apos;s see how we can help</h1>
        <p>
          One of our readers asked about using positive language when a customer
          makes unscalable support requests.
        </p>
        <form onSubmit={onSubmitHandler}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            ref={nameInputRef}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            ref={emailInputRef}
          />
          <textarea
            className={styles.input}
            rows={8}
            placeholder="Message"
            ref={messageInputRef}
          />
          <PrimaryButton type="submit" text="submit" />
        </form>
        {requestStatus && (
          <Notification title={requestStatus} message={notificationMessage} />
        )}
      </div>
    </section>
  );
}

export default Contact;

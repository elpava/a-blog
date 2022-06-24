import { useRef } from 'react';

import PrimaryButton from './ui/primary-button';

import styles from './contact-page.module.scss';

function ContactPage() {
  const nameInputRef = useRef('');
  const emailInputRef = useRef('');
  const messageInputRef = useRef('');

  const onSubmitHandler = async e => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    console.log(data);

    nameInputRef.current.value =
      emailInputRef.current.value =
      messageInputRef.current.value =
        '';
  };

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
            value={nameInputRef.current.value}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            ref={emailInputRef}
            value={emailInputRef.current.value}
          />
          <textarea
            className={styles.input}
            rows={8}
            placeholder="Message"
            ref={messageInputRef}
            value={messageInputRef.current.value}
          />
          <PrimaryButton type="submit" text="submit" />
        </form>
      </div>
    </section>
  );
}

export default ContactPage;

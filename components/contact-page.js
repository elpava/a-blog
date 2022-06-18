import Link from 'next/link';

import PrimaryButton from './ui/primary-button';

import styles from './contact-page.module.scss';

function ContactPage() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Let&apos;s see how we can help</h1>
        <p>
          One of our readers asked about using positive language when a customer
          makes unscalable support requests.
        </p>
        <form>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="email" placeholder="Email" />
          <textarea className={styles.input} rows={8} placeholder="Message" />
          <Link href="#">
            <a>
              <PrimaryButton text="submit" />
            </a>
          </Link>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;

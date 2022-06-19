import Image from 'next/image';
import background from '../public/subscribe-background.jpg';

import styles from './subscribe.module.scss';

function Subscribe() {
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
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email Address..."
              className={styles.input}
              required
            />
            <input type="submit" value="Subscribe" className={styles.button} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;

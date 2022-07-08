import Image from 'next/image';
import Subscribe from '../containers/subscribe';

import styles from './about.module.scss';

function About() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1>
            Welcome to A Blog. We&apos;re glad and grateful you&apos;re here.
          </h1>
          <p>
            If you&apos;re struggling with your About page, you simply may not
            know what to write outside of “I blog about this because I have x
            experience in that.” If this is the case, you&apos;re going about it
            all wrong.
          </p>
          <p>
            However, if you take a minute to learn why this type of page is
            important, you&apos;ll be able to approach it from a completely
            different perspective. The first benefit is increased traffic and
            better SEO. Customers and casual internet users alike are drawn to
            this page.
          </p>
          <p>
            Similar to your Features and Services pages, they want to know what
            you&apos;re about and what you have to offer. Over time, this page
            will become among the most visited pages on your website even years
            after you&apos;ve created it.
          </p>
          <p>
            Even Google knows the importance of this page. If you search for a
            brand&apos;s name, you&apos;ll notice their About page is cited as a
            top-level page on their website in the search result snippet.
          </p>
          <p>&nbsp;</p>
        </div>

        <div className={styles.images}>
          <div>
            <Image
              src="/about-page-image-01.jpg"
              alt="girl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="/about-page-image-02.jpg"
              alt="girl"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={styles.content}>
          <p>&nbsp;</p>
          <h2>Our Story</h2>
          <p>
            Blog posts allow you and your business to publish insights,
            thoughts, and stories on your website about any topic. They can help
            you boost brand awareness, credibility, conversions, and revenue.
            Most importantly, they can help you drive traffic to your website.
          </p>
          <p>
            But in order to begin making posts for a blog — you have to learn
            how to start one, first. Let&apos;s dive in.
          </p>
        </div>
      </section>

      <Subscribe />

      <section className={styles.container}>
        <div className={styles.content}>
          <p>Let&apos;s get started with an important question.</p>
          <p>
            Blogging may mean different things depending on your niche — so
            let&apos;s begin with this definition.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;

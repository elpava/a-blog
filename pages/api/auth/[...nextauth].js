import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDatabase } from '../../../lib/mongodb-utils';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectDatabase();

        const db = client.db('blog');

        const user = await db
          .collection('users')
          .findOne({ username: credentials.username });

        if (!user) {
          client.close();
          throw new Error('User not found');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log in');
        }

        client.close();

        return { username: user.username };
      },
    }),
  ],
});

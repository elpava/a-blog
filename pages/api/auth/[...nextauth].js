import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDatabase } from '../../../lib/mongodb-utils';
import { verifyPassword } from '../../../lib/auth';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
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

        return { name: user.username };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session }) {
      session.id = 'ks282ks';
      session.additionalData = '😀';

      return session;
    },
  },
};

export default NextAuth(authOptions);

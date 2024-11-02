import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Vk from "@auth/core/providers/vk";
import Google from "next-auth/providers/google"

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [GitHub, Vk({
      accessTokenUrl: `https://oauth.vk.com/access_token?v=${apiVersion}`,
      requestTokenUrl: `https://oauth.vk.com/access_token?v=${apiVersion}`,
      authorizationUrl: `https://oauth.vk.com/authorize?response_type=code&v=${apiVersion}`,
      profileUrl: `https://api.vk.com/method/users.get?fields=photo_100&v=${apiVersion}`,
    }), Google],
})


    // callbacks: {
    //     async signIn(user, account, profile) {
    //         if (account.provider === 'credentials') {
    //             // Handle password login
    //             const hashedPassword = await bcrypt.hash(account.email, 10);
    //             if (account.email === 'your_email' && hashedPassword === 'your_hashed_password') {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     },
    // },
    // providers: [
    //     CredentialsProvider({
    //         name: 'Credentials',
    //         credentials: {
    //             username: { label: 'Email', type: 'email' },
    //             password: { label: 'Password', type: 'password' },
    //         },
    //         async authorize(credentials) {
    //             // Validate the password against the hashed password in your database
    //             const user = await prisma.user.findFirst({ where: { email: credentials.username } });
    //             if (user && await bcrypt.compare(credentials.password, user.password)) {


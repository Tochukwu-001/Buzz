import GitHubProvider from "next-auth/providers/github";
import { cert } from "firebase-admin/app";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        // EmailProvider({
        //     server: {
        //         host: process.env.EMAIL_SERVER_HOST,
        //         port: process.env.EMAIL_SERVER_PORT,
        //         secure: true,
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER,
        //             pass: process.env.EMAIL_SERVER_PASSWORD
        //         }
        //     },
        //     from: process.env.EMAIL_FROM,
        // })
        // {
        //     id: 'resend',
        //     type: 'email',
        //     sendVerificationRequest
        // }
    ],
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.NEXT_PUBLIC_AUTH_FIREBASE_PROJECT_ID,
            clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        })
    }),
    pages: {
        signIn: '/signin',
        verifyRequest: '/verifyRequest',
        error: '/auth/error'
    },

    callbacks: {
        async session({session, user}){
            return{
                ...session,
                ...user
            }
        }
    }
}
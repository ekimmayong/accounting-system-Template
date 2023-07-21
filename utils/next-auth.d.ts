import Nextauth from 'next-auth';

declare module "next-auth"{
    interface session{
        user: {
            id: string,
            username: string
        }
    }
}
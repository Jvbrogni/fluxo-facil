import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '@/infra/firebase';

export const AuthService = {
    async login(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password);
    },
};

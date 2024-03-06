import { googleAuthProvider } from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return signInWithPopup(getAuth(), googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        signOut(getAuth());
    };
};

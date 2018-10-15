import firebase from 'firebase';

const AuthService = {
    onAuthChange: (callback) => {
        firebase.auth().onAuthStateChanged(callback);
    },
    loginWithGoogle: () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(credentials => credentials.user)
    },
    getCurrentUser: () => firebase.auth().currentUser,
    logout: () => firebase.auth().signOut()
};

export default AuthService;
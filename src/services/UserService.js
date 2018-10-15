import firebase from 'firebase';
import AuthService from './AuthService';

const UserService = {
    updateUserData: (userData) => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser)
            return Promise.reject();
        return firebase.firestore().doc(`/users/${currentUser.uid}`).set(userData, {merge: true})
    },
    getUserData: (userId) =>
        firebase.firestore().doc(`/users/${userId}`).get()
            .then(user => user.data())
};

export default UserService;
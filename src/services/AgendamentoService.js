import firebase from 'firebase';
import AuthService from './AuthService';

const AgendamentoService = {
  getAgendamentos: (estabelecimento, data) => {
    const query = firebase.firestore().collection(`/agendamentos`)
    .where('estabelecimento', '==', estabelecimento)
    .where('data', '==', data);

    return (query)
      .get()
      .then((snapshot) => {
        let agendamentos = [];
        snapshot.forEach(doc => agendamentos.push(doc.data()));
        return agendamentos;
      });
  },
  agendar: (data, hora, estabelecimento) => {
    const newPostKey = firebase.database().ref().child('agendamentos').push().key;
    const currentUser = AuthService.getCurrentUser();
        if (!currentUser)
            return Promise.reject();
        return firebase.firestore().doc(`/agendamentos/${newPostKey}`)
            .set({data,
                  hora,
                  estabelecimento,
                  usuario:currentUser.uid}, {merge: true})
  }
};

export default AgendamentoService;
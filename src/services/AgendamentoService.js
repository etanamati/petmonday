import firebase from 'firebase';
import AuthService from './AuthService';

const AgendamentoService = {
  getAgendamentos: (estabelecimento, profissional, data) => {
    const query = firebase.firestore().collection(`/agendamentos`)
    .where('estabelecimento', '==', estabelecimento)
    .where('profissional', '==', profissional)
    .where('data', '==', data);

    return (query)
      .get()
      .then((snapshot) => {
        let agendamentos = [];
        snapshot.forEach(doc => agendamentos.push(doc.data()));
        return agendamentos;
      });
  },
  agendar: ({data, hora, estabelecimento, profissional, observacao}) => {
    const newPostKey = firebase.database().ref().child('agendamentos').push().key;
    const currentUser = AuthService.getCurrentUser();
        if (!currentUser)
            return Promise.reject();
        return firebase.firestore().doc(`/agendamentos/${newPostKey}`)
            .set({data,
                  hora,
                  estabelecimento,
                  profissional,
                  usuario:currentUser.uid}, {merge: true})
  }
};

export default AgendamentoService;

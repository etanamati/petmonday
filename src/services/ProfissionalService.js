import firebase from 'firebase';

const ProfissionalService = {
  getProfissionais: (estabelecimento) => {
    const query = firebase.firestore().collection(`/profissionais`)
    .where('estabelecimento', '==', estabelecimento);

    return (query)
      .get()
      .then((snapshot) => {
        let profissionais = [];
        snapshot.forEach(doc => profissionais.push(doc.data()));
        return profissionais;
      });
  }
};

export default ProfissionalService;
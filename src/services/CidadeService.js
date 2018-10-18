import firebase from 'firebase';

const CidadeService = {
  getCidades: () => {
    const query = firebase.firestore().collection(`/cidades`);

    return (query)
      .get()
      .then((snapshot) => {
        let cidades = [];
        snapshot.forEach(doc => cidades.push(doc.data()));
        return cidades;
      });
  }
};

export default CidadeService;
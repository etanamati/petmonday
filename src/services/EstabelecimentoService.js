import firebase from 'firebase';

const EstabelecimentoService = {
  getEstabelecimentos: (cidade) => {
    const query = firebase.firestore().collection(`/estabelecimento`).where('cidade', '==', cidade.uid);

    return (query)
      .get()
      .then((snapshot) => {
        let estabelecimentos = [];
        snapshot.forEach(doc => estabelecimentos.push(doc.data()));
        return estabelecimentos;
      });
  }
};

export default EstabelecimentoService;
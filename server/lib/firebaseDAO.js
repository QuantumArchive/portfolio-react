
function firebaseDAO (config) {
  const {
    firebaseDB
  } = config
  return {
    getArticles: async () => {
      const articlesMap = await firebaseDB.ref('/articles').once('value')
      return Object.values(articlesMap.val())
    }
  }
}

module.exports = firebaseDAO

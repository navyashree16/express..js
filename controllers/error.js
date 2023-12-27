<<<<<<< HEAD
exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
  };
=======
exports.get404  = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
   };
>>>>>>> af7cf7b27d58155b95d99880d6ea1b2ed1039220

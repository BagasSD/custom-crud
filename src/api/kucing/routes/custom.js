module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/kucing',
        handler: 'kucing.findKucing',
        
      },
      {
        method: 'POST',
        path: '/kucing/post',
        handler: 'kucing.createKucing',
      },
      {
        method: 'PUT',
        path: '/kucing/update/:id',
        handler: 'kucing.updateKucing',
      },
      {
        method: 'DELETE',
        path: '/kucing/delete/:id',
        handler: 'kucing.deleteKucing',
      },
    ],
  };
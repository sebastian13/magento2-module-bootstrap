var config = {
  paths: {
    'jquery.bootstrap': [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min',
      'WeProvide_TwitterBootstrapJs/bootstrap'
    ]
  },
  shim: {
    'jquery.bootstrap': {
      'deps': ['jquery']
    }
  }
};
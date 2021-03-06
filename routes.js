module.exports = (app, allModels) => {

  // require the controller
  const itemCC = require('./controllers/item-controller')(allModels);
  const accountCC = require('./controllers/account-controller')(allModels);
  const settingsCC = require('./controllers/settings-controller')(allModels);
    /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */
  app.get('/items/', itemCC.getAllItems); //add id
  app.post('/items/new', itemCC.createItem); //add id
  app.put('/items/:id', itemCC.editItem);
  app.delete('/items/:id', itemCC.deleteItem);
  app.get('/items/sort', itemCC.sortAllItems); //add id
  app.get('/items/search', itemCC.searchItems) //add id
  app.get('/items/single/', itemCC.getSelItem);
  app.get('/items/single/:id', itemCC.getItem);
  app.put('/items/pay/:id', itemCC.payItem);
  app.get('/items/history/:id', itemCC.getHistory);


  app.get('/', accountCC.start);
  //this register (below) should be post but cannot
  app.get('/register', accountCC.register);
  app.get('/login', accountCC.login);
  app.get('/logout', accountCC.logout);
  app.get('/:id/stats', accountCC.getAllStats);


  app.get('/:id/settings', settingsCC.showSettings);
  app.post('/:id/settings/set', settingsCC.setSettings);
  // app.put('/:id/settings/set', settingsCC.resetSettings)
  app.put('/:id/settings/edit', settingsCC.edit);
};
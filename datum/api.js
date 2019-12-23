const c2zi = require('./c2zi');
const zi2c = require('./zi2c');

module.exports = (app) => {

  app.get('/api/all', (req, res) => {
    res.status(200).json({c2zi: Object.keys(c2zi.c2zi).length, zi2c: Object.keys(zi2c.zi2c).length}); // {"c2zi":68587,"zi2c":74663}
  });

  app.get('/api/c2zi/:code',  (req, res) => { console.log('REQ:', req.params.code); console.log('RES:', {code: req.params.code, zi: c2zi.c2zi[req.params.code]});
    res.status(200).json({code: req.params.code, zi: c2zi.c2zi[req.params.code]}); // http://localhost:3000/api/c2zi/aa -> {"code":"aa","zi":["昌","昍"]}
  });

  app.get('/api/zi2c/:zi',  (req, res) => {
    res.status(200).json({zi: req.params.zi, code: zi2c.zi2c[req.params.zi]}); // http://localhost:3000/api/zi2c/昍(%E6%98%8D) -> {"zi":"昍","code":["aa","xaa"]}
  });

};

import {Wetland} from 'wetland';

const wetland = new Wetland({
  stores: {
    defaultStore: {
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'x_wetland',
      },
    },
  },
  entityPath: __dirname + '/entity',
  mapping: {
    defaultNamesToUnderscore: true,
  },
  debug: true,
});

(async () => {
  await wetland.getMigrator().devMigrations();
})();

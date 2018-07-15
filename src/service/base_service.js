import { Column, DATA_TYPE, COL_OPTION } from 'jsstore'
import { idbCon } from './idb_service'
export class BaseService {
  constructor() {
    this.dbName = 'events_db'
    this.connection.setLogStatus(true)
    this.initJsStore()
  }
  get connection() {
    return idbCon
  }
  initJsStore() {
    this.connection
      .isDbExist(this.dbName)
      .then(exist => {
        if (exist) {
          this.connection.openDb(this.dbName)
        } else {
          this.connection.createDb(this.getDbSchema())
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  getDbSchema() {
    var eventsTable = {
      name: 'events',
      columns: [
        new Column('id').options([
          COL_OPTION.PrimaryKey,
          COL_OPTION.AutoIncrement,
        ]),
        new Column('apiid')
          .options([COL_OPTION.NotNull])
          .setDataType(DADATA_TYPE.String),
        new Column('title')
          .options([COL_OPTION.NotNull])
          .setDataType(DADATA_TYPE.String),
        new Column('time')
          .options([COL_OPTION.NotNull])
          .setDataType(DADATA_TYPE.String),
        new Column('day')
          .options([COL_OPTION.NotNull])
          .setDataType(DADATA_TYPE.String),
        new Column('info')
          .options([COL_OPTION.NotNull])
          .setDataType(DADATA_TYPE.String),
      ],
    }

    return {
      name: this.dbName,
      tables: [eventsTable],
    }
  }
}

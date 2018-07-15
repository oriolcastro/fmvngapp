/*!
 * @license :jsstore - V2.2.1 - 01/07/2018
 * https://github.com/ujjwalguptaofficial/JsStore
 * Copyright (c) 2018 @Ujjwal Gupta; Licensed MIT
 */
var JsStoreWorker = (function(e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var o = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        })
    }),
    (r.r = function(e) {
      Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    r((r.s = 16))
  )
})([
  function(e, t, r) {
    'use strict'
    var n, o, i, s, c, u, a, h
    r.d(t, 'f', function() {
      return n
    }),
      r.d(t, 'b', function() {
        return i
      }),
      r.d(t, 'c', function() {
        return s
      }),
      r.d(t, 'd', function() {
        return c
      }),
      r.d(t, 'g', function() {
        return u
      }),
      r.d(t, 'e', function() {
        return a
      }),
      r.d(t, 'a', function() {
        return h
      }),
      (function(e) {
        ;(e.First = 'f'), (e.Last = 'l'), (e.Any = 'a')
      })(n || (n = {})),
      (function(e) {
        ;(e.Registered = 'registerd'),
          (e.Failed = 'failed'),
          (e.NotStarted = 'not_started')
      })(o || (o = {})),
      (function(e) {
        ;(e.Connected = 'connected'),
          (e.Closed = 'closed'),
          (e.NotStarted = 'not_started'),
          (e.UnableToStart = 'unable_to_start'),
          (e.ClosedByJsStore = 'closed_by_jsstore')
      })(i || (i = {})),
      (function(e) {
        ;(e.String = 'string'),
          (e.Object = 'object'),
          (e.Array = 'array'),
          (e.Number = 'number'),
          (e.Boolean = 'boolean'),
          (e.Null = 'null'),
          (e.DateTime = 'date_time')
      })(s || (s = {})),
      (function(e) {
        ;(e.UndefinedColumn = 'undefined_column'),
          (e.UndefinedValue = 'undefined_value'),
          (e.UndefinedColumnName = 'undefined_column_name'),
          (e.UndefinedDbName = 'undefined_database_name'),
          (e.UndefinedColumnValue = 'undefined_column_value'),
          (e.NotArray = 'not_array'),
          (e.NoValueSupplied = 'no_value_supplied'),
          (e.ColumnNotExist = 'column_not_exist'),
          (e.EnableSearchOff = 'enable_search_off'),
          (e.InvalidOp = 'invalid_operator'),
          (e.NullValue = 'null_value'),
          (e.BadDataType = 'bad_data_type'),
          (e.NextJoinNotExist = 'next_join_not_exist'),
          (e.TableNotExist = 'table_not_exist'),
          (e.DbNotExist = 'db_not_exist'),
          (e.ConnectionAborted = 'connection_aborted'),
          (e.ConnectionClosed = 'connection_closed'),
          (e.NotObject = 'not_object'),
          (e.InvalidConfig = 'invalid_config'),
          (e.DbBlocked = 'Db_blocked'),
          (e.IndexedDbUndefined = 'indexeddb_undefined'),
          (e.IndexedDbBlocked = 'indexeddb_blocked')
      })(c || (c = {})),
      (function(e) {
        ;(e.Where = 'where'),
          (e.Like = 'like'),
          (e.In = 'in'),
          (e.Between = '-'),
          (e.GreaterThan = '>'),
          (e.LessThan = '<'),
          (e.GreaterThanEqualTo = '>='),
          (e.LessThanEqualTo = '<='),
          (e.NotEqualTo = '!='),
          (e.Aggregate = 'aggregate'),
          (e.Max = 'max'),
          (e.Min = 'min'),
          (e.Avg = 'avg'),
          (e.Count = 'count'),
          (e.Sum = 'sum'),
          (e.Or = 'or'),
          (e.Skip = 'skip'),
          (e.Limit = 'limit'),
          (e.And = 'and')
      })(u || (u = {})),
      (function(e) {
        ;(e.ReadOnly = 'readonly'), (e.ReadWrite = 'readwrite')
      })(a || (a = {})),
      (function(e) {
        ;(e.CreateDb = 'create_db'),
          (e.IsDbExist = 'is_db_exist'),
          (e.GetDbVersion = 'get_db_version'),
          (e.GetDbList = 'get_db_list'),
          (e.Get = 'get'),
          (e.Set = 'set'),
          (e.Select = 'select'),
          (e.Insert = 'insert'),
          (e.Update = 'update'),
          (e.Remove = 'remove'),
          (e.GetDbSchema = 'get_db_schema'),
          (e.OpenDb = 'open_db'),
          (e.Clear = 'clear'),
          (e.DropDb = 'drop_db'),
          (e.Count = 'count'),
          (e.BulkInsert = 'bulk_insert'),
          (e.ExportJson = 'export_json'),
          (e.ChangeLogStatus = 'change_log_status'),
          (e.Transaction = 'transaction'),
          (e.FinishTransaction = 'finish_transaction')
      })(h || (h = {}))
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return s
    })
    var n = r(0),
      o = r(3),
      i = r(14),
      s = (function() {
        function e() {}
        return (
          (e.callDbDroppedByBrowser = function(t) {
            e.dbStatus.conStatus === n.b.Connected &&
              ((e.isDbDeletedByBrowser = !0),
              !0 === t &&
                new i.a(e.onDbDroppedByBrowser, null).deleteMetaData())
          }),
          (e.createTransaction = function(t, r, o) {
            if (null === e.transaction) {
              ;(o = o || n.e.ReadWrite),
                (e.transaction = e.dbConnection.transaction(t, o))
              var i = function() {
                ;(e.transaction = null), r()
              }
              ;(e.transaction.oncomplete = i), (e.transaction.onabort = i)
            }
          }),
          (e.setDbList = function(e) {
            return new Promise(function(t, r) {
              o.d('DataBase_List', e, t, r)
            })
          }),
          (e.updateDbStatus = function(t, r) {
            void 0 === r
              ? (e.dbStatus.conStatus = t)
              : (e.dbStatus = { conStatus: t, lastError: r })
          }),
          (e.getDbList = function(e) {
            o.a('DataBase_List', function(t) {
              e((t = null == t ? [] : t))
            })
          }),
          (e.getDbVersion = function(e, t) {
            var r = this
            o.a('JsStore_' + e + '_Db_Version', function(e) {
              t.call(r, Number(e))
            })
          }),
          (e.getDbSchema = function(e, t) {
            o.a('JsStore_' + e + '_Schema', function(e) {
              t(e)
            })
          }),
          (e.getTable = function(t) {
            return e.activeDb.tables.find(function(e) {
              return e.name === t
            })
          }),
          (e.transaction = null),
          (e.activeDbVersion = 0),
          (e.dbStatus = { conStatus: n.b.NotStarted, lastError: null }),
          e
        )
      })()
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return i
    })
    var n = r(0),
      o = r(8),
      i = (function() {
        function e(e, t) {
          void 0 === t && (t = null),
            (this.type = e),
            (this.info_ = t),
            (this.message = this.getMsg_())
        }
        return (
          (e.prototype.throw = function() {
            throw this.get()
          }),
          (e.log = function(e) {
            o.a.isLogEnabled && console.log(e)
          }),
          (e.prototype.logError = function() {
            console.error(this.get())
          }),
          (e.prototype.logWarning = function() {
            console.warn(this.get())
          }),
          (e.prototype.get = function() {
            return { message: this.message, type: this.type }
          }),
          (e.prototype.getMsg_ = function() {
            var e
            switch (this.type) {
              case n.d.NotArray:
                e = 'Supplied value is not an array'
                break
              case n.d.UndefinedColumn:
                e = 'Column is undefined in Where'
                break
              case n.d.UndefinedValue:
                e = 'Value is undefined in Where'
                break
              case n.d.UndefinedColumnName:
                e = "Column name is undefined '" + this.info_.TableName + "'"
                break
              case n.d.UndefinedDbName:
                e = 'Database name is not supplied'
                break
              case n.d.UndefinedColumnValue:
                e = 'Column value is undefined'
                break
              case n.d.NoValueSupplied:
                e = 'No value is supplied'
                break
              case n.d.InvalidOp:
                e = "Invalid Op Value '" + this.info_.Op + "'"
                break
              case n.d.ColumnNotExist:
                e = "Column '" + this.info_.ColumnName + "' does not exist"
                break
              case n.d.EnableSearchOff:
                e =
                  "Search is turned off for the Column '" +
                  this.info_.ColumnName +
                  "'"
                break
              case n.d.NullValue:
                e =
                  "Null value is not allowed for column '" +
                  this.info_.ColumnName +
                  "'"
                break
              case n.d.BadDataType:
                e =
                  "Supplied value for column '" +
                  this.info_.ColumnName +
                  "' does not have valid type"
                break
              case n.d.NextJoinNotExist:
                e = 'Next join details not supplied'
                break
              case n.d.TableNotExist:
                e = "Table '" + this.info_.TableName + "' does not exist"
                break
              case n.d.DbNotExist:
                e = "Database '" + this.info_.DbName + "' does not exist"
                break
              case n.d.NotObject:
                e = 'supplied value is not object'
                break
              case n.d.InvalidOp:
                e = "Invalid Config '" + this.info_.Config + " '"
              case n.d.DbBlocked:
                e = 'database is blocked, cant be deleted right now'
              default:
                e = this.message
            }
            return e
          }),
          e
        )
      })()
  },
  function(e, t, r) {
    'use strict'
    var n,
      o = r(1),
      i = r(0)
    !(function(e) {
      ;(e.Connected = 'connected'),
        (e.Closed = 'closed'),
        (e.NotStarted = 'not_connected')
    })(n || (n = {}))
    var s,
      c = (function() {
        function e() {
          ;(this.results = null),
            (this.errorOccured = !1),
            (this.errorCount = 0)
        }
        return (
          (e.prototype.onErrorOccured = function(e) {
            ++this.errorCount,
              1 === this.errorCount &&
                null != this.onError &&
                this.onError(e.target.error),
              console.error(e)
          }),
          e
        )
      })(),
      u = (function() {
        function e() {}
        return (
          (e.callDbDroppedByBrowser = function() {
            this._isDbDeletedByBrowser = b.dbStatus.conStatus === n.Connected
          }),
          (e.createTransaction = function(e, t, r) {
            var n = this
            null === this._transaction &&
              ((r = r || 'readwrite'),
              (this._transaction = this._dbConnection.transaction(e, r)),
              (this._transaction.oncomplete = function() {
                ;(n._transaction = null), t()
              }),
              (this._transaction.ontimeout = function() {
                ;(this._transaction = null),
                  console.error('transaction timed out')
              }))
          }),
          (e._transaction = null),
          e
        )
      })(),
      a = ((s =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        s(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      h = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (
            (o.rowAffected = 0),
            (o.key = t),
            (o.onSuccess = r),
            (o.onError = n),
            o
          )
        }
        return (
          a(t, e),
          (t.prototype.execute = function() {
            var e = this
            this.initTransaction()
            var t, r, n
            this.errorOccured ||
              ((t = b.columnName),
              (r = this.key),
              ((n = e.objectStore
                .index(t)
                .openCursor(IDBKeyRange.only(r))).onerror = function(t) {
                ;(e.errorOccured = !0), e.onErrorOccured(t)
              }),
              (n.onsuccess = function(t) {
                var r = t.target.result
                r && (r.delete(), ++e.rowAffected, r.continue())
              }))
          }),
          (t.prototype.initTransaction = function() {
            u.createTransaction(
              [b.tableName],
              this.onTransactionCompleted.bind(this)
            ),
              (this.objectStore = u._transaction.objectStore(b.tableName))
          }),
          (t.prototype.onTransactionCompleted = function() {
            !1 === this.errorOccured && this.onSuccess(this.rowAffected)
          }),
          t
        )
      })(c),
      l = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      f = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          o.onTransactionCompleted_ = function() {
            !1 === o.errorOccured && o.onSuccess && o.onSuccess(null)
          }
          try {
            ;(o.query = t), (o.onSuccess = r), (o.onError = n)
          } catch (e) {
            console.error(e)
          }
          return o
        }
        return (
          l(t, e),
          (t.prototype.execute = function() {
            var e,
              t = this,
              r = function() {
                t.objectStore.add(t.query).onerror = function(e) {
                  ;(t.errorOccured = !0), t.onErrorOccured(e)
                }
              }
            this.initTransaction(),
              ((e = t.objectStore
                .index(b.columnName)
                .openCursor(
                  IDBKeyRange.only(t.query[b.columnName])
                )).onsuccess = function(e) {
                var n = e.target.result
                n ? n.update(t.query) : r()
              }),
              (e.onerror = function(e) {
                ;(t.errorOccured = !0), t.onErrorOccured(e)
              })
          }),
          (t.prototype.initTransaction = function() {
            u.createTransaction([b.tableName], this.onTransactionCompleted_),
              (this.objectStore = u._transaction.objectStore(b.tableName))
          }),
          t
        )
      })(c),
      p = (function() {
        return function(e, t, r) {
          var s = self.indexedDB.open(e, 1)
          ;(u._isDbDeletedByBrowser = !1),
            (s.onerror = function(e) {
              'InvalidStateError' === e.target.error.name &&
                (o.a.dbStatus = {
                  conStatus: i.b.UnableToStart,
                  lastError: i.d.IndexedDbBlocked,
                }),
                null != r && r(e.target.error)
            }),
            (s.onsuccess = function(e) {
              ;(b.dbStatus.conStatus = n.Connected),
                (u._dbConnection = s.result),
                (u._dbConnection.onclose = function() {
                  u.callDbDroppedByBrowser(),
                    g.updateDbStatus(n.Closed, i.d.ConnectionClosed)
                }),
                (u._dbConnection.onversionchange = function(e) {
                  null === e.newVersion &&
                    (e.target.close(),
                    u.callDbDroppedByBrowser(),
                    g.updateDbStatus(n.Closed, i.d.ConnectionClosed))
                }),
                (u._dbConnection.onerror = function(e) {
                  b.dbStatus.lastError =
                    'Error occured in connection :' + e.target.result
                }),
                (u._dbConnection.onabort = function(e) {
                  b.dbStatus = {
                    conStatus: n.Closed,
                    lastError: 'Connection aborted',
                  }
                }),
                null != t && t()
            }),
            (s.onupgradeneeded = function(e) {
              e.target.result
                .createObjectStore(b.tableName, { keyPath: 'Key' })
                .createIndex('Key', 'Key', { unique: !0 })
            })
        }
      })(),
      y = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      d = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (
            (o.onTransactionCompleted_ = function() {
              !1 === o.errorOccured && o.onSuccess(o.results)
            }),
            (o.key = t),
            (o.onSuccess = r),
            (o.onError = n),
            o
          )
        }
        return (
          y(t, e),
          (t.prototype.execute = function() {
            var e,
              t,
              r,
              n = this
            this.initTransaction_(),
              (e = b.columnName),
              (t = this.key),
              ((r = n.objectStore
                .index(e)
                .openCursor(IDBKeyRange.only(t))).onerror = function(e) {
                ;(n.errorOccured = !0), n.onErrorOccured(e)
              }),
              (r.onsuccess = function(e) {
                var t = e.target.result
                t && (n.results = t.value.Value)
              })
          }),
          (t.prototype.initTransaction_ = function() {
            u.createTransaction(
              [b.tableName],
              this.onTransactionCompleted_,
              'readonly'
            ),
              (this.objectStore = u._transaction.objectStore(b.tableName))
          }),
          t
        )
      })(c),
      _ = (function() {
        function e(e) {
          void 0 === e && (e = null), (this.onSuccess = e)
        }
        return (
          (e.prototype.set = function(e, t, r) {
            new f(e, t, r).execute()
          }),
          (e.prototype.remove = function(e, t, r) {
            new h(e, t, r).execute()
          }),
          (e.prototype.get = function(e, t, r) {
            new d(e, t, r).execute()
          }),
          (e.prototype.createDb = function(e, t) {
            new p('KeyStore', e, t)
          }),
          (e.prototype.checkConnectionAndExecuteLogic = function(e) {
            var t = this
            if ('create_db' === e.Name || 'open_db' === e.Name)
              this.executeLogic(e)
            else
              switch (b.dbStatus.conStatus) {
                case n.Connected:
                  this.executeLogic(e)
                  break
                case n.NotStarted:
                  setTimeout(
                    function() {
                      this.checkConnectionAndExecuteLogic(e)
                    }.bind(this),
                    100
                  )
                  break
                case n.Closed:
                  u._isDbDeletedByBrowser &&
                    this.createDb(
                      function() {
                        ;(u._isDbDeletedByBrowser = !1),
                          t.checkConnectionAndExecuteLogic(e)
                      },
                      function(e) {
                        console.error(e)
                      }
                    )
              }
          }),
          (e.prototype.returnResult = function(e) {
            this.onSuccess && this.onSuccess(e)
          }),
          (e.prototype.executeLogic = function(e) {
            var t = this,
              r = function(e) {
                t.returnResult({ ReturnedValue: e })
              },
              n = function(e) {
                t.returnResult({ ErrorDetails: e, ErrorOccured: !0 })
              }
            switch (e.Name) {
              case 'get':
                this.get(e.Query, r, n)
                break
              case 'set':
                this.set(e.Query, r, n)
                break
              case 'remove':
                this.remove(e.Query, r, n)
                break
              case 'create_db':
                this.createDb(r, n)
            }
          }),
          e
        )
      })(),
      b = (function() {
        function e() {}
        return (
          (e.prcoessQuery = function(e) {
            this.requestQueue.push(e),
              1 === this.requestQueue.length && this.executeCode()
          }),
          (e.executeCode = function() {
            var e = this
            if (!this.isCodeExecuting && this.requestQueue.length > 0) {
              this.isCodeExecuting = !0
              var t = {
                Name: this.requestQueue[0].Name,
                Query: this.requestQueue[0].Query,
              }
              new _(function(t) {
                e.onQueryFinished(t)
              }).checkConnectionAndExecuteLogic(t)
            }
          }),
          (e.onQueryFinished = function(e) {
            var t = this.requestQueue.shift()
            ;(this.isCodeExecuting = !1),
              e.ErrorOccured
                ? t.OnError
                  ? t.OnError(e.ErrorDetails)
                  : console.error(e.ErrorDetails)
                : t.OnSuccess && t.OnSuccess(e.ReturnedValue),
              this.executeCode()
          }),
          (e.requestQueue = []),
          (e.tableName = 'LocalStore'),
          (e.columnName = 'Key'),
          (e.isCodeExecuting = !1),
          (e.dbStatus = { conStatus: n.NotStarted, lastError: '' }),
          e
        )
      })(),
      g = (function() {
        function e() {}
        return (
          (e.setDbType = function() {
            indexedDB ||
              (indexedDB =
                self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB),
              indexedDB
                ? ((IDBTransaction =
                    IDBTransaction ||
                    self.webkitIDBTransaction ||
                    self.msIDBTransaction),
                  (self.IDBKeyRange =
                    self.IDBKeyRange ||
                    self.webkitIDBKeyRange ||
                    self.msIDBKeyRange))
                : (o.a.dbStatus = {
                    conStatus: i.b.UnableToStart,
                    lastError: i.d.IndexedDbUndefined,
                  })
          }),
          (e.updateDbStatus = function(e, t) {
            void 0 === t
              ? (b.dbStatus.conStatus = e)
              : (b.dbStatus = { conStatus: e, lastError: t })
          }),
          e
        )
      })(),
      v = function() {
        g.setDbType(),
          indexedDB && b.prcoessQuery({ Name: 'create_db', Query: null })
      },
      m = function(e, t, r) {
        void 0 === r && (r = null),
          b.prcoessQuery({ Name: 'get', OnError: r, OnSuccess: t, Query: e })
      },
      O = function(e, t, r, n) {
        var o = { Key: e, Value: t }
        b.prcoessQuery({ Name: 'set', OnError: n, OnSuccess: r, Query: o })
      },
      k = function(e, t, r) {
        void 0 === t && (t = null),
          void 0 === r && (r = null),
          b.prcoessQuery({ Name: 'remove', OnError: r, OnSuccess: t, Query: e })
      }
    r.d(t, 'b', function() {
      return v
    }),
      r.d(t, 'a', function() {
        return m
      }),
      r.d(t, 'd', function() {
        return O
      }),
      r.d(t, 'c', function() {
        return k
      })
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return o
    })
    var n = r(0),
      o = (function() {
        function e() {}
        return (
          (e.isNull = function(e) {
            if (null == e) return !0
            switch (typeof e) {
              case 'string':
                return 0 === e.length
              case 'number':
                return isNaN(e)
            }
            return !1
          }),
          (e.isString = function(e) {
            return typeof e === n.c.String
          }),
          (e.isArray = function(e) {
            return Array.isArray(e)
          }),
          (e.isObject = function(e) {
            return typeof e === n.c.Object
          }),
          (e.getObjectFirstKey = function(e) {
            for (var t in e) return t
            return null
          }),
          (e.getType = function(e) {
            if (null == e) return n.c.Null
            var t = typeof e
            switch (t) {
              case 'object':
                if (Array.isArray(e)) return n.c.Array
                if (e.getDate && e.getTime) return n.c.DateTime
              default:
                return t
            }
          }),
          e
        )
      })()
  },
  function(e, t, r) {
    'use strict'
    var n = r(0),
      o = r(1),
      i = r(4),
      s = (function() {
        function e() {}
        return (
          Object.defineProperty(e.prototype, 'activeDb', {
            get: function() {
              return o.a.activeDb
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'dbConnection', {
            get: function() {
              return o.a.dbConnection
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getObjectFirstKey = function(e) {
            return i.a.getObjectFirstKey(e)
          }),
          (e.prototype.isNull = function(e) {
            return i.a.isNull(e)
          }),
          (e.prototype.getType = function(e) {
            return i.a.getType(e)
          }),
          (e.prototype.isObject = function(e) {
            return i.a.isObject(e)
          }),
          (e.prototype.isString = function(e) {
            return i.a.isString(e)
          }),
          (e.prototype.isArray = function(e) {
            return i.a.isArray(e)
          }),
          Object.defineProperty(e.prototype, 'transaction', {
            get: function() {
              return o.a.transaction
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.createTransaction = function(e, t, r) {
            o.a.createTransaction(e, t, r)
          }),
          (e.prototype.filterOnOccurence = function(e) {
            var t = !1
            switch (((e = e.toLowerCase()), this.compSymbol)) {
              case n.f.Any:
                e.indexOf(this.compValue) >= 0 && (t = !0)
                break
              case n.f.First:
                0 === e.indexOf(this.compValue) && (t = !0)
                break
              case n.f.Last:
                e.lastIndexOf(this.compValue) ===
                  e.length - this.compValueLength && (t = !0)
                break
              default:
                e !== this.compValue && (t = !0)
            }
            return t
          }),
          (e.prototype.isTableExist = function(e) {
            return (
              this.activeDb.tables.findIndex(function(t) {
                return t.name === e
              }) >= 0
            )
          }),
          (e.prototype.getTable = function(e) {
            return o.a.getTable(e)
          }),
          (e.prototype.getKeyRange = function(e, t) {
            var r
            switch (t) {
              case n.g.Between:
                r = IDBKeyRange.bound(e.low, e.high, !1, !1)
                break
              case n.g.GreaterThan:
                r = IDBKeyRange.lowerBound(e, !0)
                break
              case n.g.GreaterThanEqualTo:
                r = IDBKeyRange.lowerBound(e)
                break
              case n.g.LessThan:
                r = IDBKeyRange.upperBound(e, !0)
                break
              case n.g.LessThanEqualTo:
                r = IDBKeyRange.upperBound(e)
                break
              default:
                r = IDBKeyRange.only(e)
            }
            return r
          }),
          (e.prototype.getPrimaryKey = function(e) {
            var t = this.getTable(e).primaryKey
            return t || this.getKeyPath(e)
          }),
          (e.prototype.getKeyPath = function(e) {
            return this.dbConnection.transaction([e], 'readonly').objectStore(e)
              .keyPath
          }),
          (e.prototype.getAllCombinationOfWord = function(e, t) {
            if (t) {
              for (var r = [], n = 0, o = e.length; n < o; n++)
                r = r.concat(this.getCombination_(e[n]))
              return r
            }
            return this.getCombination_(e)
          }),
          (e.prototype.getCombination_ = function(e) {
            var t = [],
              r = function(e, n, o) {
                if (o === e.length) t.push(n.join(''))
                else {
                  var i = e.charAt(o)
                  ;(n[o] = i.toLowerCase()),
                    r(e, n, o + 1),
                    (n[o] = i.toUpperCase()),
                    r(e, n, o + 1)
                }
              }
            return r(e, [], 0), t
          }),
          e
        )
      })(),
      c = (function() {
        function e(e) {
          this.where = e
        }
        return (
          (e.prototype.check = function(e) {
            var t
            for (var r in ((this.status = !0), this.where)) {
              if (!this.status) break
              if ('object' == typeof (t = this.where[r]))
                for (var o in t) {
                  if (!this.status) break
                  switch (o) {
                    case n.g.In:
                      this.checkIn(r, e[r])
                      break
                    case n.g.Like:
                      this.checkLike(r, e[r])
                      break
                    case n.g.Between:
                    case n.g.GreaterThan:
                    case n.g.LessThan:
                    case n.g.GreaterThanEqualTo:
                    case n.g.LessThanEqualTo:
                    case n.g.NotEqualTo:
                      this.checkComparisionOp(r, e[r], o)
                  }
                }
              else if (t !== e[r]) {
                this.status = !1
                break
              }
            }
            return this.status
          }),
          (e.prototype.checkIn = function(e, t) {
            for (
              var r = 0, o = this.where[e][n.g.In], i = o.length;
              r < i;
              r++
            ) {
              if (o[r] === t) {
                this.status = !0
                break
              }
              this.status = !1
            }
          }),
          (e.prototype.checkLike = function(e, t) {
            var r,
              o,
              i,
              s = this.where[e][n.g.Like].split('%')
            switch (
              (s[1]
                ? ((o = s[1]), (r = s.length > 2 ? n.f.Any : n.f.Last))
                : ((o = s[0]), (r = n.f.First)),
              (t = t.toLowerCase()),
              r)
            ) {
              case n.f.Any:
                ;(i = t.indexOf(o.toLowerCase())) < 0 && (this.status = !1)
                break
              case n.f.First:
                ;((i = t.indexOf(o.toLowerCase())) > 0 || i < 0) &&
                  (this.status = !1)
                break
              default:
                ;(i = t.lastIndexOf(o.toLowerCase())) < t.length - o.length &&
                  (this.status = !1)
            }
          }),
          (e.prototype.checkComparisionOp = function(e, t, r) {
            var o = this.where[e][r]
            switch (r) {
              case n.g.GreaterThan:
                t <= o && (this.status = !1)
                break
              case n.g.LessThan:
                t >= o && (this.status = !1)
                break
              case n.g.LessThanEqualTo:
                t > o && (this.status = !1)
                break
              case n.g.GreaterThanEqualTo:
                t < o && (this.status = !1)
                break
              case n.g.Between:
                ;(t < o.Low || t > o.High) && (this.status = !1)
                break
              case n.g.NotEqualTo:
                t === o && (this.status = !1)
            }
          }),
          e
        )
      })(),
      u = r(2)
    r.d(t, 'a', function() {
      return l
    })
    var a,
      h = ((a =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        a(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      l = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t.errorOccured = !1),
            (t.errorCount = 0),
            (t.rowAffected = 0),
            (t.checkFlag = !1),
            (t.onCursorError = function(e) {
              ;(t.errorOccured = !0), t.onErrorOccured(e)
            }),
            (t.goToWhereLogic = function() {
              var e = this,
                t = this.getObjectFirstKey(this.query.where)
              if (
                (!0 === this.query.ignoreCase &&
                  (this.query.where = this.makeQryInCaseSensitive(
                    this.query.where
                  )),
                this.objectStore.indexNames.contains(t))
              ) {
                var r = this.query.where[t]
                if ('object' == typeof r) {
                  ;(this.checkFlag = Boolean(
                    Object.keys(r).length > 1 ||
                      Object.keys(this.query.where).length > 1
                  )),
                    !0 === this.checkFlag &&
                      (this.whereCheckerInstance = new c(this.query.where))
                  var o = this.getObjectFirstKey(r)
                  switch (o) {
                    case n.g.Like:
                      var i = r[n.g.Like].split('%'),
                        s = void 0,
                        a = void 0
                      i[1]
                        ? ((s = i[1]), (a = i.length > 2 ? n.f.Any : n.f.Last))
                        : ((s = i[0]), (a = n.f.First)),
                        a === n.f.First
                          ? (this.getAllCombinationOfWord(s).forEach(function(
                              r
                            ) {
                              e.executeWhereLogic(
                                t,
                                { '-': { low: r, high: r + '￿' } },
                                '-'
                              )
                            }),
                            delete this.query.where[t][n.g.Like])
                          : this.executeLikeLogic(t, s, a)
                      break
                    case n.g.In:
                      this.executeInLogic(t, r[n.g.In])
                      break
                    case n.g.Between:
                    case n.g.GreaterThan:
                    case n.g.LessThan:
                    case n.g.GreaterThanEqualTo:
                    case n.g.LessThanEqualTo:
                      this.executeWhereLogic(t, r, o)
                      break
                    case n.g.Aggregate:
                      break
                    default:
                      this.executeWhereLogic(t, r)
                  }
                } else
                  (this.checkFlag = Boolean(
                    Object.keys(this.query.where).length > 1
                  )),
                    !0 === this.checkFlag &&
                      (this.whereCheckerInstance = new c(this.query.where)),
                    this.executeWhereLogic(t, r)
              } else {
                this.errorOccured = !0
                var h =
                  null == this.getColumnInfo(t)
                    ? new u.a(n.d.ColumnNotExist, { ColumnName: t })
                    : new u.a(n.d.EnableSearchOff, { ColumnName: t })
                this.onErrorOccured(h, !0)
              }
            }),
            t
          )
        }
        return (
          h(t, e),
          (t.prototype.onErrorOccured = function(e, t) {
            if (
              (void 0 === t && (t = !1),
              ++this.errorCount,
              1 === this.errorCount)
            )
              if (t) e.logError(), this.onError(e.get())
              else {
                var r = void 0
                e.name
                  ? ((r = new u.a(e.name)).message = e.message)
                  : ((r = new u.a(e.target.error.name)).message =
                      e.target.error.message),
                  r.logError(),
                  this.onError(r.get())
              }
          }),
          (t.prototype.onExceptionOccured = function(e, t) {
            switch (e.name) {
              case 'NotFoundError':
                var r = new u.a(n.d.TableNotExist, t)
                this.onErrorOccured(r, !0)
                break
              default:
                console.error(e)
            }
          }),
          (t.prototype.getColumnInfo = function(e) {
            var t
            return (
              this.getTable(this.tableName).columns.every(function(r) {
                return r.name !== e || ((t = r), !1)
              }),
              t
            )
          }),
          (t.prototype.makeQryInCaseSensitive = function(e) {
            var t,
              r,
              o = []
            for (var i in e)
              switch (((t = e[i]), this.getType(t))) {
                case n.c.String:
                  ;(o = o.concat(this.getAllCombinationOfWord(t))),
                    (e[i] = {}),
                    (e[i][n.g.In] = o)
                  break
                case n.c.Object:
                  for (var s in t)
                    if (((r = t[s]), this.isString(r)))
                      switch (s) {
                        case n.g.In:
                          o = o.concat(this.getAllCombinationOfWord(r, !0))
                          break
                        case n.g.Like:
                          break
                        default:
                          o = o.concat(this.getAllCombinationOfWord(r))
                      }
                  e[i][n.g.In] = o
              }
            return e
          }),
          t
        )
      })(s)
  },
  function(e, t, r) {
    'use strict'
    var n,
      o = r(5),
      i = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      s = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (t.results = []), (t.sorted = !1), t
        }
        return (
          i(t, e),
          (t.prototype.removeDuplicates = function() {
            var e = this.results
            this.results = void 0
            var t = this.getPrimaryKey(this.query.from),
              r = {}
            for (var n in e) r[e[n][t]] = e[n]
            for (var n in ((e = []), r)) e.push(r[n])
            this.results = e
          }),
          (t.prototype.onQueryFinished = function() {}),
          t
        )
      })(o.a),
      c = r(2),
      u = r(0),
      a = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      h = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          a(t, e),
          (t.prototype.executeWhereUndefinedLogic = function() {
            if (this.query.order && this.query.order.by)
              if (this.objectStore.indexNames.contains(this.query.order.by)) {
                var e =
                  this.query.order.type &&
                  'desc' === this.query.order.type.toLowerCase()
                    ? 'prev'
                    : 'next'
                ;(this.sorted = !0),
                  (this.cursorOpenRequest = this.objectStore
                    .index(this.query.order.by)
                    .openCursor(null, e))
              } else {
                new c.a(u.d.ColumnNotExist, {
                  ColumnName: this.query.order.by,
                }).throw()
              }
            else this.cursorOpenRequest = this.objectStore.openCursor()
            this.skipRecord && this.limitRecord
              ? this.executeSkipAndLimitForNoWhere_()
              : this.skipRecord
                ? this.executeSkipForNoWhere_()
                : this.limitRecord
                  ? this.executeLimitForNotWhere_()
                  : this.executeSimpleForNotWhere_(),
              (this.cursorOpenRequest.onerror = function(e) {
                ;(this._errorOccured = !0), this.onErrorOccured(e)
              }.bind(this))
          }),
          (t.prototype.executeSkipAndLimitForNoWhere_ = function() {
            var e,
              t = this,
              r = !1
            this.cursorOpenRequest.onsuccess = function(n) {
              ;(e = n.target.result)
                ? r && t.results.length !== t.limitRecord
                  ? (t.results.push(e.value), e.continue())
                  : ((r = !0), e.advance(t.skipRecord))
                : t.onQueryFinished()
            }
          }),
          (t.prototype.executeSkipForNoWhere_ = function() {
            var e,
              t = this,
              r = !1
            this.cursorOpenRequest.onsuccess = function(n) {
              ;(e = n.target.result)
                ? r
                  ? (t.results.push(e.value), e.continue())
                  : ((r = !0), e.advance(t.skipRecord))
                : t.onQueryFinished()
            }
          }),
          (t.prototype.executeSimpleForNotWhere_ = function() {
            var e
            this.cursorOpenRequest.onsuccess = function(t) {
              ;(e = t.target.result)
                ? (this.results.push(e.value), e.continue())
                : this.onQueryFinished()
            }.bind(this)
          }),
          (t.prototype.executeLimitForNotWhere_ = function() {
            var e,
              t = this
            this.cursorOpenRequest.onsuccess = function(r) {
              ;(e = r.target.result) && t.results.length !== t.limitRecord
                ? (t.results.push(e.value), e.continue())
                : t.onQueryFinished()
            }
          }),
          t
        )
      })(s),
      l = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          l(t, e),
          (t.prototype.executeInLogic = function(e, t) {
            this.skipRecord && this.limitRecord
              ? this.executeSkipAndLimitForIn_(e, t)
              : this.skipRecord
                ? this.executeSkipForIn_(e, t)
                : this.limitRecord
                  ? this.executeLimitForIn_(e, t)
                  : this.executeSimpleForIn_(e, t)
          }),
          (t.prototype.executeSkipAndLimitForIn_ = function(e, t) {
            var r,
              n,
              o = this,
              i = this.skipRecord,
              s = this.objectStore.index(e),
              c = function(e) {
                0 === i ? o.results.push(e) : --i
              },
              u = t.length,
              a = 0,
              h = function() {
                ++a === u && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var l = 0; l < u; l++)
                this.errorOccured ||
                  (((n = s.openCursor(
                    IDBKeyRange.only(t[l])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result),
                      o.results.length !== o.limitRecord && r
                        ? (o.whereCheckerInstance.check(r.value) && c(r.value),
                          r.continue())
                        : h()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (l = 0; l < u; l++)
                this.errorOccured ||
                  (((n = s.openCursor(
                    IDBKeyRange.only(t[l])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result),
                      o.results.length !== o.limitRecord && r
                        ? (c(r.value), r.continue())
                        : h()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          (t.prototype.executeSkipForIn_ = function(e, t) {
            var r,
              n,
              o = this,
              i = this.skipRecord,
              s = this.objectStore.index(e),
              c = function(e) {
                0 === i ? o.results.push(e) : --i
              },
              u = t.length,
              a = 0,
              h = function() {
                ++a === u && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var l = 0; l < u; l++)
                this.errorOccured ||
                  (((n = s.openCursor(
                    IDBKeyRange.only(t[l])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (o.whereCheckerInstance.check(r.value) && c(r.value),
                        r.continue())
                      : h()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (l = 0; l < u; l++)
                this.errorOccured ||
                  (((n = s.openCursor(
                    IDBKeyRange.only(t[l])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result) ? (c(r.value), r.continue()) : h()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          (t.prototype.executeLimitForIn_ = function(e, t) {
            var r,
              n,
              o = this,
              i = this.objectStore.index(e),
              s = t.length,
              c = 0,
              u = function() {
                ++c === s && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[a])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result) && o.results.length !== o.limitRecord
                      ? (o.whereCheckerInstance.check(r.value) &&
                          o.results.push(r.value),
                        r.continue())
                      : u()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[a])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result) && o.results.length !== o.limitRecord
                      ? (o.results.push(r.value), r.continue())
                      : u()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          (t.prototype.executeSimpleForIn_ = function(e, t) {
            var r,
              n,
              o = this,
              i = this.objectStore.index(e),
              s = t.length,
              c = 0,
              u = function() {
                ++c === s && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[a])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (o.whereCheckerInstance.check(r.value) &&
                          o.results.push(r.value),
                        r.continue())
                      : u()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[a])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (o.results.push(r.value), r.continue())
                      : u()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          t
        )
      })(h),
      p = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          p(t, e),
          (t.prototype.executeLikeLogic = function(e, t, r) {
            ;(this.compValue = t.toLowerCase()),
              (this.compValueLength = this.compValue.length),
              (this.compSymbol = r),
              (this.cursorOpenRequest = this.objectStore.index(e).openCursor()),
              (this.cursorOpenRequest.onerror = this.onCursorError),
              this.skipRecord && this.limitRecord
                ? this.executeSkipAndLimit_()
                : this.skipRecord
                  ? this.executeSkip_()
                  : this.limitRecord
                    ? this.executeLimit_()
                    : this.executeSimple_()
          }),
          (t.prototype.executeSkipAndLimit_ = function() {
            var e,
              t = this,
              r = function(e) {
                0 === n ? t.results.push(e) : --n
              },
              n = this.skipRecord
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(n) {
                  ;(e = n.target.result),
                    t.results.length !== t.limitRecord && e
                      ? (t.filterOnOccurence(e.key) &&
                          t.whereCheckerInstance.check(e.value) &&
                          r(e.value),
                        e.continue())
                      : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(n) {
                  ;(e = n.target.result),
                    t.results.length !== t.limitRecord && e
                      ? (t.filterOnOccurence(e.key) && r(e.value), e.continue())
                      : t.onQueryFinished()
                })
          }),
          (t.prototype.executeSkip_ = function() {
            var e,
              t = this,
              r = this.skipRecord,
              n = function(e) {
                0 === r ? t.results.push(e) : --r
              }
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result)
                    ? (t.filterOnOccurence(e.key) &&
                        t.whereCheckerInstance.check(e.value) &&
                        n(e.value),
                      e.continue())
                    : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result)
                    ? (t.filterOnOccurence(e.key) && n(e.value), e.continue())
                    : t.onQueryFinished()
                })
          }),
          (t.prototype.executeLimit_ = function() {
            var e,
              t = this
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result),
                    t.results.length !== t.limitRecord && e
                      ? (t.filterOnOccurence(e.key) &&
                          t.whereCheckerInstance.check(e.value) &&
                          t.results.push(e.value),
                        e.continue())
                      : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result),
                    t.results.length !== t.limitRecord && e
                      ? (t.filterOnOccurence(e.key) && t.results.push(e.value),
                        e.continue())
                      : t.onQueryFinished()
                })
          }),
          (t.prototype.executeSimple_ = function() {
            var e,
              t = this
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result)
                    ? (t.filterOnOccurence(e.key) &&
                        t.whereCheckerInstance.check(e.value) &&
                        t.results.push(e.value),
                      e.continue())
                    : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result)
                    ? (t.filterOnOccurence(e.key) && t.results.push(e.value),
                      e.continue())
                    : t.onQueryFinished()
                })
          }),
          t
        )
      })(f),
      d = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      _ = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          d(t, e),
          (t.prototype.executeSkipAndLimitForWhere_ = function() {
            var e,
              t = this,
              r = !1
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(n) {
                  ;(e = n.target.result)
                    ? r && t.results.length !== t.limitRecord
                      ? (t.whereCheckerInstance.check(e.value) &&
                          t.results.push(e.value),
                        e.continue())
                      : ((r = !0), e.advance(t.skipRecord))
                    : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(n) {
                  ;(e = n.target.result)
                    ? r && t.results.length !== t.limitRecord
                      ? (t.results.push(e.value), e.continue())
                      : ((r = !0), e.advance(t.skipRecord))
                    : t.onQueryFinished()
                })
          }),
          (t.prototype.executeSkipForWhere_ = function() {
            var e,
              t = this,
              r = !1
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(n) {
                  ;(e = n.target.result)
                    ? r
                      ? (t.whereCheckerInstance.check(e.value) &&
                          t.results.push(e.value),
                        e.continue())
                      : ((r = !0), e.advance(t.skipRecord))
                    : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(n) {
                  ;(e = n.target.result)
                    ? r
                      ? (t.results.push(e.value), e.continue())
                      : ((r = !0), e.advance(t.skipRecord))
                    : t.onQueryFinished()
                })
          }),
          (t.prototype.executeLimitForWhere_ = function() {
            var e,
              t = this
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result) &&
                  t.results.length !== t.limitRecord &&
                  t.whereCheckerInstance.check(e.value)
                    ? (t.results.push(e.value), e.continue())
                    : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result) && t.results.length !== t.limitRecord
                    ? (t.results.push(e.value), e.continue())
                    : t.onQueryFinished()
                })
          }),
          (t.prototype.executeSimpleForWhere_ = function() {
            var e,
              t = this
            this.checkFlag
              ? (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result)
                    ? (t.whereCheckerInstance.check(e.value) &&
                        t.results.push(e.value),
                      e.continue())
                    : t.onQueryFinished()
                })
              : (this.cursorOpenRequest.onsuccess = function(r) {
                  ;(e = r.target.result)
                    ? (t.results.push(e.value), e.continue())
                    : t.onQueryFinished()
                })
          }),
          (t.prototype.executeWhereLogic = function(e, t, r, n) {
            var o = this
            ;(t = r ? t[r] : t),
              (this.cursorOpenRequest = this.objectStore
                .index(e)
                .openCursor(this.getKeyRange(t, r), n)),
              (this.cursorOpenRequest.onerror = function(e) {
                ;(o.errorOccured = !0), o.onErrorOccured(e)
              }),
              this.skipRecord && this.limitRecord
                ? this.executeSkipAndLimitForWhere_()
                : this.skipRecord
                  ? this.executeSkipForWhere_()
                  : this.limitRecord
                    ? this.executeLimitForWhere_()
                    : this.executeSimpleForWhere_()
          }),
          t
        )
      })(y),
      b = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      g = (function(e) {
        function t() {
          return e.call(this) || this
        }
        return (
          b(t, e),
          (t.prototype.processGroupBy = function() {
            var e = this.query.groupBy,
              t = this.results,
              r = {}
            if (
              ((this.results = this.query.groupBy = void 0),
              this.getType(e) === u.c.String)
            )
              for (var n in t) r[t[n][e]] = t[n]
            else {
              var o = void 0
              for (var n in t) {
                for (var i in ((o = ''), e)) o += t[n][e[i]]
                r[o] = t[n]
              }
            }
            for (var n in ((t = []), r)) t.push(r[n])
            this.results = t
          }),
          (t.prototype.executeAggregateGroupBy = function() {
            var e,
              t,
              r,
              n,
              o = this,
              i = this.query.groupBy,
              s = this.results,
              c = {},
              a = this.query.aggregate
            ;(this.query.aggregate = void 0), (this.results = void 0)
            var h = function() {
              for (var i in a) {
                var h = a[i],
                  l = o.getType(h)
                switch (i) {
                  case u.g.Count:
                    var f = function() {
                      return (
                        (r = (r = c[t]) ? r['count(' + n + ')'] : 0),
                        (r += s[e][n] ? 1 : 0)
                      )
                    }
                    if (l === u.c.String)
                      (n = h), (s[e]['count(' + n + ')'] = f())
                    else if (l === u.c.Array)
                      for (var p in h)
                        (n = h[p]), (s[e]['count(' + n + ')'] = f())
                    break
                  case u.g.Max:
                    var y = function() {
                      return (
                        (r = (r = c[t]) ? r['max(' + n + ')'] : 0),
                        (s[e][n] = s[e][n] ? s[e][n] : 0),
                        r > s[e][n] ? r : s[e][n]
                      )
                    }
                    if (l === u.c.String)
                      (n = h), (s[e]['max(' + n + ')'] = y())
                    else if (l === u.c.Array)
                      for (var p in h)
                        (n = h[p]), (s[e]['max(' + n + ')'] = y())
                    break
                  case u.g.Min:
                    var d = function() {
                      return (
                        (r = (r = c[t]) ? r['min(' + n + ')'] : 1 / 0),
                        (s[e][n] = s[e][n] ? s[e][n] : 1 / 0),
                        r < s[e][n] ? r : s[e][n]
                      )
                    }
                    if (l === u.c.String)
                      (n = h), (s[e]['min(' + n + ')'] = d())
                    else if (l === u.c.Array)
                      for (var p in h)
                        (n = h[p]), (s[e]['min(' + n + ')'] = d())
                    break
                  case u.g.Sum:
                    var _ = function() {
                      return (
                        (r = (r = c[t]) ? r['sum(' + n + ')'] : 0),
                        (r += s[e][n] ? s[e][n] : 0)
                      )
                    }
                    if (l === u.c.String)
                      (n = h), (s[e]['sum(' + n + ')'] = _())
                    else if (l === u.c.Array)
                      for (var p in h)
                        (n = h[p]), (s[e]['sum(' + n + ')'] = _())
                    break
                  case u.g.Avg:
                    var b = function() {
                      var o = (r = c[t]) ? r['sum(' + n + ')'] : 0
                      ;(o += s[e][n] ? s[e][n] : 0),
                        (s[e]['sum(' + n + ')'] = o),
                        (r = r ? r['count(' + n + ')'] : 0),
                        (r += s[e][n] ? 1 : 0),
                        (s[e]['count(' + n + ')'] = r)
                    }
                    if (l === u.c.String) (n = h), b()
                    else if (l === u.c.Array) for (var p in h) (n = h[p]), b()
                }
              }
            }
            if (this.getType(i) === u.c.String)
              for (e in s) (t = s[e][i]), h(), (c[t] = s[e])
            else
              for (e in s) {
                for (var l in ((t = ''), i)) t += s[e][i[l]]
                h(), (c[t] = s[e])
              }
            for (var f in ((s = []), c)) s.push(c[f])
            if (a.avg)
              if (this.getType(a.avg) === u.c.String)
                for (e in s) {
                  var p = s[e]['sum(' + a.avg + ')'],
                    y = s[e]['count(' + a.avg + ')']
                  ;(s[e]['avg(' + a.avg + ')'] = p / y),
                    a.count !== a.avg && delete s[e]['count(' + a.avg + ')'],
                    a.sum !== a.avg && delete s[e]['sum(' + a.avg + ')']
                }
              else {
                var d = this.getType(a.count) === u.c.String,
                  _ = this.getType(a.sum) === u.c.String
                for (e in s)
                  for (var l in a.avg) {
                    var b = a.avg[l],
                      g = s[e]['sum(' + b + ')'],
                      v = s[e]['count(' + b + ')']
                    ;(s[e]['avg(' + b + ')'] = g / v),
                      d &&
                        (a.count !== b
                          ? delete s[e]['count(' + b + ')']
                          : -1 === a.count.indexOf(b) &&
                            delete s[e]['count(' + b + ')']),
                      _ &&
                        (a.sum !== b
                          ? delete s[e]['sum(' + b + ')']
                          : -1 === a.sum.indexOf(b) &&
                            delete s[e]['sum(' + b + ')'])
                  }
              }
            this.results = s
          }),
          t
        )
      })(_),
      v = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      m = (function(e) {
        function t() {
          return e.call(this) || this
        }
        return (
          v(t, e),
          (t.prototype.processOrderBy = function() {
            var e = this,
              t = this.query.order
            if (t && this.results.length > 0 && !this.sorted && t.by) {
              t.type = t.type ? t.type.toLowerCase() : 'asc'
              var r = t.by
              typeof this.results[0][r] === u.c.String
                ? 'asc' === t.type
                  ? e.results.sort(function(e, t) {
                      return e[r]
                        .toLowerCase()
                        .localeCompare(t[r].toLowerCase())
                    })
                  : e.results.sort(function(e, t) {
                      return t[r]
                        .toLowerCase()
                        .localeCompare(e[r].toLowerCase())
                    })
                : typeof this.results[0][r] === u.c.Number &&
                  ('asc' === t.type
                    ? e.results.sort(function(e, t) {
                        return e[r] - t[r]
                      })
                    : e.results.sort(function(e, t) {
                        return t[r] - e[r]
                      }))
            }
          }),
          (t.prototype.processAggregateQry = function() {
            var e,
              t = this.results,
              r = {}
            for (var n in ((this.results = void 0), this.query.aggregate)) {
              var o = this.query.aggregate[n],
                i = this.getType(o)
              switch (n) {
                case 'count':
                  var s = function() {
                    var r = 0
                    for (var n in t) r += t[n][e] ? 1 : 0
                    return r
                  }
                  if (i === u.c.String) r['count(' + (e = o) + ')'] = s()
                  else if (i === u.c.Array)
                    for (var c in o) r['count(' + (e = o[c]) + ')'] = s()
                  break
                case 'max':
                  var a = function() {
                    var r = 0
                    for (var n in t) r = r > t[n][e] ? r : t[n][e]
                    return r
                  }
                  if (i === u.c.String) r['max(' + (e = o) + ')'] = a()
                  else if (i === u.c.Array)
                    for (var c in o) r['max(' + (e = o[c]) + ')'] = a()
                  break
                case 'min':
                  var h = function() {
                    var r = 1 / 0,
                      n = 1 / 0
                    for (var o in t)
                      r = r < (n = t[o][e] ? t[o][e] : 1 / 0) ? r : n
                    return r
                  }
                  if (i === u.c.String) r['min(' + (e = o) + ')'] = h()
                  else if (i === u.c.Array)
                    for (var c in o) r['min(' + (e = o[c]) + ')'] = h()
                  break
                case 'sum':
                  var l = function() {
                    var r = 0
                    for (var n in t) r += t[n][e]
                    return r
                  }
                  if (i === u.c.String) r['sum(' + (e = o) + ')'] = l()
                  else if (i === u.c.Array)
                    for (var c in o) r['sum(' + (e = o[c]) + ')'] = l()
                  break
                case 'avg':
                  var f = function() {
                    var r = 0
                    for (var n in t) r += t[n][e]
                    return r / t.length
                  }
                  if (i === u.c.String) r['avg(' + (e = o) + ')'] = f()
                  else if (i === u.c.Array)
                    for (var c in o) r['avg(' + (e = o[c]) + ')'] = f()
              }
            }
            for (var n in r) t[0][n] = r[n]
            this.results = t
          }),
          t
        )
      })(g),
      O = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      k = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (
            (o.onTransactionCompleted_ = function() {
              if (!1 === o.errorOccured) {
                if ((o.processOrderBy(), o.query.distinct)) {
                  var e = [],
                    t = o.results[0]
                  for (var r in t) e.push(r)
                  var n = o.getPrimaryKey(o.query.from),
                    i = e.indexOf(n)
                  e.splice(i, 1), (o.query.groupBy = e.length > 0 ? e : null)
                }
                o.query.groupBy
                  ? o.query.aggregate
                    ? o.executeAggregateGroupBy()
                    : o.processGroupBy()
                  : o.query.aggregate && o.processAggregateQry(),
                  o.onSuccess(o.results)
              }
            }),
            (o.onError = n),
            (o.onSuccess = r),
            (o.query = t),
            (o.skipRecord = t.skip),
            (o.limitRecord = t.limit),
            (o.tableName = t.from),
            o
          )
        }
        return (
          O(t, e),
          (t.prototype.execute = function() {
            try {
              void 0 !== this.query.where
                ? (this.initTransaction_(),
                  this.isArray(this.query.where)
                    ? this.processWhereArrayQry()
                    : this.processWhere_())
                : (this.initTransaction_(), this.executeWhereUndefinedLogic())
            } catch (e) {
              ;(this.errorOccured = !0),
                this.onExceptionOccured(e, { TableName: this.query.from })
            }
          }),
          (t.prototype.processWhereArrayQry = function() {
            var e = this
            this.isArrayQry = !0
            var t,
              r = this.query.where,
              n = this.getPrimaryKey(this.query.from),
              o = !0,
              i = [],
              s = function() {
                if (t === u.g.And) {
                  var s = function() {
                    var t = []
                    e.results.forEach(function(e) {
                      var r
                      ;(r = e[n]),
                        i.findIndex(function(e) {
                          return e[n] === r
                        }) >= 0 && t.push(e)
                    }),
                      (i = t),
                      (t = null)
                  }
                  i.length > 0 ? s() : !0 === o ? (i = e.results) : s()
                } else
                  i.length > 0
                    ? ((e.results = i.concat(e.results)),
                      e.removeDuplicates(),
                      (i = e.results))
                    : (i = e.results)
                r.length > 0 ? ((e.results = []), c()) : (e.results = i),
                  (o = !1)
              },
              c = function() {
                ;(e.query.where = r.shift()),
                  e.query.where[u.g.Or] &&
                  1 === Object.keys(e.query.where).length
                    ? ((t = u.g.Or),
                      (e.query.where = e.query.where[u.g.Or]),
                      (e.onWhereArrayQrySuccess = s))
                    : ((t = u.g.And), (e.onWhereArrayQrySuccess = s)),
                  e.processWhere_()
              }
            c()
          }),
          (t.prototype.onQueryFinished = function() {
            !0 === this.isOr
              ? this.orQuerySuccess_()
              : !0 === this.isArrayQry
                ? this.onWhereArrayQrySuccess()
                : !0 === this.isTransaction && this.onTransactionCompleted_()
          }),
          (t.prototype.initTransaction_ = function() {
            this.createTransaction(
              [this.tableName],
              this.onTransactionCompleted_,
              u.e.ReadOnly
            ),
              (this.objectStore = this.transaction.objectStore(this.tableName))
          }),
          (t.prototype.processWhere_ = function() {
            this.query.where.or && this.processOrLogic_(), this.goToWhereLogic()
          }),
          (t.prototype.orQueryFinish_ = function() {
            ;(this.isOr = !1),
              (this.results = this.orInfo.results),
              (this.orInfo = void 0),
              this.removeDuplicates(),
              this.onQueryFinished()
          }),
          (t.prototype.orQuerySuccess_ = function() {
            if (
              ((this.orInfo.results = this.orInfo.results.concat(this.results)),
              !this.query.limit ||
                this.query.limit > this.orInfo.results.length)
            ) {
              this.results = []
              var e = this.getObjectFirstKey(this.orInfo.orQuery)
              if (null != e) {
                var t = {}
                ;(t[e] = this.orInfo.orQuery[e]),
                  delete this.orInfo.orQuery[e],
                  (this.query.where = t),
                  this.goToWhereLogic()
              } else this.orQueryFinish_()
            } else this.orQueryFinish_()
          }),
          (t.prototype.processOrLogic_ = function() {
            ;(this.isOr = !0),
              (this.orInfo = { orQuery: this.query.where.or, results: [] }),
              delete this.query.where.or
          }),
          t
        )
      })(m),
      w = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      S = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          ;(o.queryStack = []),
            (o.currentQueryStackIndex = 0),
            (o.onSuccess = r),
            (o.onError = n),
            (o.query = t)
          var i = [],
            s = function(e) {
              return void 0 !== e.table1
                ? ((e.table2.joinType =
                    void 0 === e.join ? 'inner' : e.join.toLowerCase()),
                  o.queryStack.push(e.table2),
                  o.queryStack.length % 2 == 0 &&
                    (o.queryStack[o.queryStack.length - 1].nextJoin =
                      e.nextJoin),
                  i.push(e.table2.table),
                  s(e.table1))
                : (o.queryStack.push(e), void i.push(e.table))
            }
          ;(s(t.from), o.queryStack.reverse(), o.errorOccured) ||
            new k(
              { from: o.queryStack[0].table, where: o.queryStack[0].where },
              function(e) {
                var t = o.queryStack[0].table
                e.forEach(function(e, r) {
                  ;(o.results[r] = {}), (o.results[r][t] = e)
                }),
                  o.startExecutionJoinLogic_()
              },
              o.onErrorOccured
            ).execute()
          return o
        }
        return (
          w(t, e),
          (t.prototype.onTransactionCompleted_ = function(e) {
            null != this.onSuccess &&
              this.queryStack.length === this.currentQueryStackIndex + 1 &&
              (this.query[u.g.Count]
                ? this.onSuccess(this.results.length)
                : (this.query[u.g.Skip] && this.query[u.g.Limit]
                    ? (this.results.splice(0, this.query[u.g.Skip]),
                      this.results.splice(
                        this.query[u.g.Limit] - 1,
                        this.results.length
                      ))
                    : this.query[u.g.Skip]
                      ? this.results.splice(0, this.query[u.g.Skip])
                      : this.query[u.g.Limit] &&
                        this.results.splice(
                          this.query[u.g.Limit] - 1,
                          this.results.length
                        ),
                  this.onSuccess(this.results)))
          }),
          (t.prototype.executeWhereJoinLogic_ = function(e, t) {
            var r,
              n = this,
              o = [],
              i = (t.column, this.results),
              s = i.length,
              c = 0
            new k(
              { from: t.table, order: t.order, where: t.where },
              function(t) {
                t.forEach(function(t, n) {
                  for (var o = 0; o < s; o++)
                    (r = i[o][e.table][e.column]), u(r, t, o)
                }),
                  (n.results = o),
                  n.queryStack.length > n.currentQueryStackIndex + 1
                    ? n.startExecutionJoinLogic_()
                    : n.onTransactionCompleted_(null)
              },
              this.onErrorOccured
            ).execute()
            var u = function(e, r, s) {
              if (((o[c] = {}), e === r[t.column])) {
                o[c][t.table] = r
                for (var u = 0; u < n.currentQueryStackIndex; u++)
                  o[c][n.queryStack[u].table] = i[s][n.queryStack[u].table]
                ++c
              } else if ('left' === t.joinType) {
                ;(o[c] = {}), (o[c][t.table] = null)
                for (u = 0; u < n.currentQueryStackIndex; u++)
                  o[c][n.queryStack[u].table] = i[s][n.queryStack[u].table]
                ++c
              }
            }
          }),
          (t.prototype.executeRightJoin_ = function(e, t) {
            var r = this,
              n = [],
              o = (t.column, this.results),
              i = o.length,
              s = 0
            new k(
              { from: t.table, order: t.order, where: t.where },
              function(c) {
                !(function(c) {
                  var u = !1
                  c.forEach(function(r, c) {
                    for (s = 0; s < i; s++)
                      if (r[t.column] === o[s][e.table][e.column]) {
                        u = !0
                        break
                      }
                    if (((n[c] = {}), (n[c][t.table] = r), u)) {
                      u = !1
                      for (var a = 0; a < this.currentQueryStackIndex; a++)
                        n[c][this.queryStack[a].table] =
                          o[s][this.queryStack[a].table]
                    } else for (a = 0; a < this.currentQueryStackIndex; a++) n[c][this.queryStack[a].table] = null
                  }, r)
                })(c),
                  (r.results = n),
                  r.queryStack.length > r.currentQueryStackIndex + 1
                    ? r.startExecutionJoinLogic_()
                    : r.onTransactionCompleted_(null)
              },
              r.onErrorOccured
            ).execute()
          }),
          (t.prototype.executeWhereUndefinedLogicForJoin_ = function(e, t) {
            var r = this,
              n = [],
              o = (t.column, this.results),
              i = {},
              s = o.length,
              c = 0,
              u = 0,
              a = function() {
                u < s
                  ? r.errorOccured ||
                    ((i[t.column] = o[u][e.table][e.column]),
                    new k(
                      { from: t.table, order: t.order, where: i },
                      function(e) {
                        !(function(e) {
                          if (e.length > 0)
                            e.forEach(function(e) {
                              ;(n[c] = {}), (n[c][t.table] = e)
                              for (var i = 0; i < r.currentQueryStackIndex; i++)
                                n[c][r.queryStack[i].table] =
                                  o[u][r.queryStack[i].table]
                              ++c
                            })
                          else if ('left' === t.joinType) {
                            ;(n[c] = {}), (n[c][t.table] = null)
                            for (var i = 0; i < r.currentQueryStackIndex; i++)
                              n[c][r.queryStack[i].table] =
                                o[u][r.queryStack[i].table]
                            ++c
                          }
                        })(e),
                          ++u,
                          a()
                      },
                      r.onErrorOccured.bind(r)
                    ).execute())
                  : ((r.results = n),
                    r.queryStack.length > r.currentQueryStackIndex + 1
                      ? r.startExecutionJoinLogic_()
                      : r.onTransactionCompleted_(null))
              }
            a()
          }),
          (t.prototype.startExecutionJoinLogic_ = function() {
            var e
            this.currentQueryStackIndex >= 1 &&
            this.currentQueryStackIndex % 2 == 1
              ? ((e = {
                  column: this.queryStack[this.currentQueryStackIndex].nextJoin
                    .column,
                  table: this.queryStack[this.currentQueryStackIndex].nextJoin
                    .table,
                }),
                this.currentQueryStackIndex++)
              : (e = this.queryStack[this.currentQueryStackIndex++])
            var t = this.queryStack[this.currentQueryStackIndex]
            'right' === t.joinType
              ? this.executeRightJoin_(e, t)
              : t.where
                ? this.executeWhereJoinLogic_(e, t)
                : this.executeWhereUndefinedLogicForJoin_(e, t)
          }),
          t
        )
      })(s)
    r.d(t, 'a', function() {
      return k
    }),
      r.d(t, 'b', function() {
        return S
      })
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return a
    })
    var n = r(0),
      o = r(1),
      i = r(2),
      s = r(4),
      c = r(10),
      u = r(9),
      a = (function() {
        function e(e, t) {
          ;(this.api = e), (this.query = t)
        }
        return (
          (e.prototype.checkAndModify = function() {
            var e = this
            return new Promise(function(t, r) {
              var o = function() {
                null == e.error ? t() : r(e.error)
              }
              switch (e.api) {
                case n.a.Select:
                case n.a.Remove:
                case n.a.Count:
                  e.checkFetchQuery_(), o()
                  break
                case n.a.Insert:
                  e.checkInsertQuery_(function() {
                    o()
                  })
                  break
                case n.a.Update:
                  e.checkUpdateQuery_(), o()
                  break
                case n.a.BulkInsert:
                  e.checkBulkInsert_()
                  break
                default:
                  throw new Error('invalid api')
              }
            })
          }),
          (e.prototype.isInsertQryValid_ = function() {
            var e,
              t = this.getTable_(this.query.into)
            if (t)
              switch (this.getType_(this.query.values)) {
                case n.c.Array:
                  break
                case n.c.Null:
                  e = new i.a(n.d.NoValueSupplied)
                  break
                default:
                  e = new i.a(n.d.NotArray)
              }
            else e = new i.a(n.d.TableNotExist, { TableName: this.query.into })
            return null != e && (this.error = e.get()), t
          }),
          (e.prototype.checkBulkInsert_ = function() {
            this.isInsertQryValid_()
          }),
          (e.prototype.checkInsertQuery_ = function(e) {
            var t = this,
              r = this.isInsertQryValid_()
            if (null == this.error)
              if (this.query.skipDataCheck) e()
              else {
                var n = new u.b(r, this.query.values)
                n.checkAndModifyValues(function(r) {
                  r
                    ? ((t.error = n.error), e())
                    : ((t.query.values = n.values), e())
                })
              }
            else e()
          }),
          (e.prototype.checkUpdateQuery_ = function() {
            ;(this.error = new c.b(this.getTable_(this.query.in)).check(
              this.query.set,
              this.query.in
            )),
              null == this.error && this.addGreatAndLessToNotOp_()
          }),
          (e.prototype.checkFetchQuery_ = function() {
            !0 === this.isTableExist_(this.query.from)
              ? void 0 !== this.query.where && this.addGreatAndLessToNotOp_()
              : (this.error = new i.a(n.d.TableNotExist, {
                  TableName: this.query.from,
                }).get())
          }),
          (e.prototype.isTableExist_ = function(e) {
            return (
              this.activeDb_.tables.findIndex(function(t) {
                return t.name === e
              }) >= 0
            )
          }),
          Object.defineProperty(e.prototype, 'activeDb_', {
            get: function() {
              return o.a.activeDb
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getTable_ = function(e) {
            return o.a.getTable(e)
          }),
          (e.prototype.addGreatAndLessToNotOp_ = function() {
            var e = this.query.where,
              t = function(e, t) {
                return (
                  t.findIndex(function(t) {
                    return null != e[t][n.g.NotEqualTo]
                  }) >= 0
                )
              },
              r = function(e, t) {
                var r
                return (
                  t.forEach(function(t) {
                    null != (r = e[t])[n.g.NotEqualTo] &&
                      ((e[t][n.g.GreaterThan] = r[n.g.NotEqualTo]),
                      void 0 === e[n.g.Or]
                        ? ((e[n.g.Or] = {}), (e[n.g.Or][t] = {}))
                        : void 0 === e[n.g.Or][t] && (e[n.g.Or][t] = {}),
                      (e[n.g.Or][t][n.g.LessThan] = r[n.g.NotEqualTo]),
                      delete e[t][n.g.NotEqualTo])
                  }),
                  e
                )
              }
            switch (this.getType_(e)) {
              case n.c.Object:
                var o = Object.keys(e)
                if (t(e, o))
                  if (1 === o.length) this.query.where = r(e, o)
                  else {
                    var i = []
                    o.forEach(function(t) {
                      var n
                      i.push(r((((n = {})[t] = e[t]), n), [t]))
                    }),
                      (this.query.where = i)
                  }
                break
              default:
                var s = []
                e.forEach(function(e) {
                  var n = Object.keys(e)
                  t(e, n) && (e = r(e, n)), s.push(e)
                }),
                  (this.query.where = s)
            }
          }),
          (e.prototype.getType_ = function(e) {
            return s.a.getType(e)
          }),
          (e.prototype.isArray_ = function(e) {
            return s.a.isArray(e)
          }),
          e
        )
      })()
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return n
    })
    var n = (function() {
      function e() {}
      return (e.isLogEnabled = !1), (e.isRuningInWorker = !1), e
    })()
  },
  function(e, t, r) {
    'use strict'
    var n,
      o = r(5),
      i = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      s = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (
            (o._valuesAffected = []),
            (o.onTransactionCompleted_ = function() {
              !1 === o.errorOccured &&
                o.onSuccess(o.query.return ? o._valuesAffected : o.rowAffected)
            }),
            (o.onError = n),
            (o.query = t),
            (o.onSuccess = r),
            (o.tableName = o.query.into),
            o
          )
        }
        return (
          i(t, e),
          (t.prototype.execute = function() {
            try {
              this.insertData(this.query.values)
            } catch (e) {
              this.onExceptionOccured(e, { TableName: this.tableName })
            }
          }),
          (t.prototype.onQueryFinished = function() {
            !0 === this.isTransaction && this.onTransactionCompleted_()
          }),
          (t.prototype.insertData = function(e) {
            var t,
              r = this,
              n = 0
            ;(t = this.query.return
              ? function(i) {
                  if (i) {
                    var s = o.add(i)
                    ;(s.onerror = r.onErrorOccured.bind(r)),
                      (s.onsuccess = function(o) {
                        r._valuesAffected.push(i), t.call(r, e[n++])
                      })
                  } else r.onQueryFinished()
                }
              : function(i) {
                  if (i) {
                    var s = o.add(i)
                    ;(s.onerror = r.onErrorOccured.bind(r)),
                      (s.onsuccess = function(o) {
                        ++r.rowAffected, t.call(r, e[n++])
                      })
                  } else r.onQueryFinished()
                }),
              this.createTransaction(
                [this.query.into],
                this.onTransactionCompleted_
              )
            var o = this.transaction.objectStore(this.query.into)
            t(e[n++])
          }),
          t
        )
      })(o.a),
      c = r(4),
      u = r(0),
      a = r(2),
      h = (function() {
        function e(e, t) {
          ;(this.errorOccured = !1),
            (this.autoIncrementValue = {}),
            (this.table = e),
            (this.autoIncrementValue = t)
        }
        return (
          (e.prototype.checkAndModifyValue = function(e) {
            var t = this
            return (
              (this.value = e),
              this.table.columns.every(function(e) {
                return t.checkAndModifyColumnValue_(e), !t.errorOccured
              }),
              this.errorOccured
            )
          }),
          (e.prototype.isNull_ = function(e) {
            return c.a.isNull(e)
          }),
          (e.prototype.getType_ = function(e) {
            return c.a.getType(e)
          }),
          (e.prototype.checkNotNullAndDataType_ = function(e) {
            e.notNull && this.isNull_(this.value[e.name])
              ? this.onValidationError_(u.d.NullValue, { ColumnName: e.name })
              : e.dataType &&
                !this.isNull_(this.value[e.name]) &&
                this.getType_(this.value[e.name]) !== e.dataType &&
                this.onValidationError_(u.d.BadDataType, { ColumnName: e.name })
          }),
          (e.prototype.checkAndModifyColumnValue_ = function(e) {
            e.autoIncrement
              ? (this.value[e.name] = ++this.autoIncrementValue[e.name])
              : e.default &&
                this.isNull_(this.value[e.name]) &&
                (this.value[e.name] = e.default),
              this.checkNotNullAndDataType_(e)
          }),
          (e.prototype.onValidationError_ = function(e, t) {
            ;(this.errorOccured = !0), (this.log = new a.a(e, t))
          }),
          e
        )
      })(),
      l = r(1),
      f = r(3),
      p = (function() {
        function e(e, t) {
          ;(this.table = e), (this.values = t)
        }
        return (
          (e.prototype.checkAndModifyValues = function(e) {
            var t = this
            this.onFinish = e
            var r = {}
            this.table.columns
              .filter(function(e) {
                return e.autoIncrement
              })
              .forEach(function(e) {
                var n =
                  'JsStore_' +
                  l.a.activeDb.name +
                  '_' +
                  t.table.name +
                  '_' +
                  e.name +
                  '_Value'
                f.a(n, function(t) {
                  r[e.name] = t
                })
              }),
              f.a(
                'dumy_key',
                function(e) {
                  ;(t.valueCheckerObj = new h(t.table, r)), t.startChecking()
                },
                function(e) {
                  ;(t.error = e), t.onFinish(!0)
                }
              )
          }),
          (e.prototype.startChecking = function() {
            var e = this,
              t = !1
            if (
              (this.values.every(function(r) {
                return !(t = e.valueCheckerObj.checkAndModifyValue(r))
              }),
              t)
            )
              (this.error = this.valueCheckerObj.log.get()), this.onFinish(!0)
            else {
              for (
                var r = 0,
                  n = Object.keys(this.valueCheckerObj.autoIncrementValue);
                r < n.length;
                r++
              ) {
                var o = n[r],
                  i =
                    'JsStore_' +
                    l.a.activeDb.name +
                    '_' +
                    this.table.name +
                    '_' +
                    o +
                    '_Value'
                f.d(i, this.valueCheckerObj.autoIncrementValue[o])
              }
              f.a(
                'dumy_key',
                function(t) {
                  e.onFinish(!1)
                },
                function(t) {
                  ;(e.error = t), e.onFinish(!0)
                }
              )
            }
          }),
          e
        )
      })()
    r.d(t, 'a', function() {
      return s
    }),
      r.d(t, 'b', function() {
        return p
      })
  },
  function(e, t, r) {
    'use strict'
    var n,
      o = r(5),
      i = r(0),
      s = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      c = function(e, t) {
        for (var r in e)
          if (typeof e[r] !== i.c.Object) t[r] = e[r]
          else
            for (var n in e[r]) {
              switch (n) {
                case '+':
                  t[r] += e[r][n]
                  break
                case '-':
                  t[r] -= e[r][n]
                  break
                case '*':
                  t[r] *= e[r][n]
                  break
                case '/':
                  t[r] /= e[r][n]
                  break
                default:
                  t[r] = e[r]
              }
              break
            }
        return t
      },
      u = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t.onTransactionCompleted_ = function() {
              !1 === t.errorOccured && t.onSuccess(t.rowAffected)
            }),
            t
          )
        }
        return (
          s(t, e),
          (t.prototype.initTransaction = function() {
            this.createTransaction(
              [this.query.in],
              this.onTransactionCompleted_
            ),
              (this.objectStore = this.transaction.objectStore(this.query.in))
          }),
          (t.prototype.onQueryFinished = function() {
            !0 === this.isTransaction && this.onTransactionCompleted_()
          }),
          t
        )
      })(o.a),
      a = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      h = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          a(t, e),
          (t.prototype.executeWhereUndefinedLogic = function() {
            var e,
              t = this,
              r = this.objectStore.openCursor()
            ;(r.onsuccess = function(r) {
              ;(e = r.target.result)
                ? (e.update(c(t.query.set, e.value)),
                  ++t.rowAffected,
                  e.continue())
                : t.onQueryFinished()
            }),
              (r.onerror = function(e) {
                ;(t.errorOccured = !0), t.onErrorOccured(e)
              })
          }),
          t
        )
      })(u),
      l = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          l(t, e),
          (t.prototype.executeInLogic = function(e, t) {
            var r,
              n,
              o = this,
              i = this.objectStore.index(e),
              s = t.length,
              u = 0,
              a = function() {
                ++u === s && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var h = 0; h < s; h++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[h])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (o.whereCheckerInstance.check(r.value) &&
                          (r.update(c(o.query.set, r.value)), ++o.rowAffected),
                        r.continue())
                      : a()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (h = 0; h < s; h++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[h])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (r.update(c(o.query.set, r.value)),
                        ++o.rowAffected,
                        r.continue())
                      : a()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          t
        )
      })(h),
      p = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          p(t, e),
          (t.prototype.executeLikeLogic = function(e, t, r) {
            var n,
              o = this
            ;(this.compValue = t.toLowerCase()),
              (this.compValueLength = this.compValue.length),
              (this.compSymbol = r)
            var i = this.objectStore.index(e).openCursor()
            ;(i.onerror = function(e) {
              ;(o.errorOccured = !0), o.onErrorOccured(e)
            }),
              this.checkFlag
                ? (i.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (o.filterOnOccurence(n.key) &&
                          o.whereCheckerInstance.check(n.value) &&
                          (n.update(c(o.query.set, n.value)), ++o.rowAffected),
                        n.continue())
                      : o.onQueryFinished()
                  })
                : (i.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (o.filterOnOccurence(n.key) &&
                          (n.update(c(o.query.set, n.value)), ++o.rowAffected),
                        n.continue())
                      : o.onQueryFinished()
                  })
          }),
          t
        )
      })(f),
      d = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      _ = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          d(t, e),
          (t.prototype.executeWhereLogic = function(e, t, r) {
            var n,
              o,
              i = this
            ;(t = r ? t[r] : t),
              (o = this.objectStore
                .index(e)
                .openCursor(this.getKeyRange(t, r))),
              this.checkFlag
                ? (o.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (i.whereCheckerInstance.check(n.value) &&
                          (n.update(c(i.query.set, n.value)), ++i.rowAffected),
                        n.continue())
                      : i.onQueryFinished()
                  })
                : (o.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (n.update(c(i.query.set, n.value)),
                        ++i.rowAffected,
                        n.continue())
                      : i.onQueryFinished()
                  }),
              (o.onerror = function(e) {
                ;(i.errorOccured = !0), i.onErrorOccured(e)
              })
          }),
          t
        )
      })(y),
      b = r(6),
      g = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      v = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (
            (o.onSuccess = r),
            (o.onError = n),
            (o.query = t),
            (o.tableName = o.query.in),
            o
          )
        }
        return (
          g(t, e),
          (t.prototype.execute = function() {
            try {
              void 0 !== this.query.where
                ? this.query.where.or || Array.isArray(this.query.where)
                  ? this.executeComplexLogic_()
                  : (this.initTransaction(), this.goToWhereLogic())
                : (this.initTransaction(), this.executeWhereUndefinedLogic())
            } catch (e) {
              ;(this.errorOccured = !0),
                this.onExceptionOccured.call(this, e, {
                  TableName: this.query.in,
                })
            }
          }),
          (t.prototype.executeComplexLogic_ = function() {
            var e = this
            new b.a(
              { from: this.query.in, where: this.query.where },
              function(t) {
                var r,
                  n = e.getPrimaryKey(e.query.in),
                  o = [],
                  s = {}
                t.forEach(function(e) {
                  o.push(e[n])
                }),
                  (t = null),
                  (s[n] = (((r = {})[i.g.In] = o), r)),
                  (e.query[i.g.Where] = s),
                  e.initTransaction(),
                  e.goToWhereLogic()
              },
              this.onError
            ).execute()
          }),
          t
        )
      })(_),
      m = r(2),
      O = r(4),
      k = (function() {
        function e(e) {
          this.table = e
        }
        return (
          (e.prototype.check = function(e, t) {
            var r = this,
              n = null
            return (
              typeof e === i.c.Object
                ? this.table
                  ? this.table.columns.every(function(t) {
                      return (
                        null === n &&
                        (t.name in e && (n = r.checkByColumn_(t, e[t.name])),
                        !0)
                      )
                    })
                  : (n = new m.a(i.d.TableNotExist, { TableName: t }))
                : (n = new m.a(i.d.NotObject)),
              null != n ? n.get() : null
            )
          }),
          (e.prototype.isNull_ = function(e) {
            return O.a.isNull(e)
          }),
          (e.prototype.getType_ = function(e) {
            return O.a.getType(e)
          }),
          (e.prototype.checkByColumn_ = function(e, t) {
            var r = null
            e.notNull &&
              this.isNull_(t) &&
              (r = new m.a(i.d.NullValue, { ColumnName: e.name }))
            var n = this.getType_(t)
            if (
              (e.dataType &&
                n !== e.dataType &&
                'object' !== n &&
                (r = new m.a(i.d.BadDataType, { ColumnName: e.name })),
              'object' === n)
            )
              for (
                var o = ['+', '-', '*', '/'], s = 0, c = Object.keys(t);
                s < c.length;
                s++
              ) {
                var u = c[s]
                o.indexOf(u) < 0 &&
                  e.dataType &&
                  n !== e.dataType &&
                  (r = new m.a(i.d.BadDataType, { ColumnName: e.name }))
                break
              }
            return r
          }),
          e
        )
      })()
    r.d(t, 'a', function() {
      return v
    }),
      r.d(t, 'b', function() {
        return k
      })
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return o
    })
    var n = r(1),
      o = (function() {
        function e() {}
        return (
          Object.defineProperty(e.prototype, 'dbName', {
            get: function() {
              return n.a.activeDb.name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'dbStatus', {
            get: function() {
              return n.a.dbStatus
            },
            set: function(e) {
              n.a.dbStatus = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'dbConnection', {
            get: function() {
              return n.a.dbConnection
            },
            set: function(e) {
              n.a.dbConnection = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.updateDbStatus = function(e, t) {
            n.a.updateDbStatus(e, t)
          }),
          (e.prototype.onDbDroppedByBrowser = function(e) {
            n.a.callDbDroppedByBrowser(e)
          }),
          Object.defineProperty(e.prototype, 'dbVersion', {
            get: function() {
              return parseInt(n.a.activeDbVersion)
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'activeDb', {
            get: function() {
              return n.a.activeDb
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getDbList = function(e) {
            n.a.getDbList(e)
          }),
          (e.prototype.setDbList = function(e) {
            return n.a.setDbList(e)
          }),
          e
        )
      })()
  },
  function(e, t, r) {
    'use strict'
    var n,
      o = r(5),
      i = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return i(t, e), (t.prototype.onQueryFinished = function() {}), t
      })(o.a),
      c = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      u = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          c(t, e),
          (t.prototype.executeWhereUndefinedLogic = function() {
            var e,
              t = this,
              r = this.objectStore.openCursor()
            ;(r.onsuccess = function(r) {
              ;(e = r.target.result)
                ? (e.delete(), ++t.rowAffected, e.continue())
                : t.onQueryFinished()
            }),
              (r.onerror = function(e) {
                ;(t.errorOccured = !0), t.onErrorOccured(e)
              })
          }),
          t
        )
      })(s),
      a = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      h = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          a(t, e),
          (t.prototype.executeInLogic = function(e, t) {
            var r,
              n,
              o = this,
              i = t.length,
              s = 0,
              c = function() {
                ++s === i && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var u = 0; u < i; u++)
                this.errorOccured ||
                  (((n = this.objectStore
                    .index(e)
                    .openCursor(IDBKeyRange.only(t[u]))).onsuccess = function(
                    e
                  ) {
                    ;(r = e.target.result)
                      ? (o.whereCheckerInstance.check(r.value) &&
                          (r.delete(), ++o.rowAffected),
                        r.continue())
                      : c()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (u = 0; u < i; u++)
                this.errorOccured ||
                  (((n = this.objectStore
                    .index(e)
                    .openCursor(IDBKeyRange.only(t[u]))).onsuccess = function(
                    e
                  ) {
                    ;(r = e.target.result)
                      ? (r.delete(), ++o.rowAffected, r.continue())
                      : c()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          t
        )
      })(u),
      l = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          l(t, e),
          (t.prototype.executeLikeLogic = function(e, t, r) {
            var n,
              o = this
            ;(this.compValue = t.toLowerCase()),
              (this.compValueLength = this.compValue.length),
              (this.compSymbol = r)
            var i = this.objectStore.index(e).openCursor()
            ;(i.onerror = function(e) {
              ;(o.errorOccured = !0), o.onErrorOccured(e)
            }),
              this.checkFlag
                ? (i.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (o.filterOnOccurence(n.key) &&
                          o.whereCheckerInstance.check(n.value) &&
                          (n.delete(), ++o.rowAffected),
                        n.continue())
                      : o.onQueryFinished()
                  })
                : (i.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (o.filterOnOccurence(n.key) &&
                          (n.delete(), ++o.rowAffected),
                        n.continue())
                      : o.onQueryFinished()
                  })
          }),
          t
        )
      })(h),
      p = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          p(t, e),
          (t.prototype.executeWhereLogic = function(e, t, r) {
            var n,
              o,
              i = this
            ;(t = r ? t[r] : t),
              (o = this.objectStore
                .index(e)
                .openCursor(this.getKeyRange(t, r))),
              this.checkFlag
                ? (o.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (i.whereCheckerInstance.check(n.value) &&
                          (n.delete(), ++i.rowAffected),
                        n.continue())
                      : i.onQueryFinished()
                  })
                : (o.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (n.delete(), ++i.rowAffected, n.continue())
                      : i.onQueryFinished()
                  }),
              (o.onerror = function(e) {
                ;(i.errorOccured = !0), i.onErrorOccured(e)
              })
          }),
          t
        )
      })(f),
      d = r(6),
      _ = r(0),
      b = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      g = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (
            (o.onTransactionCompleted_ = function() {
              !1 === o.errorOccured && o.onSuccess(o.rowAffected)
            }),
            (o.query = t),
            (o.onSuccess = r),
            (o.onError = n),
            o
          )
        }
        return (
          b(t, e),
          (t.prototype.execute = function() {
            try {
              void 0 !== this.query.where
                ? (this.initTransaction_(),
                  this.isArray(this.query.where)
                    ? this.processWhereArrayQry()
                    : this.processWhere_())
                : (this.initTransaction_(), this.executeWhereUndefinedLogic())
            } catch (e) {
              ;(this.errorOccured = !0),
                this.onExceptionOccured(e, { TableName: this.query.from })
            }
          }),
          (t.prototype.processWhereArrayQry = function() {
            var e = this
            new d.a(
              this.query,
              function(t) {
                var r = [],
                  n = e.getPrimaryKey(e.query.from)
                t.forEach(function(e) {
                  r.push(e[n])
                }),
                  (t = null),
                  (e.query.where = {}),
                  (e.query.where[n] = {}),
                  (e.query.where[n][_.g.In] = r),
                  e.processWhere_()
              },
              this.onError
            ).execute()
          }),
          (t.prototype.processWhere_ = function() {
            this.query.where.or && this.processOrLogic(), this.goToWhereLogic()
          }),
          (t.prototype.initTransaction_ = function() {
            this.createTransaction(
              [this.query.from],
              this.onTransactionCompleted_
            ),
              (this.objectStore = this.transaction.objectStore(this.query.from))
          }),
          (t.prototype.onQueryFinished = function() {
            !0 === this.isOr
              ? this.orQuerySuccess_()
              : !0 === this.isTransaction && this.onTransactionCompleted_()
          }),
          (t.prototype.orQuerySuccess_ = function() {
            var e = this.getObjectFirstKey(this._orInfo.OrQuery)
            if (null != e) {
              var t = {}
              ;(t[e] = this._orInfo.OrQuery[e]),
                delete this._orInfo.OrQuery[e],
                (this.query.where = t),
                this.goToWhereLogic()
            } else this.isOr = !0
          }),
          (t.prototype.processOrLogic = function() {
            ;(this.isOr = !0),
              (this._orInfo = { OrQuery: this.query.where.or }),
              delete this.query.where.or
          }),
          t
        )
      })(y)
    r.d(t, 'a', function() {
      return g
    })
  },
  function(e, t, r) {
    'use strict'
    var n,
      o = r(5),
      i = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      s = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t.resultCount = 0),
            (t.onTransactionCompleted_ = function() {
              !1 === t.errorOccured && t.onSuccess(t.resultCount)
            }),
            t
          )
        }
        return (
          i(t, e),
          (t.prototype.onQueryFinished = function() {
            !0 === this.isTransaction && this.onTransactionCompleted_()
          }),
          t
        )
      })(o.a),
      c = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      u = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          c(t, e),
          (t.prototype.executeWhereUndefinedLogic = function() {
            var e = this
            if (this.objectStore.count) {
              var t = this.objectStore.count()
              ;(t.onsuccess = function() {
                ;(e.resultCount = t.result), e.onQueryFinished()
              }),
                (t.onerror = this.onCursorError)
            } else {
              var r,
                n = this.objectStore.openCursor()
              ;(n.onsuccess = function(e) {
                ;(r = e.target.result)
                  ? (++this._resultCount, r.continue())
                  : this.onQueryFinished()
              }.bind(this)),
                (n.onerror = this.onCursorError)
            }
          }),
          t
        )
      })(s),
      a = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      h = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          a(t, e),
          (t.prototype.executeInLogic = function(e, t) {
            var r,
              n,
              o = this,
              i = this.objectStore.index(e),
              s = t.length,
              c = 0,
              u = function() {
                ++c === s && o.onQueryFinished()
              }
            if (this.checkFlag)
              for (var a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[a])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (o.whereCheckerInstance.check(r.value) &&
                          ++o.resultCount,
                        r.continue())
                      : u()
                  }),
                  (n.onerror = this.onCursorError))
            else if (this.objectStore.count)
              for (a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.count(IDBKeyRange.only(t[a]))).onsuccess = function(
                    e
                  ) {
                    ;(o.resultCount += e.target.result), u()
                  }),
                  (n.onerror = this.onCursorError))
            else
              for (a = 0; a < s; a++)
                this.errorOccured ||
                  (((n = i.openCursor(
                    IDBKeyRange.only(t[a])
                  )).onsuccess = function(e) {
                    ;(r = e.target.result)
                      ? (++o.resultCount, r.continue())
                      : u()
                  }),
                  (n.onerror = this.onCursorError))
          }),
          t
        )
      })(u),
      l = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          l(t, e),
          (t.prototype.executeLikeLogic = function(e, t, r) {
            var n,
              o = this
            ;(this.compValue = t.toLowerCase()),
              (this.compValueLength = this.compValue.length),
              (this.compSymbol = r)
            var i = this.objectStore.index(e).openCursor()
            ;(i.onerror = this.onCursorError),
              this.checkFlag
                ? (i.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (o.filterOnOccurence(n.key) &&
                          o.whereCheckerInstance.check(n.value) &&
                          ++o.resultCount,
                        n.continue())
                      : o.onQueryFinished()
                  })
                : (i.onsuccess = function(e) {
                    ;(n = e.target.result)
                      ? (o.filterOnOccurence(n.key) && ++o.resultCount,
                        n.continue())
                      : o.onQueryFinished()
                  })
          }),
          t
        )
      })(h),
      p = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          p(t, e),
          (t.prototype.executeWhereLogic = function(e, t, r) {
            var n,
              o,
              i = this
            ;(t = r ? t[r] : t),
              this.checkFlag
                ? ((n = this.objectStore
                    .index(e)
                    .openCursor(this.getKeyRange(t, r))).onsuccess = function(
                    e
                  ) {
                    ;(o = e.target.result)
                      ? (i.whereCheckerInstance.check(o.value) &&
                          ++i.resultCount,
                        o.continue())
                      : i.onQueryFinished()
                  })
                : this.objectStore.count
                  ? ((n = this.objectStore
                      .index(e)
                      .count(this.getKeyRange(t, r))).onsuccess = function() {
                      ;(i.resultCount = n.result), i.onQueryFinished()
                    })
                  : ((n = this.objectStore
                      .index(e)
                      .openCursor(this.getKeyRange(t, r))).onsuccess = function(
                      e
                    ) {
                      ;(o = e.target.result)
                        ? (++i.resultCount, o.continue())
                        : i.onQueryFinished()
                    }),
              (n.onerror = function(e) {
                ;(i.errorOccured = !0), i.onErrorOccured(e)
              })
          }),
          t
        )
      })(f),
      d = r(6),
      _ = r(0),
      b = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      g = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (o.onError = n), (o.onSuccess = r), (o.query = t), o
        }
        return (
          b(t, e),
          (t.prototype.execute = function() {
            var e = this
            try {
              if (void 0 !== this.query.where)
                if (this.query.where.or || this.isArray(this.query.where))
                  new d.a(
                    this.query,
                    function(t) {
                      ;(e.resultCount = t.length), e.onTransactionCompleted_()
                    },
                    this.onError
                  ).execute()
                else this.initTransaction_(), this.goToWhereLogic()
              else this.initTransaction_(), this.executeWhereUndefinedLogic()
            } catch (e) {
              this.onExceptionOccured(e, { TableName: this.query.from })
            }
          }),
          (t.prototype.initTransaction_ = function() {
            this.createTransaction(
              [this.query.from],
              this.onTransactionCompleted_,
              _.e.ReadOnly
            ),
              (this.objectStore = this.transaction.objectStore(this.query.from))
          }),
          t
        )
      })(y)
    r.d(t, 'a', function() {
      return g
    })
  },
  function(e, t, r) {
    'use strict'
    r.d(t, 'a', function() {
      return a
    })
    var n,
      o = r(3),
      i = r(0),
      s = r(2),
      c = r(11),
      u = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      a = (function(e) {
        function t(t, r) {
          var n = e.call(this) || this
          return (n.onSuccess_ = t), (n.onError_ = r), n
        }
        return (
          u(t, e),
          (t.prototype.deleteMetaData = function() {
            var e = this
            o.c('JsStore_' + this.dbName + '_Db_Version'),
              this.activeDb.tables.forEach(function(t) {
                o.c('JsStore_' + e.dbName + '_' + t.name + '_Version'),
                  t.columns.forEach(function(r) {
                    r.autoIncrement &&
                      o.c(
                        'JsStore_' +
                          e.dbName +
                          '_' +
                          t.name +
                          '_' +
                          r.name +
                          '_Value'
                      )
                  })
              }),
              this.getDbList(function(t) {
                t.splice(t.indexOf(e.dbName), 1),
                  e.setDbList(t).then(function() {
                    o.c('JsStore_' + e.dbName + '_Schema', e.onSuccess_)
                  })
              })
          }),
          (t.prototype.deleteDb = function() {
            var e = this
            setTimeout(function() {
              var t = indexedDB.deleteDatabase(e.dbName)
              ;(t.onblocked = function() {
                null != e.onError_ && e.onError_(new s.a(i.d.DbBlocked).get())
              }),
                (t.onerror = function(t) {
                  null != e.onError_ && e.onError_(event.target.error)
                }),
                (t.onsuccess = function() {
                  ;(e.dbStatus.conStatus = i.b.Closed), e.deleteMetaData()
                })
            }, 100)
          }),
          t
        )
      })(c.a)
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    __webpack_require__.d(__webpack_exports__, 'a', function() {
      return Instance
    })
    var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5),
      _select_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
      _count_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13),
      _insert_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9),
      _remove_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12),
      _update_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10),
      _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
      _query_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7),
      __extends = ((extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        extendStatics(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      extendStatics,
      Instance = (function(_super) {
        function Instance(e, t, r) {
          var n = _super.call(this) || this
          return (
            (n.requestQueue = []),
            (n.isQueryExecuting = !1),
            (n.isTransactionStarted = !1),
            (n.query = e),
            (n.onError = r),
            (n.onSuccess = t),
            (n.results = {}),
            n
          )
        }
        return (
          __extends(Instance, _super),
          (Instance.prototype.execute = function() {
            var _this = this,
              select = function(e) {
                return _this.pushRequest({
                  name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Select,
                  query: e,
                })
              },
              insert = function(e) {
                return _this.pushRequest({
                  name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Insert,
                  query: e,
                })
              },
              update = function(e) {
                return _this.pushRequest({
                  name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Update,
                  query: e,
                })
              },
              remove = function(e) {
                return _this.pushRequest({
                  name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Remove,
                  query: e,
                })
              },
              count = function(e) {
                return _this.pushRequest({
                  name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Count,
                  query: e,
                })
              },
              setResult = function(e, t) {
                _this.results[e] = t
              },
              abort = function() {
                _this.abortTransaction()
              },
              txLogic = null
            eval('txLogic =' + this.query.logic),
              txLogic.call(this, this.query.data),
              this.checkQueries()
                .then(function() {
                  _this.startTransaction_()
                })
                .catch(function(e) {
                  _this.onError(e)
                })
          }),
          (Instance.prototype.startTransaction_ = function() {
            try {
              ;(this.isTransactionStarted = !0),
                this.initTransaction_(this.query.tables),
                this.processExecutionOfQry()
            } catch (e) {
              this.onErrorOccured(e, !1)
            }
          }),
          (Instance.prototype.initTransaction_ = function(e) {
            this.createTransaction(e, this.onTransactionCompleted_.bind(this))
          }),
          (Instance.prototype.onTransactionCompleted_ = function() {
            this.onSuccess(this.results)
          }),
          (Instance.prototype.onRequestFinished_ = function(e) {
            var t = this.requestQueue.shift()
            t &&
              (this.errorOccured
                ? this.abortTransaction()
                : ((this.isQueryExecuting = !1),
                  t.onSuccess && t.onSuccess(e),
                  this.processExecutionOfQry()))
          }),
          (Instance.prototype.abortTransaction = function() {
            null != this.transaction && this.transaction.abort()
          }),
          (Instance.prototype.executeRequest = function(e) {
            var t
            switch (((this.isQueryExecuting = !0), e.name)) {
              case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Select:
                t = new _select_index__WEBPACK_IMPORTED_MODULE_1__.a(
                  e.query,
                  this.onRequestFinished_.bind(this),
                  this.onError.bind(this)
                )
                break
              case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Insert:
                t = new _insert_index__WEBPACK_IMPORTED_MODULE_3__.a(
                  e.query,
                  this.onRequestFinished_.bind(this),
                  this.onError.bind(this)
                )
                break
              case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Update:
                t = new _update_index__WEBPACK_IMPORTED_MODULE_5__.a(
                  e.query,
                  this.onRequestFinished_.bind(this),
                  this.onError.bind(this)
                )
                break
              case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Remove:
                t = new _remove_index__WEBPACK_IMPORTED_MODULE_4__.a(
                  e.query,
                  this.onRequestFinished_.bind(this),
                  this.onError.bind(this)
                )
                break
              case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Count:
                t = new _count_index__WEBPACK_IMPORTED_MODULE_2__.a(
                  e.query,
                  this.onRequestFinished_.bind(this),
                  this.onError.bind(this)
                )
            }
            ;(t.isTransaction = !0), t.execute()
          }),
          (Instance.prototype.pushRequest = function(e) {
            return (
              this.requestQueue.push(e),
              this.processExecutionOfQry(),
              new Promise(function(t, r) {
                ;(e.onSuccess = function(e) {
                  t(e)
                }),
                  (e.onError = function(e) {
                    r(e)
                  })
              })
            )
          }),
          (Instance.prototype.processExecutionOfQry = function() {
            this.requestQueue.length > 0 &&
              !1 === this.isQueryExecuting &&
              !0 === this.isTransactionStarted &&
              this.executeRequest(this.requestQueue[0])
          }),
          (Instance.prototype.checkQueries = function() {
            var e = this,
              t = 0
            return new Promise(function(r, n) {
              var o = function() {
                if (t < e.requestQueue.length) {
                  var i = e.requestQueue[t++]
                  new _query_helper__WEBPACK_IMPORTED_MODULE_7__.a(
                    i.name,
                    i.query
                  )
                    .checkAndModify()
                    .then(function() {
                      o()
                    })
                    .catch(function(e) {
                      n(e)
                    })
                } else r()
              }
              o()
            })
          }),
          Instance
        )
      })(_base__WEBPACK_IMPORTED_MODULE_0__.a)
  },
  function(e, t, r) {
    'use strict'
    r.r(t)
    var n,
      o = r(1),
      i = r(2),
      s = r(0),
      c = r(8),
      u = r(11),
      a = ((n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        }),
      function(e, t) {
        function r() {
          this.constructor = e
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()))
      }),
      h = (function(e) {
        function t(t, r) {
          var n = e.call(this) || this
          return (n.onSuccess_ = t), (n.onError_ = r), n
        }
        return (
          a(t, e),
          (t.prototype.execute = function() {
            var e = this
            if (this.dbName.length > 0) {
              var t = indexedDB.open(this.dbName, this.dbVersion)
              ;(t.onerror = function(t) {
                null != e.onError_ && e.onError_(t.target.error)
              }),
                (t.onsuccess = function(r) {
                  ;(e.dbStatus.conStatus = s.b.Connected),
                    (e.dbConnection = t.result),
                    (e.dbConnection.onclose = function(t) {
                      e.onDbDroppedByBrowser(),
                        e.updateDbStatus(s.b.Closed, s.d.ConnectionClosed)
                    }),
                    (e.dbConnection.onversionchange = function(t) {
                      null === t.newVersion &&
                        null === t.newVersion &&
                        (t.target.close(),
                        e.onDbDroppedByBrowser(!0),
                        e.updateDbStatus(s.b.Closed, s.d.ConnectionClosed))
                    }),
                    (e.dbConnection.onerror = function(t) {
                      e.dbStatus.lastError =
                        'Error occured in connection :' + t.target.result
                    }),
                    null != e.onSuccess_ && e.onSuccess_(),
                    e.setPrimaryKey_()
                })
            } else {
              new i.a(s.d.UndefinedDbName).throw()
            }
          }),
          (t.prototype.setPrimaryKey_ = function() {
            var e = this
            this.activeDb.tables.forEach(function(t, r) {
              t.columns.every(function(t) {
                return (
                  (e.activeDb.tables[r].primaryKey = t.primaryKey
                    ? t.name
                    : ''),
                  !t.primaryKey
                )
              })
            })
          }),
          t
        )
      })(u.a),
      l = r(14),
      f = r(3),
      p = (function() {
        function e(e) {
          ;(this.columns = []),
            (this.requireDelete = !1),
            (this.requireCreation = !1),
            (this.name = e.name),
            (this.version = e.version),
            (this.columns = e.columns),
            this.setPrimaryKey_()
        }
        return (
          (e.prototype.createMetaData = function(e, t) {
            ;(this.callback = t),
              this.setRequireDelete_(e),
              this.setDbVersion_(e)
          }),
          (e.prototype.setPrimaryKey_ = function() {
            var e = this
            this.columns.every(function(t) {
              return (e.primaryKey = t.primaryKey ? t.name : ''), !t.primaryKey
            })
          }),
          (e.prototype.setRequireDelete_ = function(e) {
            var t = this
            f.a('JsStore_' + e + '_' + this.name + '_Version', function(e) {
              null == e
                ? (t.requireCreation = !0)
                : e < t.version && (t.requireDelete = !0)
            })
          }),
          (e.prototype.setDbVersion_ = function(e) {
            ;(o.a.activeDbVersion =
              o.a.activeDbVersion > this.version
                ? o.a.activeDbVersion
                : this.version),
              f.d('JsStore_' + e + '_Db_Version', o.a.activeDbVersion),
              f.d(
                'JsStore_' + e + '_' + this.name + '_Version',
                o.a.activeDbVersion,
                this.callback
              ),
              (this.version = o.a.activeDbVersion)
          }),
          e
        )
      })(),
      y = (function() {
        function e(e) {
          ;(this.tables = []), (this.name = e.name), (this.tables = e.tables)
        }
        return (
          (e.prototype.createMetaData = function(e) {
            var t = this,
              r = 0,
              n = [],
              o = function() {
                if (r < t.tables.length) {
                  var i = t.tables[r],
                    s = new p(i)
                  s.createMetaData(t.name, function() {
                    ;(s.callback = null), n.push(s), o()
                  }),
                    ++r
                } else e(n)
              }
            o()
          }),
          e
        )
      })(),
      d = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      _ = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this,
            i = [],
            c = indexedDB.open(o.dbName, o.dbVersion)
          return (
            (c.onerror = function(e) {
              null != n && n(e.target.error)
            }),
            (c.onsuccess = function(e) {
              ;(o.dbStatus.conStatus = s.b.Connected),
                (o.dbConnection = c.result),
                (o.dbConnection.onclose = function(e) {
                  o.onDbDroppedByBrowser(),
                    o.updateDbStatus(s.b.Closed, s.d.ConnectionClosed)
                }),
                (o.dbConnection.onversionchange = function(e) {
                  null === e.newVersion &&
                    (e.target.close(),
                    o.onDbDroppedByBrowser(!0),
                    o.updateDbStatus(s.b.Closed, s.d.ConnectionClosed))
                }),
                (o.dbConnection.onerror = function(e) {
                  o.dbStatus.lastError =
                    'Error occured in connection :' + e.target.result
                }),
                o.savedbNameIntoDbList(),
                null != r && r(i)
            }),
            (c.onupgradeneeded = function(e) {
              var r = e.target.result,
                n = function(e, t) {
                  try {
                    if (e.primaryKey.length > 0) {
                      o.activeDb.tables[t].primaryKey = e.primaryKey
                      var n = r.createObjectStore(e.name, {
                        keyPath: e.primaryKey,
                      })
                      e.columns.forEach(function(t) {
                        if (!0 === t.enableSearch) {
                          var r = t.primaryKey
                            ? { unique: !0 }
                            : { unique: t.unique }
                          ;(r.multiEntry = t.multiEntry),
                            n.createIndex(t.name, t.name, r),
                            t.autoIncrement &&
                              f.d(
                                'JsStore_' +
                                  o.dbName +
                                  '_' +
                                  e.name +
                                  '_' +
                                  t.name +
                                  '_Value',
                                0
                              )
                        }
                      })
                    } else {
                      var s = r.createObjectStore(e.name, { autoIncrement: !0 })
                      e.columns.forEach(function(t) {
                        var r = { unique: t.unique, multiEntry: t.multiEntry }
                        s.createIndex(t.name, t.name, r),
                          t.autoIncrement &&
                            f.d(
                              'JsStore_' +
                                o.dbName +
                                '_' +
                                e.name +
                                '_' +
                                t.name +
                                '_Value',
                              0
                            )
                      })
                    }
                    i.push(e.name),
                      f.d(
                        'JsStore_' + o.dbName + '_' + e.name + '_Version',
                        e.version
                      )
                  } catch (e) {
                    console.error(e)
                  }
                }
              t.forEach(function(e, t) {
                e.requireDelete
                  ? (r.objectStoreNames.contains(e.name) &&
                      r.deleteObjectStore(e.name),
                    n(e, t))
                  : e.requireCreation && n(e, t)
              })
            }),
            o
          )
        }
        return (
          d(t, e),
          (t.prototype.savedbNameIntoDbList = function() {
            var e = this
            this.getDbList(function(t) {
              t.indexOf(e.dbName) < 0 && (t.push(e.dbName), e.setDbList(t))
            })
          }),
          t
        )
      })(u.a),
      b = (function() {
        return function(e, t) {
          null != e.name
            ? (this.name = e.name)
            : new i.a(s.d.UndefinedColumnName, { TableName: t }).throw(),
            (this.autoIncrement = null != e.autoIncrement && e.autoIncrement),
            (this.primaryKey = null != e.primaryKey && e.primaryKey),
            (this.unique = null != e.unique && e.unique),
            (this.notNull = null != e.notNull && e.notNull),
            (this.dataType =
              null != e.dataType
                ? e.dataType
                : e.autoIncrement
                  ? 'number'
                  : null),
            (this.default = e.default),
            (this.multiEntry = null != e.multiEntry && e.multiEntry),
            (this.enableSearch = null == e.enableSearch || e.enableSearch)
        }
      })(),
      g = (function() {
        return function(e) {
          var t = this
          ;(this.columns = []),
            (this.name = e.name),
            (this.version = null == e.version ? 1 : e.version),
            e.columns.forEach(function(r) {
              t.columns.push(new b(r, e.name))
            })
        }
      })(),
      v = (function() {
        return function(e) {
          var t = this
          ;(this.tables = []),
            (this.name = e.name),
            e.tables.forEach(function(e) {
              t.tables.push(new g(e))
            })
        }
      })(),
      m = r(6),
      O = r(13),
      k = r(9),
      w = r(12),
      S = r(10),
      C = r(4),
      D = r(5),
      x = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      q = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (o.query = t), (o.onSuccess = r), (o.onError = n), o
        }
        return (
          x(t, e),
          (t.prototype.execute = function() {
            var e = this
            this.createTransaction([this.query], function() {
              !1 === e.errorOccured && e.onSuccess()
            })
            var t = this.transaction.objectStore(this.query).clear()
            ;(t.onsuccess = function(t) {
              e.getTable(e.query).columns.forEach(function(t) {
                t.autoIncrement &&
                  f.d(
                    'JsStore_' +
                      e.activeDb.name +
                      '_' +
                      e.query +
                      '_' +
                      t.name +
                      '_Value',
                    0
                  )
              })
            }),
              (t.onerror = function(t) {
                ;(e.errorOccured = !0), e.onErrorOccured(t)
              })
          }),
          t
        )
      })(D.a),
      E = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          function n() {
            this.constructor = t
          }
          e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()))
        }
      })(),
      T = (function(e) {
        function t(t, r, n) {
          var o = e.call(this) || this
          return (o.query = t), (o.onSuccess = r), (o.onError = n), o
        }
        return (
          E(t, e),
          (t.prototype.execute = function() {
            try {
              this.bulkinsertData(this.query.values), (this.query.values = null)
            } catch (e) {
              this.onExceptionOccured(e, { TableName: this.query.into })
            }
          }),
          (t.prototype.bulkinsertData = function(e) {
            var t = this
            this.createTransaction([this.query.into], function() {
              t.onSuccess()
            }),
              (this.objectStore = this.transaction.objectStore(this.query.into))
            for (var r = 0, n = e.length; r < n; r++) this.objectStore.add(e[r])
          }),
          t
        )
      })(D.a),
      I = r(15),
      j = r(7),
      L = (function() {
        function e(e) {
          this.onQueryFinished = e
        }
        return (
          (e.prototype.checkConnectionAndExecuteLogic = function(e) {
            var t = this
            switch (
              (i.a.log('checking connection and executing request:' + e.name),
              e.name)
            ) {
              case s.a.CreateDb:
              case s.a.IsDbExist:
              case s.a.GetDbVersion:
              case s.a.GetDbList:
              case s.a.GetDbSchema:
              case s.a.Get:
              case s.a.Set:
              case s.a.ChangeLogStatus:
              case s.a.OpenDb:
                this.executeLogic_(e)
                break
              default:
                switch (this.dbStatus_.conStatus) {
                  case s.b.Connected:
                    this.executeLogic_(e)
                    break
                  case s.b.Closed:
                    !0 === this.isDbDeletedByBrowser_
                      ? this.createDb_(
                          null,
                          function() {
                            ;(t.isDbDeletedByBrowser_ = !1),
                              t.checkConnectionAndExecuteLogic(e)
                          },
                          e.onError
                        )
                      : this.openDb_(
                          this.activeDb_.name,
                          function() {
                            t.checkConnectionAndExecuteLogic(e)
                          },
                          e.onError
                        )
                }
            }
          }),
          (e.prototype.changeLogStatus_ = function(e, t, r) {
            ;(c.a.isLogEnabled = e), t()
          }),
          (e.prototype.returnResult_ = function(e) {
            !0 === c.a.isRuningInWorker
              ? self.postMessage(e)
              : this.onQueryFinished(e)
          }),
          (e.prototype.executeLogic_ = function(e) {
            var t = this,
              r = function(e) {
                t.returnResult_({ returnedValue: e })
              },
              n = function(e) {
                t.returnResult_({ errorDetails: e, errorOccured: !0 })
              }
            switch (e.name) {
              case s.a.Select:
                this.select_(e.query, r, n)
                break
              case s.a.Insert:
                this.insert_(e.query, r, n)
                break
              case s.a.Update:
                this.update_(e.query, r, n)
                break
              case s.a.Remove:
                this.remove_(e.query, r, n)
                break
              case s.a.IsDbExist:
                this.isDbExist_(e.query, r, n)
                break
              case s.a.GetDbVersion:
                this.getDbVersion_(e.query, r)
                break
              case s.a.GetDbList:
                this.getDbList_(r)
                break
              case s.a.GetDbSchema:
                this.getDbSchema_(e.query, r)
                break
              case s.a.OpenDb:
                !0 === this.isDbDeletedByBrowser_
                  ? this.createDb_(
                      null,
                      function() {
                        ;(t.isDbDeletedByBrowser_ = !1), r()
                      },
                      n
                    )
                  : this.openDb_(e.query, r, n)
                break
              case s.a.CreateDb:
                this.createDb_(e.query, r, n)
                break
              case s.a.Clear:
                this.clear_(e.query, r, n)
                break
              case s.a.DropDb:
                this.dropDb_(r, n)
                break
              case s.a.Count:
                this.count_(e.query, r, n)
                break
              case s.a.BulkInsert:
                this.bulkInsert_(e.query, r, n)
                break
              case s.a.ExportJson:
                this.exportJson_(e.query, r, n)
                break
              case s.a.Get:
                this.get_(e.query, r, n)
                break
              case s.a.Set:
                this.set_(e.query, r, n)
                break
              case s.a.ChangeLogStatus:
                this.changeLogStatus_(e.query, r, n)
                break
              case s.a.Transaction:
                this.transaction(e.query, r, n)
                break
              default:
                console.error('The Api:-' + e.name + ' does not support.')
            }
          }),
          (e.prototype.getDbSchema_ = function(e, t) {
            o.a.getDbSchema(e, t)
          }),
          Object.defineProperty(e.prototype, 'isDbDeletedByBrowser_', {
            get: function() {
              return o.a.isDbDeletedByBrowser
            },
            set: function(e) {
              o.a.isDbDeletedByBrowser = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getDbList_ = function(e) {
            o.a.getDbList(e)
          }),
          Object.defineProperty(e.prototype, 'activeDb_', {
            get: function() {
              return o.a.activeDb
            },
            set: function(e) {
              o.a.activeDb = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.openDb_ = function(e, t, r) {
            var n = this
            this.getDbVersion_(e, function(o) {
              if (0 !== o)
                (n.activeDbVersion_ = o),
                  n.getDbSchema_(e, function(e) {
                    ;(n.activeDb_ = e), new h(t, r).execute()
                  })
              else {
                var c = new i.a(s.d.DbNotExist, { DbName: e })
                c.logError(), r(c.get())
              }
            })
          }),
          (e.prototype.closeDb_ = function() {
            o.a.dbStatus.conStatus === s.b.Connected &&
              ((o.a.dbStatus.conStatus = s.b.ClosedByJsStore),
              o.a.dbConnection.close())
          }),
          (e.prototype.dropDb_ = function(e, t) {
            this.closeDb_(), new l.a(e, t).deleteDb()
          }),
          (e.prototype.update_ = function(e, t, r) {
            var n = new j.a(s.a.Update, e)
            ;(n.checkAndModify(), null == n.error)
              ? new S.a(e, t, r).execute()
              : r(n.error)
          }),
          (e.prototype.insert_ = function(e, t, r) {
            var n = new j.a(s.a.Insert, e)
            n.checkAndModify()
              .then(function() {
                ;(e = n.query), new k.a(e, t, r).execute()
              })
              .catch(function(e) {
                r(e)
              })
          }),
          (e.prototype.bulkInsert_ = function(e, t, r) {
            var n = new j.a(s.a.BulkInsert, e)
            ;(n.checkAndModify(), null == n.error)
              ? new T(e, t, r).execute()
              : r(n.error)
          }),
          (e.prototype.remove_ = function(e, t, r) {
            var n = new j.a(s.a.Remove, e)
            ;(n.checkAndModify(), null == n.error)
              ? new w.a(e, t, r).execute()
              : r(n.error)
          }),
          (e.prototype.select_ = function(e, t, r) {
            if ('object' == typeof e.from) new m.b(e, t, r)
            else {
              var n = new j.a(s.a.Select, e)
              if ((n.checkAndModify(), null == n.error))
                new m.a(e, t, r).execute()
              else r(n.error)
            }
          }),
          (e.prototype.count_ = function(e, t, r) {
            if ('object' == typeof e.from) {
              e.count = !0
              new m.b(e, t, r)
            } else {
              var n = new j.a(s.a.Count, e)
              if ((n.checkAndModify(), null == n.error))
                new O.a(e, t, r).execute()
              else r(n.error)
            }
          }),
          (e.prototype.createDb_ = function(e, t, r) {
            var n = this,
              i = function() {
                f.d('JsStore_' + n.activeDb_.name + '_Schema', n.activeDb_),
                  new y(o.a.activeDb).createMetaData(function(e) {
                    new _(e, t, r)
                  })
              }
            null == e
              ? i()
              : (this.closeDb_(),
                this.getDbVersion_(e.name, function(t) {
                  ;(n.activeDbVersion_ = t || 1), (o.a.activeDb = new v(e)), i()
                }))
          }),
          Object.defineProperty(e.prototype, 'activeDbVersion_', {
            get: function() {
              return o.a.activeDbVersion
            },
            set: function(e) {
              o.a.activeDbVersion = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getDbVersion_ = function(e, t) {
            o.a.getDbVersion(e, t)
          }),
          Object.defineProperty(e.prototype, 'dbStatus_', {
            get: function() {
              return o.a.dbStatus
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.clear_ = function(e, t, r) {
            new q(e, t, r).execute()
          }),
          (e.prototype.exportJson_ = function(e, t, r) {
            this.select_(
              e,
              function(e) {
                var r = URL.createObjectURL(
                  new Blob([JSON.stringify(e)], { type: 'text/json' })
                )
                t(r)
              },
              function(e) {
                r(e)
              }
            )
          }),
          (e.prototype.getType_ = function(e) {
            return C.a.getType(e)
          }),
          (e.prototype.isDbExist_ = function(e, t, r) {
            if (this.dbStatus_.conStatus !== s.b.UnableToStart)
              this.getType_(e) === s.c.String
                ? this.getDbVersion_(e, function(e) {
                    t(Boolean(e))
                  })
                : this.getDbVersion_(e.dbName, function(r) {
                    t(e.table.version <= r)
                  })
            else {
              var n = { message: null, type: this.dbStatus_.lastError }
              switch (n.type) {
                case s.d.IndexedDbBlocked:
                  n.message = 'IndexedDB is blocked'
                  break
                case s.d.IndexedDbUndefined:
                  n.message = 'IndexedDB is not supported'
              }
              r(n)
            }
          }),
          (e.prototype.get_ = function(e, t, r) {
            f.a(e, t, r)
          }),
          (e.prototype.set_ = function(e, t, r) {
            f.d(e.key, e.value, t, r)
          }),
          (e.prototype.transaction = function(e, t, r) {
            new I.a(e, t, r).execute()
          }),
          e
        )
      })(),
      A = function() {
        ;(self.onmessage = function(e) {
          var t
          ;(t =
            'Request executing from WebWorker, request name: ' + e.data.name),
            i.a.log(t),
            new L().checkConnectionAndExecuteLogic(e.data)
        }),
          void 0 === self.alert && (c.a.isRuningInWorker = !0)
      }
    A(),
      f.b(),
      r.d(t, 'QueryExecutor', function() {
        return L
      }),
      r.d(t, 'initialize', function() {
        return A
      })
  },
])

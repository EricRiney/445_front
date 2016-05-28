  var mysql     = require('mysql');
  var bluebird  = require('bluebird'); 
  var koa       = require('koa')();
  var router    = require('koa-router')();
  var koaBody   = require('koa-body')();
  var koaStatic = require('koa-static');
  var koaMount  = require('koa-mount');
  
  
  
  
  var dbConfig = {
  "host"     : "localhost",
  "user"     : "root",
  "password" : "",
  "database" : "SKI_BORAD_MFG"
  };
  var connPool = bluebird.promisifyAll(mysql.createPool(dbConfig));
  
  
  
  
  
  
  
  
  
  
  router
  .get(
      '/445/customer',
      function *(next) {
          var sqlGetUserIdQuery = 'select UserID FROM USERS where UserEmail = "d@d.com" limit 1';
          var UserID = (yield connPool.queryAsync(sqlGetUserIdQuery))[0].UserID;
          return this.body = UserID;
      }
  )
  .post(
      '/445/employee',
      koaBody,
      function *(next) {
          console.log(this.request.body);
          return this.body = "hit employee";
      }
  );
  
  koa.use( koaMount('/445', koaStatic('pages')) );
  koa.use(router.routes());
  koa.listen(9988);
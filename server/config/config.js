const dbDevUrl = 'mongodb://localhost:27017/TodoApp'; 
const dbTestUrl = 'mongodb://localhost:27017/TodoAppTest';

var env = process.env.NODE_ENV || 'development';
console.log('env ****** ', env);
if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = dbDevUrl;
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = dbTestUrl;
}

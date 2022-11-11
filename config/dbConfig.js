module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "nodejs",
    dialect:  'mysql',
  
    pool: {
        mix: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
  
    }
  }
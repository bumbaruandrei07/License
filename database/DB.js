import * as SQLite from "expo-sqlite";
import { userInfo } from "os";
import Sequelize from "rn-sequelize";
const Op = Sequelize.Op;
const Model = Sequelize.Model;

class User extends Model {}
class Transaction extends Model {}

const sequelize = new Sequelize({
  dialectModule: SQLite,
  define: {
    timestamps: false,
  },
  database: "gestioAppDB",
  dialectOptions: {
    version: "1.0",
    description: "Test DB",
  },
});

User.init(
  {
    name: Sequelize.STRING,
    pass: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);

Transaction.init(
  {
    value: Sequelize.FLOAT,
    timestamp: Sequelize.NUMBER,
  },
  {
    sequelize,
    modelName: "transaction",
  }
);

//User.hasMany(Transaction);
//Transaction.belongsTo(User);

class DB {
  constructor() {
    this.instance = null;
  }

  //metoda getInstance -> daca instanta e nula asteptam as se reseteze bd-ul, daca schimbam force pe falsa atunci fortam resetarea
  async getInstance() {
    if (this.instance === null) {
      await sequelize.sync({
        force: true,
      });
    }
    this.instance = sequelize;
    return this.instance;
  }

  async createUser(name, pass) {
    return await User.create({
      name,
      pass,
    });
  }

  async createTransaction(value, timestamp) {
    //user logat
    // return await User.createTransaction({value, timestamp})
    return await Transaction.create({ value, timestamp });
    //add to user
  }

  async findTransactions() {
    //return await User.findTransactions()
    return await Transaction.findAll();
  }
}

Window.query = function (str) {
  return sequelize.query(str);
};
Window.sequelize = sequelize;
export default new DB();

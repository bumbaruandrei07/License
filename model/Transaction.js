export default class Transaction {
  constructor(value, timestamp) {
    if(value === undefined) throw Error("Undefined value")
    if(timestamp === undefined) throw Error("Undefined timestamp")
    
    this.value = value;
    this.timestamp = timestamp;
  }
  
}



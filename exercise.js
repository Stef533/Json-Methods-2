class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
    static fromJson(jsonString){
    const parsedData = JSON.parse(json);
    return new Person(parsedData.id, parsedData.firstName, parsedData.lastName, parsedData.age);    
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

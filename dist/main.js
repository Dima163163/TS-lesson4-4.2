"use strict";
class Job {
    role;
    salary;
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    get salaryInfo() {
        return this.salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}.`);
    }
}
class Person {
    job;
    name;
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
    set newJob(job) {
        this.job = job;
    }
    get salaryInfo() {
        return this.job.salaryInfo;
    }
    work() {
        this.job.work(this.name);
    }
}
const webEngener = new Job('верстальщик', 50000);
const designer = new Job('дизайнер', 90000);
const chiefDesigner = new Job('ведущий дизайнер', 180000);
const developer = new Job('разработчик', 125000);
const Dima = new Person('Дима', webEngener);
const Tanya = new Person('Таня', designer);
Dima.work();
Tanya.work();
console.log('Dima.salaryInfo: ', Dima.salaryInfo);
console.log('Tanya.salaryInfo: ', Tanya.salaryInfo);
Dima.newJob = developer;
Tanya.newJob = chiefDesigner;
Dima.work();
Tanya.work();
console.log('Dima.salaryInfo: ', Dima.salaryInfo);
console.log('Tanya.salaryInfo: ', Tanya.salaryInfo);

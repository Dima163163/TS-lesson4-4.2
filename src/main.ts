class Job {
  private role: string;
  private salary: number;
  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }

  get salaryInfo(): number {
    return this.salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}.`);
  }
}


class Person {
  private job: Job;
  private name: string;

  constructor(name: string, job: Job) {
    this.name = name
    this.job = job;
  }

  set newJob(job: Job) {
    this.job = job;
  }

  get salaryInfo(): number {
    return this.job.salaryInfo;
  }

  work():void {
    this.job.work(this.name)
  }
}
const webEngener = new Job('верстальщик', 50000);
const designer = new Job('дизайнер', 90000);
const chiefDesigner = new Job('ведущий дизайнер', 180000)
const developer = new Job('разработчик', 125000);

const Dima: Person = new Person('Дима', webEngener);
const Tanya: Person = new Person('Таня', designer);

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
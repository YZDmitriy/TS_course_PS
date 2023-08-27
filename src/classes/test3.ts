// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение

abstract class LoggerAbstract {
  abstract log(message: string): void;

  printDate(): void {
    const date = new Date();
    this.log(date.toString());
  }
}
class ConsoleLogger extends LoggerAbstract {
  logWithDate(message: string): void {
    this.printDate();
    this.log(message);
  }

  log(message: string): void {
    console.log(message);
  }
}

const logger = new ConsoleLogger();
logger.logWithDate('Hello');

//-------------------------------------//

abstract class LoggerCourse {
  abstract log(message: string): void;

  printDate(date: Date): void {
    this.log(date.toString());
  }
}

class ConsoleLoggerCourse extends LoggerCourse {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string): void {
    this.printDate(new Date());
    this.log(message);
  }
}

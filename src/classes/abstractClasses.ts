abstract class Controller {
  abstract handle(req: any): void;

  handleWithLog(req: any): void {
    console.log('Start');
    this.handle(req);
    console.log('End');
  }
}

class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

// new Controller() // ! error
const controller = new UserController()
controller.handleWithLog('Request')
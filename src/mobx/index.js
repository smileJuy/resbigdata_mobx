import UserStore from './stores/userStore'
import AppStore from './stores/state2';
import TableStore from './stores/tableStore';
export default class RootStore {
    constructor() {
      this.userStore =new UserStore();
      this.appStore = new AppStore();
      this.tableStore = new TableStore();
    }
}
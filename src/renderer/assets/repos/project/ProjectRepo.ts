import DataStore from 'nedb';
import path from 'path';
import { remote } from 'electron';
import Project from './Project';

class ProjectRepo {
    db: DataStore;
    constructor() {
      this.db = new DataStore({
        inMemoryOnly: true,
        autoload: true,
        filename: path.join(remote.app.getPath('userData'), 'AppData/project.db'),
      });
    }
    query(query: Object = {}, callback: Function) {
      this.db.find(query, callback);
      if (callback != null) {
        callback();
      }
    }
    insert(project: Project, callback: Function) {
      const maxId = this.findMaxId();
      project.id = maxId ? maxId + 1 : 1;
      this.db.find(project, callback);
      if (callback != null) {
        callback();
      }
    }
    findMaxId() {
      return this.db.find({}).sort({ id: -1 }).limit(1).id;
    }
}

export default new ProjectRepo();

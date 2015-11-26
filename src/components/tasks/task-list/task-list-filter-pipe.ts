import { Pipe, PipeTransform } from 'angular2/angular2';
import { ITask } from '../../../core/task/task';


@Pipe({
  name: 'filterTasks',
  pure: true
})

export class TaskListFilterPipe implements PipeTransform {
  transform(list: ITask[], filterType?: string[]): ITask[] {
    if (list === undefined || !filterType || !filterType.length) {
      return list;
    }

    switch (filterType[0]) {
      case 'active':
        return list.filter((task: ITask) => {
          return !task.completed;
        });

      case 'completed':
        return list.filter((task: ITask) => {
          return task.completed;
        });

      default:
        return list;
    }
  }
}

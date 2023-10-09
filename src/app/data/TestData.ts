import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учёба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровье'},
        {id: 10, title: 'Автомобиль'},
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: 'e5e5e5'},
        {id: 2, title: 'Средний', color: 'e5e5e5'},
        {id: 3, title: 'Высокий', color: 'e5e5e5'},
        {id: 4, title: 'Очень высоко!', color: 'e5e5e5'},
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Залить бензин полный бак',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2019-04-10')
        }, 

        {
            id: 2,
            title: 'Передать отчёты начальнику управления',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[1],
            date: new Date('2019-04-11')
        },

        {
            id: 3,
            title: 'Убраться у себя в комнате, полить растения',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1],
        },

        {
            id: 4,
            title: 'Сходить в парк с семьей, пригласить друзей',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2019-08-17')
        },

        {
            id: 5,
            title: 'Найти и выучить учебник',
            completed: false,
            category: TestData.categories[2]
        },

        {
            id: 6,
            title: 'Схотить на семинар по программированию',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-06-11')
        },

        {
            id: 7,
            title: 'Найти билеты в Турцию и выбрать отель',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },

        {
            id: 8,
            title: 'Приготовить ужин',
            completed: false,
            category: TestData.categories[5]
        }, 

        {
            id: 9,
            title: 'Физкультура',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-12')
        }, 

        {
            id: 10,
            title: 'Пробежать 100 м',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4]
        }, 
    ];
}
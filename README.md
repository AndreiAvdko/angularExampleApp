## Уроки Angular

### Необходимое По для работы Angular:
- Node.js
- Angular CLI (npm install -g @angular/cli)
-Nx Console

Ресурсы с примерами верстки:
1. Библиотеки Bootstrap и Material ( https://getbootstrap.com/ )
2. Принцип разметки Bootstrap (https://getbootstrap.com/docs/4.0/layout/grid/)
3. Angular Material ( https://material.angular.io )
4. https://www.telerik.com/kendo-angular-ui
5. https://clarity.design/
6. https://mdbootstrap.com/docs/angular/


### Подключение библиотек (модулей)
Менеджер пакетов Node.js
npm install название --параметры
Примеры библиотек для Angular в Гугл
__JQuery вместе с Angular лучше не использовать__

### Bootstrap
По-умолчанию Bootstrap использует различные JS файлы и JQuery
Мы будем использовать только CSS - для разметки страниц:
1. https://github.com/fyockm/bootstrap-css-only
2. (Полная версия) https://ng-bootstrap.github.io

### Категории
HTML должен работать только со своим классом и не лезть в сервисы напрямую
HTML должен только отображать все, что дает его класс

`Сервис` - специальный класс в проекте, который отвечает за сервисные вещи (будет иметь доступ к данным)
`Компонент` - будет обращаться к сервису



### Процесс создания проекта
- создать шаблон проекта с помощью `Nx Console`
- добавить шаблон верстки лендинга
    - добавить папки ./css/ и ./img/ в директорию assets с содержимым исходного образца
    - Добавить верстку лендинга в файл todoapp\src\app\nx-welcome.component.ts через путь к файлу или прямо в файл
    - Подключаем стили в Angular-проекте (в конф. файле project.json >>>> "styles": ["./src/styles.css"])
    - Проверяем подключились ли стили, иконки, шрифты ( Подключаем в index.html )
- Создаем тестовые данные и модели данных
    - создаем TypeScript классы в ./src/app/model
    - создаем тестовые данные для объектов созданных классов (/src/app/data/)
- Подключаем библиотеки:
    - подключаем Bootsrap (со страницы 'https://github.com/fyockm/bootstrap-css-only' используем команду `$ npm install bootstrap-css-only` )
    - устанавливаем Angular Material `npm i @angular/material` (??? `angular animation`)
    - проверяем в зависимости в папке node.modules
    - при использовании зависимости необходимо будет импортировать
- Отображение категорий
    - добавляем компонент Angular c названием Categories (при создании могут создаваться файлы для теста компонента) в директории `/app/views/` 
        - с помощью утилиты `nx`
        - в созданном компоненте в файле с разрешением ....component.ts должен быть метод onInit из интерфейса OnInit
    - создаем service c именем DataHandler в директории `/app/service/` 
        - с помощью утилиты `nx`
    - вставляем код левой части сайта в `categories.component.html`
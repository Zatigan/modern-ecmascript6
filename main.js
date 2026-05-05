// Création d'un tableau d'objets, chaque objet étant une tâche
let tasksOfTheDay = [
 {title: 'Faire les courses', done: false },
 {title: 'Nettoyer la maison', done: true },
 {title: 'Planter le jardin', done: false }
];

// Déclaration de la méthode de façon "abstraite" pour qu'elle s'adapte à n'impoprte quel paramètre qui lui seront passés.
const addTask = (taskList, newTask) => {
 const newTaskList = [...taskList, newTask];
 return newTaskList;
};

addTask(tasksOfTheDay, {title: 'Faire mes devoirs', done: false});

console.log(addTask(tasksOfTheDay, {title: 'Faire mes devoirs', done: false}));

// Création d'un tableau d'objets, chaque objet étant une tâche
const tasksOfTheDay = [
 { title: 'Faire les courses', done: false },
 { title: 'Nettoyer la maison', done: true },
 { title: 'Planter le jardin', done: false }
];

//* ============= Ajouter une tâche à la liste =============

// Déclaration de la variable qui accueillera mon résultat
// let newTaskList;

// Déclaration de la méthode de façon "abstraite" pour qu'elle s'adapte à n'importe quels paramètres qui lui seront passés.
// const addTask = (taskList, newTask) => { newTaskList = [...taskList, newTask]; };

// Appel de la fonction pour la tester
// addTask(tasksOfTheDay, { title: 'Faire mes devoirs', done: false });

// Vérification du résultat dans la console
// console.log(newTaskList);

//* ============= Supprimer une tâche de la liste =============

// Déclaration de la variable qui accueillera mon résultat
let listAfterRemoval;

// Fonction fléchée qui retourne la liste de tous les items n'ayant pas pour titre le paramètre 'title'
const removeTask = (taskList, title) => {
 return listAfterRemoval = taskList.filter((task) => title !== task.title);
};

// Appel de la fonction pour la tester
removeTask(tasksOfTheDay, "Faire les courses");

// Vérification du résultat dans la console
console.log(listAfterRemoval);


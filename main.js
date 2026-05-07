// Création d'un tableau d'objets, chaque objet étant une tâche
const tasksOfTheDay = [
 { title: 'Faire les courses', done: false },
 { title: 'Nettoyer la maison', done: true },
 { title: 'Planter le jardin', done: false }
];

//* ============= Ajouter une tâche à la liste =============

// Déclaration de la variable qui accueillera mon résultat
let newTaskList;

// Déclaration de la méthode de façon "abstraite" pour qu'elle s'adapte à n'importe quels paramètres qui lui seront passés.
const addTask = (taskList, newTask) => { newTaskList = [...taskList, newTask]; };

// Appel de la fonction pour la tester
addTask(tasksOfTheDay, { title: 'Faire mes devoirs', done: false });

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
// console.log(listAfterRemoval);

//* ============= Basculer l'état d'une tâche de la liste =============

// Déclaration de ma fonction fléchée pour modifier le status d'une tâche
const toggleTaskStatus = (task) => {
 // Je vérifie si task est à false.
 // Si oui alors il lui est attribué l'opposé de false, donc true
 // Si elle est déjà à true, on ne change rien
 !task.done ? task.done = !task.done : task.done;
 
 // Vérification du résultat dans la console
 // console.log(task);
 
 return task;
}

// Appel de ma fonction pour la tester
toggleTaskStatus({ title: "Résoudre l'exercice", done: false});

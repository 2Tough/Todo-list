import { dependencies } from "webpack";
import { defaultToDo } from "./default-to-do";


let toDoArray = [];


//New ToDo factory

export const newToDo = (() => {

    class getNewFolder {
        constructor(name) {
            this.name = name;
            this.folder = []
        }

        addNote(note) {
            this.folder.push(note)
        }

        showTodo(){
            this.folder.forEach((todo) => {
                console.log(todo)
            })
        }
    } 
    
    const dependenciesTodo = (() => {
        const defaultFolder = new Folder('Default')
        const folders = [defaultFolder];

        return {folders, defaultFolder}
    })()

    function createFolder(name) {
        dependenciesTodo.folders.push(new Folder(name))
    }

    function showFolder() {
        console.log(dependenciesTodo.folders)
    }

    const folder1 = new Folder("Folder1")
    folder1.addNote({title: "Meat"})
    folder1.addNote({title: "Vitamins"})


    const getNewToDo = (Title, Description, DueDate, Priority, CheckList) => {
        const getNew = () => {
            Title
            Description
            DueDate
            Priority
            CheckList
             
         };

         return {Title, Description, DueDate, Priority, CheckList}

    }
    

    const changeTitle = () => {
        getNewToDo.Title = newTitle;
    }

    const changeDescription = (Description) => {
        return getNewToDo.Description = Description;
        
    }

    const changeDueDate = (DueDate) => {
        return getNewToDo.DueDate = DueDate;
    }

    const changePriority = (Priority) => {
        return getNewToDo.Priority;
    }

    const changeCheckList = (CheckList) => {
        return getNewToDo.CheckList;
    }

    const delTask = (title) => {
        const deletion = newToDo.tasks.splice(
            newToDo.tasks.findIndex((task) => task.title == title), 1);
            return deletion;
            
    }


    const noteOne = getNewToDo("Buy meat", "I have to buy meat to eat after workouts", "02/15/2023", "High", "Pending");
    const noteTwo = getNewToDo("Pick up vitamins", "I have to pick up the vitamins I bought", "02/17/2023", "High", "Pending") 
    
    console.log(noteOne)
    console.log(noteTwo)
    
    return 
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        changeCheckList
    

    
 //TODO: Test factories and remaining elements.   

    
})()

// Create constructor or class here
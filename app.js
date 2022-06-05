let input = prompt('Write what you want to do!');
const list = [];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('-------------')
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log('-------------')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, whats is the new todo?');
        list.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter a index to delete:'));
        if (!Number.isNaN(index) && index <= list.length && index >= 0){
            console.log(`You have deleted ${list[index]} from the list!`);
            list.splice(index, 1);
        } else {
            console.log ("Invalid index");
        }
    }
    input = prompt('Write what you want to do!');
}
console.log('OK, YOU QUIT THE APP!')

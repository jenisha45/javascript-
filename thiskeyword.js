function help(name)
{
    return this.name=name;
}

const person={
    name:"jenisha",
    id:10
}

console.log(help(person.name));
class apple
{
    constructor (id,name)
    {
       
               this.id=id;
               this.name=name;
        
            console.log(`the name of the person is ${name} whose id is ${id} `);
        }
            logDetails() {
        console.log(`the name of the person is ${this.name} whose id is ${this.id}`);
    }
    }
 const apple1= new apple(23,"happy signh");
apple1.logDetails();
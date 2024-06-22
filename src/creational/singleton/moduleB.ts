import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseModule } from "./db/my-database-module";
import { myDatabaseClassic as MyDatabaseFunction } from "./moduleA";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Roberto", age: 30 });
myDatabaseClassic.add({ name: "Joana", age: 40 });
myDatabaseClassic.add({ name: "Lara", age: 25 });

myDatabaseClassic.show();

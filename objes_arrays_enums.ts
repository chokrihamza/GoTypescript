/*const person: {
      name: string;
      age: number;
      hobbies: string[];
      role: [number, string];
} = {
      name: "hamza",
      age: 26,
      hobbies: ['sports', 'cooking', 'dance'],
      role:[2,'author'],
}*/
enum Role{ Admin = 5, ReadOnly, Author }
console.log(Role.ReadOnly)
const person= {
      name: "hamza",
      age: 26,
      hobbies: ['sports', 'cooking', 'dance'],
      role:Role.Admin
}
let favoriteActivities: any[];
favoriteActivities=["dfgfmk"]
console.log(person.name)
for (const hobby of person.hobbies) {
      console.log(hobby.split(""))
}
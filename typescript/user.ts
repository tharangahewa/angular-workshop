class User {
  private username: string;
  private password: string;
  private type: "student" | "teacher";

  constructor(
    username: string,
    password: string,
    type: "student" | "teacher" = "student"
  ) {
    this.username = username;
    this.password = password;
    this.type = type;
  }
}

// class User {
  
//     constructor(
//       private username: string,
//       private password?: string,
//       private type: "student" | "teacher" = "student"
//     ) {
      
//     }
//   }

const student = new User('subash', 'abc123');
const teacher = new User('subash', 'wyz123', 'teacher');

// const secondStudent: User = { username:'subash', password:'wyz123', type:'teacher'};



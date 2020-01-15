interface Course {

    title: string;
    price: number;
    description: string;
    rating?: 1|2|3|4|5; //optional
    
    enroll(username:string):void;
}


let myCourse: Course;

myCourse = { 
    title: 'Typescript',
    price: 45,
    description: 'Typescript jumpstart',
    rating: 4,
    
    enroll : function (uname:string) {
        console.log(uname);    
    }
};

import { Course } from '../model/course';

export const idGenerator = () : number => {
  return Math.round( Math.random() * 10000);
}

export const courses: Course[] = [
  {
    id: idGenerator(),
    title: 'angular workshop',
    imgUrl: 'assets/angular-logo.png',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'angular basic',
    imgUrl: 'assets/angular-logo.png',
    price: 60,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'angularfire',
    imgUrl: 'assets/angular-logo.png',
    price: 40,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'angular universal',
    imgUrl: 'assets/angular-logo.png',
    price: 30,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'angular animations',
    imgUrl: 'assets/angular-logo.png',
    price: 45,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }
]

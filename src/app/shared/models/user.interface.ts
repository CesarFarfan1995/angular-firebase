export interface UserInterface {
    uId?:string;
    name:string;
    age:number;
    email:string;
    password:string;
    role: 'user' | 'admin';
    
}
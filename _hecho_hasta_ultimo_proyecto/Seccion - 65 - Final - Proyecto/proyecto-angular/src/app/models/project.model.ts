export class Project {
    constructor(
        public _id: string = "",
        public name: string ="",
        public description: string ="",
        public category: string ="",
        public date: Date = null,
        public langs: string = "",
        public email: string = "",
        public file: FileProject = null
    ) { }
}
class FileProject {
    constructor(
        public fieldname: string = "",
        public originalname: string = "",
        public encoding: string = "",
        public mimetype: string = "",
        public destination: string = "",
        public filename: string = "",
        public path: string = "",
        public size: number = null
    ) { }
}
// class Date{
//     constructor(
//     public allString:string = "",
//     public dayWeek = "",
//     public day

//     ){}

// }


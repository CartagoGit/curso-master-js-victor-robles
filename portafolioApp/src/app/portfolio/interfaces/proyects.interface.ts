export interface Project {
  _id?: string;
  name: string;
  description: string;
  category: string;
  year: number;
  langs: string[];
  file?: File[];
  // [
  //   {
  //     fieldname: string;
  //     originalname: string;
  //     encoding: string;
  //     mimetype: string;
  //     destination: string;
  //     filename: string;
  //     path: string;
  //     size: number;
  //   }
  // ];
}

export interface ProjectFromApi {
  _id?: string;
  name: string;
  description: string;
  category: string;
  year: number;
  langs: string[];
  file: [
    {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }
  ];
}

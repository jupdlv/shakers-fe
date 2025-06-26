export class Category{
      id: Number;
      name: String | undefined;

      constructor(id: Number, name: string | undefined){
        this.id = id
        this.name = name 
      }
}
export class Offer {
  uid: string;
  name: string;
  price: number;
  description: string;
  vegetarian: boolean;
  vegan: boolean;
  noGluten: boolean;
  hot: boolean;


  constructor(name: string, price: number, description: string, vegetarian: boolean, vegan: boolean, noGluten: boolean, hot: boolean) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.vegetarian = vegetarian;
    this.vegan = vegan;
    this.noGluten = noGluten;
    this.hot = hot;
  }

  setUid(uid: string){
    this.uid = uid;
  }

}

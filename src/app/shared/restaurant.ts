export class Restaurant {
  uid: string;
  mail: string;
  password: string;
  name: string;
  phone: number;
  country: string;
  location: string;
  description: string;
  shedule: string;
  rating: number;
  pic: string;


  constructor(mail: string, password: string, name: string, phone: number, country: string, location: string, description: string, shedule: string, rating: number, pic: string) {
    this.mail = mail;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.country = country;
    this.location = location;
    this.description = description;
    this.shedule = shedule;
    this.rating = rating;
    this.pic = pic;
  }

  setRestaurantId(uid: string){
    this.uid = uid;
  }
}

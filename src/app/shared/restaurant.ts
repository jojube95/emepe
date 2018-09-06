import {Offer} from './offer';

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
  categories: string[];
  offers: Offer[];
  favedUsers: Object;
  pic: string;


  constructor(mail: string, password: string, name: string, phone: number, country: string, location: string, description: string, shedule: string, rating: number, categoires: string[], offers: Offer[], pic: string) {
    this.mail = mail;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.country = country;
    this.location = location;
    this.description = description;
    this.shedule = shedule;
    this.rating = rating;
    this.categories = categoires;
    this.offers = offers;
    this.pic = pic;
  }

  setRestaurantId(uid: string){
    this.uid = uid;
  }

  setOffers(offers: Offer[]){
    this.offers = offers;
  }

  addOffer(offer: Offer){
    this.offers.push(offer);
  }

  removeOffer(offer: Offer){
    this.offers.splice(this.offers.indexOf(offer), 1);
  }
}

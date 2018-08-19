export class UserModel {
  uid: string;
  username: string;
  mail: string;
  password: string;
  name: string;
  secondName: string;
  phone: number;
  birthdayDate: Date;
  birthday: string;
  country: string;
  location: string;
  pic: string;


  constructor(username: string, mail: string, password: string, name: string, secondName: string, phone: number, birthdayDate: Date, country: string, location: string, pic: string) {
    this.username = username;
    this.mail = mail;
    this.password = password;
    this.name = name;
    this.secondName = secondName;
    this.phone = phone;
    this.birthdayDate= birthdayDate;
    this.country = country;
    this.location = location;
    this.pic = pic;
  }

  setUserId(userId: string){
    this.uid = userId;
  }
}

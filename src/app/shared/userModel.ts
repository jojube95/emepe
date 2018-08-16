export class UserModel {
  uid: string;
  username: string;
  mail: string;
  password: string;
  name: string;
  secondName: string;
  phone: number;
  birthday: string;
  country: string;
  location: string;


  constructor(username: string, mail: string, password: string, name: string, secondName: string, phone: number, birthday: string, country: string, location: string) {
    this.username = username;
    this.mail = mail;
    this.password = password;
    this.name = name;
    this.secondName = secondName;
    this.phone = phone;
    this.birthday = birthday;
    this.country = country;
    this.location = location;
  }

  setUserId(userId: string){
    this.uid = userId;
  }
}

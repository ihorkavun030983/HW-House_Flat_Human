class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  };
}

class Flat {
  constructor() {
    this.residents = [];
  }
  addResidents(human) {
    this.residents.push(human);
  }
}

class House {
  constructor() {
    this.flats = [];
  }

  addFlats(Flat) {
    if (this.flats.length < 4) {
      this.flats.push(Flat);
      console.log('Квартира добавлена в будинок');
    } else {
      console.log('Будинок перевищив місткість квартир');
    }
  }
}

const myFlat = new Flat();
//декілька екземплярів класу Людина;
const resident1 = new Human('David', 'male');
const resident2 = new Human('Kate', 'famale');
const resident3 = new Human('Bill', 'male');

myFlat.addResidents(resident1);
myFlat.addResidents(resident2);
myFlat.addResidents(resident3);
console.log('Жителі моєї квартири:', myFlat.residents);

const myHouse = new House();
//декілька екземплярів класу Квартира; Коли більше максимально зазначеної кількості вискакує повідомлення
const apartment1 = new Flat(1);
const apartment2 = new Flat(2);
const apartment3 = new Flat(3);
const apartment4 = new Flat(4);
const apartment5 = new Flat(5);

//додадити екземпляри класу Квартира до екземплярів класу Будинок.
myHouse.addFlats(apartment1);
myHouse.addFlats(apartment2);
myHouse.addFlats(apartment3);
myHouse.addFlats(apartment4);
myHouse.addFlats(apartment5);
console.log('Квартири в будинку:', myHouse.flats);

//додадити екземпляри класу Людина до екземплярів класу Квартира;
apartment1.addResidents(resident1)
apartment1.addResidents(resident2)
apartment3.addResidents(resident3)

//екземпляр класу Будинок;
const house = new House()

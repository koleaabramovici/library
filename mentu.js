class Media {
  constructor(name){
    this._title = '';
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(is){
    this._isCheckedOut = is;
  }
  get ratings(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
  this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating(){
  let average = this._ratings.reduce((a, b) => a + b) / this._ratings.length;
  return average;
  }
  addRating(ayzEi){
  return this._ratings.push(ayzEi);
  }
}

class Book extends Media {
  constructor(name, author, pages){
    super(name);
    this._author = author;
    this._pages = 0;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }

}

class Movie extends Media {
  constructor(name, director, runtime){
    super(name);
    this._director = director;
    this._runTime = 0;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

class CD extends Media {
  constructor(name, artist, songs){
    super(name);
    this._artist = artist;
    this._songs = [];
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  
}


const history = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
history.toggleCheckOutStatus(false);
history.addRating(4);
history.addRating(5);
history.addRating(5);
console.log(history.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus(false);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const bluRay = new CD('Get Rich or Die Tryin', '50 Cent', 'What Up Gangsta');
bluRay.toggleCheckOutStatus();
bluRay.addRating(4.5);
bluRay.addRating(5);
bluRay.addRating(5);
console.log(bluRay.getAverageRating());





// TV app
class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume <= 100) {
      this.volume++;
      console.log(`${this.volume}`);
    } else {
      console.log("The volume is at max.");
    }
  }
  decVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log(`${this.volume}`);
    } else {
      console.log("The volume is at min.");
    }
  }
  reset() {
    this.volume = 10;
    this.channel = 1;
    console.log(`${this.volume} and ${this.channel}`);
  }
}

const samsung = new Tv("Samsung");
console.log(samsung);
samsung.incVolume();
samsung.decVolume();

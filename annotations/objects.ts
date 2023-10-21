const profile = {
  name: 'alex',
  age: 20, 
  corrds: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// destructuring objects
const { age }: { age: number } = profile;
const { 
  corrds: { lat, lng } }: 
  { corrds: { lat: number, lng: number } } = profile;
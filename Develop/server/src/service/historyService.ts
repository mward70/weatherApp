import fs from 'fs/promises';

// TODO: Define a City class with name and id properties
class City {
  id: string;
  name: string;

  constructor( id: string, name: string){
    this.id = id;
    this.name = name;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  private filePath = 'searchHistory.json'
  private idCounter: number = 0;
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read(): Promise<City[]> {
    try{
      const data= await fs.readFile(this.filePath, 'utf8');
      const cities = JSON.parse(data);
      return cities.map((city : {id: string; name: string})=> new City (city.id, city.name));
    } catch (err){
    await fs.writeFile(this.filePath,JSON.stringify([], null, 2), 'utf8');
    return[];
    }
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    const data = JSON.stringify( cities, null, 2);
    await fs.writeFile(this.filePath, data, 'utf8');
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read();
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const cities = await this.read();
    const id= `city: ${this.idCounter++}`;
    cities.push(new City(id, city));
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    let cities = await this.read();
    cities =cities.filter((city) => city.id ! == id);
    await this.write(cities);
  }
}

export default new HistoryService();

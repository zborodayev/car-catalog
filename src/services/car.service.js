export const CarService = {
  async getAll() {
    const response = await fetch('http://localhost:3000/cars');
    const data = await response.json();
    return data;
  },

  async getById(id) {
    const response = await fetch(`http://localhost:3000/cars?id=${id}`);
    const data = await response.json();
    return data[0];
  },

  async create(car) {
    const response = await fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    });
    const data = await response.json();
    return data;
  }
};

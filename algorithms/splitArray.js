class organizeArray {
  constructor(array) {
    this.array = array;
  }

  getNumbers() {
    const data = this.splitter(this.array);

    return data.numbers;
  }

  getStrings() {
    const data = this.splitter(this.array);

    return data.strings;
  }

  getHighestNumber() {
    const data = this.splitter(this.array);

    return data.highestNumber;
  }

  splitter(array) {
    const data = {
      strings: [],
      numbers: [],
      highestNumber: 0,
    }
  
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      data[typeof element + 's'].push(element);
    }
  
    data.numbers.sort((a, b) => b - a);
    data.highestNumber = data.numbers[0];
  
    return data;

  }

}

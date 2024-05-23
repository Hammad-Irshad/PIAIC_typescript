// Function to store car information in an object
function storeCarInfo(manufacturer: string, modelName: string, ...options: any[]): any {
    let carInfo: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Adding optional properties from keyword arguments
    options.forEach(option => {
        let key = Object.keys(option)[0];  // Assuming single key-value pairs
        carInfo[key] = option[key];
    });

    return carInfo;
}

// Calling the function with required and optional information
let car = storeCarInfo('Toyota', 'Camry', { color: 'blue' }, { features: ['navigation', 'sunroof'] });

// Printing the object to verify information storage
console.log(car);

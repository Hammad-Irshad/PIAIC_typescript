// Function to describe a city and its country
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for different cities
describe_city("Karachi", "Pakistan");  // City in default country
describe_city("Paris", "France");      // City not in default country
describe_city("Sydney");               // City using default country

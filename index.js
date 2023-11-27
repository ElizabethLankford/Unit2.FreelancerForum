const newFreelancerArr = [
  {
    name: "Kevin",
    occupation: "Tutor",
    price: 30,
  },
  {
    name: "Randy",
    occupation: "Mechanic",
    price: 60,
  },
  {
    name: "Amy",
    occupation: "Accountant",
    price: 40,
  },
];

const freelancerArr = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70,
  },
];
const maxFreelancers = 10;
render()
const addFreelancerIntervel = setInterval(addFreelancer, 1000);

function render() {

  const namesListEl = document.querySelector("#names");
  const occupationsEl = document.querySelector("#occupations");
  const pricesEl = document.querySelector("#prices");


  const freelanceName = freelancerArr.map((person) => {
    let nameEl = document.createElement("li");
    nameEl.innerHTML = person.name;
    return nameEl;
  });
  const freelanceOcc = freelancerArr.map((occ) => {
    let occupationsEl = document.createElement("li");
    occupationsEl.innerHTML = occ.occupation;

    return occupationsEl;
  });

  const freelancePrice = freelancerArr.map((price) => {
    
    let priceEl = document.createElement("li");
    priceEl.innerHTML = `$ ${Math.floor(price.price)}`;
    averagePrice = averagePrice;

    return priceEl;
  });


  
  namesListEl.replaceChildren(...freelanceName);
  occupationsEl.replaceChildren(...freelanceOcc);
  pricesEl.replaceChildren(...freelancePrice);
}

function addFreelancer() {
  if (freelancerArr.length < maxFreelancers) {
    const selectedPerson =
      newFreelancerArr[Math.floor(Math.random() * newFreelancerArr.length)];
    freelancerArr.push(selectedPerson);
    getAverage()
    render();
    
  } else {
    clearInterval(addFreelancerIntervel);
  }
}

function getAverage(){
    let averagePrice = 0
    let averagePriceEl = document.querySelector("#averagePrice");
    freelancerArr.forEach((price) => {
       averagePrice += price.price /freelancerArr.length;
       console.log('price' , price.price)
       console.log('average price', averagePrice)
        return averagePrice
    })
    averagePriceEl.innerHTML = averagePrice;
    console.log(averagePrice)
}

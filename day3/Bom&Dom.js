// // console.log("window object", window); // Logs the global window object in browsers
// // console.log("document object", window.document); // Logs the document object representing the HTML document

// // const headings = document.getElementsByTagName("h1");
// // // console.log("Headings:", headings); // Logs all <h1> elements in the document

// // headings[0].innerText = "Updated Heading"; // Updates the text of the first <h1> element
// // // headings[1].innerText = "Another Heading"; // Updates the text of the second <h1> element
// // console.log("Updated Headings:", headings); // Logs the updated <h1> elements

// // const element = document.getElementsByClassName("text-brown");
// // console.log("Headings with class 'text-brown':", element); // Logs all elements with class 'text-brown

// // element[0].computedStyleMap.color = "brown";
// // element[1].style.color = "brown"; // Changes the text color of the first element with class 'text-brown'

// // const text = document.getElementById("text1");
// // text.style.backgroundColor = "green";
// // text.style.color = "white"; // Changes the text color of the element with id 'text1'
// // text.style.fontSize = "20px"; // Changes the font size of the element with id 'text1'
// // text.style.fontWeight = "bold"; // Changes the font weight of the element with id '

// const parent = document.getElementById("root");
// const title = document.createElement("h1");
// title.innerText = "Hello from DOM";
// parent.append(title);

// const title2 = document.createElement("h2");
// title2.innerText = "Hello from DocumentFragment";
// parent.append(title2);

// // Example data
// const Data = {
//   array: [
//     { name: "Raj", city: "Delhi", score: 24 },
//     { name: "Nithin", city: "Vizag", score: 34 },
//     { name: "Sara", city: "Mumbai", score: 45 },
//   ],
// };

// const createUI = () => {
//   Data.array.forEach((element) => {
//     const newDiv = document.createElement("div");
//     newDiv.className = "card";
//     newDiv.innerHTML = `
//       <h2>${element.name}</h2>
//       <p>City: ${element.city}</p>
//       <p>Score: ${element.score}</p>
//     `;
//     parent.append(newDiv);
//   });
// };

// createUI();

const data = [
  {
    userId: 1,
    id: 1,
    title: "VEG SALAD",
    completed: false,
    rating: 4.5,
    restaurant: "NOVOTEL",
    cuisine: "FRENCH",
  },
];

const hello = document.getElementById("root");

const createui = () => {
  data.forEach((elem) => {
    const newdiv = document.createElement("div");
    newdiv.className = "card";
    newdiv.innerHTML = `
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Salad" style="width:100%;border-radius:0.5rem 0.5rem 0 0;">
      <h4>${elem.title}</h4>
      <p>Rating:  ${elem.rating}</p>
      <p>Restaurant: ${elem.restaurant}</p>
      <p>Cuisine: ${elem.cuisine}</p>
    `;
    hello.append(newdiv);
  });
};

createui();

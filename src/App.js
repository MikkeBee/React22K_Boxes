import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const people = [
  {
    name: "Mikke",
    title: "CEO",
    age: 35,
    languages: [
      { name: "English", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Swedish", id: 3 },
    ],
  },
  {
    name: "not Mikke",
    title: "Developer",
    age: 30,
    languages: [
      { name: "English", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Swedish", id: 3 },
    ],
  },
  {
    name: "maybe Mikke",
    title: "Designer",
    age: 25,
    languages: [
      { name: "English", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Swedish", id: 3 },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {people.map((person) => (
          <Box
            name={person.name}
            title={person.title}
            age={person.age}
            languages={person.languages}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;

// <Box
//   age={ple[0].age}
//
// <Box
//   title={peple[1].title
//
// <Box
//   name={pople[2].name}
//
//<Box name="probably Mikke" title="Project Manager" age="20" />
// <Box name="definitely Mikke" title="Secretary" age="40" />
//<Box name="who?" title="Janitor" age="45" />

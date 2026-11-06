import Card from "./components/Card";

const App = () => {
  let myObj = {
    username : "pranshu",
    age : 23
  }

  const newArr = [
    2,3,4,5
  ]
  return (
   <>
    <Card mobileName= "Poco" price = "40000" someObj = {myObj} butn= "Only Visit-me"  newArray = {newArr}/>
  

   </>
  );
};

export default App;
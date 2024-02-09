import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <Button title={"Нажми меня!"} />
      <Header title={"Самый главный заголовок"}/>
      <Image imageUrl={"https://i.pinimg.com/474x/36/8b/34/368b34fa81d59ba7dc0358388542d2c9.jpg"} />
      <Student lastName={"Ivanov"} name={"Ivan"} grades={[5, 3, 4, 3, 4, 5, 3]} />
      <Student lastName={"Petrov"} name={"Peter"} grades={[]} />
      <Student lastName={"Sidorov"} name={"Sidor"} grades={[3, 2, 4, 4, 3, 3]} />
    </div>
  );
}

export default App;


import "./App.css"

function App() {
  const food="pizza";
  const age=9;
  const skills=["mern","nodejs","DSA","DESIGN","ANIMATION"]
  return (
    <div className="App">
      <div>
        </div>your can { age>18 ? "eat":"don't eat"} this {food}
      <div>
        {skills.map((e)=>{
          return <Skill skill={e}/> //as this is html we can give data in the form of age="1" name="test" //key values pairs
        })}
      </div> 
 
    </div>
  );
}

//component and function name 1st letter should be caps
                //props
function Skill(props){
  console.log("skill props:",props)
  return <p className="redtxt">Skill:{props.skill}</p>
}

export default App;

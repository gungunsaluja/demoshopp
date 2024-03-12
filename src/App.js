import logo from './logo.svg';
import './App.css';
import Item from './Component/Item';
import ItemDate from './Component/ItemDate';
import Card from './Component/Card';

function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemYear:"1998"
    },
    {
      itemName:"Nirma1",
      itemDate:"201",
      itemMonth:"juneoo",
      itemYear:"19981"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"june22",
      itemYear:"199822"
    }

  ];
  return (<div>
    <div className="App">
      Hellio jeee
      </div>
      <Card>
  <Item name = {response[0].itemName} >Heloo jee m hu aapki payrii first Item </Item>
  <ItemDate day = {response[0].itemDate} month ={response[0].itemMonth} year = {response[0].itemYear}></ItemDate>
  <Item name = {response[1].itemName} ></Item>
  <ItemDate day ={response[1].itemDate} month = {response[1].itemMonth} year = {response[1].itemYear}></ItemDate>
  <Item name = {response[2].itemName} ></Item>
  <ItemDate day = {response[2].itemDate} month = {response[2].itemMonth} year = {response[2].itemYear}></ItemDate>
  </Card>
    {/* <Item/> */}
    
    </div>
  );
}

export default App;

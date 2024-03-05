import Listing from './components/Listing';
import ItemModel from './models/index'
import data from './data/etsy.json';
import './App.css';

export default function App() {
  return (
    <Listing items={data as ItemModel[]} />
  );
}

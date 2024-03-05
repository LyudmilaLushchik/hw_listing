import ListingItem from './ListingItem';
import ItemModel from '../models/index';

type ListingItemProps = {
  items: ItemModel[];
}
function Listing({items}: ListingItemProps) {
  return (
    <div className='item-list'>
        {items.map(item => <ListingItem key={item.listing_id} item={item} />)}
    </div>
  )
}

export default Listing
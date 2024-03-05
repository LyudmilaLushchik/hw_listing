import ItemModel from '../models/index'

type ItemProps = {
    item: ItemModel;
};

const ListingItem = ({ item }: ItemProps ) => {
  if(item.state !== 'active') {
    return null;
  }

  const title = item.title.length > 50 ? item.title.slice(0, 51) + '...' : item.title;
  
  let cost: string;
  switch (item.currency_code) {
    case 'USD':
      cost = `$${item.price}`;
      break;
    case 'EUR':
      cost = `€${item.price}`;
      break;
    default:
      cost = `${item.price} ${item.currency_code}`;
      break;
  }

  const restClass: string =
    item.quantity <= 10
      ? 'level-low'
      : item.quantity <= 20
      ? 'level-medium'
      : 'level-high';
  
  return (
    <div className='item'>
      <div className='item-image'>
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{title}</p>
        <p className='item-price'>{cost}</p>
        <p className={`item-quantity ${restClass}`}>{item.quantity} left</p>
      </div>
    </div>
  );
}

export default ListingItem;
import { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';

function App() {
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

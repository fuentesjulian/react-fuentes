import { Link } from "react-router-dom";
import("./ItemBrowser.css");

function ItemBrowser({ categories, selectedItem }) {
  return (
    <div id="categoryList">
      <ul>
        {selectedItem ? (
          <li>
            Estas viendo {categories.find(({ category }) => category === selectedItem).label}
            <Link to="/"> [borrar]</Link>
          </li>
        ) : (
          <li>Conoce todos nuestros productos</li>
        )}
      </ul>
    </div>
  );
}

export default ItemBrowser;

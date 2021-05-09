import "./Header.css";
const Header = () => {
  let items = 0;
  return (
    <div className="row">
      <div className="col-12 bg-primary p-5 justify-content">
        <div class="d-flex justify-content-between">
          <span className="h1">Shop to React</span>
          <div className="">
            <img className="cart" src="shopping-cart.svg" alt="" />
            <p className="">{items} items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

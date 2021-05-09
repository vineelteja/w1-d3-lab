const Item = () => {
  let quantity = 0;
  let shop = [
    {
      image: "cologne.jpg",
      desc: "Unisex Cologne",
      value: 0,
    },
    {
      image: "iwatch.jpg",
      desc: "Apple iWatch",
      value: 0,
    },
    {
      image: "mug.jpg",
      desc: "Unique Mug",
      value: 0,
    },
    {
      image: "wallet.jpg",
      desc: "Mens Wallet",
      value: 0,
    },
  ];
  return (
    <div className="row">
      {shop.map((i) => (
        <div className="col-12 p-4 border justify-content">
          <div class="d-flex justify-content-start">
            <div className="m-2">
              <p className="desc">{i.desc}</p>
              <img className="" src={i.image} alt="" />
            </div>
            <div className="m-5 mt-5">
              <span>
                <span className="border ml-5 p-2 ">{quantity}</span> quantity
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Item;

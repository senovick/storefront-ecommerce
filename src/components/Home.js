import React from "react";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src="./assets/images/banner-1.jpg"
                alt=""
                className="banner-img"
              />
              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>
                <h2 className="banner-title">Women's latest fasion sale</h2>
                <p className="banner-text">
                  starting at &#36; <b>20</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
            <div className="slider-item">
              <img
                src="./assets/images/banner-2.jpg"
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at &#36; <b>15</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-3.jpg"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at &#36; <b>29</b>.99
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/dress.svg"
                  alt="dress & frock"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Dress & frock</h3>

                  <p className="category-item-amount">(53)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/coat.svg"
                  alt="winter wear"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Winter wear</h3>

                  <p className="category-item-amount">(58)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/glasses.svg"
                  alt="glasses & lens"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Glasses & lens</h3>

                  <p className="category-item-amount">(68)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/shorts.svg"
                  alt="shorts & jeans"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Shorts & jeans</h3>

                  <p className="category-item-amount">(84)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/tee.svg"
                  alt="t-shirts"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">T-shirts</h3>

                  <p className="category-item-amount">(35)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/jacket.svg"
                  alt="jacket"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Jacket</h3>

                  <p className="category-item-amount">(16)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/watch.svg"
                  alt="watch"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Watch</h3>

                  <p className="category-item-amount">(27)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/hat.svg"
                  alt="hat & caps"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Hat & caps</h3>

                  <p className="category-item-amount">(39)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

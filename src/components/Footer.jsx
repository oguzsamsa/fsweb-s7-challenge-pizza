import "./Footer.css";
import React from "react";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="left-section">
            <div className="logo-section">
              <img
                className=" w-2/5"
                src="../../Assets/mile2-aseets/footer/logo-footer.svg"
                alt=""
              />
              <address>
                <ul>
                  <li>
                    <img
                      src="../../Assets/mile2-aseets/footer/icons/icon-1.png"
                      alt=""
                      style={{
                        height: "28px",
                        width: "28px",
                        marginRight: "10px",
                      }}
                    />
                    341 Londonderry Road,
                    <br /> Istanbul Türkiye
                  </li>
                  <li>
                    <img
                      src="../../Assets/mile2-aseets/footer/icons/icon-2.png"
                      alt=""
                      style={{
                        height: "28px",
                        width: "28px",
                        marginRight: "10px",
                      }}
                    />
                    aciktim@teknolojikyemekler.com
                  </li>
                  <li>
                    <img
                      src="../../Assets/mile2-aseets/footer/icons/icon-3.png"
                      alt=""
                      style={{
                        height: "28px",
                        width: "28px",
                        marginRight: "10px",
                      }}
                    />
                    +90 216 123 45 67
                  </li>
                </ul>
              </address>
            </div>
            <div className="menu-section">
              <h5>Hot Menu</h5>
              <ul>
                <li>Terminal Pizza</li>
                <li>5 Kişilik Hackathlon Pizza</li>
                <li>useEffect Tavuklu Pizza</li>
                <li>Beyaz Console Frosty</li>
                <li>Testler Geçti Mutlu Burger</li>
                <li>Position Absolute Acı Burger</li>
              </ul>
            </div>
          </div>
          <div className="right-section">
            <h5>Instagram</h5>
            <div className="insta-photos">
              <img
                src="../../Assets/mile2-aseets/footer/insta/li-0.png"
                alt=""
              />
              <img
                src="../../Assets/mile2-aseets/footer/insta/li-1.png"
                alt=""
              />
              <img
                src="../../Assets/mile2-aseets/footer/insta/li-2.png"
                alt=""
              />
              <img
                src="../../Assets/mile2-aseets/footer/insta/li-3.png"
                alt=""
              />
              <img
                src="../../Assets/mile2-aseets/footer/insta/li-4.png"
                alt=""
              />
              <img
                src="../../Assets/mile2-aseets/footer/insta/li-5.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="copywright-wrapper">
          <p>© 2023 Teknolojik Yemekler.</p>
          <img
            src="../../Assets/mile2-aseets/footer/icons/twitter.svg"
            alt=""
            style={{ width: "18px", height: "18px" }}
          />
        </div>
      </footer>
    </>
  );
}

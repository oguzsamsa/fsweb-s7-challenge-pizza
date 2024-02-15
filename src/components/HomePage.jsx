import "./HomePage.css";
import Footer from "./Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function HomePage() {
  const history = useHistory();
  function handleClick() {
    history.push("/order");
  }
  const products = [
    {
      text: "YENİ! Kore",
      src: "../../Assets/mile2-aseets/icons/1.svg",
    },
    {
      text: "Pizza",
      src: "../../Assets/mile2-aseets/icons/2.svg",
    },
    {
      text: "Burger",
      src: "../../Assets/mile2-aseets/icons/3.svg",
    },
    {
      text: "Kızartmalar",
      src: "../../Assets/mile2-aseets/icons/4.svg",
    },
    {
      text: "Fast food",
      src: "../../Assets/mile2-aseets/icons/5.svg",
    },
    {
      text: "Gazlı İçecek",
      src: "../../Assets/mile2-aseets/icons/6.svg",
    },
  ];
  return (
    <>
      <section className="first-section">
        <img src="../../Assets/mile1-assets/logo.svg" alt="" />
        <p>fırsatı kaçırma</p>
        <h1>
          KOD ACIKTIRIR
          <br />
          PIZZA, DOYURUR
        </h1>
        <button data-cy="order-button-1" onClick={handleClick}>
          ACIKTIM
        </button>
      </section>
      <div className="flex justify-center gap-4 py-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-1">
            <img className="w-10 h-10" src={product.src} alt={product.text} />
            <p>{product.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#FAF7F2] py-[120px]">
        <div className="container w-3/4 mx-auto">
          <section className="max-w-[1440px] mx-auto grid grid-cols-2 grid-rows-2 gap-6 h-[600px]  ">
            <div className="row-span-2 bg-[url('../../Assets/mile2-aseets/cta/kart-1.png')] p-10 rounded-xl bg-no-repeat bg-cover">
              <h1 className="text-7xl w-1/2 text-white font-quattrocento font-bold">
                Özel Lezzetus
              </h1>
              <p className="text-xl text-white font-barlow font-bold py-6">
                Position:Absolute Acı Burger
              </p>
              <button
                data-cy="order-button-2"
                onClick={handleClick}
                className="px-8 py-4 text-[14px] bg-white rounded-full text-[#CE2829] font-barlow font-bold"
              >
                SİPARİŞ VER
              </button>
            </div>
            <div className="bg-[url('../../Assets/mile2-aseets/cta/kart-2.png')] p-10 rounded-xl bg-no-repeat bg-cover bg-center">
              <h1 className=" text-3xl font-barlow font-[600] text-white w-1/3">
                Hackathlon Burger Menü
              </h1>
              <button
                data-cy="order-button-3"
                className="px-8 py-4 text-[14px] bg-white rounded-full text-[#CE2829] font-barlow font-bold mt-6"
                onClick={handleClick}
              >
                SİPARİŞ VER
              </button>
            </div>
            <div className="bg-[url('../../Assets/mile2-aseets/cta/kart-3.png')] p-10 rounded-xl bg-no-repeat bg-cover">
              <h1 className="text-3xl font-barlow font-[600] text-[#292929] w-2/5">
                <span className="text-[#D80027]">Çoooook</span> hızlı npm gibi
                kurye{" "}
              </h1>
              <button
                data-cy="order-button-4"
                className="px-8 py-4 text-[14px] bg-white rounded-full text-[#CE2829] font-barlow font-bold mt-6"
                onClick={handleClick}
              >
                SİPARİŞ VER
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./OrderForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Footer from "./Footer";
export default function OrderForm() {
  const productInfo = {
    name: "Position Absolute Acı Pizza",
    price: 85.5,
    rating: 4.9,
    numberOfReviews: 200,
    text: "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
  };
  const initialForm = {
    size: "",
    dough: "",
    ingredients: [],
    userName: "",
    orderNote: "",
    quantity: 1,
  };
  const errorMessages = {
    size: "Boyut seçmelisiniz!",
    dough: "Hamur kalınlığı seçmelisiniz!",
    ingredients: "En az 4, en fazla 10 malzeme seçmelisiniz!",
    quantity: "Adet 1'den az olamaz!",
    userName: "En az 3 karakterden oluşan bir isim girmelisiniz!",
  };
  const additionalIngredients = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  const history = useHistory();

  const [formData, setFormData] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [successfulOrder, setSuccessfulOrder] = useState({});

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      if (formData.size.length < 1) {
        newErrors.size = errorMessages.size;
      }
      if (formData.dough.length < 1) {
        newErrors.dough = errorMessages.dough;
      }
      if (formData.ingredients.length < 4 || formData.ingredients.length > 10) {
        newErrors.ingredients = errorMessages.ingredients;
      }
      if (formData.quantity < 1) {
        newErrors.quantity = errorMessages.quantity;
      }
      if (formData.userName.length < 3) {
        newErrors.userName = errorMessages.userName;
      }

      setErrors(newErrors);
      setIsValid(Object.keys(newErrors).length === 0);
    };
    validateForm();
  }, [formData]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          ingredients: [...formData.ingredients, value],
        });
      } else {
        setFormData({
          ...formData,
          ingredients: formData.ingredients.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleIncrement(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      quantity: formData.quantity + 1,
    });
  }

  function handleDecrement(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      quantity: formData.quantity - 1,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      // Sipariş toplamı hesaplanıyor
      const orderTotal =
        productInfo.price * formData.quantity + 5 * formData.ingredients.length;

      axios
        .post("https://reqres.in/api/pizza", formData)
        .then((res) => {
          setSuccessfulOrder(res.data);
          setFormData(initialForm);
          history.push({
            pathname: "/success",
            state: {
              orderData: res.data,
              orderSummary: {
                total: orderTotal,
                ingredientsPrice: 5 * formData.ingredients.length,
              },
            },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <>
      <header>
        <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
      </header>
      <section className="product-info">
        <img src="../Assets/mile2-aseets/pictures/form-banner.png" alt="" />
        <div className="product-info-text">
          <p className="path">
            Anasayfa - <span>Sipariş Oluştur</span>
          </p>
          <h3>{productInfo.name}</h3>
          <div className="price">
            <h4>{productInfo.price}₺</h4>
            <div>
              <p>{productInfo.rating}</p>
              <p>({productInfo.numberOfReviews})</p>
            </div>
          </div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </section>
      <section className="product-body">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="size-dough-selection">
              <div className="size-selection">
                <h3 className="text-xl font-[600] mb-3">
                  Boyut Seç <span className="text-[#D80027]">*</span>
                </h3>
                <div className="size-selection-radios">
                  <label htmlFor="size-s" className="relative cursor-pointer">
                    <input
                      className="absolute opacity-0 h-0 w-0 peer"
                      type="radio"
                      name="size"
                      id="size-s"
                      value="S"
                      onChange={handleChange}
                    />
                    <div
                      className={`w-12 h-12 text-lg rounded-full bg-[#FAF7F2] flex items-center justify-center ${
                        formData.size === "S" ? "bg-[#FDC913]" : ""
                      }`}
                    >
                      S
                    </div>
                  </label>

                  <label htmlFor="size-m" className="relative cursor-pointer">
                    <input
                      className="absolute opacity-0 h-0 w-0 peer"
                      type="radio"
                      name="size"
                      id="size-m"
                      value="M"
                      onChange={handleChange}
                    />
                    <div
                      className={`w-12 h-12 text-lg rounded-full bg-[#FAF7F2] flex items-center justify-center ${
                        formData.size === "M" ? "bg-[#FDC913]" : ""
                      }`}
                    >
                      M
                    </div>
                  </label>

                  <label
                    htmlFor="size-l"
                    className="relative cursor-pointer custom-radio"
                  >
                    <input
                      className="absolute opacity-0 h-0 w-0 peer"
                      type="radio"
                      name="size"
                      id="size-l"
                      value="L"
                      onChange={handleChange}
                    />
                    <div
                      className={`w-12 h-12 text-lg rounded-full bg-[#FAF7F2] flex items-center justify-center ${
                        formData.size === "L" ? "bg-[#FDC913]" : ""
                      }`}
                    >
                      L
                    </div>
                  </label>
                </div>
                {errors.size && (
                  <p className="text-[#CE2829] font-[600] text-xs mt-2">
                    ({errors.size})
                  </p>
                )}
              </div>
              <div className="dough-selection">
                <h3 className=" text-xl font-[600] mb-3 ">
                  Hamur Seç <span className="text-[#D80027]">*</span>
                </h3>
                <select
                  className="bg-[#FAF7F2] h-12 rounded-md px-4 border-none"
                  name="dough"
                  id="dough"
                  value={formData.dough}
                  onChange={handleChange}
                >
                  <option value="">- Hamur Kalınlığı Seç</option>
                  <option value="ince">İnce</option>
                  <option value="standart">Standart</option>
                  <option value="kalin">Kalın</option>
                </select>
                {errors.dough && (
                  <p className="text-[#CE2829] font-[600] text-xs mt-2">
                    ({errors.dough})
                  </p>
                )}
              </div>
            </div>
            <div className="additional-ingredient-selection mt-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Ek Malzemeler
              </h3>
              <p className="text-base font-medium text-gray-600 my-3">
                En fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
              <div className="grid grid-cols-3 gap-4">
                {additionalIngredients.map((malzeme, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={malzeme}
                      name={malzeme}
                      value={malzeme}
                      onChange={handleChange}
                      checked={formData.ingredients.includes(malzeme)}
                      className="hidden"
                      data-cy="ingredient-checkbox"
                    />
                    <div className="w-12 h-12 bg-yellow-400 rounded-md flex items-center justify-center relative">
                      <span
                        className={`text-2xl font-bold text-black ${
                          formData.ingredients.includes(malzeme)
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        ✔
                      </span>
                    </div>
                    <span className="ml-2 text-lg font-medium text-gray-800">
                      {malzeme}
                    </span>
                  </label>
                ))}
              </div>
              {errors.ingredients && (
                <p className="text-[#CE2829] font-[600] text-xs mt-2">
                  ({errors.ingredients})
                </p>
              )}
            </div>
            <div className="user-name mt-10">
              <h3 className="text-xl font-semibold">İsim</h3>
              <label htmlFor="userName" className="block my-4">
                <input
                  className="w-1/2 px-6 py-4 rounded-md text-lg placeholder-gray-400 bg-[#FAF7F2] focus:outline-none"
                  type="text"
                  name="userName"
                  data-cy="name"
                  id="userName"
                  placeholder="İsminiz"
                  onChange={handleChange}
                />
                {errors.userName && (
                  <p className="text-[#CE2829] font-[600] text-xs mt-2">
                    ({errors.userName})
                  </p>
                )}
              </label>
            </div>
            <div className="order-note  ">
              <h3 className="text-xl font-semibold">Sipariş Notu</h3>
              <label htmlFor="orderNote" className="block my-4">
                <input
                  className="w-full px-6 py-4 rounded-md text-lg placeholder-gray-400 bg-[#FAF7F2] focus:outline-none"
                  type="text"
                  name="orderNote"
                  id="orderNote"
                  placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                  onChange={handleChange}
                />
              </label>
            </div>
            <hr />
            <div className="summary-section mt-5 flex justify-between mb-20">
              <div className="quantity-section flex flex-col  ">
                <div className="flex items-center bg-[#FAF7F2] rounded-md p-2 h-[60px]">
                  <button
                    className="decrement-button w-12 h-12 bg-transparent border-none"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <p className="flex-1 text-center">{formData.quantity}</p>
                  <button
                    className="increment-button w-12 h-12 bg-transparent border-none"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                {errors.quantity && (
                  <p className="text-[#CE2829] font-[600] text-xs mt-2">
                    {errors.quantity}
                  </p>
                )}
              </div>

              <div className="order-summary flex flex-col w-2/3 bg-[#FAF7F2]">
                <div className="p-10">
                  <h3 className=" text-xl font-[600] text-[#292929]">
                    Sipariş Toplamı
                  </h3>
                  <div className="additions flex my-5 justify-between text-[#5F5F5F] text-lg font-[600]">
                    <p>Seçimler</p>
                    <p>{5 * formData.ingredients.length}₺</p>
                  </div>
                  <div className="summary flex justify-between text-[#CE2829] text-lg font-[600]">
                    <p>Toplam</p>
                    <p>
                      {productInfo.price * formData.quantity +
                        5 * formData.ingredients.length}
                      ₺
                    </p>
                  </div>
                </div>
                <button
                  className="bg-[#FDC913] py-5 text-[#292929] text-lg font-[600] disabled:opacity-50"
                  type="submit"
                  disabled={!isValid}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

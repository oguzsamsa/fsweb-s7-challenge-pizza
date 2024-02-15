import React from "react";
import { useLocation } from "react-router-dom";
export default function Success() {
  const location = useLocation();
  const orderData = location.state && location.state.orderData;
  const orderSummary = location.state && location.state.orderSummary;
  return (
    <div className=" bg-[#CE2829] w-full h-screen py-10 text-center" flex>
      <img
        className=" w-1/4 mx-auto"
        src="../../Assets/mile1-assets/logo.svg"
        alt=""
      />
      <p className=" font-satisfy text-4xl text-[#FDC913] mt-12 mb-4">
        lezzetin yolda
      </p>
      <h1 className=" font-robotoCondensed text-7xl font-[300] text-white">
        SİPARİŞ ALINDI
      </h1>
      <hr className="w-2/5 mx-auto mt-10" />
      <h3 className="mt-5 font-barlow text-white text-2xl ">
        Position Absolute Acı Pizza
      </h3>
      <div className="w-[200px] mx-auto text-start text-white my-10 font-[400]">
        <p>
          Boyut: <span className=" font-[700]">{orderData.size}</span>
        </p>
        <p className=" my-3">
          Hamur: <span className=" font-[700]">{orderData.dough}</span>
        </p>
        <p>
          Ek Malzemeler:{" "}
          <span className=" font-[700]">
            {orderData.ingredients.join(", ")}
          </span>
        </p>
      </div>
      <div className="border border-[#FAF7F2] border-solid w-[300px] rounded-md mx-auto py-10 px-14 text-start text-white flex flex-col my-20">
        <h3 className=" text-xl">Sipariş Toplamı</h3>
        <div className="flex justify-between text-lg my-5">
          <p>Seçimler</p>
          <p>{orderSummary.ingredientsPrice}₺</p>
        </div>
        <div className="flex justify-between text-lg">
          <p>Toplam</p>
          <p>{orderSummary.total}₺</p>
        </div>
      </div>
    </div>
  );
}

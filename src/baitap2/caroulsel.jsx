import React, { useState } from "react";

export default function Carousel() {
  // Tạo state cho danh sách kính và kính đã chọn
  const [listKinh, setListKinh] = useState([
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/img/glassesImage/v1.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/img/glassesImage/v2.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/img/glassesImage/v3.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "/img/glassesImage/v4.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "/img/glassesImage/v5.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "/img/glassesImage/v6.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "/img/glassesImage/v7.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "/img/glassesImage/v8.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "/img/glassesImage/v9.png",
      desc: "Kính màu hồng nhạt với thiết kế vuông, đầu kính có hiệu ứng ngọc trai.",
    },
  ]);

  const [kinhDaChon, setKinhDaChon] = useState(listKinh[0]);

  const handleChonKinh = (kinh) => {
    setKinhDaChon(kinh);
  };

  return (
    <div className="overlay h-screen">
      <div className="content flex justify-center items-center text-center mt-52">
        <div className="relative w-36">
          <img
            src="/img/glassesImage/model.jpg"
            alt="Model"
            className="w-96 h-56 "
          />
          <div className="h-0 absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white top-28">
            <img
              className="w-20 mt-16 bg-opacity-50"
              src={kinhDaChon.url}
              alt=""
            />
            <div className="bg-orange-400 mt-16 bg-opacity-50 h-">
              <h3 className=" text-left font-bold text-slate-600">
                {kinhDaChon.name}
              </h3>
              <p className="text-left text-xs">{kinhDaChon.desc}</p>
            </div>
          </div>
        </div>
        <div className="ml-10 w-36">
          <img
            src="/img/glassesImage/model.jpg"
            alt=""
            className="w-96 h-56 "
          />
        </div>
      </div>
      <br />

      <div className="contents m-60">
        <div className="Footer m-60 bg-white justify-center flex mr-20 ml-20 mt-10">
          {listKinh.map((kinh) => (
            <div className="w-14 m-2" key={kinh.id}>
              <button
                className="border-black mt-5 mb-5"
                onClick={() => handleChonKinh(kinh)}
              >
                <img src={kinh.url} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

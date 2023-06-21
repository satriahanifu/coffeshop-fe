import React from "react";
import Slider from "react-slick";

import boba from "../images/boba.png";
import caramelCoffe from "../images/caramelCoffe.png";
import americano from "../images/americano.png";
import fruitFresh from "../images/fruitFresh.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const menu = [
    {
      image: boba,
      title: "expresso",
      caps: "Espreso adalah minuman yang dihasilkan dengan mengekstraksi biji kopi yang sudah digiling dengan menyemburkan air panas di bawah tekanan tinggi",
      size: "10ML",
      price: "27K",
    },
    {
      image: caramelCoffe,
      title: "caramel Coffe",
      caps: "Karamel adalah gula-gula yang terbentuk dari proses karamelisasi, sehingga menghasilkan cairan lengket berwarna krem sampai cokelat gelap. Karamel kadang terbentuk ketika memasak permen.",
      size: "20ML",
      price: "27K",
    },
    {
      image: americano,
      title: "americano",
      caps: "Americano adalah minuman kopi espresso dengan tambahan air panas. Namanya diambil dari cara orang Amerika meminum espresso.",
      size: "35ML",
      price: "35K",
    },
    {
      image: fruitFresh,
      title: "fruit fresh",
      caps: "Minuman adalah cairan yang dimaksudkan untuk dikonsumsi manusia. Selain fungsi dasar mereka untuk memuaskan dahaga.",
      size: "35ML",
      price: "15K",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings} className="mt-[393px]">
      {menu.map((item) => (
        <div className="w-[238px] h-[417px] shadow-[rgb(0,4px,4px)]/25 pt-[41px] rounded-[20px] ">
          <div className="w-[278px] h-[366px] rounded-[20px] bg-[#0E492D] pl-[21px]  pr-[11px] pt-[154px]">
            <img src={item.image} className="w-[115px] h-[178px] absolute top-[-41px] ml-[66px]" alt="img" />
            <h5 className="text-[32px] ">{item.title}</h5>
            <p className="text-[13px] w-[246px] h-[88px]">{item.caps}</p>
            <h5 className="text-[13px] mt-[20px]">{item.size}</h5>
            <h5 className="mt-[7px] mr-[27px] text-right">{item.price}</h5>
          </div>
        </div>
      ))}
    </Slider>
  );
}

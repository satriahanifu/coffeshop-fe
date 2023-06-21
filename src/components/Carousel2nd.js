import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import boba from "../images/boba.png";
import boba from "../images/boba.png";
import caramelCoffe from "../images/caramelCoffe.png";
import americano from "../images/americano.png";
import fruitFresh from "../images/fruitFresh.png";

function Carousel2nd() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  return (
    <Carousel responsive={responsive} infinite={true} className="absolute top-[380px]">
      {menu.map((item) => (
        <div className="w-[278px] h-[407px] shadow-[rgb(0,4px,4px)]/25 pt-[41px] rounded-[20px]">
          <div className="w-[278px] h-[366px] rounded-[20px] bg-[#0E492D] pl-[21px]  pr-[11px] pt-[154px]">
            <img src={item.image} className="w-[115px] h-[178px] absolute top-[-41px] ml-[66px]" alt="img" />
            <h5 className="text-[32px] ">{item.title}</h5>
            <p className="text-[13px] w-[246px] h-[88px]">{item.caps}</p>
            <h5 className="text-[13px] mt-[20px]">{item.size}</h5>
            <h5 className="mt-[7px] mr-[27px] text-right">{item.price}</h5>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Carousel2nd;

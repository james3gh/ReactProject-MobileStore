// import React, { useState, useEffect } from "react";
import "../styles/NavOptions.css";
import NavCard from "./NavCard";

console.log(window.location.pathname);

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  ///use state
  // const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  // const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  // const [tvToggle, setTvToggle] = useState(false);
  // const [laptopToggle, setLaptopToggle] = useState(false);
  // const [fitnessToggle, setFitnessToggle] = useState(false);
  // const [homeToggle, setHomeToggle] = useState(false);
  // const [audioToggle, setAudioToggle] = useState(false);
  // const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  // useEffect(() => {
  //   if (window.location.href === "/miphones") {
  //     return setMiPhoneToggle(true);
  //   }
  //   if (window.location.pathname === "/#redmiphones") {
  //     return setRedmiPhoneToggle(true);
  //   }
  //   if (window.location.pathname === "/#tv") {
  //     return setTvToggle(true);
  //   }
  //   if (window.location.pathname === "/#laptops") {
  //     return setLaptopToggle(true);
  //   }
  //   if (window.location.pathname === "/#lifestyle") {
  //     return setFitnessToggle(true);
  //   }
  //   if (window.location.pathname === "/#home") {
  //     return setHomeToggle(true);
  //   }
  //   if (window.location.pathname === "/#audio") {
  //     return setAudioToggle(true);
  //   }

  //   if (window.location.pathname === "/#accessories") {
  //     return setAccessoriesToggle(true);
  //   }
  // }, []);
  return (
    <div className="navOptions">
      {miPhones &&
        miPhones.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {redmiPhones &&
        redmiPhones.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {tv &&
        tv.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {laptop &&
        laptop.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {fitnessAndLifeStyle &&
        fitnessAndLifeStyle.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {home &&
        home.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {audio &&
        audio.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}

      {accessories &&
        accessories.map((item, index) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
            key={item.image}
          />
        ))}
    </div>
  );
};

export default NavOptions;

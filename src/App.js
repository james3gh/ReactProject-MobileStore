import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import NavOptions from "./components/NavOptions";
import Slider from "./components/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />
      {/* <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      /> */}
      <Routes>
        <Route
          exact
          path="/miphones"
          element={<NavOptions miPhones={data.miPhones} />}
        ></Route>
        <Route
          exact
          path="/redmiphones"
          element={<NavOptions redmiPhones={data.redmiPhones} />}
        ></Route>
        <Route exact path="/tv" element={<NavOptions tv={data.tv} />}></Route>
        <Route
          exact
          path="/laptops"
          element={<NavOptions laptop={data.laptop} />}
        ></Route>
        <Route
          exact
          path="/lifestyle"
          element={
            <NavOptions fitnessAndLifeStyle={data.fitnessAndLifeStyle} />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={<NavOptions home={data.home} />}
        ></Route>
        <Route
          exact
          path="/audio"
          element={<NavOptions audio={data.audio} />}
        ></Route>
        <Route
          exact
          path="/accessories"
          element={<NavOptions accessories={data.accessories} />}
        ></Route>
      </Routes>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <PreFooter />
      <Footer footer={data.footer} />
    </BrowserRouter>
  );
}

export default App;

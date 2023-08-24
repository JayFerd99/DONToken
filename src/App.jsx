import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NextSection from "./Components/NextSection";
import FeatureOne from "./Components/FeatureOne";
import DailyStats from "./Components/DailyStats";
import SocialMediaPromotion from "./Components/SocialMediaPromotion";
import tapImage from "./assets/tap.png";
import Card from "./Components/Card";
import first from "./assets/wallet.png";
import second from "./assets/investment.png";
import third from "./assets/insurance.png";
import fourth from "./assets/safe-deposit.png";
import DevSection from "./Components/DevSection";
import { BlogSection } from "./Components/BlogSection";
import Footer from "./Components/Footer";

function App() {
  const features = [
    {
      src: first,
      title: "Value",
      description:
        "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
    },
    {
      src: second,
      title: "Yield",
      description:
        "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
    {
      src: third,
      title: "Insurance",
      description:
        "Get Impermanent Loss Protection on your Liquidity Pools in income for the future",
    },
    {
      src: fourth,
      title: "Staking",
      description:
        "Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
  ];
  return (
    <div className="home">
      <Header />
      <NextSection />
      <DailyStats />
      <FeatureOne />
      <div className="features-list-container">
        {features.map((feature, index) => {
          return (
            <Card key={index} title={feature.title} imgUrl={feature.src}>
              {<p>{feature.description}</p>}
            </Card>
          );
        })}
      </div>
      <DevSection />
      <SocialMediaPromotion tapImage={tapImage} />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;

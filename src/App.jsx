import { useEffect } from "react";
import Image from "./profile/Image";
import Profile from "./profile/profile";
import img from "./img.jpg";
function App() {
  const fullName = "Abdelrahman Messelhy";
  const bio =
    "Abdelrahman is a Muslim handball player and music lover who finds solace in programming. He is dedicated to becoming an amazing developer and is constantly striving to improve his skills. In his free time, he enjoys going to the gym and finds spiritual fulfillment through prayer. With a passion for time management and productivity, Abdelrahman is always looking for ways to optimize his daily routine and stay consistent in his various pursuits.";
  const handleName = () => {
    alert(`Hello ${fullName}`);
  };
  useEffect(() => {
    handleName;
  }, []);

  return (
    <>
      <Profile
        fullName={fullName}
        bio={bio}
        handleName={handleName}
        Image={<Image img={img} />}
      />
    </>
  );
}

export default App;

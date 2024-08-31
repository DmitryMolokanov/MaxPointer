import { useEffect, useState } from "react";
import "./styles/index.scss";
import { clearTimeout } from "timers";

const App = () => {
  const [isPoint, setIsPoint] = useState(true);
  const [top, setTop] = useState("50%");
  const [left, setLeft] = useState("50%");
  const [pointClass, setPointClass] = useState<"point" | "point_animation">(
    "point"
  );

  const pressPoint = () => {
    window.navigator.vibrate(200);
    const timeout = setTimeout(() => {
      setIsPoint(false);
    }, 1000);
    setPointClass("point_animation");
  };

  const newPosition = () => {
    setIsPoint(true);
  };

  useEffect(() => {
    setTimeout(() => newPosition(), 500);
    if (isPoint) {
      let top = Math.floor(Math.random() * 100);
      top < 10 ? (top = 10) : top;
      top > 90 ? (top = 90) : top;

      let left = Math.floor(Math.random() * 100);
      left < 10 ? (left = 10) : left;
      left > 90 ? (left = 90) : left;

      setTop(top + "%");
      setLeft(left + "%");
      console.log(top, left);
      setPointClass("point");
    }
  }, [isPoint]);

  return (
    <div>
      {isPoint ? (
        <div
          className={pointClass}
          style={{ top: top, left: left }}
          onTouchStart={() => pressPoint()}
        ></div>
      ) : null}
    </div>
  );
};

export default App;

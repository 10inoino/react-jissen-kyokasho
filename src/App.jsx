import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log("レンダリング");
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    // alert();
    setNum(num + 1);
  }

  return (
    <div>
      <h1 style={{ color:"red" }}>Hello World!</h1>
      <ColoredMessage color="blue">元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  )
}
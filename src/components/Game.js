import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import NormalButton from "../components/normalButton";

const Game = ({ onClick, onDone }) => {
  const canvas = useRef();
  const [showButton, setShowButton] = React.useState(false);
  const List = [];
  let ctx = null;
  const boxes = [
    { x: 50, y: 440, w: 100, h: 50, id: 1 },
    { x: 50, y: 380, w: 100, h: 50, id: 2 },
    { x: 50, y: 320, w: 100, h: 50, id: 3 },
    { x: 50, y: 260, w: 100, h: 50, id: 4 },
  ];
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  let endX = 900;

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    draw();
  }, []);

  // draw rectangle
  const draw = () => {
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    boxes.map((info) => drawFillRect(info));
  };

  // draw rectangle with background
  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "#C19A6B" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, w, h);
  };

  // identify the click event in the rectangle
  const hitBox = (x, y) => {
    let isTarget = null;
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      if (
        x >= box.x &&
        x <= box.x + box.w &&
        y >= box.y &&
        y <= box.y + box.h
      ) {
        dragTarget = box;
        isTarget = true;
        break;
      }
    }
    //checkIfDone();
    return isTarget;
  };
  const checkIfDone = () => {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].x > 600 && !List.includes(boxes[i].id)) {
        List.push(boxes[i].id);
      }
    }
    if (List.length > 3) {
        setShowButton(true);
        onDone()
    }
  };
  const handleMouseDown = (e) => {
    startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    startY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    isDown = hitBox(startX, startY);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    checkIfDone();
    const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    dragTarget.x += dx;
    dragTarget.y += dy;
    if (dragTarget.x > 700) dragTarget.x = 700;
    draw();
  };
  const handleMouseUp = (e) => {
    dragTarget = null;
    isDown = false;
  };
  const handleMouseOut = (e) => {
    handleMouseUp(e);
  };

  return (
    <div className="Game">
      {showButton ? <NormalButton text="ÁFRAM" onClick={() => onClick("level2")} /> :
       <StyledCanvas
       width={800}
       height={500}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUp}
       onMouseOut={handleMouseOut}
       ref={canvas}
     ></StyledCanvas>
      }

     
    </div>
  );
};

const StyledCanvas = styled.canvas`
    border: 1px solid black;
    background-color: beige;
`
export default Game;

import ThreeDView from "./components/ThreeDView";
import React, { createRef, useEffect } from 'react';
export default function App(){
  const divRef = createRef();
  useEffect(() => ThreeDView(divRef.current), [divRef]);
  return(<div ref={divRef} />)
  };
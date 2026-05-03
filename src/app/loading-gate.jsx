'use client';

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function LoadingGate() {
  const [show, setShow] = useState(true);
  return show ? <LoadingScreen onDone={() => setShow(false)} /> : null;
}

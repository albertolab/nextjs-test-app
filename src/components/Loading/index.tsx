import { CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <div className="mt-40 flex justify-center">
      <CircularProgress size={100} />
    </div>
  );
}

export default Loading;

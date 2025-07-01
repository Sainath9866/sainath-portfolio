"use client";
import React from "react";
import { Button } from "../ui/moving-border";

function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="cursor-pointer text-xl bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        My Resume
      </Button>
    </div>
  );
}

export default MovingBorderDemo;

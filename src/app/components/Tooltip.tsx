import React from "react";
import { useEffect } from "react";
import {tooltips} from "../../../public/utils/tooltips"

export const Tooltip = () => {
  useEffect(() => {
    tooltips();
  }, []);
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top"
      >
        Tooltip on top
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="right"
        title="Tooltip on right"
      >
        Tooltip on right
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Tooltip on bottom"
      >
        Tooltip on bottom
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="left"
        title="Tooltip on left"
      >
        Tooltip on left
      </button>
    </>
  );
};

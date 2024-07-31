import React from "react";
import { useEffect } from "react";

export const Tooltip = () => {
  useEffect(() => {
    ($('[data-toggle="tooltip"]') as any).tooltip();
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

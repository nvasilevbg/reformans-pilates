"use client";

import React from "react";
import { CalendarIcon } from "@/components/Icons";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a
        href="https://www.fitsys.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mobile-sticky-btn"
      >
        <CalendarIcon />
        <span>Запази час</span>
      </a>
    </div>
  );
}

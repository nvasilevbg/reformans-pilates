"use client";

import React from "react";
import { CalendarIcon } from "@/components/Icons";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <div className="mobile-sticky-info">
        <span className="mobile-sticky-title">Реформър Лозенец</span>
        <span className="mobile-sticky-sub">Групи до 6 души</span>
      </div>
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

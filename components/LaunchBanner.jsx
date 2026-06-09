"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock } from "lucide-react";

const LAUNCH_DATE = new Date("2026-06-20T00:00:00");
const SESSION_KEY = "osekunde_launch_banner_dismissed";

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => calcDiff(target));

  function calcDiff(target) {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000) / 60_000),
      seconds: Math.floor((diff % 60_000) / 1_000),
      expired: false,
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcDiff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function Digit({ value, label }) {
  return (
    <div className="launch-digit-wrap">
      <div className="launch-digit">{String(value).padStart(2, "0")}</div>
      <div className="launch-digit-label">{label}</div>
    </div>
  );
}

export default function LaunchBanner() {
  const [visible, setVisible] = useState(false);
  const { days, hours, minutes, seconds, expired } = useCountdown(LAUNCH_DATE);

  useEffect(() => {
    // Show the banner unless the user has already dismissed it this session
    if (!sessionStorage.getItem(SESSION_KEY)) {
      // Small delay so the page renders first — feels more polished
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  if (!visible || expired) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="launch-backdrop"
        aria-hidden="true"
        onClick={dismiss}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Informacja o starcie"
        className="launch-modal"
      >
        {/* Close button */}
        <button
          id="launch-banner-close"
          onClick={dismiss}
          aria-label="Zamknij"
          className="launch-close"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="launch-icon-ring">
          <Calendar size={28} />
        </div>

        {/* Heading */}
        <h2 className="launch-heading">Ruszamy już wkrótce!</h2>
        <p className="launch-sub">
          Nasze usługi będą dostępne od&nbsp;
          <strong>20 czerwca 2026</strong>.
          <br />
          Już teraz możesz się zapoznać z naszą ofertą!
        </p>

        {/* Countdown */}
        <div className="launch-countdown" aria-label="Odliczanie do startu">
          <Digit value={days} label="dni" />
          <div className="launch-sep">:</div>
          <Digit value={hours} label="godz" />
          <div className="launch-sep">:</div>
          <Digit value={minutes} label="min" />
          <div className="launch-sep">:</div>
          <Digit value={seconds} label="sek" />
        </div>

        {/* CTA */}
        <button
          id="launch-banner-browse"
          onClick={dismiss}
          className="launch-cta"
        >
          Przeglądaj stronę
        </button>
      </div>
    </>
  );
}

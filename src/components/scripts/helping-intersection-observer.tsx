"use client";

import { useEffect } from "react";

function HelpingIntersectionObserver() {
  useEffect(() => {
    if (window) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (document.querySelector('.helping__consultation-container')) document.querySelector('.helping__consultation-container')!.classList.add('active');
              if (document.querySelector('.helping__image-container--top')) document.querySelector('.helping__image-container--top')!.classList.add('active');
              if (document.querySelector('.helping__image-container--bottom')) document.querySelector('.helping__image-container--bottom')!.classList.add('active');
              if (document.querySelector('.helping__arrow-container')) document.querySelectorAll('.helping__arrow-container')!.forEach(el => el.classList.add('active'));
              if (document.querySelector('.helping__small-text-container')) document.querySelectorAll('.helping__small-text-container')!.forEach(el => el.classList.add('active'));
              observer.unobserve(el);
            }
          });
        });
        if(document.querySelector('.helping__first-icon')) observer.observe(document.querySelector('.helping__first-icon')!);
      }
    }
  }, []);

  return <></>;
}

export default HelpingIntersectionObserver;
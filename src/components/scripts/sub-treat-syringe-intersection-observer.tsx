"use client";

import { useEffect } from "react";

function SubTreatSyringeIntersectionObserver() {
  useEffect(() => {
    if (window) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (document.querySelector('.free-consultation__syringe-container')) document.querySelector('.free-consultation__syringe-container')!.classList.add('active');
              observer.unobserve(el);
            }
          });
        });
        if(document.querySelector('.free-consultation__syringe-container')) observer.observe(document.querySelector('.free-consultation__syringe-container')!);
      }
    }
  }, []);

  return <></>;
}

export default SubTreatSyringeIntersectionObserver;
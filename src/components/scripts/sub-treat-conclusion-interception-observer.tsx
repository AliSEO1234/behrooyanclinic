"use client";

import { useEffect } from "react";

function SubTreatConclusionIntersectionObserver() {
  useEffect(() => {
    if (window) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (document.querySelector('.conclusion__mask-container')) document.querySelector('.conclusion__mask-container')!.classList.add('active');
              observer.unobserve(el);
            }
          });
        });
        if(document.querySelector('.conclusion__description--text')) observer.observe(document.querySelector('.conclusion__description--text')!);
      }
    }
  }, []);

  return <></>;
}

export default SubTreatConclusionIntersectionObserver;
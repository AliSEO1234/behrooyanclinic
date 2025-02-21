"use client";

import { useEffect } from "react";

function SubTreatAdvantagesIntersectionObserver() {
  useEffect(() => {
    if (window) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (document.querySelector('.benefit-card-container')) document.querySelectorAll('.benefit-card-container')!.forEach(el => el.classList.add('active'));
              if (document.querySelector('.benefit-border-container')) document.querySelectorAll('.benefit-border-container')!.forEach(el => el.classList.add('active'));
              observer.unobserve(el);
            }
          });
        });
        if(document.querySelector('.benefit-card-container')) observer.observe(document.querySelector('.benefit-card-container')!);
      }
    }
  }, []);

  return <></>;
}

export default SubTreatAdvantagesIntersectionObserver;
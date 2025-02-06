"use client";

import { useEffect } from "react";

function InfoIntersectionObserver() {
  useEffect(() => {
    if (window) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (document.querySelector('.info__icon-container--1')) document.querySelector('.info__icon-container--1')!.classList.add('active');
              if (document.querySelector('.info__icon-container--2')) document.querySelector('.info__icon-container--2')!.classList.add('active');
              if (document.querySelector('.info__icon-container--3')) document.querySelector('.info__icon-container--3')!.classList.add('active');
              if (document.querySelector('.info__text-container--2')) document.querySelector('.info__text-container--2')!.classList.add('active');
              if (document.querySelector('.info__text-container--3')) document.querySelector('.info__text-container--3')!.classList.add('active');
              if (document.querySelector('.info__text-container--4')) document.querySelector('.info__text-container--4')!.classList.add('active');
              observer.unobserve(el);
            }
          });
        });
        if(document.querySelector('.info__text-container--1')) observer.observe(document.querySelector('.info__text-container--1')!);
      }
    }
  }, []);

  return <></>;
}

export default InfoIntersectionObserver;
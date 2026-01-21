import React from "react";
import { resourcesLinks } from "../constants/index";
import { platformLinks } from "../constants/index";
import { communityLinks } from "../constants/index";
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto border-t  border-t-neutral-700 py-10 mt-20">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="my-4 text-neutral-300 hover:text-white"
                >
                  <a href={link.href}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="my-4 text-neutral-300 hover:text-white"
                >
                  <a href={link.href}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul>
            {communityLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="my-4 text-neutral-300 hover:text-white"
                >
                  <a href={link.href}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

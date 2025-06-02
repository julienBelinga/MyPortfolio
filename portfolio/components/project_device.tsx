"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface DeviceProps {
  img1: string | StaticImageData;
  img2: string | StaticImageData;
  img3?: string | StaticImageData;
  legend?: string;
}

const Device: React.FC<DeviceProps> = ({ img1, img2, img3, legend }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const deviceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const device = deviceRef.current;
    if (device) {
      if (isVisible) {
        device.classList.add("deviceSlideIn");
      } else {
        device.classList.remove("deviceSlideIn");
      }
    }
  }, [isVisible]);

  const finalImg3 = img3 || img2;

  return (
    <div ref={ref}>
      <div id="device" className="devices" ref={deviceRef}>
        <div className="iphone-x phone1">
          <div className="side">
            <div className="screen">
              <Image
                className="screen-project"
                src={img1}
                width={500}
                height={500}
                alt="Capture d'écran du projet sur mobile"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="header">
            <div className="sensor-1"></div>
            <div className="sensor-2"></div>
            <div className="sensor-3"></div>
          </div>
          <div className="volume-button"></div>
          <div className="power-button"></div>
        </div>
        <div className="iMac">
          <div className="body">
            <div className="shine"></div>
            <div className="screen">
              <Image
                className="screen-project"
                src={img2}
                width={500}
                height={500}
                alt="Capture d'écran du projet sur desktop"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="stand"></div>
        </div>
        <div className="mac_container mac1">
          <div className="mac_scaler">
            <div className="mac_holder">
              <div className="mac_screen">
                <div className="mac_camera"></div>
                <div className="mac_screen_content">
                  <Image
                    className="screen-project"
                    src={finalImg3}
                    width={500}
                    height={500}
                    alt="Capture d'écran du projet sur laptop"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="mac_bottom">
                <div className="mac_bottom_top_half">
                  <div className="mac_thumb_space"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <legend style={{ fontSize: "8.5px", textAlign: "center" }}>
        {legend}
      </legend>
    </div>
  );
};

export default Device;

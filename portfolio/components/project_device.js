import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Device(props) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const deviceRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const device = deviceRef.current;

    if (isVisible) {
      device.classList.add('deviceSlideIn');
    } else {
      device.classList.remove('deviceSlideIn');
    }
  }, [isVisible]);

  // Set img3 to img2 if img3 is not provided
  const img3 = props.img3 || props.img2;

  return (
    <div ref={ref}>
      <div id="device" className="devices" ref={deviceRef}>
        <div className="iphone-x phone1">
          <div className="side">
            <div className="screen">
              <Image
                className="screen-project"
                src={props.img1}
                width={500}
                height={500}
                alt="project screenshot"
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
                src={props.img2}
                width={500}
                height={500}
                alt="project screenshot"
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
                    src={img3}
                    width={500}
                    height={500}
                    alt="project screenshot"
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
      <legend style={{ fontSize: '8.5px', textAlign: 'center' }}>
        {props.legend}
      </legend>
    </div>
  );
}

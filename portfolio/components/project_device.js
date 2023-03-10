import Image from 'next/image'
import React from 'react'

export default function device(props) {
  return (
    <>
       <div>
          <div id="device-right" class="devices deviceSlideRight">
              <div class="iphone-x phone1-right">
                  <div class="side">
                  <div class="screen">
                      <Image class="screen-project" src={props.img1} width={500} height={500} alt="my Portfolio screen"/>
                  </div>
                  </div>
                  <div class="line"></div>
                  <div class="header">
                  <div class="sensor-1"></div>
                  <div class="sensor-2"></div>
                  <div class="sensor-3"></div>
                  </div>
                  <div class="volume-button"></div>
                  <div class="power-button"></div>
              </div>
              <div class="iMac">
                  <div class="body">
                  <div class="shine"></div>
                  <div class="screen">
                      <Image class="screen-project" src={props.img2} width={500} height={500} alt="my Portfolio screen"/>
                  </div>
                  </div>
                  <div class="stand"></div>
              </div>
              <div class="mac_container mac1-right">
                  <div class="mac_scaler">
                      <div class="mac_holder">
                          <div class="mac_screen">
                              <div class="mac_camera"></div>
                              <div class="mac_screen_content">
                                  <Image class="screen-project" src={props.img2} width={500} height={500} alt="my Portfolio screen"/>
                              </div>
                          </div>
                          <div class="mac_bottom">
                              <div class="mac_bottom_top_half">
                                  <div class="mac_thumb_space"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <legend>{props.legend}</legend>
      </div>
    </>
  )
}

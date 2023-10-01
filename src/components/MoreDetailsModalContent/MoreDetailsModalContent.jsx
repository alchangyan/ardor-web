import React from "react";
import _360degImg from '../../assets/images/more-details-set/360deg.png'
import circleBlueImg from '../../assets/images/more-details-set/circle-blue.png'
import circleOrangeImg from '../../assets/images/more-details-set/circle-orange.png'
import figure1Img from '../../assets/images/more-details-set/figure 1.png'
import figure2Img from '../../assets/images/more-details-set/figure 2.png'
import linesImg from '../../assets/images/more-details-set/lines.png'

import "./MoreDetailsModalContent.scss";

function MoreDetailsModalContent() {
  return (
    <div className="more-details-content">
      <div className="more-details-content__images">
        <div className="more-details-content__images-background">
          {/* left */}
          <img src={figure1Img} alt="background figure" />
          <img src={circleBlueImg} alt="circle blue" />

          {/* right */}
          <img src={figure2Img} alt="background figure" />
          <img src={circleOrangeImg} alt="circle orange" />
          <img src={linesImg} alt="lines" />
        </div>
        <div className="more-details-content__main-image" style={{backgroundImage: "url(https://dummyimage.com/810x640/000/fff)"}}>
          <img src={_360degImg} alt="360 deg" />
        </div>
        <div className="more-details-content__thumbnails">
          <div style={{backgroundImage: "url(https://dummyimage.com/810x640/000/fff)"}}></div>
          <div style={{backgroundImage: "url(https://dummyimage.com/810x640/000/fff)"}}></div>
          <div style={{backgroundImage: "url(https://dummyimage.com/810x640/000/fff)"}}></div>
          <div style={{backgroundImage: "url(https://dummyimage.com/810x640/000/fff)"}}></div>
        </div>
      </div>
      <div className="more-details-content__description scrollbar">
        <div className="more-details-content__title">3BR Unit. Sea View.</div>
        <div className="more-details-content__subtitle">Description:</div>
        <div className="more-details-content__text">
          On Saadiyat Island, Park View is located across from the renowned New
          York University Abu Dhabi and offers spacious and luxury residential
          units.
          <br />
          The building is complete with unique amenities and facilities like its
          floating infinity swimming pool located thirty meters above ground, on
          the connecting bridge between the two buildings.
        </div>
        <div className="more-details-content__subtitle">Apartment Features:</div>
        <div className="more-details-content__text">
          Fully Furnished / 3 Bedroom / 4 Bathroom Spacious Balcony / Built-in
          Wardrobes / Floor to Ceiling / Windows / Laundry Area / Spacious
          Kitchen / Central A/C
        </div>
        <div className="more-details-content__subtitle">Amenities and Facilities:</div>
        <div className="more-details-content__text">
          Swimming pool / GYMJacuzzi / Sauna / Landscaped Gardens / Parking / Pet
          Friendly / Childrens playground / Concierge Services 24/7 Security24/7
          Maintenance
        </div>
      </div>
    </div>
  );
}
export default MoreDetailsModalContent;

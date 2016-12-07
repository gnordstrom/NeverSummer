DROP TABLE IF EXISTS shirts, hoodies, gender, hats, accessories;

/*~~~~~~~~~~~~~~~~~~~*
    Gender Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE gender (
    id SERIAL PRIMARY KEY,
    gendertype VARCHAR(255)
);

INSERT INTO gender (gendertype) VALUES
('male'),
('female'),
('kids');

/*~~~~~~~~~~~~~~~~~~~*
    Shirts Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE shirts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo VARCHAR(255),
    genderid INTEGER REFERENCES gender(id)
);

INSERT INTO shirts (name, photo, genderid) VALUES
('Bolts Longsleeve', '../../../assets/img/apparel/shirts/MsBoltsLS-Action=thumbnail&Width=400.png', 1),
('Bolts Tee', '../../../assets/img/apparel/shirts/MsBoltsfrontT-Action=thumbnail&Width=400.png', 1),
('Bullet Eagle Raglan', '../../../assets/img/apparel/shirts/MsBulletRaglan-Action=thumbnail&Width=400.png', 1),
('Bullet Eagle Tee', '../../../assets/img/apparel/shirts/MsCOBullet3-Action=thumbnail&Width=400.png', 1),
('Colorado Eagle Longsleeve', '../../../assets/img/apparel/shirts/MsCOLS2-Action=thumbnail&Width=400.png', 1),
('Colorado Eagle Tee', '../../../assets/img/apparel/shirts/MsCOT-Action=thumbnail&Width=400.png', 1),
('Eagle Mountain Fill Tee', '../../../assets/img/apparel/shirts/MsMtnfillT-Action=thumbnail&Width=400.png', 1),
('Eagle Tee', '../../../assets/img/apparel/shirts/MsEagleT2-Action=thumbnail&Width=400.png', 1),
('NVR SMR Storm Longsleeve', '../../../assets/img/apparel/shirts/MsNVRSMRLS-Action=thumbnail&Width=400.png', 1),
('NVR SMR Storm Tee', '../../../assets/img/apparel/shirts/MsNVRSMRT-Action=thumbnail&Width=400.png', 1),
('Premium Arrows Tee', '../../../assets/img/apparel/shirts/Ms25T-Action=thumbnail&Width=400.png', 1),
('Premium Corporate Tee', '../../../assets/img/apparel/shirts/MsCorpT-Action=thumbnail&Width=400.png', 1),
('Ripsaw Raglan Tee', '../../../assets/img/apparel/shirts/MsRipRaglan-Action=thumbnail&Width=400.png', 1),
('Ripsaw Tee', '../../../assets/img/apparel/shirts/MsRipT-Action=thumbnail&Width=400.png', 1),
('USA Pocket Tee', '../../../assets/img/apparel/shirts/MsUSAT-Action=thumbnail&Width=400.png', 1),
('Womens Arrows Longsleeve', '../../../assets/img/apparel/shirts/WsLS-Action=thumbnail&Width=400.png', 2),
('Womens Colorado Eagle Tee', '../../../assets/img/apparel/shirts/WsCOTee-Action=thumbnail&Width=400.png', 2),
('Womens Script Tee', '../../../assets/img/apparel/shirts/WsTee-Action=thumbnail&Width=400.png', 2),
('Womens Proto Raglan', '../../../assets/img/apparel/shirts/WsProtoRaglan-Action=thumbnail&Width=400.png', 2),
('Boys Bullet Eagle Tee', '../../../assets/img/apparel/shirts/BsBulletT2-Action=thumbnail&Width=400.png', 3),
('Boys Colorado Eagle Tee', '../../../assets/img/apparel/shirts/BsCOT-Action=thumbnail&Width=400.png', 3);

/*~~~~~~~~~~~~~~~~~~~*
    Hoodies Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE hoodies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo VARCHAR(255),
    genderid INTEGER REFERENCES gender(id)
);

INSERT INTO hoodies (name, photo, genderid) VALUES
('Bullet Coaches Jacket', '../../../assets/img/apparel/hoodies/MsBulletCoaches-Action=thumbnail&Width=400.png', 1),
('Bullet Crew', '../../../assets/img/apparel/hoodies/MSCrew-Action=thumbnail&Width=400.png', 1),
('Bullet Eagle Pullover', '../../../assets/img/apparel/hoodies/MsBulletPO-Action=thumbnail&Width=400.png', 1),
('Colorado Eagle Pullover', '../../../assets/img/apparel/hoodies/MSCOPO2-Action=thumbnail&Width=400.png', 1),
('Colorado Eagle Zip', '../../../assets/img/apparel/hoodies/MsCOZip-Action=thumbnail&Width=400.png', 1),
('Eagle Pullover', '../../../assets/img/apparel/hoodies/MsEaglePO-Action=thumbnail&Width=400.png', 1),
('NVR SMR Storm Pullover', '../../../assets/img/apparel/hoodies/MsNVRSMRPO-Action=thumbnail&Width=400.png',1 ),
('Premium Corporate Zip', '../../../assets/img/apparel/hoodies/MsCobraTechZip-Action=thumbnail&Width=400.png', 1),
('Summit Colorado Zip', '../../../assets/img/apparel/hoodies/MsSummit-Action=thumbnail&Width=400.png', 1),
('Womens Colorado Eagle Pullover', '../../../assets/img/apparel/hoodies/WsPOCO-Action=thumbnail&Width=400.png', 2),
('Womens Colorado Eagle Zip', '../../../assets/img/apparel/hoodies/WsCOZip-Action=thumbnail&Width=400.png', 2),
('Womens Vintage Eagle Pullover', '../../../assets/img/apparel/hoodies/WsPO-Action=thumbnail&Width=400.png', 2),
('Boys Colorado Eagle Longsleeve', '../../../assets/img/apparel/hoodies/BsCOLS-Action=thumbnail&Width=400.png', 3),
('Boys Colorado Eagle Pullover', '../../../assets/img/apparel/hoodies/BsBulletPO-Action=thumbnail&Width=400.png', 3);


-- /*~~~~~~~~~~~~~~~~~~~*
--     Hats Table
-- *~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE hats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo VARCHAR(255)
);

INSERT INTO hats (name, photo) VALUES
('Bolts Trucker', '../../../assets/img/apparel/hats/HOtherBolts4-Action=thumbnail&Width=400.png'),
('Bullet Eagle Cap', '../../../assets/img/apparel/hats/HBulletPatch2-Action=thumbnail&Width=400.png'),
('Colorado Cropped Cap', '../../../assets/img/apparel/hats/HCOCrop-Action=thumbnail&Width=400.png'),
('Colorado Patch Cap', '../../../assets/img/apparel/hats/HCOPatch1-Action=thumbnail&Width=400.png'),
('Corporate Silicon Cap', '../../../assets/img/apparel/hats/HCobra2-Action=thumbnail&Width=400.png'),
('NVR SMR Pom Beanie', '../../../assets/img/apparel/hats/BNVRSMRCuff-Action=thumbnail&Width=400.png'),
('NVR SMR Trucker', '../../../assets/img/apparel/hats/HBolts1-Action=thumbnail&Width=400.png'),
('Prospector Sublimation Trucker', '../../../assets/img/apparel/hats/HSublimation3-Action=thumbnail&Width=400.png'),
('Shoreman Cuff Beanie', '../../../assets/img/apparel/hats/BCuff3-Action=thumbnail&Width=400.png'),
('Solid Beanie', '../../../assets/img/apparel/hats/BSolid2-Action=thumbnail&Width=400.png'),
('USA Patch Beanie', '../../../assets/img/apparel/hats/BUSA-Action=thumbnail&Width=400.png'),
('USA Patch Trucker', '../../../assets/img/apparel/hats/HUSA2-Action=thumbnail&Width=400.png');

-- /*~~~~~~~~~~~~~~~~~~~*
--     Accessories Table
-- *~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE accessories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo VARCHAR(255)
);

INSERT INTO accessories (name, photo) VALUES
('Limited Discounted Longboards', '../../../assets/img/apparel/accessories/DISCOUNTEDLBS-Action=thumbnail&Width=400.jpg'),
('NVR SMR Pom Beanie', '../../../assets/img/apparel/accessories/BNVRSMRCuff-Action=thumbnail&Width=400.png'),
('Shoreman Cuff Beanie', '../../../assets/img/apparel/accessories/BCuff3-Action=thumbnail&Width=400.png'),
('Solid Beanie', '../../../assets/img/apparel/accessories/BSolid2-Action=thumbnail&Width=400.png'),
('USA Patch Beanie', '../../../assets/img/apparel/accessories/BUSA-Action=thumbnail&Width=400.png');



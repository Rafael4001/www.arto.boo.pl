import photo1 from '../static/image/photo_1.png';
import photo2 from '../static/image/photo_2_small.jpg';
import photo3 from '../static/image/photo_3_small.jpg';
import photo4 from '../static/image/photo_4_small.jpg';
import logo from '../static/image/logo.png';
import LogoOnTheFlowers from '../static/image/LogoWKwiatach_342x300_nowe.png';
import Lovers from '../static/image/lovers_small.png';
import Bride from '../static/image/icons/bride.svg';
import Smile from '../static/image/icons/smile.svg';
import Music from '../static/image/icons/music.svg';
import Info_Icon from '../static/image/icons/info_icon.svg';
import leaf from '../static/image/icons/leaf.svg';
import facebookPage from '../static/image/icons/facebookPage.svg';
import lublinMap from '../static/image/WojLubelskie.jpg';
import galleryCardPhoto from '../static/image/GalleryCardPhoto.jpeg';
import videoCardPhoto from '../static/image/videoCardPhoto.jpeg';



//==============Songs images===============

import poparzeniKawaTrzy from '../static/image/songsImages/poparzeniKawaTrzy.jpg';
import marcus from '../static/image/songsImages/marcus.jpg';
import powerPLay from '../static/image/songsImages/powerPLay.jpg';
import urszula from '../static/image/songsImages/urszula.jpg';
import dajToGlosniej from '../static/image/songsImages/dajToGlosniej.jpg';
import fanatic from '../static/image/songsImages/fanatic.jpg';
import DefaultSongImage from '../static/image/songsImages/defaultSongImage.jpg';
import lombard from '../static/image/songsImages/lombard.jpg';
import czadoman from '../static/image/songsImages/czadoman.jpg';
import buble from '../static/image/songsImages/buble.jpg';


export const SONGS_IMAGES = {
  DefaultSongImage: DefaultSongImage,
  DAJ_TO_GLOSNIEJ: dajToGlosniej,
  marcus: marcus,
  powerPLay: powerPLay,
  poparzeniKawaTrzy: poparzeniKawaTrzy,
  urszula: urszula,
  Fanatic: fanatic,
  lombard: lombard,
  czadoman: czadoman,
  buble: buble,
};

export const IMAGE_1 = photo1;
export const IMAGE_2 = photo2;
export const IMAGE_3 = photo3;
export const IMAGE_4 = photo4;
export const LOGO = logo;
export const LOGO_ON_THE_FLOWERS = LogoOnTheFlowers;
export const LOVERS = Lovers;
export const BRIDE = Bride;
export const SMILE = Smile;
export const MUSIC = Music;
export const INFO_ICON = Info_Icon;
export const LEAF = leaf;
export const FACEBOOK_PAGE = facebookPage;
export const LUBLIN_MAP = lublinMap;
export const VIDEO_CARD_IMAGE = videoCardPhoto;
export const PHOTO_CARD_IMAGE = galleryCardPhoto;


export const MAX_PAGE_WIDTH = '80rem';


const HOME = 'Home';
const PHOTO = 'Zdjęcia';
const MEDIA = 'Media';
const DEMO = 'Demo';
const OFERTA = 'Oferta';
const KONTAKT = 'Kontakt';
const KALENDARZ = 'Kalendarz';

export const LINKS= {
  HOME: {HREF: './', AS: './'},
  DEMO: {HREF: './demo', AS: './demo'},
  CONTACT: {HREF: './contact', AS: './contact'},
  MEDIA: {HREF: './media', AS: './media'},
  TERMS: {HREF: './terminy', AS: './terminy'},
};

export const MENU_ITEMS = [
  {name: HOME, link: LINKS.HOME.HREF, as: LINKS.HOME.AS },
  {name: DEMO, link: LINKS.DEMO.HREF, as: LINKS.DEMO.AS},
  // {name: PHOTO, link: './photo'},
  // {name: MEDIA, link: LINKS.MEDIA},
  // {name: OFERTA, link: './oferta'},
  // {name: KALENDARZ, link: './kalendarz'},
  {name: KONTAKT, link: LINKS.CONTACT.HREF, as: LINKS.CONTACT.AS},
];

export const MENU_ITEM_WIDTH = 20;


export const COLORS = {
  grey: {
    light: '#F2F2F2',
    medium: '#F5F5F5',
    dark: '#CFCFCF',
    grey_1: '#91919117',
  },
  red: {
    main: '#b41616',
    medium: '#a81b1b',
  },
  blue: {
    main: '#3B5897',
  },
};

export const FACEBOOK = '/static/image/facebook_logo.svg';

export const FACEBOOK_URL = 'https://www.facebook.com/Zesp%C3%B3%C5%82-ARTO-203075696487749/';
export const RAFAL_CIESIELCZUK_LINKED_IN = 'https://www.linkedin.com/in/rafa%C5%82-ciesielczuk-33578391/';

export const MARGIN_TOP_UNDER_MENU= '4rem';

export const SCREEN_SIZE={
  POINT_750: 750,
};

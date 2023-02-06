import Category from '../models/category';
import Users from '../models/users';
import Request from '../models/request';
import Demand from '../models/demand';
import Image from '../models/images';
import Link from '../models/link';

export const LINKS = [
    new Link('https://getwallpapers.com/wallpaper/full/5/a/e/74906.jpg'),
    new Link('https://yesofcorsa.com/wp-content/uploads/2019/05/4K-Landscape-Scenery-Wallpaper-HQ.jpg'),
    new Link('https://www.4kwallpaperhd.com/wp-content/uploads/2018/06/Colorado-Landscape-nature-4k-wallpaper-3840x2160.jpg'),
    new Link('https://cdn.wallpapersafari.com/57/34/uJFrUS.jpg'),
    new Link('https://getwallpapers.com/wallpaper/full/7/7/0/74728.jpg'),
    new Link('https://www.pixel4k.com/wp-content/uploads/2020/10/forest-landscape-mountain-nature-river-scenic-4k_1602606154.jpg'),
    new Link('https://getwallpapers.com/wallpaper/full/0/a/0/74794.jpg'),
    new Link('https://hdqwalls.com/wallpapers/wonderful-landscape-4k-5p.jpg'),
    new Link('https://getwallpapers.com/wallpaper/full/5/0/6/74883.jpg'),
    new Link('https://yesofcorsa.com/wp-content/uploads/2019/05/4K-Landscape-Scenery-Image.jpg'),
]

export const IMAGES = [
    new Image('c1', require('./images/1.jpeg'), 0),
    new Image('c2', require('./images/2.jpeg'), 1),
    new Image('c3', require('./images/3.jpeg'), 2),
    new Image('c4', require('./images/4.jpeg'), 3),
    new Image('c5', require('./images/5.jpeg'), 4),
    new Image('c6', require('./images/6.jpeg'), 5),
    new Image('c7', require('./images/7.jpeg'), 6),
    new Image('c8', require('./images/8.jpeg'), 7),
    new Image('c9', require('./images/9.jpeg'), 8),
    new Image('c10', require('./images/10.jpeg'), 9),
    new Image('c11', require('./images/11.jpeg'), 10),
    new Image('c12', require('./images/12.jpeg'), 11),
];

export const USERS = [
    new Users('u1', 'Nicolas Sartral'),
    new Users('u2', 'Annabelle Sartral'),
    new Users('u3', 'Matthieu Sartral'),
    new Users('u4', 'Aurelien Jeanpetit'),
    new Users('u5', 'Simon Guichard'),
    new Users('u6', 'Narvalo Ghetto'),
    new Users('u7', 'Lesram Rapzer'),
    new Users('u8', 'Coucou Lehiboux'),
    new Users('u9', 'Jean Valjean'),
];

export const REQUESTS = [
    new Request('u1', 'Nicolas Sartral'),
    new Request('u2', 'Annabelle Sartral'),
    new Request('u3', 'Matthieu Sartral'),
    new Request('u4', 'Aurelien Jeanpetit'),
    new Request('u5', 'Simon Guichard'),
    new Request('u6', 'Narvalo Ghetto'),
    new Request('u7', 'Lesram Rapzer'),
    new Request('u8', 'Coucou Lehiboux'),
    new Request('u9', 'Jean Valjean'),
];

export const DEMANDS = [
    new Demand('u1', 'Sartral Nicolas'),
    new Demand('u2', 'Sartral Matthieu'),
    new Demand('u3', 'Sartral Annabelle'),
    new Demand('u4', 'Taiel Magali'),
    new Demand('u5', 'Taiel Bertrand'),
    new Demand('u6', 'Varastet Marina'),
];

import Category from '../models/category';
import Users from '../models/users';
import Request from '../models/request';
import Demand from '../models/demand';
import Image from '../models/images';

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Quick & Easy', '#f54242'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c4', 'German', '#f5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Asian', '#b9ffb0'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c10', 'Summer', '#47fced'),
];

export const CATEGORIESZER = [
    new Category('c2', 'Quick & Easy', '#f54242'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c10', 'Summer', '#47fced'),
    new Category('c8', 'Asian', '#b9ffb0'),
    new Category('c4', 'German', '#f5d142'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c5', 'Light & Lovely', '#368dff'),
];

export const IMAGES = [
    new Image('c1', require('./images/1.jpeg')),
    new Image('c2', require('./images/2.jpeg')),
    new Image('c3', require('./images/3.jpeg')),
    new Image('c4', require('./images/4.jpeg')),
    new Image('c5', require('./images/5.jpeg')),
    new Image('c6', require('./images/6.jpeg')),
    new Image('c7', require('./images/7.jpeg')),
    new Image('c8', require('./images/8.jpeg')),
    new Image('c9', require('./images/9.jpeg')),
    new Image('c10', require('./images/10.jpeg')),
    new Image('c11', require('./images/11.jpeg')),
    new Image('c12', require('./images/12.jpeg')),
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

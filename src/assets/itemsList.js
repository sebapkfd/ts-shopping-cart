import Aspire from './thumbnails/Acer-Aspire5.jpg';
import TUF from './thumbnails/Asus-TUF.jpg';
import GL from './thumbnails/MSI-GL65.jpg'
import ROG from './thumbnails/Asus-ROG.jpg'
import Creator from './thumbnails/MSI-Creator15.jpg';
import Blade from './thumbnails/Razer-Blade.jpg';
import GE from './thumbnails/MSI-GE66.jpg';
import Predator from './thumbnails/Acer-Predator.jpg';
import Ultra from './thumbnails/LG-Ultra.jpg';
import Nitro from './thumbnails/Acer-Nitro.jpg';
import VivoBook from './thumbnails/Asus-VivoBook.jpg';
import ZenBook from './thumbnails/Asus-ZenBook.jpg';

export const itemsList = [
    {
        name: 'Acer Aspire 5',
        brand: 'Acer',
        price: 668,
        id: '1',
        amount: 0,
        imgSrc: Aspire,
        cpu: 'i5-1035G1',
        ram: 8,
        ramType: 'DDR4',
        storage: 256,
        storageType: 'SSD',
        rating: 7,
        sold: 0,
        stock: 3,
        shipping: true,
        pickUp: false
    },
    {
        name: 'Asus TUF',
        brand: 'Asus',
        price: 867,
        id: '2',
        amount: 0,
        imgSrc: TUF,
        cpu: 'i5-10300H',
        ram: 16,
        ramType: 'DDR4',
        storage: 1024,
        storageType: 'SSD',
        rating: 7,
        sold: 2,
        stock: 1,
        shipping: true,
        pickUp: true
    },
    {
        name: 'MSI GL65',
        brand: 'MSI',
        price: 1399,
        id: '3',
        amount: 0,
        imgSrc: GL,
        cpu: 'i7-10750H',
        ram: 16,
        ramType: 'DDR4',
        storage: 512,
        storageType: 'SSD',
        rating: 7,
        sold: 0,
        stock: 3,
        shipping: true,
        pickUp: true
    },
    {
        name: 'Asus ROG',
        brand: 'Asus',
        price: 1499,
        id: '4',
        amount: 0,
        imgSrc: ROG,
        cpu: 'i7-10750H',
        ram: 16,
        ramType: 'DDR4',
        storage: 1024,
        storageType: 'SSD',
        rating: 8,
        sold: 3,
        stock: 1,
        shipping: false,
        pickUp: true
    },
    {
        name: 'MSI Creator 15',
        brand: 'MSI',
        price: 1879,
        id: '5',
        amount: 0,
        imgSrc: Creator,
        cpu: 'i7-10875H',
        ram: 32,
        ramType: 'DDR4',
        storage: 1024,
        storageType: 'SSD',
        rating: 8,
        sold: 3,
        stock: 0,
        shipping: false,
        pickUp: false
    },
    {
        name: 'Razer Blade 13',
        brand: 'Razer',
        price: 1699,
        id: '6',
        amount: 0,
        imgSrc: Blade,
        cpu: 'i7-1165G7',
        ram: 16,
        ramType: 'DDR4',
        storage: 512,
        storageType: 'SSD',
        rating: 9,
        sold: 4,
        stock: 1,
        shipping: true,
        pickUp: true
    },
    {
        name: 'MSI GE66',
        brand: 'MSI',
        price: 2649,
        id: '7',
        amount: 0,
        imgSrc: GE,
        cpu: 'i7-10875H',
        ram: 32,
        ramType: 'DDR4',
        storage: 1024,
        storageType: 'SSD',
        rating: 9,
        sold: 1,
        stock: 1,
        shipping: false,
        pickUp: true
    },
    {
        name: 'Acer Predator',
        brand: 'Acer',
        price: 1629,
        id: '8',
        amount: 0,
        imgSrc: Predator,
        cpu: 'i7-9750H',
        ram: 16,
        ramType: 'DDR4',
        storage: 512,
        storageType: 'SSD',
        rating: 8,
        sold: 0,
        stock: 3,
        shipping: true,
        pickUp: true
    },
    {
        name: 'LG Ultra',
        brand: 'LG',
        price: 1279,
        id: '9',
        amount: 0,
        imgSrc: Ultra,
        cpu: 'i7-10510U',
        ram: 16,
        ramType: 'DDR4',
        storage: 512,
        storageType: 'SSD',
        rating: 6,
        sold: 1,
        stock: 5,
        shipping: true,
        pickUp: true
    },
    {
        name: 'Acer Nitro 5',
        brand: 'Acer',
        price: 999,
        id: '10',
        amount: 0,
        imgSrc: Nitro,
        cpu: 'i5-9300H',
        ram: 8,
        ramType: 'DDR4',
        storage: 256,
        storageType: 'SSD',
        rating: 8,
        sold: 4,
        stock: 2,
        shipping: false,
        pickUp: true
    },
    {
        name: 'Asus VivoBook',
        brand: 'Asus',
        price: 639,
        id: '11',
        amount: 0,
        imgSrc: VivoBook,
        cpu: 'i5-1035G1',
        ram: 8,
        ramType: 'DDR4',
        storage: 512,
        storageType: 'SSD',
        rating: 8,
        sold: 2,
        stock: 1,
        shipping: true,
        pickUp: true
    },
    {
        name: 'Asus ZenBook',
        brand: 'Asus',
        price: 1999,
        id: '12',
        amount: 0,
        imgSrc: ZenBook,
        cpu: 'i7-9750H',
        ram: 16,
        ramType: 'DDR4',
        storage: 1024,
        storageType: 'SSD',
        rating: 9,
        sold: 2,
        stock: 2,
        shipping: true,
        pickUp: true
    }
];

export const itemsBrands = [...new Set(itemsList.map(item => item.brand))].map(brand => {
    return {
        brand, amount: itemsList.reduce((acc, cv) => (cv.brand === brand) ? acc + 1 : acc, 0)
    }
})

export const itemsRam = [...new Set(itemsList.map(item => item.ram))].sort((a,b) => a - b).map(ram => {
    return {
        ram, amount: itemsList.reduce((acc, cv) => (cv.ram >= ram) ? acc + 1 : acc, 0)
    }
})

export const itemsStorage = [...new Set(itemsList.map(item => item.storage))].sort((a,b) => a - b).map(storage => {
    return {
        storage, amount: itemsList.reduce((acc, cv) => (cv.storage >= storage) ? acc + 1 : acc, 0)
    }
})
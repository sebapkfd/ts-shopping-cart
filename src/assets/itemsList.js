import Aspire from './Acer-Aspire5.jpg';
import TUF from './Asus-TUF.jpg';
import GL from './MSI-GL65.jpg'
import ROG from './Asus-ROG.jpg'
import Creator from './MSI-Creator15.jpg';
import Blade from './Razer-Blade.jpg';
import GE from './MSI-GE66.jpg';
import Predator from './Acer-Predator.jpg';
import Ultra from './LG-Ultra.jpg';
import Nitro from './Acer-Nitro.jpg';
import VivoBook from './Asus-VivoBook.jpg';
import ZenBook from './Asus-ZenBook.jpg';

const itemsList = [
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
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
        storageType: 'SSD'
    }
];


export const itemsBrands = [...new Set(itemsList.map(item => item.brand))];

export const itemsRam = [...new Set(itemsList.map(item => item.ram))].sort((a,b) => a - b);

export const itemsStorage = [...new Set(itemsList.map(item => item.storage))].sort((a,b) => a - b);

export default itemsList;
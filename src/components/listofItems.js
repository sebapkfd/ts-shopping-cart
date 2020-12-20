import uniqid from 'uniqid';
import Aspire from '../assets/Acer-Aspire5.jpg';
import TUF from '../assets/Asus-TUF.jpg';
import GL from '../assets/MSI-GL65.jpg'
import ROG from '../assets/Asus-ROG.jpg'
import Creator from '../assets/MSI-Creator15.jpg';
import Blade from '../assets/Razer-Blade.jpg';
import GE from '../assets/MSI-GE66.jpg';
import Predator from '../assets/Acer-Predator.jpg';
import Ultra from '../assets/LG-Ultra.jpg';

const listofItems = [
    {name: 'Acer Aspire 5',
    price: 668,
    id: uniqid(),
    amount: 0,
    imgSrc: Aspire
    },
    {name: 'Asus TUF',
    price: 749,
    id: uniqid(),
    amount: 0,
    imgSrc: TUF
    },
    {name: 'MSI GL65',
    price: 1399,
    id: uniqid(),
    amount: 0,
    imgSrc: GL
    },
    {name: 'Asus ROG',
    price: 1499,
    id: uniqid(),
    amount: 0,
    imgSrc: ROG
    },
    {name: 'MSI Creator 15',
    price: 1879,
    id: uniqid(),
    amount: 0,
    imgSrc: Creator
    },
    {name: 'Razer Blade 13',
    price: 1699,
    id: uniqid(),
    amount: 0,
    imgSrc: Blade
    },
    {name: 'MSI GE66',
    price: 2649,
    id: uniqid(),
    amount: 0,
    imgSrc: GE
    },
    {name: 'Acer Predator',
    price: 1629,
    id: uniqid(),
    amount: 0,
    imgSrc: Predator
    },
    {name: 'LG Ultra',
    price: 1279,
    id: uniqid(),
    amount: 0,
    imgSrc: Ultra
    }
]
export default listofItems;
import imageOne from '@/../public/assets/images/pocetna.jpg';
import imageTwo from '@/../public/assets/images/aparati.jpg';
import imageThree from '@/../public/assets/images/radni-stol.jpg';
import imageFour from '@/../public/assets/images/servis.jpg';

export const images: any[] = [imageOne, imageTwo, imageThree, imageFour];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;

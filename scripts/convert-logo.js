
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_PATH = path.join(__dirname, '../public/images/logo-enso-optimized.png');
const OUTPUT_PATH = path.join(__dirname, '../public/images/logo-enso-optimized.webp');

sharp(INPUT_PATH)
    .webp({ quality: 80 })
    .toFile(OUTPUT_PATH)
    .then(info => {
        console.log('Logo converted successfully:', info);
    })
    .catch(err => {
        console.error('Error converting logo:', err);
    });

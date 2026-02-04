
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
    { input: 'public/images/hero-store.jpg', output: 'public/images/hero-store-v2.webp' },
    { input: 'public/images/hero-store-mobile.jpg', output: 'public/images/hero-store-v2-mobile.webp' }
];

async function convert() {
    for (const img of images) {
        try {
            console.log(`Converting ${img.input} to ${img.output}...`);
            await sharp(img.input)
                .webp({ quality: 75 }) // Lower quality for smaller size, 75 is usually good balance. Try lower if needed.
                .toFile(img.output);

            const originalStats = fs.statSync(img.input);
            const newStats = fs.statSync(img.output);
            console.log(`Success! ${img.output} created.`);
            console.log(`Original size: ${(originalStats.size / 1024).toFixed(2)} KB`);
            console.log(`New size: ${(newStats.size / 1024).toFixed(2)} KB`);

        } catch (err) {
            console.error(`Error converting ${img.input}:`, err);
        }
    }
}

convert();

import {ImagePool} from '@squoosh/lib';
import {cpus} from 'os';

const formats = ['.png', '.jpeg', '.jpg']
const imagePool = new ImagePool(cpus().length);
import {resolve, dirname, extname} from "path";
import {fileURLToPath} from "url";
import {readdirSync, readFileSync, writeFile} from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url))

const encodeOptions = {
    webp: {
        quality: 95
    },
    avif: {
        cqLevel: 3
    },
}
const files = []
const getFiles = (dirPath) => {
    const entries = readdirSync(dirPath, {withFileTypes: true})

    entries.forEach((entry) => {
        const fullPath = resolve(dirPath, entry.name)
        if (entry.isDirectory()) {
            files.concat(getFiles(fullPath))
        }
        if (formats.includes(extname(entry.name))) {
            files.push({path: fullPath, buffer: readFileSync(fullPath)})
        }
    })
    return files
}

const images = getFiles(resolve(__dirname, './public/img'));


const run = async () => {
    for (const image of images) {
        const imageExtName = extname(image.path)
        if (imageExtName) {
            const imageWithOutExtName = image.path.split(imageExtName).join('')

            const targetImage = imagePool.ingestImage(image.buffer);
            await targetImage.encode(encodeOptions)
            for (const encodedImage of Object.values(targetImage.encodedWith)) {
                writeFile(`${imageWithOutExtName}.${encodedImage.extension}`, encodedImage.binary, () => {
                    console.info(`Image path: ${imageWithOutExtName}.${encodedImage.extension}`)
                });
            }
        }
    }
}

await run()
imagePool.close();


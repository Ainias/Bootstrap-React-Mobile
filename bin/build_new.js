const path = require('path');
const fs = require('fs');

const tmpFile = './tmp/script.js';

function findNames(dir, excluded) {
    let names = {};
    if (excluded.includes(dir)) {
        return names;
    }

    let files = fs.readdirSync(dir);
    files.forEach((file) => {
        let stats = fs.statSync(dir + file);
        if (stats.isDirectory()) {
            let nameObject = findNames(dir + file + '/', excluded);
            names = Object.assign(names, nameObject);
        } else if (file.endsWith('.d.ts') && !excluded.includes(dir + file)) {
            return;
        } else if (file.endsWith('.ts') && !excluded.includes(dir + file)) {
            names[file.substring(0, file.length - 3)] = dir + file.substring(0, file.length - 3);
        } else if ((file.endsWith('.mjs') || file.endsWith('.tsx')) && !excluded.includes(dir + file)) {
            names[file.substring(0, file.length - 4)] = dir + file.substring(0, file.length - 4);
        }
    });
    return names;
}

async function buildEntryPoints(fileOption, target) {
    const cutLengthFront = 0;

    target = target || tmpFile;

    const resultDir = path.resolve(process.cwd(), path.dirname(target));

    let names = {};
    fileOption.input.forEach((dir) => {
        Object.assign(names, findNames(dir + '/', []));
    });
    console.log('LOG names', names);

    let imports = '';
    for (let k in names) {
        imports +=
            'import {' +
            k +
            "} from './" +
            path.relative(resultDir, path.resolve(process.cwd(), names[k].substring(cutLengthFront))) +
            "';\n";
    }

    let exports = '\nexport {' + Object.keys(names).join(' , ') + '};';

    if (!fs.existsSync(resultDir)) {
        fs.mkdirSync(resultDir);
    }
    fs.writeFileSync(target, imports + exports);
}

buildEntryPoints(
    {
        input: [path.resolve(process.cwd(), 'src/')],
    },
    './dist/bootstrapReactMobile.ts'
);

const c = [
    'asfd',
    [
        'asfd',
        [
            'd.jpg',
            'e.jpg'
        ],
        'c.txt'
    ],
    'z.zzz',
    [
        'f.png',
        [
            [
                'asfd',
                'asfd',
                [
                    'wow'
                ],
                'asfd',
                'asfd',
            ],
            'dasf'
        ],
        'g.png',
        'i.png'
    ],
    [
        [
            'j.exe',
            'o.exe'
        ],
        [
            'index.html',
            'logo.png'
        ]
    ],
    'a.txt',
    'b.txt'
];

function disk(data) {
    let HTML = '<ol>';
    for (let item of data) {
        if (typeof item === 'string') {
            // console.log('FILE:', item);
            HTML += '<li>' + item + '</li>';
        } else {
            // console.log('FOLDER:');
            HTML += disk(item);
        }
    }
    HTML += '</ol>';
    return HTML;
}

const fullHTML = disk(c);

console.log(fullHTML);
document.querySelector('body').innerHTML = fullHTML;
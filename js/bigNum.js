const nums = [
    2,
    101,
    'sad',
    8,
    [
        16,
        true,
        false,
        99
    ],
    7,
    [
        [
            NaN,
            null,
            [
                999,
                'adsdf',
                [
                    [
                        Infinity,
                        [
                            [88, 888]
                        ]
                    ]
                ]
            ],
            {
                a: 8888888
            }
        ],
        -9
    ],
    100
];

const fail = [
    'asfd',
    true,
    Infinity,
    []
];

function big(data) {
    let biggest = -Infinity;

    if (Array.isArray(data)) {
        for (let item of data) {
            if (typeof item === 'number' &&
                isFinite(item)) {
                if (biggest < item) {
                    biggest = item;
                }
            } else
                if (Array.isArray(item)) {
                    const rez = big(item);
                    if (rez > biggest) {
                        biggest = rez;
                    }
                }
        }
    }

    return biggest;
}

console.log(big(fail));
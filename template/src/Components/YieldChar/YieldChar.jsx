import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Line} from '@ant-design/plots';

const YieldChar = () => {
    const data = [
        {
            "Date": "2010-01",
            "scales": 1998
        },
        {
            "Date": "2010-02",
            "scales": 1850
        },
        {
            "Date": "2010-03",
            "scales": 1720
        },
        {
            "Date": "2010-04",
            "scales": 1818
        },
        {
            "Date": "2010-05",
            "scales": 1920
        },
        {
            "Date": "2010-06",
            "scales": 1802
        },
        {
            "Date": "2010-07",
            "scales": 1945
        },
        {
            "Date": "2010-08",
            "scales": 1856
        },
        {
            "Date": "2010-09",
            "scales": 2107
        },
        {
            "Date": "2010-10",
            "scales": 2140
        },
        {
            "Date": "2010-11",
            "scales": 2311
        },
        {
            "Date": "2010-12",
            "scales": 1972
        },
        {
            "Date": "2011-01",
            "scales": 1760
        },
        {
            "Date": "2011-02",
            "scales": 1824
        },
        {
            "Date": "2011-03",
            "scales": 1801
        },
        {
            "Date": "2011-04",
            "scales": 2001
        },
        {
            "Date": "2011-05",
            "scales": 1640
        },
        {
            "Date": "2011-06",
            "scales": 1502
        },
        {
            "Date": "2011-07",
            "scales": 1621
        },
        {
            "Date": "2011-08",
            "scales": 1480
        },
        {
            "Date": "2011-09",
            "scales": 1549
        },
        {
            "Date": "2011-10",
            "scales": 1390
        },
        {
            "Date": "2011-11",
            "scales": 1325
        },
        {
            "Date": "2011-12",
            "scales": 1250
        },
        {
            "Date": "2012-01",
            "scales": 1394
        },
        {
            "Date": "2012-02",
            "scales": 1406
        },
        {
            "Date": "2012-03",
            "scales": 1578
        },
        {
            "Date": "2012-04",
            "scales": 1465
        },
        {
            "Date": "2012-05",
            "scales": 1689
        },
        {
            "Date": "2012-06",
            "scales": 1755
        },
        {
            "Date": "2012-07",
            "scales": 1495
        },
        {
            "Date": "2012-08",
            "scales": 1508
        },
        {
            "Date": "2012-09",
            "scales": 1433
        },
        {
            "Date": "2012-10",
            "scales": 1344
        },
        {
            "Date": "2012-11",
            "scales": 1201
        },
        {
            "Date": "2012-12",
            "scales": 1465
        },
        {
            "Date": "2013-01",
            "scales": 1234
        },
        {
            "Date": "2013-02",
            "scales": 1234
        },
        {
            "Date": "2013-03",
            "scales": 1234
        },
        {
            "Date": "2013-04",
            "scales": 1234
        },
        {
            "Date": "2013-05",
            "scales": 1234
        },
        {
            "Date": "2013-06",
            "scales": 1688
        },
        {
            "Date": "2013-07",
            "scales": 1500
        },
        {
            "Date": "2013-08",
            "scales": 1670
        },
        {
            "Date": "2013-09",
            "scales": 1734
        },
        {
            "Date": "2013-10",
            "scales": 1699
        },
        {
            "Date": "2013-11",
            "scales": 1508
        },
        {
            "Date": "2013-12",
            "scales": 1680
        },
        {
            "Date": "2014-01",
            "scales": 1750
        },
        {
            "Date": "2014-02",
            "scales": 1602
        },
        {
            "Date": "2014-03",
            "scales": 1834
        },
        {
            "Date": "2014-04",
            "scales": 1722
        },
        {
            "Date": "2014-05",
            "scales": 1430
        },
        {
            "Date": "2014-06",
            "scales": 1280
        },
        {
            "Date": "2014-07",
            "scales": 1367
        },
        {
            "Date": "2014-08",
            "scales": 1155
        },
        {
            "Date": "2014-09",
            "scales": 1289
        },
        {
            "Date": "2014-10",
            "scales": 1104
        },
        {
            "Date": "2014-11",
            "scales": 1246
        },
        {
            "Date": "2014-12",
            "scales": 1098
        },
        {
            "Date": "2015-01",
            "scales": 1189
        },
        {
            "Date": "2015-02",
            "scales": 1276
        },
        {
            "Date": "2015-03",
            "scales": 1033
        },
        {
            "Date": "2015-04",
            "scales": 956
        },
        {
            "Date": "2015-05",
            "scales": 1056
        },
        {
            "Date": "2015-06",
            "scales": 1089
        },
        {
            "Date": "2015-07",
            "scales": 1231
        },
        {
            "Date": "2015-08",
            "scales": 1290
        },
        {
            "Date": "2015-09",
            "scales": 1199
        },
        {
            "Date": "2015-10",
            "scales": 1309
        },
        {
            "Date": "2015-11",
            "scales": 1387
        },
        {
            "Date": "2015-12",
            "scales": 1466
        },
        {
            "Date": "2016-01",
            "scales": 1509
        },
        {
            "Date": "2016-02",
            "scales": 1501
        },
        {
            "Date": "2016-03",
            "scales": 1608
        },
        {
            "Date": "2016-04",
            "scales": 1503
        },
        {
            "Date": "2016-05",
            "scales": 1678
        },
        {
            "Date": "2016-06",
            "scales": 1789
        },
        {
            "Date": "2016-07",
            "scales": 1645
        },
        {
            "Date": "2016-08",
            "scales": 1803
        },
        {
            "Date": "2016-09",
            "scales": 1856
        },
        {
            "Date": "2016-10",
            "scales": 1799
        },
        {
            "Date": "2016-11",
            "scales": 1878
        },
        {
            "Date": "2016-12",
            "scales": 1901
        },
        {
            "Date": "2017-01",
            "scales": 1789
        },
        {
            "Date": "2017-02",
            "scales": 2000
        }
    ]
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        annotations: [
            // 低于中位数颜色变化

            {
                type: 'regionFilter',
                start: ['min', 'min'],
                end: ['max', 1100],
                color: '#F4664A',
            },
            {
                type: 'line',
                start: ["min", 1090],
                end: ['max', 1090],
                style: {
                    stroke: '#F4664A',
                    lineDash: [5, 5],
                },
            },
            {
                type: 'line',
                start: ['2014-06', 'min'],
                end: ['2014-06', 'max'],
                style: {
                    stroke: '#b04af4',
                    lineDash: [5, 5],
                },
            },
            // Аннотация для текста
            {
                type: 'text',
                position: ['2015-06', 'max'],
                content: 'Vertical Line',
                offsetX: 10,
                offsetY: -10,
                style: {
                    textAlign: 'start',
                    textBaseline: 'bottom',
                },
            },
            {
                type: 'line',
                start: [1000, "max"],
                end: [3000, 1090],
                style: {
                    stroke: '#b04af4',
                    lineDash: [5, 5],
                },
            },
            {
                type: 'text',
                position: ['min', 'median'],
                content: 'Необходимый минимум',
                offsetY: 65,
                style: {
                    textBaseline: 'bottom',
                },
            },
            // Цвет для второй половины графика (выше определенного значения)
            {
                type: 'regionFilter',
                start: ['min', 1100],
                end: ['max', 'max'],
                color: '#2FC25B',
            },

        ],
    };

    return <Line {...config} />;
};

export default YieldChar;
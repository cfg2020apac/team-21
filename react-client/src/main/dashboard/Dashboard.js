import React from 'react';
import { VegaLite } from 'react-vega';
const spec = {
    width: 400,
    height: 200,
    mark: 'bar',
    encoding: {
        x: { field: 'Social Cause Impacted', type: 'ordinal' },
        y: { field: 'Number of Events in the Last Year', type: 'quantitative' },
    },
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
}

const spec1 = {
    width: 400,
    height: 200,
    mark: 'bar',
    encoding: {
        x: { field: 'Location', type: 'ordinal' },
        y: { field: 'Number of Events in the Location Annually', type: 'quantitative' },
    },
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
}

const pie_spec = {
    mark: 'arc',
    encoding: {
        "theta": {"field": "value", "type": "quantitative"},
        "color": {"field": "Language", "type": "nominal"}
    },
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
    "view": {"stroke":null}
}

const barData = {
    table: [
        { a: 'Hunger & homelessness', b: 146 },
        { a: 'Elderly', b: 77 },
        { a: 'Environmental education; Hunger & homelessness', b: 47 },
        { a: 'Animals', b: 43 },
        { a: 'Children and youth; Elderly; Hunger & homelessness', b: 36 },
        { a: 'Children and youth; People with disabilities', b: 21 },
        { a: 'Environmental education', b: 14 },
        { a: 'Hungers and homeless', b: 14 },
        { a: 'Children and youth', b: 13 },
        {a:'People with disabilities; People with mental illness', b: 12},
        {a: 'Children and youth; Environmental education', b:11},
        {a:'Integrated', b:7},
        {a:'Elderly; People with illness', b:6},
        {a:'Children and youth; Ethnic minorities',b:4},
        {a:'Children and youth; Ethnic minorities', b:2},
        {a:'Women', b:2},
        {a:'Environmental education; Integrated', b:2},
        {a:'Adults; Children and youth; Elderly', b:2},
        {a:'Environmental education; Women', b:1},
        {a:'Adults; Elderly; Environmental education',b:1},
        {a:'Children and youth; Refugees and asylum seekers', b:1},
        {a:'Refugees and asylum seekers', b:1},
        {a:'Adults; Children and youth; Elderly; People with disabilities', b:1},
        {a:'People with mental illness', b:1}

    ],
}

const barData1 = {
    table: [
        { a: 'Yuen Long', b: 32 },
        { a: 'North', b: 66 },
        { a: 'Tai Po', b: 142 },
        { a: 'Central & Western', b: 50 },
        { a: 'Kowloon City', b: 171 },
        { a: 'Islands', b: 119 },
        { a: 'Sha Tin', b: 56 },
        { a: 'Sham Shui Po', b: 118 },
        { a: 'Kwai Tsing', b: 86 },
        {a:'Sai Kung', b: 72},
        {a: 'Wong Tai Sin', b:97},
        {a:'Yau Tsim Mong', b:88},
        {a:'Tsuen Mun', b:72},
        {a:'Southern' ,b:91},
        {a:'Kwun Tong', b:57},
        {a:'Wan Chai', b:31},
        {a:'Eastern', b:60}

    ],
}


const pieData = {
    table: [
        {"Language": "English", "value": 39},
        {"Language": "Mandarin", "value": 23},
        {"Language": "Cantonese", "value": 28}
    ],
}

export default function Dashboard() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2><VegaLite spec={spec} data={barData} /></h2>
<<<<<<< HEAD
                    <h2><VegaLite spec={spec} data={barData1} /></h2>
=======
                    <h2><VegaLite spec={spec1} data={barData1} /></h2>
>>>>>>> f60207f069d7677635016849431fa7b9a12cbf5a
                    <h2><VegaLite spec={pie_spec} data={pieData} /></h2>
                </div>
            </div>
        </div>
    );
}
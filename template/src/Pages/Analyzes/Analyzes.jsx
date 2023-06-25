import {Calendar, DatePicker, Space, Table} from 'antd';
import {Typography} from "antd";
import moment from 'moment';
import {useState} from "react";

const {Text, Title} = Typography
const data = [
    {
        key: '1',
        date: '2023-06-01',
        chemicalAnalysis: {
            acidity: 6.5,
            pH: 3.2,
            sugarContent: 22,
            nitrogenRatio: 0.8,
            ironContent: 0.05,
        },
        physicalAnalysis: {
            grapeWeight: 500,
            berrySize: 'Средний',
            berryColor: 'Красный',
            juiceContent: 75,
        },
        microbiologicalAnalysis: {
            yeastContent: 'Норма',
            bacteriaContent: 'Отсутствуют',
        },
        aromaProfile: 'Фруктовый',
        tasteProfile: 'Сладкий',
        colorProfile: 'Красный',
        grapeVariety: 'Мерло',
    },
    {
        key: '2',
        date: '2023-06-02',
        chemicalAnalysis: {
            acidity: 7.2,
            pH: 3.4,
            sugarContent: 20,
            nitrogenRatio: 0.7,
            ironContent: 0.06,
        },
        physicalAnalysis: {
            grapeWeight: 480,
            berrySize: 'Крупный',
            berryColor: 'Белый',
            juiceContent: 80,
        },
        microbiologicalAnalysis: {
            yeastContent: 'Повышенный',
            bacteriaContent: 'Присутствуют',
        },
        aromaProfile: 'Цветочный',
        tasteProfile: 'Сухой',
        colorProfile: 'Белый',
        grapeVariety: 'Шардоне',
        origin: 'Италия',
    },
    {
        key: '3',
        date: '2023-06-03',
        chemicalAnalysis: {
            acidity: 6.8,
            pH: 3.3,
            sugarContent: 25,
            nitrogenRatio: 0.9,
            ironContent: 0.04,
        },
        physicalAnalysis: {
            grapeWeight: 520,
            berrySize: 'Маленький',
            berryColor: 'Фиолетовый',
            juiceContent: 70,
        },
        microbiologicalAnalysis: {
            yeastContent: 'Норма',
            bacteriaContent: 'Отсутствуют',
        },
        aromaProfile: 'Пряный',
        tasteProfile: 'Гармоничный',
        colorProfile: 'Фиолетовый',
        grapeVariety: 'Сира',
        origin: 'Австралия',
    },
];


const columnsChemical = [
    {title: 'Уровень кислотности', dataIndex: 'acidity', key: 'acidity'},
    {title: 'Уровень pH', dataIndex: 'pH', key: 'pH'},
    {title: 'Содержание сахара', dataIndex: 'sugarContent', key: 'sugarContent'},
    {title: 'Коэффициенты азота', dataIndex: 'nitrogenRatio', key: 'nitrogenRatio'},
    {title: 'Содержание железа', dataIndex: 'ironContent', key: 'ironContent'},
];

const columnsPhysical = [
    {title: 'Вес кисти винограда', dataIndex: 'grapeWeight', key: 'grapeWeight'},
    {title: 'Размер ягоды', dataIndex: 'berrySize', key: 'berrySize'},
    {title: 'Цвет ягоды', dataIndex: 'berryColor', key: 'berryColor'},
    {title: 'Содержание сока', dataIndex: 'juiceContent', key: 'juiceContent'},
];

const columnsMicrobiological = [
    {title: 'Содержание дрожжей', dataIndex: 'yeastContent', key: 'yeastContent'},
    {title: 'Содержание бактерий', dataIndex: 'bacteriaContent', key: 'bacteriaContent'},
];

const rest = [
    {title: 'Профиль аромата', dataIndex: 'aromaProfile', key: 'aromaProfile'},
    {title: 'Профиль вкуса', dataIndex: 'tasteProfile', key: 'tasteProfile'},
    {title: 'Сорт винограда', dataIndex: 'grapeVariety', key: 'grapeVariety'},
]

const chemicalTableData = data.map(item => ({
    key: item.key,
    acidity: item.chemicalAnalysis.acidity || '',
    pH: item.chemicalAnalysis.pH || '',
    sugarContent: item.chemicalAnalysis.sugarContent || '',
    nitrogenRatio: item.chemicalAnalysis.nitrogenRatio || '',
    ironContent: item.chemicalAnalysis.ironContent || '',
}));

const physicalTableData = data.map(item => ({
    key: item.key,
    grapeWeight: item.physicalAnalysis.grapeWeight || '',
    berrySize: item.physicalAnalysis.berrySize || '',
    berryColor: item.physicalAnalysis.berryColor || '',
    juiceContent: item.physicalAnalysis.juiceContent || '',
}));

const microbiologicalTableData = data.map(item => ({
    key: item.key,
    yeastContent: item.microbiologicalAnalysis.yeastContent || '',
    bacteriaContent: item.microbiologicalAnalysis.bacteriaContent || '',
}));

const restTableData = data.map(item => ({
    key: item.key,
    aromaProfile: item.aromaProfile || "",
    tasteProfile: item.tasteProfile || "",
    grapeVariety: item.grapeVariety || "",
}))

const Analyzes = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleClick = (date, dateString) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        console.log(formattedDate);
    };

    const gridContainerStyles = {
        display: 'grid',
        gridTemplateColumns: "1fr, 1fr",
        padding: 20,
        rowGap: '32px',
        columnGap: '32px',
        gridTemplateAreas: "" +
            "time ." +
            "analyzes analyzes" +
            "analyzes analyzes"
    };

    return (
        <Space size={32} style={gridContainerStyles}>
            <DatePicker
                style={{width: 200, gridArea: "time"}}
                placeholder={"Выберите дату анализа"}
                onChange={handleClick}
            />
            <div style={{gridArea: "analyzes"}}>
                <Title level={4}>Основные данные</Title>
                <Table
                    dataSource={restTableData}
                    columns={rest}
                    pagination={false}
                    scroll={{x: "max-content"}}
                />
            </div>
            <div style={{gridArea: "analyzes"}}>
                <Title level={4}>Физический анализ</Title>
                <Table
                    dataSource={physicalTableData}
                    columns={columnsPhysical}
                    pagination={false}
                    scroll={{x: "max-content"}}
                />
            </div>
            <div>
                <Title level={4}>Химический анализ</Title>
                <Table
                    dataSource={chemicalTableData}
                    columns={columnsChemical}
                    pagination={false}
                    scroll={{x: "max-content"}}
                />
            </div>


            <div style={{gridArea: "analyzes"}}>
                <Title level={4}>Микробиологический анализ</Title>
                <Table
                    dataSource={microbiologicalTableData}
                    columns={columnsMicrobiological}
                    pagination={false}
                    scroll={{x: "max-content"}}
                />
            </div>


        </Space>
    );
};

export default Analyzes;




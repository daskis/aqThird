import { SearchOutlined } from '@ant-design/icons';
import {Button, ConfigProvider, Input, Pagination, Select, Space, Table} from 'antd';
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        job: 'Рабочий',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        job: 'Руководитель',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        job: 'Научный сотрудник',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        job: 'Рабочий',
    },
    {
        key: '5',
        name: 'Jane Smith',
        age: 28,
        job: 'Руководитель',
    },
    {
        key: '6',
        name: 'Robert Johnson',
        age: 45,
        job: 'Рабочий',
    },
    {
        key: '7',
        name: 'Michael Davis',
        age: 37,
        job: 'Рабочий',
    },
    {
        key: '8',
        name: 'William Wilson',
        age: 53,
        job: 'Научный сотрудник',
    },
    {
        key: '9',
        name: 'Emily Taylor',
        age: 29,
        job: 'Рабочий',
    },
    {
        key: '10',
        name: 'Christopher Anderson',
        age: 31,
        job: 'Научный сотрудник',
    },
    {
        key: '11',
        name: 'Linda Thomas',
        age: 40,
        job: 'Руководитель',
    },
    {
        key: '12',
        name: 'Daniel Lee',
        age: 35,
        job: 'Рабочий',
    },
    {
        key: '13',
        name: 'Maria Martinez',
        age: 27,
        job: 'Рабочий',
    },
    {
        key: '14',
        name: 'Matthew Johnson',
        age: 39,
        job: 'Руководитель',
    },
    {
        key: '15',
        name: 'Sophia Garcia',
        age: 34,
        job: 'Научный сотрудник',
    },
    {
        key: '16',
        name: 'James Taylor',
        age: 47,
        job: 'Руководитель',
    },
    {
        key: '17',
        name: 'Olivia Wilson',
        age: 31,
        job: 'Рабочий',
    },
    {
        key: '18',
        name: 'Benjamin Martinez',
        age: 36,
        job: 'Рабочий',
    },
    {
        key: '19',
        name: 'Emma Davis',
        age: 33,
        job: 'Научный сотрудник',
    },
    {
        key: '20',
        name: 'Alexander Brown',
        age: 41,
        job: 'Руководитель',
    },
];

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];


const TableComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
        setSearchedColumn('');
        setCurrentPage(1);
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button type="link" size="small" onClick={() => close()}>
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleSelectChange = (value, record) => {
        console.log(record.key);
    };

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            width: '20%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Должность',
            dataIndex: 'job',
            key: 'job',
            ...getColumnSearchProps('job'),
            sorter: (a, b) => a.job.length - b.job.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Выберите сектор',
            dataIndex: 'select',
            key: 'select',
            width: '30%',
            render: (text, record) => (
                <Select
                    defaultValue={text}
                    onChange={(value) => handleSelectChange(value, record)}
                    className="expanded-select"
                >
                    {arr.map((item) => {
                        return <Select.Option key={item}>{item}</Select.Option>;
                    })}
                </Select>
            ),
        },
        {
            title: 'Действие',
            key: 'action',
            render: (text, record) => (
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: "#00b96b"
                        }
                    }}
                >
                    <Button type="primary" onClick={() => handleButtonClick(record.key)}>Отправить задачу</Button>

                </ConfigProvider>
            ),
        },
    ];


    const handleButtonClick = (key) => {
        console.log(key);
    };

    const filteredData = data.filter((record) =>
        searchedColumn ? record[searchedColumn].toString().toLowerCase().includes(searchText.toLowerCase()) : true
    );

    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div>
            <Table columns={columns} dataSource={paginatedData} pagination={false} />
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredData.length}
                onChange={(page, pageSize) => {
                    setCurrentPage(page);
                    setPageSize(pageSize);
                }}
            />
        </div>
    );
};

export default TableComponent;
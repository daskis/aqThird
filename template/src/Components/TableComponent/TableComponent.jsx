import {SearchOutlined} from '@ant-design/icons';
import {Button, ConfigProvider, Input, Pagination, Select, Space, Table} from 'antd';
import {forwardRef, useEffect, useRef, useState} from 'react';
import Highlighter from 'react-highlight-words';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../features/usersSlice.js";
import {fetchSectors} from "../../features/sectorsSlice.js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchPostTasks} from "../../features/tasksSlice.js";
import TextArea from "antd/es/input/TextArea.js";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const jobArr = ["обрезка", "подвязка", "обломка", "прополка", "заводка"];

const TableComponent = forwardRef((props, ref) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const searchInput = useRef(null);
    const [selectJobArr, setSelectJobArr] = useState([]);
    const [selectSectorArr, setSelectSectorArr] = useState([]);

    const dispatch = useDispatch();
    const data = useSelector((state) => state.users.data);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);
    const dataSectors = useSelector(state => state.sectors.data)


    const success = useSelector(state => state.tasks.data)
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchSectors())
    }, [dispatch]);


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
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
            <div
                style={{
                    padding: 20,
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
                        icon={<SearchOutlined/>}
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

    const handleButtonClick = (id, record) => {
        if (selectSectorArr && selectJobArr) {
            const job = selectJobArr.find((item) => item.id === id)?.value;
            const i = selectSectorArr.find((item) => item.id === id)?.value;
            const sector = dataSectors[i].id;
            const taskData = {
                user: id,
                task_type: job,
                sector,
                status: "3a8dc792-d10f-49ca-babd-8498932afbb3",
                description: ""
            };

            toast("Задача назначена")
            dispatch(fetchPostTasks(taskData))


        }
    };


    const handleSelectJob = (value, record) => {
        const updatedSelectJobArr = [...selectJobArr];
        const index = updatedSelectJobArr.findIndex((item) => item.id === record.key);
        if (index !== -1) {
            updatedSelectJobArr[index].value = value;
        } else {
            updatedSelectJobArr.push({id: record.key, value});
        }
        setSelectJobArr(updatedSelectJobArr);
    };

    const handleSelectSector = (value, record) => {
        const updatedSelectSectorArr = [...selectSectorArr];
        const index = updatedSelectSectorArr.findIndex((item) => item.id === record.key);
        if (index !== -1) {
            updatedSelectSectorArr[index].value = value;
        } else {
            updatedSelectSectorArr.push({id: record.key, value});
        }
        setSelectSectorArr(updatedSelectSectorArr);
    };

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: (text, record) => `${record.name} ${record.surname}`,
            ...getColumnSearchProps('name'),
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Должность',
            dataIndex: 'role',
            key: 'role',
            ...getColumnSearchProps('role'),
            sorter: (a, b) => a.role.length - b.role.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Выберите сектор',
            dataIndex: 'select',
            key: 'select',
            width: '15%',
            render: (text, record) => (
                <Select
                    defaultValue={text}
                    className="expanded-select"
                    onChange={(value) => handleSelectSector(value, record)}
                >
                    {arr.map((item) => (
                        <Select.Option key={item}>{item}</Select.Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'Выберите занятие',
            dataIndex: 'work',
            key: 'work',
            width: '20%',
            render: (text, record) => (
                <Select
                    defaultValue={text}
                    className="expanded-select"
                    onChange={(value) => handleSelectJob(value, record)}
                >
                    {jobArr.map((item) => (
                        <Select.Option key={item}>{item}</Select.Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'description',
            width: "20%",
            render: (text, record) => (
                <Input/>
            )
        },
        {
            title: 'Действие',
            key: 'action',
            render: (text, record) => (
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b',
                        },
                    }}
                >
                    <Button
                        type="primary"
                        onClick={() => handleButtonClick(record.key, record)}
                    >
                        Отправить задачу
                    </Button>
                </ConfigProvider>
            ),
        },
    ];

    const filteredData = data
        ? data.filter((record) =>
            searchedColumn
                ? record[searchedColumn]
                    .toString()
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                : true
        )
        : [];

    const paginatedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (

        <>
            <div style={{position: "relative"}}>
                <Table
                    columns={columns}
                    style={{padding: 20, width: '70vw'}}
                    dataSource={paginatedData.map((item) => ({
                        ...item,
                        key: item.id,
                        name: `${item.name} ${item.surname}`,
                    }))}
                    pagination={false}
                />
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
        </>
    );
});

export default TableComponent;

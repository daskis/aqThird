import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { setIsActive } from '../../features/infosSlice.js';
import { Table } from 'antd';

const filterObject = (obj, excludedKeys) => {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !excludedKeys.includes(key)));
};

// Функция для перевода ключей
const translateKey = (key) => {
    const translations = {
        name: 'Сектор',
        year: 'Год',
        grade: 'Общая оценка',
        air: 'Качество воздуха',
        ground: 'Качество земли',
        water: 'Качество воды',
    };

    return translations[key] || key;
};

// Функция для сортировки данных
const sortData = (data) => {
    const order = [
        'Название',
        'Год',
        'Общая оценка',
        'Качество земли',
        'Качество воды',
        'Качество воздуха',
    ];

    return data.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
};

const SideInfoMenu = () => {
    const isActive = useSelector((state) => state.infos.isActive);
    const dispatch = useDispatch();
    const commonInfo = useSelector((state) => state.infos.commonInfo);
    const grapesInfo = useSelector((state) => state.infos.data);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Имитация асинхронного получения данных с сервера
        setTimeout(() => {
            console.log(commonInfo, grapesInfo);
            setIsLoading(false);
        }, 2000);
    }, [dispatch]);

    const excludedKeys = ['id', 'grape', 'coordinates'];

    const filteredCommonInfo = commonInfo ? filterObject(commonInfo, [...excludedKeys, 'weight']) : {};
    const filteredGrapesInfo = grapesInfo ? filterObject(grapesInfo, [...excludedKeys, 'description']) : {};

    const sortedCombinedData = sortData([
        ...Object.entries(filteredCommonInfo).map(([key, value]) => ({ key: translateKey(key), value })),
        ...Object.entries(filteredGrapesInfo).map(([key, value]) => ({
            key: key === 'name' ? 'Название сорта' : translateKey(key),
            value,
        })),
    ]);

    const columns = [
        {
            title: 'Ключ',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Значение',
            dataIndex: 'value',
            key: 'value',
        },
    ];

    if (isActive) {
        return (
            <div
                className={classNames('infosMenu', {
                    disabled: !isActive,
                })}
            >
                <div>
                    <CloseOutlined
                        onClick={() => {
                            dispatch(setIsActive());
                        }}
                        style={{ fontSize: 24 }}
                        className="closeIcon"
                    />
                    {isLoading ? (
                        <p>Загрузка данных...</p>
                    ) : (
                        <Table pagination={false} style={{ width: '100%' }} columns={columns} dataSource={sortedCombinedData} />
                    )}
                    <Link to={"/"} style={{textAlign: "center"}}>Посмотреть статистику</Link>
                </div>
            </div>
        );
    }
};

export default SideInfoMenu;

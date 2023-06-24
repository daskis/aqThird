
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
    Typography,
    ConfigProvider,
} from 'antd';
import {useState} from "react";

const { Text, Title } = Typography;

const CreateAnalyzes = () => {
    const [form] = Form.useForm();
    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = (values) => {
        if (showErrors) {
            const data = {
                key: '1',
                date: values.date.format('YYYY-MM-DD'),
                chemicalAnalysis: {
                    acidity: values.acidity,
                    pH: values.pH,
                    sugarContent: values.sugarContent,
                    nitrogenRatio: values.nitrogenRatio,
                    ironContent: values.ironContent,
                },
                physicalAnalysis: {
                    grapeWeight: values.grapeWeight,
                    berrySize: values.berrySize,
                    berryColor: values.berryColor,
                    juiceContent: values.juiceContent,
                },
                microbiologicalAnalysis: {
                    yeastContent: values.yeastContent,
                    bacteriaContent: values.bacteriaContent,
                },
                aromaProfile: values.aromaProfile,
                tasteProfile: values.tasteProfile,
                colorProfile: values.berryColor, // Assuming colorProfile is the same as berryColor
                grapeVariety: values.grapeVariety,
            };
            console.log('Formatted data:', data);

        } else {
            setShowErrors(true);
        }
    };

    const renderErrorMessage = (fieldName) => {
        if (showErrors && !form.isFieldTouched(fieldName)) {
            return '';
        }
        const error = form.getFieldError(fieldName);
        if (error && error.length > 0) {
            return error[0];
        }
        return '';
    };

    const validateStatus = (fieldName) => {
        if (showErrors && !form.isFieldTouched(fieldName)) {
            return '';
        }
        return form.getFieldError(fieldName) ? 'error' : '';
    };

    const styles = {
        flex: 1,
        padding: 20,
        gap: 14,
        display: 'flex',
        flexDirection: 'column',
        width: '80vw',
    };

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="vertical"
            style={styles}
        >
            <Form.Item
                name="date"
                label="Дата анализа"
                rules={[{ required: true, message: 'Please select the analysis date' }]}
                validateStatus={validateStatus('date')}
                help={renderErrorMessage('date')}
            >
                <DatePicker placeholder="" />
            </Form.Item>

            <Title level={3}>Основные данные</Title>
            <Form.Item
                name={['mainData', 'grapeVariety']}
                label="Сорт винограда"
                rules={[{ required: true, message: 'Please enter the grape variety' }]}
                validateStatus={validateStatus(['mainData', 'grapeVariety'])}
                help={renderErrorMessage(['mainData', 'grapeVariety'])}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['mainData', 'tasteProfile']}
                label="Профиль вкуса"
                rules={[{ required: true, message: 'Please select the taste profile' }]}
                validateStatus={validateStatus(['mainData', 'tasteProfile'])}
                help={renderErrorMessage(['mainData', 'tasteProfile'])}
            >
                <Select>
                    <Select.Option value="Сухой">Сухой</Select.Option>
                    <Select.Option value="Гармоничный">Гармоничный</Select.Option>
                    <Select.Option value="Сладкий">Сладкий</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name={['mainData', 'aromaProfile']}
                label="Профиль аромата"
                rules={[{ required: true, message: 'Please select the aroma profile' }]}
                validateStatus={validateStatus(['mainData', 'aromaProfile'])}
                help={renderErrorMessage(['mainData', 'aromaProfile'])}
            >
                <Select>
                    <Select.Option value="Фруктовый">Фруктовый</Select.Option>
                    <Select.Option value="Цветочный">Цветочный</Select.Option>
                    <Select.Option value="Пряный">Пряный</Select.Option>
                </Select>
            </Form.Item>

            <Title level={3}>Физический анализ</Title>
            <Form.Item
                name={['physicalAnalysis', 'grapeWeight']}
                label="Вес кисти винограда"
                rules={[{ required: true, message: 'Please enter the grape weight' }]}
                validateStatus={validateStatus(['physicalAnalysis', 'grapeWeight'])}
                help={renderErrorMessage(['physicalAnalysis', 'grapeWeight'])}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['physicalAnalysis', 'berryColor']}
                label="Цвет ягоды"
                rules={[{ required: true, message: 'Please select the berry color' }]}
                validateStatus={validateStatus(['physicalAnalysis', 'berryColor'])}
                help={renderErrorMessage(['physicalAnalysis', 'berryColor'])}
            >
                <Select>
                    <Select.Option value="Красный">Красный</Select.Option>
                    <Select.Option value="Фиолетовый">Фиолетовый</Select.Option>
                    <Select.Option value="Белый">Белый</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name={['physicalAnalysis', 'berrySize']}
                label="Размер ягоды"
                rules={[{ required: true, message: 'Please select the berry size' }]}
                validateStatus={validateStatus(['physicalAnalysis', 'berrySize'])}
                help={renderErrorMessage(['physicalAnalysis', 'berrySize'])}
            >
                <Radio.Group>
                    <Radio value="Маленький">Маленький</Radio>
                    <Radio value="Средний">Средний</Radio>
                    <Radio value="Крупный">Крупный</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name={['physicalAnalysis', 'juiceContent']}
                label="Содержание сока"
                rules={[{ required: true, message: 'Please enter the juice content' }]}
                validateStatus={validateStatus(['physicalAnalysis', 'juiceContent'])}
                help={renderErrorMessage(['physicalAnalysis', 'juiceContent'])}
            >
                <InputNumber max={100} min={0} />
            </Form.Item>

            <Title level={3}>Микробиологический анализ</Title>
            <Form.Item
                name={['microbiologicalAnalysis', 'yeastContent']}
                label="Содержание дрожжей"
                rules={[{ required: true, message: 'Please select the yeast content' }]}
                validateStatus={validateStatus(['microbiologicalAnalysis', 'yeastContent'])}
                help={renderErrorMessage(['microbiologicalAnalysis', 'yeastContent'])}
            >
                <Radio.Group>
                    <Radio value="Пониженное">Пониженное</Radio>
                    <Radio value="Норма">Норма</Radio>
                    <Radio value="Повышенное">Повышенное</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name={['microbiologicalAnalysis', 'bacteriaContent']}
                label="Содержание бактерий"
                rules={[{ required: true, message: 'Please select the bacteria content' }]}
                validateStatus={validateStatus(['microbiologicalAnalysis', 'bacteriaContent'])}
                help={renderErrorMessage(['microbiologicalAnalysis', 'bacteriaContent'])}
            >
                <Radio.Group>
                    <Radio value="Пониженное">Пониженное</Radio>
                    <Radio value="Норма">Норма</Radio>
                    <Radio value="Повышенное">Повышенное</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name={['microbiologicalAnalysis', 'moldContent']}
                label="Содержание плесени"
                rules={[{ required: true, message: 'Please select the mold content' }]}
                validateStatus={validateStatus(['microbiologicalAnalysis', 'moldContent'])}
                help={renderErrorMessage(['microbiologicalAnalysis', 'moldContent'])}
            >
                <Radio.Group>
                    <Radio value="Пониженное">Пониженное</Radio>
                    <Radio value="Норма">Норма</Radio>
                    <Radio value="Повышенное">Повышенное</Radio>
                </Radio.Group>
            </Form.Item>

            <Title level={3}>Химический анализ</Title>
            <Form.Item
                name={['chemicalAnalysis', 'sugarContent']}
                label="Содержание сахара"
                rules={[{ required: true, message: 'Please enter the sugar content' }]}
                validateStatus={validateStatus(['chemicalAnalysis', 'sugarContent'])}
                help={renderErrorMessage(['chemicalAnalysis', 'sugarContent'])}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['chemicalAnalysis', 'acidContent']}
                label="Содержание кислоты"
                rules={[{ required: true, message: 'Please enter the acid content' }]}
                validateStatus={validateStatus(['chemicalAnalysis', 'acidContent'])}
                help={renderErrorMessage(['chemicalAnalysis', 'acidContent'])}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['chemicalAnalysis', 'alcoholContent']}
                label="Содержание алкоголя"
                rules={[{ required: true, message: 'Please enter the alcohol content' }]}
                validateStatus={validateStatus(['chemicalAnalysis', 'alcoholContent'])}
                help={renderErrorMessage(['chemicalAnalysis', 'alcoholContent'])}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b',
                        },
                    }}
                >
                    <Button htmlType="submit" size="large">
                        Отправить данные
                    </Button>
                </ConfigProvider>
            </Form.Item>
        </Form>
    );
};

export default () => <CreateAnalyzes />;

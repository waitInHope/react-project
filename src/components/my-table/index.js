import React, { useState } from "react";
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import './index.css';

// 定义头部组件
const ResizableTitle = ( props ) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const MyTable = React.memo(() => {
  console.log(111);

  const [columns, setColumns] = useState([
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 120,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 120,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 120,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 120,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 120,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 120,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 120,
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: '8',
      width: 120,
    },
    {
      title: 'Column 9',
      dataIndex: 'apple',
      key: '9',
      width: 120
    },
    {
      title: 'Column 10',
      dataIndex: 'banana',
      key: '10',
      width: 120
    },
  ]);
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
      apple: 1,
      banana: 1
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
      apple: 1,
      banana: 1
    },
  ];
  

  // 动态修改宽度
  const handleResize =
    (index) =>
    (_, { size }) => {
      const newColumns = [...columns];
      newColumns[index] = {
        ...newColumns[index],
        width: size.width,
      };
      setColumns(newColumns);
    };
  // 设置侦听函数
  const mergeColumns = columns.map((col, index) => ({
    ...col,
    onHeaderCell: column => ({
      width: (column).width,
      onResize: handleResize(index),
    }),
  }));

  return (
    <div>
      <Table
        style={{ width: '800px' }}
        bordered
        components={{
          header: {
            cell: ResizableTitle,
          },
        }}
        scroll={{
          x: 1300,
        }}
        columns={mergeColumns}
        dataSource={data}
      />
    </div>
  )
});

export default MyTable;
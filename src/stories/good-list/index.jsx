import React from 'react';
import PropTypes from 'prop-types';
import { goods } from '@common/index';

const GoodList = ({name, count}) => {
  return (
    <div>
      <div>
        货品名称
        <span>{name}</span>
      </div>
      <div>
        货品数量
        <span>{count}</span>
      </div>
      <div>货品列表</div>
      {goods.join('')}
    </div>
  )
}

GoodList.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default GoodList;
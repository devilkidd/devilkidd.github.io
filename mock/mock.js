import Mock from 'mockjs';
import Data from '../data.json';

Mock.mock('/api/seller', function () {
  return {
    errno: 0,
    data: Data.seller
  };
});
Mock.mock('/api/goods', function () {
  return {
    errno: 0,
    data: Data.goods
  };
});
Mock.mock('/api/ratings', function () {
  return {
    errno: 0,
    data: Data.ratings
  };
});

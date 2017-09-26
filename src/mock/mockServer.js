

import apiData from './indexData.json'
import Mock from 'mockjs'


Mock.mock('/api/index',{ data : apiData.menus})
Mock.mock('/api/datas',{ data : apiData.datas})

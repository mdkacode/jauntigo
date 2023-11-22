import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';
import TripPlannerSearch from './TripPlannerSearch';

const { Option } = Select;



const FullPageWallpaperWithCenterTextBox = () => {
  return (
    <div key="main-div" className="h-screen bg-cover bg-center bg-image">
      <div key="justify-div" className="flex items-center justify-center min-h-screen rounder-sm border-2">

        <TripPlannerSearch />

      </div>
    </div>
  );
};

export default FullPageWallpaperWithCenterTextBox;

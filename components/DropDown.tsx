import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {Text, useThemeColor, View } from '../components/Themed';


export default function DropDown(props: any) {
    const selectedValue = props['selectedValue'];
    const setSelectedValue = props['setSelectedValue'];
    const items = props['items'];
    const color = useThemeColor({ light: 'black', dark: 'white' }, 'text');
    return (
    <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
        } style={{ height: 50, width: 400}} itemStyle={[{height:100, fontSize: 15}, {color}]}>
            {items.map((item: any) => {
                return <Picker.Item label={item["DESC"]} value={item["CODE"]}/>
            })}
    </Picker>
    )
}
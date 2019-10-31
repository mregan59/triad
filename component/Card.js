import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Card.styles.js';
import Pattern from './Pattern';
import { Dimensions } from 'react-native';

const shapes = { '0': 'triangle', '1': 'oval', '2': 'squiggle' };
const color = { '0': 'pink', '1': 'blue', '2': 'green' };
const shading = { '0': 'empty', '1': 'stripes', '2': 'solid' };
const number = { '0': 1, '1': 2, '2': 3 };
const screenWidth = Dimensions.get('window').width;

export default class Card extends Component {
    render() {
        const { shape, color, shading, number } = this.props;

        const fcolor = color;
        const fnumber = number;

        const localStyles = { borderWidth: 2, borderColor: color };
        const cardWidth = (screenWidth - 140) / 3;
        return (
            <View
                style={{
                    padding: 15,
                    backgroundColor: 'white',
                    margin: 5,
                }}
            >
                <View
                    style={{
                        height: cardWidth * 1.5,
                        width: cardWidth,
                        position: 'relative',
                    }}
                >
                    <Pattern lineColor="green" backgroundColor="white" />
                </View>
            </View>
        );
    }
}

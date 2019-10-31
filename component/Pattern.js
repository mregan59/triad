import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Svg, {
    Defs,
    Line,
    Pattern,
    Rect,
    Path,
    Ellipse,
} from 'react-native-svg';

export default class PatternLineView extends PureComponent {
    static propTypes = {
        pattern: PropTypes.func.isRequired,
        space: PropTypes.number,
        backgroundColor: PropTypes.string,
        lineColor: PropTypes.string,
        lineWidth: PropTypes.number,
        rotation: PropTypes.number,
    };

    static defaultProps = {
        pattern: () => {},
        space: 8,
        lineColor: '#D2D9E5',
        lineWidth: 3,
        rotation: 45,
    };

    render() {
        const transform = `rotate(${this.props.rotation})`;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    position: 'relative',

                    // backgroundColor: this.props.backgroundColor,
                }}
            >
                <Svg width="100%" height="100%" viewBox="0 0 100 150">
                    <Defs>
                        <Pattern
                            id="LinePattern"
                            patternUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="5"
                            height="40"
                            viewBox="0 0 0 0"
                        >
                            <Path
                                d="M 0 0 L 0 40"
                                stroke={this.props.lineColor}
                                strokeWidth="4"
                            />
                        </Pattern>
                    </Defs>
                    <Rect
                        fill="url(#LinePattern)"
                        stroke={this.props.lineColor}
                        x="2"
                        y="2"
                        rx="20"
                        width="96"
                        height="36"
                        strokeWidth="2"
                    />

                    <Rect
                        fill="url(#LinePattern)"
                        stroke={this.props.lineColor}
                        x="2"
                        y="56"
                        rx="20"
                        width="96"
                        height="36"
                        strokeWidth="2"
                    />
                    <Rect
                        fill="url(#LinePattern)"
                        stroke={this.props.lineColor}
                        x="2"
                        y="110"
                        rx="20"
                        width="96"
                        height="36"
                        strokeWidth="2"
                    />
                </Svg>
            </View>
        );
    }
}

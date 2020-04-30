import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NEUTRAL, NUMBER, BOMB } from '../common/state';

export default function TileComponent(props) {
    const tile = props.tile;
    const disabled = tile.open || props.reveal;

    const icon = () => {
        if (tile.open || props.reveal) {
            switch (tile.state) {
                case BOMB:
                    return { fa: "bomb", color: "red" };
                case NUMBER:
                    return { fa: "twitter", color: "yellow" };
                case NEUTRAL:
                    return { fa: "bars", color: "green" };
            }
        }
        return { fa: "bars", color: "gray" };
    }

    return (<Button buttonStyle={styles.tile} type="solid"
        onPress={() => props._openTile(tile)}
        title=" "
        key={tile.x * 100 + tile.y}
        icon={<Icon name={icon().fa} size={25} color={icon().color} />}
        iconRight
        disabled={disabled}
    />);
}

const styles = StyleSheet.create({
    tile: {
        width: 40,
        height: 40,
        backgroundColor: '#ccc',
        color: '#b1b',
        alignContent: 'center'
    }
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NEUTRAL, NUMBER, BOMB } from '../common/state';

export default function TileComponent(props) {
    const tile = props.tile;
    const disabled = tile.open || props.reveal;

    const icon = () => {
        if (tile.open || props.reveal)
            switch (tile.state) {
                case BOMB:
                    return { fa: "bomb", color: "red" };
                case NUMBER:
                    return { fa: "twitter", color: "yellow" };
                case NEUTRAL:
                    return undefined;
            }
        return undefined;
    }

    if (icon())
        return (<Button buttonStyle={styles.tile} type="solid"
            onPress={() => props._openTile(tile)}
            title=" "
            key={tile.x * 100 + tile.y}
            icon={<Icon name={icon().fa} size={20} color={icon().color} />}
            iconRight
            disabled={disabled}
        />);
    else
        return (<Button buttonStyle={styles.tile} type="solid"
            onPress={() => props._openTile(tile)}
            title=" "
            key={tile.x * 100 + tile.y}
            disabled={disabled}
        />);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'gray'
    },
    tile: {
        width: 20,
        height: 20,
        backgroundColor: '#ccc',
        alignContent: 'center'
    }
});

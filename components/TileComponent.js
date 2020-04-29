import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import State from '../common/state';

export default function TileComponent(props) {
    const tile = props.tile;
    const _openTile = props._openTile;
    const [isOpen, setOpen] = useState(tile.open);

    const open = () => {
        _openTile(tile);
        setOpen(true);
    };
    const icon = () => {
        if (isOpen || props.reveal) {
            switch (tile.state) {
                case State.BOMB:
                    return { fa: "bomb", color: "red" };
                case State.NUMBER:
                    return { fa: "twitter", color: "yellow" };
                case State.NEUTRAL:
                    return { fa: "bars", color: "green" };
            }
        }
        return { fa: "bars", color: "gray" };
    }

    return (<Button style={styles.tile} type="clear"
        onPress={() => open()}
        title=" "
        key={tile.x * 100 + tile.y}
        icon={<Icon name={icon().fa} size={25} color={icon().color} />}
        iconRight
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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NEUTRAL, NUMBER, BOMB } from '../common/state';
import { MOODS, BLISS } from '../common/moods';

export default function TileComponent(props) {
    const tile = props.tile;
    const disabled = tile.open || props.reveal;

    const icon = () => {
        if (tile.open || props.reveal)
            switch (tile.state) {
                case BOMB:
                    if (!tile.mood) {
                        tile.mood = BLISS;
                        props.addMood(BLISS);
                    }
                    let mood = MOODS.get(tile.mood);
                    return { fa: mood.icon, color: mood.color, size: 20, badgeNumber: 0 };
                case NUMBER:
                    return { fa: "flower-poppy", color: "#f3d113", size: 20, badgeNumber: tile.number };
                case NEUTRAL:
                    return { fa: "leaf", color: "#5ae298", size: 20, badgeNumber: 0 };
            }
        return { fa: "cloud-outline", color: "#0cbdee", size: 20, badgeNumber: 0 };
    }

    const BadgeNumber = () => {
        if (icon().badgeNumber > 0)
            return <Badge value={icon().badgeNumber}
                badgeStyle={{ width: 5, height: 10, backgroundColor: 'transparent' }}
                textStyle={{ fontSize: 10, color: '#1c2833' }}
                containerStyle={{ position: 'absolute', top: -1, right: -1 }} />
        return <View></View>;
    }
    return (
        <View key={tile.x * 100 + tile.y}>
            <Button buttonStyle={styles.tile} type="solid"
                onPress={() => props._openTile(tile)}
                key={tile.x * 100 + tile.y}
                icon={<Icon name={icon().fa} color={icon().color} size={icon().size}/>}
                iconRight
                disabled={disabled} disabledStyle={{ backgroundColor: 'transparent' }}
            />
            <BadgeNumber />

        </View>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    tile: {
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        alignContent: 'center'
    }
});

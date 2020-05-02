import React from 'react';
import { ScrollView, Text, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const About = () => {
    return (
        <ScrollView>
            <Animatable.View animation="fadeInDown" duration={1000} delay={500}>
                <Card
                    title='Mood Sweeper'>
                    <Text
                    onPress={() => Linking.openURL('https://www.artofliving.org/us-en/wisdom/ashtavakra-gita')}>
                    Inspired by the Sri Sri Ravi Shankar's commentary on Ashtavakra Gita.</Text>
                </Card>
            </Animatable.View>
        </ScrollView>
    );
}

export default About;
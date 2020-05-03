import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';
import * as Animatable from 'react-native-animatable';


function Contact() {
    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['none@noreply.com'],
            subject: 'My moods improved..',
            body: 'To whom it may concern:'
        })
    }
    return (
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Card
                title='Contact Information'>
                <Text>Email: none@noreply.com</Text>
                <Button
                    title="Send Email"
                    buttonStyle={{ backgroundColor: "#2089dc", marginTop: 10 }}
                    icon={<Icon name='envelope-o' type='font-awesome' color='#F5FCFF' />}
                    onPress={sendMail()}
                />
            </Card>
        </Animatable.View>
    );
}

export default Contact;
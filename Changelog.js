import React, {useEffect, useState} from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import Modal from "react-native-modal";
import ChangelogTimeline from "./ChangelogTimeline";

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: '60%',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 65,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
});



export default function Changelog({title, show, changelog, onClose, backdropColor, color, colorDarker, buttonText}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => setIsModalVisible(show), [show]);

    return (
        <Modal
            testID={'modal'}
            isVisible={isModalVisible}
            backdropColor={backdropColor || "#125688"}
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>{title || "Since last time 👋!"}</Text>
                <ChangelogTimeline color={color} colorDarker={colorDarker} changelog={changelog}/>
                <Button color={color} testID={'close-button'}  onPress={() => {
                    setIsModalVisible(false);
                    if (onClose) onClose();
                }} title={buttonText ? buttonText : "Okay"}/>
            </View>
        </Modal>
    );

}

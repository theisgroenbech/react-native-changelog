import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default function ChangelogTimeline({changelog, color, colorDarker}) {
    const convert = (x) => {
        return {time: x.version, title: x.date, description: x.changes}
    };

    const formatChangelog = () => changelog.map(x => convert(x));

    return (
        <View style={styles.container}>
            <Timeline
                data={changelog ? formatChangelog() : []}
                circleSize={20}
                circleColor={color || '#2d9cdb'}
                lineColor={color || '#2d9cdb'}
                timeContainerStyle={{minWidth: 52, marginTop: -5}}
                titleStyle={{marginTop: -10}}
                timeStyle={{
                    textAlign: 'center',
                    backgroundColor: colorDarker || '#125688',
                    color: 'white',
                    padding: 5,
                    borderRadius: 13,
                }}
                descriptionStyle={{color: '#333'}}
                options={{
                    style: {paddingTop: 5},
                    showsVerticalScrollIndicator: false
                }}
                innerCircle={'dot'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        display: 'flex',
        width: '100%',
        maxWidth: 300
    }
});

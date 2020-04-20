import Changelog from "./Changelog";
import React from "react";
import {AsyncStorage} from "react-native";
import Constants from "expo-constants";

export default function ManagedChangelog({title, changelog, onClose, backdropColor, color, colorDarker, buttonText}) {
    const getLastChangelog = async () => await AsyncStorage.getItem('lastShownChangelog');

    const setLastChangelog = async (value) => await AsyncStorage.setItem('lastShownChangelog', value);

    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        getLastChangelog().then((s) => setShow(s !== Constants.manifest.version))
    }, []);

    const onCloseManaged = () => {
        setLastChangelog(Constants.manifest.version);
        if(onClose) onClose();
    };

    return <Changelog title={title} show={show} onClose={onCloseManaged} changelog={changelog}
                      backdropColor={backdropColor}
                      color={color} colorDarker={colorDarker} buttonText={buttonText}/>
}

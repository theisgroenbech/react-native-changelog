import Changelog from "./Changelog";
import ManagedChangelog from "./ManagedChangelog";

module.exports = {
    get Changelog() {
        return Changelog
    },
    get ManagedChangelog() {
        return ManagedChangelog
    }
}

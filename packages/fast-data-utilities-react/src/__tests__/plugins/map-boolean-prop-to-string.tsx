import Plugin, { PluginProps } from "../../plugin";

export interface MapBooleanPropToStringProps extends PluginProps {}

export default class MapBooleanPropToString extends Plugin<MapBooleanPropToStringProps> {
    public resolver(data: boolean): string {
        return data.toString();
    }
}

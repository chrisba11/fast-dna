import Plugin, { PluginProps } from "../../plugin";

export interface MapArrayPropToObjectProps extends PluginProps {}

export default class MapArrayPropToObject extends Plugin<MapArrayPropToObjectProps> {
    public resolver(data: string[]): any {
        const arrayToObject: any = {};

        data.forEach(
            (arrayItem: string, index: number): void => {
                arrayToObject[arrayItem] = index;
            }
        );

        return arrayToObject;
    }
}

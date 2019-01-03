import * as React from "react";
import Plugin, { PluginProps } from "../../plugin";
import { ChildOptionItem } from "../../";

export interface MapChildrenPropToCallbackPassingClassNameProps extends PluginProps {}

export default class MapChildrenPropToCallbackPassingClassName extends Plugin<
    MapChildrenPropToCallbackPassingClassNameProps
> {
    public resolver(data: any, childOption?: ChildOptionItem): any {
        return (className: string): React.ReactNode => {
            return React.createElement(
                childOption.component,
                Object.assign({}, data.props, { className: className })
            );
        };
    }
}

import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { MContext } from "../Provider/Provider";

import "./basicgrid.scss"

import {
    widgets,
} from "../../data/cards.js"

const ReactGridLayout = WidthProvider(RGL);

export default class BasicLayout extends React.PureComponent {
    static defaultProps = {
        isDraggable: true,
        isResizable: true,
        className: "layout",
        items: widgets,
        rowHeight: 40,
        onLayoutChange: function () { },
        cols: 12,
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        return _.map(this.props.items, function (i) {
            return (
                <div key={i.id} className="block">
                    <MContext.Consumer>
                        {(context) => (
                            < div className="container" onClick={() => {
                                const newText = i.text;
                                context.appendMessage(newText)
                            }}><img src={i.icon} alt="" />
                                <span className="text">{i.text}</span></div>
                        )}
                    </MContext.Consumer>
                </div >
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items.length + 1), function (item, i) {
            const y = _.result(p, "y") || Math.ceil(1 * 2) + 1;
            return {
                x: ((i - 1) * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: y,
                i: i.toString()
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

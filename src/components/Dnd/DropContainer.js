/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
const noop = () => { };

export default class DropContainer extends React.Component {
    static defaultProps = {
        accept: '*',
        dnd: {},
        onDropActivate: noop,
        onDrop: noop,
        onDropOver: noop,
        onDropOut: noop,
        onDropDeactivate: noop,
    };

    componentDidMount() {
        const {
            dnd,
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        //dnd.addDropContainer(dom);

        $(dom).droppable({
            //scope,
            // accept: '.' + dnd.dndClassName,
            accept: this.isAccept,
            activeClass: false,
            addClasses: false,
            activate: this.onDropActivate,
            drop: this.onDrop,
            over: this.onDropOver,
            out: this.onDropOut,
            deactivate: this.onDropDeactivate,
        });

    }

    isAccept = () => {
        const { accept, dnd } = this.props;

        if (accept === '*') return true;

        const accepts = accept.split(',');

        if (accepts.indexOf(dnd.currentDndScope) > -1) {
            return true;
        }

        return false;
    }

    onDropActivate = (event, ui) => {
        const {
            onDropActivate
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        if (this.isAccept()) {
            $(dom).addClass("active");
        }


        if (onDropActivate) {
            onDropActivate(event, ui);
        }
    }

    onDrop = (event, ui) => {
        const {
            onDrop
        } = this.props;

        if (onDrop) {
            onDrop(event, ui);
        }
    }

    onDropOver = (event, ui) => {
        const {
            onDropOver
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        if (this.isAccept()) {
            $(dom).addClass("enter");
        }


        if (onDropOver) {
            onDropOver(event, ui);
        }
    }

    onDropOut = (event, ui) => {
        const {
            onDropOut
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        if (this.isAccept()) {
            $(dom).removeClass("enter");
        }


        if (onDropOut) {
            onDropOut(event, ui);
        }
    }

    onDropDeactivate = (event, ui) => {
        const {
            onDropDeactivate
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        if (this.isAccept()) {
            $(dom).removeClass("active");
        }


        if (onDropDeactivate) {
            onDropDeactivate(event, ui);
        }
    }

    componentWillUnmount() {
        const { dnd } = this.props;
        const dom = ReactDOM.findDOMNode(this);
        $(dom).droppable("destroy");
        //dnd.removeDropContainer(dom);
    }

    render() {
        const {
            className,
            accept,
            dnd,
            onDropActivate,
            onDrop,
            onDropOver,
            onDropOut,
            onDropDeactivate,
            ...props
        } = this.props;

        const classString = classnames("widgets-drop-container", className);

        return (
            <div {...props} className={classString} />
        );
    }

}
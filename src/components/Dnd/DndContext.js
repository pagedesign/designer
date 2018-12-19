/**
 * 页面布局设计器-拖放控件上下文
 * author: nobo.zhou
 * date: 2018.12.17
 */

import React from 'react';

function random() {
    return 'dnd_' + Math.random().toString(16).slice(3, 8);
}

export const getDefaultContext = () => ({
    helperAppendTo: document.body,
    dndClassName: random(),
    scope: "widgets",
    helper: null,
    dragItem: null,//当前拖拽对象
    dropData: null,
    // drop项的元素
    dropItems: [],
    dropContainers: [],

    addDropItem(dom) {
        this.dropItems.push(dom);
    },
    removeDropItem(dom) {
        const idx = this.dropItems.map(item => item.id).indexOf(dom);

        if (idx > -1) {
            this.dropItems.splice(idx, 1);
        }
    },
    getDropItems() {
        return this.dropItems;
    },

    addDropContainer(dom) {
        this.dropContainers.push(dom);
    },
    removeDropContainer(dom) {
        const cts = this.dropContainers;

        const idx = cts.indexOf(dom);

        if (idx > -1) {
            cts.splice(idx, 1);
        }

    },
    getDropContainers() {
        return this.dropContainers;
    }
});

export default React.createContext(getDefaultContext());
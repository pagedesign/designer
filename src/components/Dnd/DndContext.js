/**
 * 页面布局设计器-拖放控件上下文
 * author: nobo.zhou
 * date: 2018.12.17
 */

import React from 'react';

export const getDefaultContext = () => ({
    scope: "widgets",
    helper: null,
    dragItem: null,//当前拖拽对象
    // drop项的元素
    dropItems: [],
    dropContainers: [],

    addDropItem(dom) {
        this.dropItems.push(dom);
    },
    removeDropItem(dom) {
        const idx = this.dropItems.indexOf(dom);

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
        const idx = this.dropContainers.indexOf(dom);

        if (idx > -1) {
            this.dropContainers.splice(idx, 1);
        }

    },
    getDropContainers() {
        return this.dropContainers;
    }
});

export default React.createContext(getDefaultContext());
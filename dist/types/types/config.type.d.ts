import type { Component } from 'vue';
export type ISchema = {
    id: string;
    type: "FIELD" | "FIELD-ARRAY" | "GROUP" | "VIEW";
    component: string;
    props?: Record<string, any>;
    slots?: any;
    config?: {
        key: string;
    };
    children?: ISchema[];
};
export type IConfig = {
    components: Record<ISchema["component"], Component | null>;
};

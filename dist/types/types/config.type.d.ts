import type { Component } from 'vue';
export type ISchema = {
    type: "FIELD" | "FIELD-ARRAY" | "GROUP" | "VIEW";
    component: "INPUT" | "SELECT" | "BUTTON" | "CHECKBOX" | "RADIO" | "TEXTAREA" | "DATEPICKER" | "TIMEPICKER" | "RANGE" | "SWITCH" | "UPLOAD" | "WYSIWYG" | "TEXT" | "NUMBER" | "TABLE";
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
